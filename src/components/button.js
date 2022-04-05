const addEventAfterRender = ({ eventType, selector, callback }) => {
  setTimeout(() => {
    const $element = document.querySelector(selector);
    $element.addEventListener(eventType, callback);
  }, 0);
};

const Button = ({ onClick, className, innerHTML }) => {
  if (onClick) {
    addEventAfterRender({
      eventType: "click",
      selector: `.${className}`,
      callback: onClick,
    });
  }
  return `<button class="${className}">${innerHTML}</button>`;
};

export default Button;
