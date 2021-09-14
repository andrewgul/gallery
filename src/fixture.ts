import CardModel from "./entities/CardModel"
import RotateEnum from "./entities/RotateEnum"

const fixture: CardModel[] = [
    {
        id: '356b2633-961d-42d8-8045-683a5a6de7c1',
        src: 'https://images.pexels.com/photos/1790444/pexels-photo-1790444.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        alt: 'Brown puppy',
        rotate: RotateEnum.deg0,
        title: 'Brown puppy',
        description: 'Description',
        favorite: false 
    },
    {
        id: '0115bd51-03a9-4ac8-85a6-11984bb792a7',
        src: 'https://images.pexels.com/photos/3976279/pexels-photo-3976279.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
        alt: 'Another puppy',
        rotate: RotateEnum.deg0,
        title: 'Another puppy',
        description: 'Description',
        favorite: false 
    },
]

export default fixture