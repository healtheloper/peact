const peact = (function () {
  const info = {
    currentStateKey: 0,
    state: {},
    $root: null,
    rootComponent: null,
  };

  const setRoot = ($root, rootComponent) => {
    info.$root = $root;
    info.rootComponent = rootComponent;
  };

  const render = () => {
    info.currentStateKey = 0;
    info.$root.innerHTML = info.rootComponent();
  };

  const useState = (defaultValue) => {
    const currentStateKey = info.currentStateKey;
    const isNewUseState = Object.values(info.state).length === currentStateKey;
    if (isNewUseState) {
      info.state[currentStateKey] = defaultValue;
    }
    const value = info.state[currentStateKey];
    const setValue = (newValue) => {
      info.state[currentStateKey] = newValue;
      render();
    };
    info.currentStateKey += 1;
    return [value, setValue];
  };

  return { setRoot, useState, render };
})();

export default peact;
