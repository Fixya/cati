export const exstraText = (data, style, functionFrom) => {
  const text = document.createElement('p')
  text.innerText = data.specification + ':'
  text.classList.add(style)
  text.append(functionFrom)
  return text
}