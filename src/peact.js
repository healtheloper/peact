const peact = (function () {
  const info = {
    currentStateKey: 0,
    state: {},
    isMounted: false,
    updatedStateKey: null,
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

  const useEffect = (callback, watchStates) => {
    const isUpdate = watchStates.some((wValue) => {
      return wValue === info.state[info.updatedStateKey];
    });
    if (!info.isMounted) {
      info.isMounted = true;
      callback();
    }
    if (isUpdate) {
      callback();
    }
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
      info.updatedStateKey = currentStateKey;
      render();
    };
    info.currentStateKey += 1;
    return [value, setValue];
  };

  return { setRoot, useState, useEffect, render };
})();

export default peact;
