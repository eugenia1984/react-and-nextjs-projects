## <img width="30" height="30" src="https://img.icons8.com/bubbles/30/react.png" alt="React"/> What is React?

It's a JavaScript library to build highly interactive user interfaces.

---

## <img width="30" height="30" src="https://img.icons8.com/3d-fluency/30/search.png" alt="Search"/> What you will find?

1. **vanilla-js** an example of what we have with Vanilla JavaScript, before React.

2. **react-vs-vanilla-example** the same app from **vanilla.js** but a React App with Vite, created with: `npm create vite@latest` and the run:

```BASH
cd react-vs-vanilla-example
npm install
npm run dev
```

3. **post-app**

---

---

## <img width="30" height="30" src="https://img.icons8.com/external-others-bomsymbols-/30/external-colors-flat-02-digital-design-others-bomsymbols-.png" alt="Color palette"/> Ways to add styles

1. With a css files and **className** atribute, like here:

```JSX
import './styles.css';

const Post = () => {
  return (
    <div>
      <h1 className="headline">Post!</h1>
    </div>
  )
}
```

`styles.css`

```CSS
.headline {
  font-size: 2rem;
}
```

If we use one css file for each component will be ok, but if we use a global css files for all the components we might be duplicating classes and having issues.

2. Other way is using **css modules**, similar of `css` files, but we must named the files like this: `NameOfTheComponent.module.css`, always with + `.module` and we just put the classes inside and use the **className** attribute in the component. And we import: `import classes from './NameOfTheComponent.module.css'` and we will use in the component:

```JSX
import classes from './Post.module.css';

const Post = () => {
  return (
    <div>
      <h1 className={classes.headline}>Post!</h1>
    </div>
  )
}
```

`Post.module.css`

```CSS
.headline {
  font-size: 2rem;
}
```

3. In line style, not the best way. We pass between `{}`, to tell JSX that it's a JavaScript code inside, an object with the css attributes as key of the object (pay attention that e use camelCase when we have more than onw word).

```JSX
const Post = () => {
  return (
    <div>
      <h1 style={{fontSize: "2rem"}}>Post!</h1>
    </div>
  )
}
```

---

---

## <img width="30" height="30" src="https://img.icons8.com/bubbles/30/react.png" alt="React"/> Props


- If the `props` it's a function, we named it `onNameOfTheFunction`, like for example `onCreatePost`.

---

## <img width="30" height="30" src="https://img.icons8.com/bubbles/30/react.png" alt="React"/> Event Listener

```JSX
import classes from "./NewPost.module.css";

const NewPost = () => {
  const changeBodyHandler = (event) => {
    console.log(event.target.value);
  }

  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={changeBodyHandler} />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required />
      </p>
    </form>
  );
};

export default NewPost;
```

## <img width="30" height="30" src="https://img.icons8.com/bubbles/30/react.png" alt="React"/> Event Listener

- **onChange** the event is the `change`, it's always `onEvent`, like onKeyDown, onKeyUp, onChange, etc.

- **changeBodyHandler** it's the function that will be execute once the change event passes.

At this time we are just passing the event and getting the value.

---

---

## <img width="30" height="30" src="https://img.icons8.com/bubbles/30/react.png" alt="React"/> Hooks: useState

- **hook** a React function, it must be execute inside a React component function.

- **useState**: `const [value, setValue] = useState(initialValue)`, it will store an internal value for the component, it's a variable that will store the value, we can have an initial value and the this value will be updated with the setValue function.

```JSX
const stateData = useState('')
stateData[0] // current state value
stateData[1] // state updating function
```

-> If the new state depends on the old state, always: `setValue((prevValue) => [newValue, ...prevValue])` or `setValue((prevValue) => newValue)`

---

## <img width="30" height="30" src="https://img.icons8.com/bubbles/30/react.png" alt="React"/> Prop children

It's refers to the content that pass between the open and closed tag of the component.

---


## <img width="30" height="30" src="https://img.icons8.com/bubbles/30/react.png" alt="React"/> Conditional render

Using the `&&` if it's truthy it will be render in the UI.

---

## <img width="30" height="30" src="https://img.icons8.com/bubbles/30/react.png" alt="React"/> Form

The submit `<button type="submit">Submit</button>` always MUST have the **submit** type, because for example I can have a second button to cancel, and that button would be `type="button"`; in this way the form will now that the submit data will happen only once clicking in the **submit** button.

And the ``<form>`` tag must have an **onSubmit** Event Listener, that will be a function to be execute once the submit button is clicked in order to submit the form.

Once it submitted it will make a fetch to the BackEnd to send the data with an HTTP request, we can prevent that with: `event.preventDefault();`