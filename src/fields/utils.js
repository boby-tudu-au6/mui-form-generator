
export const getOr = (obj, path, def) => {
    var val = _.get(obj, path);
    return _.isEmpty(val) ? def : val;
};