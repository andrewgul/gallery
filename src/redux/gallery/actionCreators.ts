import CardModel from '../../entities/CardModel'
import {
    SAVE_DATA,
    CHANGE_ROTATE,
    ChangeRotateActionPayload,
    GalleryActionType 
} from './actionTypes'

export const saveData = (payload: CardModel[]): GalleryActionType => ({
    type: SAVE_DATA,
    payload
})

export const changeRotate = (payload: ChangeRotateActionPayload): GalleryActionType => ({
    type: CHANGE_ROTATE,
    payload
})