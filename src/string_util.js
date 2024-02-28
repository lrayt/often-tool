import TypeUtil from './type_util'

export default {
    isEmpty: o => TypeUtil.isString(o) && o.length > 0
}