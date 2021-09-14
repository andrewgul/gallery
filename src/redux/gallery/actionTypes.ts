import CardModel from "../../entities/CardModel"
import RotateEnum from "../../entities/RotateEnum"

export const SAVE_DATA = 'SAVE_DATA'
export const CHANGE_ROTATE = 'CHANGE_ROTATE'

interface SaveDataAction {
    type: typeof SAVE_DATA
    payload: CardModel[]
}

interface ChangeRotateAction {
    type: typeof CHANGE_ROTATE
    payload: ChangeRotateActionPayload
}

export interface ChangeRotateActionPayload {
    index: number,
    rotate: RotateEnum
}

export type GalleryActionType = SaveDataAction | ChangeRotateAction

