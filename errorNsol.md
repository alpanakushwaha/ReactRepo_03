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

> > exercise: try to change the logo component onClick (using useState)
> > try to handle errors in useEffect()

```js
useEffect(() => {
  // ApI call

  try {
    // code that may throw an error
    getResList();
  } catch (error) {
    // handle the error
    console.error(error);
  }
}, []);

async function getResList() {
  const data = await fetch(API_URL.data?.cards?.[4]);
  if (!data.ok) {
    setStatus("error");
    throw new Error("Failed to fetch data.");
  }
  const json = await data.json();
  if (!json) {
    setStatus("empty");
  } else {
    setResList(json?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setStatus("Success");
    console.log(json);
  }
}
```
>> above code to try-catch useEffect the API, has error(not working.. )