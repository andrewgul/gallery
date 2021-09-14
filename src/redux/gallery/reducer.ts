import CardModel from "../../entities/CardModel";
import produce from 'immer'
import { CHANGE_ROTATE, GalleryActionType, SAVE_DATA } from "./actionTypes";

interface GalleryState {
    data: CardModel[] | null
}

const initialState: GalleryState = {
    data: null
}

const galleryReducer = (state = initialState, action: GalleryActionType) => {
    switch (action.type) {
        case SAVE_DATA:
            return produce(state, (draft: GalleryState) => {
                draft.data = action.payload
            })
        case CHANGE_ROTATE:
            return produce(state, (draft: GalleryState) => {
                const { index, rotate } = action.payload
                if (draft.data) draft.data[index].rotate = rotate
            })
        default:
            return state
    }
}

export default galleryReducer