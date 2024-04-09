export const exstraText = (someText, style, functionFrom) => {
  const text = document.createElement('p')
  text.innerText = someText + ':'
  text.classList.add(style)
  text.append(functionFrom)
  return text
}