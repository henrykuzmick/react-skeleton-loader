# React Skeleton Loader

[![npm version](https://badge.fury.io/js/react-skeleton-loader.svg)](https://badge.fury.io/js/react-skeleton-loader)
[![gzip size](http://img.badgesize.io/https://unpkg.com/react-skeleton-loader/dist/Skeleton.min.js?compression=gzip)](https://unpkg.com/react-skeleton-loader/dist/Skeleton.min.js)

React Skeleton Loader is a React component designed to help you easily integrate custom animated skeletons for loading states.
It best works with text elements as it adopts to the fonts size and line height of your content, but it can be easily fitted to use with other objects like images and avatars.

# Demo
[Click here 👌](https://henrykuzmick.github.io/react-skeleton-loader)

# Basic Usage

The components you create should have loading states embeded in them.
You can do this however you want. You could rely on state changes, promise responses, or simply checking if the props passed aren't undefined. 

```js
import Skeleton from 'react-skeleton-loader';

const Page = (props) => {
  return(
    <div>
      <h1>props.title | <Skeleton /></h1>
      <p>props.body | <Skeleton count={5} /></p>
    </div>
  )
}
```

# Props

| Prop             | Type    | Default | Description                           |
| ---------------- | ------- | ------- | ------------------------------------- |
| width            | string  | "150px" | The (max) width of the element        |
| height           | string  | "100%"  | The (max) height of your element      |
| widthRandomness  | number  | 0.25    | Amount of width randomness            |
| heightRandomness | number  | 0       | Amount of height randomness           |
| borderRadius     | string  | 8px     | border radius of the element          |
| color            | string  | #EFF1F6 | the background color of the element   |
| count            | number  | 1       | How many time should this be repeated |
| animated         | boolean | true    | If it should animate                  |

When using `widthRandomness` or `heightRandomness` the maximum width and height will be determined by `width` and `height` props.
It can then only decrease. For example if `widthRandomness` is set to 0.25, and `width` is set to 100px the width will vary between 100px and 75px.

# Licence

MIT