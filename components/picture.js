export const getPicture = (scrImg, clas) => {
    const img = document.createElement('img')
    img.classList.add(clas)
    img.setAttribute('src','./images/' + scrImg)
    return img
}