import CardModel from "../../entities/CardModel";

interface GalleryState {
    data: CardModel | null
}

const initialState: GalleryState = {
    data: null
}

const galleryReducer = (state = initialState, action: any) => {
    switch (action.type) {
        default:
            return state
    }
}

export default galleryReducer