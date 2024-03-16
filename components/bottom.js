export const bottom = (test, callBack) => {
    const btn = document.createElement('bottom');
    btn.innerText = test;
    if (callBack) {
        btn.addEventListener('click', () => callBack());
    }
    return btn;
};