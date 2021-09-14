import RotateEnum from "../../entities/RotateEnum"

export const getNextRotate = (rotate: RotateEnum): RotateEnum => {
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