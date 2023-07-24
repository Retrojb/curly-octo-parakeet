import { randomNumber } from "./stuff";

export function setupCounter(element: HTMLButtonElement) {
  let counter = randomNumber(1,10000)
  const setCounter = (count: number) => {
    counter = count
    element.innerHTML = `count is ${counter}`
  }
  element.addEventListener('click', () => setCounter(counter + 1))
  setCounter(0)
}
