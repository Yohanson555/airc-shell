import _ from 'lodash';

export const isApplicationDerscription = (descr) => {
    if (
        !_.isPlainObject(descr) ||
        (!("code" in descr) || !_.isString(descr.code)) ||
        (!("name" in descr) || !_.isString(descr.name)) ||
        (!("path" in descr) || !_.isString(descr.path)) ||
        (!("id" in descr) || !_.isInteger(descr.id)) ||
        (!("order" in descr) || !_.isInteger(descr.order))
    ) {
        return false;
    }

    return true;
};