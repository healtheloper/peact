const uuidv4 = () => {
  return "xxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

const addEventAfterRender = ({ eventType, selector, callback }) => {
  setTimeout(() => {
    const $element = document.getElementById(selector);
    $element.addEventListener(eventType, callback);
  }, 0);
};

const Button = ({ onClick, className, innerHTML }) => {
  const id = uuidv4();
  if (onClick) {
    addEventAfterRender({
      eventType: "click",
      selector: `button-${id}`,
      callback: onClick,
    });
  }
  return `<button id="button-${id}" class="${className}">${innerHTML}</button>`;
};

export default Button;
