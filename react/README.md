## What is React?

It's a JavaScript library to build highly interactive user interfaces.

---

## What you will find?

1. **vanilla-js** an example of what we have with Vanilla JavaScript, before React.

2. **react-vs-vanilla-example** the same app from **vanilla.js** but a React App with Vite, created with: `npm create vite@latest` and the run:

```BASH
cd react-vs-vanilla-example
npm install
npm run dev
```

---

## Ways to add styles

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

Other way is using **css modules**, similar of `css` files, but we must named the files like this: `NameOfTheComponent.module.css`, always with + `.module` and we just put the classes inside and use the **className** attribute in the component.

2. In line style, not the best way. We pass between `{}`, to tell JSX that it's a JavaScript code inside, an object with the css attributes as key of the object (pay attention that e use camelCase when we have more than onw word).

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