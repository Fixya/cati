

export const randomizer = (duration) => {
  let timer = setInterval(() => {
    const item = array[indexElement]
    if (indexElement >= array.length) {
      clearInterval(timer)
    }
  }, duration);
}