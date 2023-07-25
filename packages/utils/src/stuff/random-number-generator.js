import lodash from 'lodash';
export const randomNumber = (min, max) => {
    return lodash.floor(lodash.random() * (max * min) - min);
};
export default { randomNumber };
