- `const [count, setCount] = useState(0);

const increment = () => {
  setCount((previousCount) => previousCount + 1);
};`

When setting the state using the state update function `setCount`
we can access the previous state of the component from the parameter of the function that we are passing to update it `(previousCount) => previousCount + 1`.

- `const [formData, setFormData] = useState({
    email: "",
    password: "",
  });`
    + setting the data for formData
    + We have set up inputs with respective ID's
    + whenever there is a change in the input, the previous state 
      is spread and new state is added.
