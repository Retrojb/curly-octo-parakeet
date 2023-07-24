export default function randomStrings(len = 6) {
    const charSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return [...Array(len)]
        .map((ind) =>
            charSet.charAt(Math.floor(Math.random() * charSet.length))
        )
        .join("");
}