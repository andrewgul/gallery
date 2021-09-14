import { combineReducers } from 'redux'
import galleryReducer from './gallery/reducer'

const rootReducer = combineReducers({
    gallery: galleryReducer
})

export default rootReducer