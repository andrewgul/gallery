import RotateEnum from "./RotateEnum"

type CardModel = {
    id: string
    src: string
    alt: string
    rotate: RotateEnum
    title: string
    description: string
    favorite: boolean 
}

export default CardModel