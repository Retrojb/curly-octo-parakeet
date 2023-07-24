import lodash from 'lodash'

export default function randomNumber(min, max) {
    return lodash.floor(lodash.random() * (max - min) + min);
}

