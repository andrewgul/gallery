import CardModel from "./entities/CardModel"
import RotateEnum from "./entities/RotateEnum"

const fixture: CardModel[] = [
    {
        id: '356b2633-961d-42d8-8045-683a5a6de7c1',
        src: 'https://images.pexels.com/photos/1790444/pexels-photo-1790444.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        alt: 'Puppy Charlie',
        rotate: RotateEnum.deg0,
        title: 'Charlie',
        description: 'Loves pizza',
        favorite: true 
    },
    {
        id: '0115bd51-03a9-4ac8-85a6-11984bb792a7',
        src: 'https://images.pexels.com/photos/4426358/pexels-photo-4426358.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        alt: 'Puppy Scout',
        rotate: RotateEnum.deg0,
        title: 'Scout',
        description: 'Fought a mailman',
        favorite: true 
    },
    {
        id: '72aaf128-4693-4286-904d-7f7a611c567f',
        src: 'https://images.pexels.com/photos/3478875/pexels-photo-3478875.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        alt: 'Puppy Rocky',
        rotate: RotateEnum.deg0,
        title: 'Rocky',
        description: 'Grumpy sometimes',
        favorite: true 
    },
    {
        id: '920df981-6497-4144-a729-ee5d153185c7',
        src: 'https://images.pexels.com/photos/3908821/pexels-photo-3908821.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        alt: 'Puppy Toby',
        rotate: RotateEnum.deg0,
        title: 'Toby',
        description: 'Listens to rap',
        favorite: false 
    },
    {
        id: '82b3ac88-15c8-491a-816d-08508e85a34a',
        src: 'https://images.pexels.com/photos/4193995/pexels-photo-4193995.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        alt: 'Puppy Luna',
        rotate: RotateEnum.deg0,
        title: 'Luna',
        description: 'Very shy but kind',
        favorite: false 
    },
    {
        id: '23110495-747b-487d-80ce-59c3d45a84b2',
        src: 'https://images.pexels.com/photos/3860304/pexels-photo-3860304.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        alt: 'Puppy Piper',
        rotate: RotateEnum.deg0,
        title: 'Piper',
        description: 'Has TikTok account',
        favorite: true
    },
]

export default fixture