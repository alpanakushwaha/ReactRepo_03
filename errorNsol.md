- Error => _index.js:1 Warning:_ A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component.

sol:

from

```js
const [searchTxt, setSearchTxt] = useState();
```

to

```js
const [searchTxt, setSearchTxt] = useState("");
```
