import { Dispatch } from 'redux'
import { changeRotate, saveData } from './actionCreators'
import fixture from '../../fixture'
import RotateEnum from '../../entities/RotateEnum'
import { RootStore } from '../store'

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

const getNextRotate = (rotate: RotateEnum): RotateEnum => {
    switch(rotate) {
        case RotateEnum.deg0:
            return RotateEnum.deg90
        case RotateEnum.deg90:
            return RotateEnum.deg180
        case RotateEnum.deg180:
            return RotateEnum.deg270
        case RotateEnum.deg270:
            return RotateEnum.deg0
    }
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

