export const createElement = (tagName, classArr) => {
    const newElement = document.createElement(tagName);
    classArr.forEach((cl) => {
        newElement.classList.add(cl);
    });
    return newElement;
}
