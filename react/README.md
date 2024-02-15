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

