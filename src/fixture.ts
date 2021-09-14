import CardModel from "./entities/CardModel"
import RotateEnum from "./entities/RotateEnum"

const fixture: CardModel[] = [
    {
        id: '356b2633-961d-42d8-8045-683a5a6de7c1',
        src: 'https://images.pexels.com/photos/1790444/pexels-photo-1790444.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        alt: 'Puppy 1',
        rotate: RotateEnum.deg0,
        title: 'Puppy 1',
        description: 'Description',
        favorite: true 
    },
    {
        id: '0115bd51-03a9-4ac8-85a6-11984bb792a7',
        src: 'https://images.pexels.com/photos/3976279/pexels-photo-3976279.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
        alt: 'Puppy 2',
        rotate: RotateEnum.deg0,
        title: 'Puppy 2',
        description: 'Description',
        favorite: false 
    },
]

export default fixture