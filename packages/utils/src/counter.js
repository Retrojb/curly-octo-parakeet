import { randomNumber } from "./stuff";
export function setupCounter(element) {
    let counter = randomNumber(1, 10000);
    const setCounter = (count) => {
        counter = count;
        element.innerHTML = `count is ${counter}`;
    };
    element.addEventListener('click', () => setCounter(counter + 1));
    setCounter(0);
}
