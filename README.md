useState 관련

- setState -> Render
- setState 로직 실행 시 비동기로 실행하지 않으면 렌더의 순서가
  - setState 내부의 render 가 실행됨
  - Component 함수가 실행되는 로직에서 맨 처음 쌓인 콜스택이 다 빠져나가지 않았기 때문에 처음 호출된 컴포넌트 함수의 todos = [] 가 render 됨
  - setState 관련 로직을 비동기로 처리하도록 바꿈

```js
const useState = (defaultValue) => {
  console.log(info.state);
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
```

```js
const setValue = (newValue) => {
  setTimeout(() => {
    info.state[currentStateKey] = newValue;
    info.updatedStateKey = currentStateKey;
    render();
  }, 0);
};
```
