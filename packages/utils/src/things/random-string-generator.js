import lodash from 'lodash';
export const randomStrings = (len = 6) => {
    const charSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return [...Array(len)]
        .map(() => charSet.charAt(lodash.floor(lodash.random() * charSet.length)))
        .join("");
};
export default { randomStrings };
