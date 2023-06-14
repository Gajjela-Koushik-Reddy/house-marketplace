- `const [count, setCount] = useState(0);

const increment = () => {
  setCount((previousCount) => previousCount + 1);
};`

When setting the state using the state update function `setCount`
we can access the previous state of the component from the parameter of the function that we are passing to update it `(previousCount) => previousCount + 1`.