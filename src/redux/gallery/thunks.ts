import { Dispatch } from 'redux'
import { changeRotate, saveData } from './actionCreators'
import fixture from '../../fixture'
import RotateEnum from '../../entities/RotateEnum'
import { RootStore } from '../store'
import { getNextRotate } from './utils'

export const initData = () => (dispatch: Dispatch) => {
    const savedData = localStorage.getItem('saved_data')

    if (savedData) {
        try {
            const data = JSON.parse(savedData)
            dispatch(saveData(data))

            return
        } catch (error) {
            console.error(error)
        }
    }

    dispatch(saveData(fixture))
}

export const rotate = (index: number, prevRotate: RotateEnum) => (dispatch: Dispatch, getState: () => RootStore) => {
    const nextRotate = getNextRotate(prevRotate)

    dispatch(changeRotate({
        index,
        rotate: nextRotate
    }))

    const updatedData = getState().gallery.data
    localStorage.setItem('saved_data', JSON.stringify(updatedData))
}

