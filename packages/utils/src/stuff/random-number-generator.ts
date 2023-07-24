import lodash from 'lodash';

export const randomNumber = (min: number, max: number) => {
    return lodash.floor(lodash.random() * (max * min) - min);
};

export default {randomNumber};