---
title: "Render Props, Why and How To Use"
date: "2020-06-25"
cover: "https://res.cloudinary.com/dillionmegida/image/upload/v1593049986/images/blogs_cover/render-props_jgwexm.png"
pageDescription: "Render Props is an amazing concept used in React to share code and functionality between components. In this article, we'll learn why and how to use it"
pageKeywords: "react, render props, higher order functions, components"
tags: ["react"]
---

Render Props is an amazing concept used in React to share code and functionality between components.

With this technique, we have a component which houses some codes and functionalities which other components can partake. The bigger component uses the render prop of the smaller component as a medium to pass some data to the smaller component as well as determine what would be displayed on the UI.

`render` is the name used for such props, but it could be named anything, including `coffee`. The purpose of the prop is to determine what would be rendered on the UI by the bigger component, so any prop (which has to be a function) that does this work is called a render prop.

Before looking at how to use this awesome feature, let's look at why we'd even need it.

## Why Render Props

The most common way of sharing functionalities between two or more components is to create a basic component
which receive different types of props to determine what would be displayed. An example of such component is:

```jsx
import React, { useState } from 'react'
// 
const Component = (props) => {
    const {header, paragraph, increaseCounter} = props
    const [counter, setCounter] = useState(0)
    const handleInc = setCounter(prevState => prevState + 1)
    return (
        <div>
            <h1>{header}</h1>
            <p>{paragraph}</p>
            <button
                onClick={handleInc}
            >
                INC
            </button>
            <p>Current count: ${count}</p>
        </div>
    )
}
export default Component
```

This component is very easy to use. Any component that uses this will have to provide a `header`, `paragraph` and `increaseCounter` prop to change the count state. These determines what would be displayed on the UI.

Now imagine we wanted a smaller component to use this component, but with a different header level. We'd need another prop like so:

```jsx
...
const {header, paragraph, headerLevel, increaseCounter} = props
const H = `h${headerLevel}`
...
return (
    <div>
        <H>{header}</H>
        <p>{paragraph}</p>
        ...
    </div>
)
...
```

Seems nice so far. What if we wanted three paragraphs? Hmmm...another prop? This breaks usability because the components that would use this component need to study the required props which could be so much.

But don't get me wrong, this method of sharing functionality is not bad. This method is very useful for components which **MUST** appear in a certain way, or maybe require little props. What I mean is, the method above is very effective if you need to return a `div` with four children - 1 `<h1>`, 2 `<p>`s and 1 `<button>`. The component could also be a bit dynamic, but it shouldn't require overload props.

What now is the solution for this? Well, render props is not the first solution for this. The first thing to do is consider how to make this component very usable and simple.

## Where does render props come in?

To consider render props, we'd need to understand the common functionalities we want our components to share. For our component above, there's one functionality - using and increasing counter state. Render props technique can come in to help this component manage the state while the consumers determine what would be displayed..

The ideal usage of render props occurs when there are multiple components to share functionality. If there are common functionalities that would be shared across many components and the UI is not guaranteed to be the same, the component used in the code above would not be perfect, because while we consider logic, we need many props to determine UI.

Let's look at a scenario for render props.

It is very common in React applications (or any application) to fetch data from an external service, for example a server. To achieve this, you may have various `useEffect`s and `useState`s (using React Hooks) across different components which would be used to get the data and update the state of data during mount.

Looking at this scenario, we can see that ComponentA may fetch all users and display their pictures while ComponentB may fetch a user's details and display the details. ComponentA and ComponentB obviously have different UIs but they do the same thing:

- make fetch request
- update state with response gotten
- use the state on the UI

The state would contain the data gotten and additionally, we could have an `isLoading` state (a common practice).

Render props is ideal for such cases. Let's head over to how to use it.

## How to use Render Props

Both components share the same logic, so we could manage this logic in one place.

We'd need to have a bigger component which handles the logic that would be shared across other components. Let's call the component `FetchComponent`. It would be used like this:

```jsx
// In the component .js file
import React, { useState } from 'react'
...
const FetchComponent = (props) => {
    const {coffee} = props
    const [state, setState] = useState({
        data: null,
        isLoading: false
    })
    // do whatever with the state
    const renderProp = coffee
    return (
        renderProp(state)
    )
}
export default FetchComponent
```

This is the basic structure of the bigger component. We manage some state (`data` and `isLoading`), perform some functionalities with the state and render what the consumer component decides to be rendered using the render prop (in our case `coffee`, name not descriptive, but just so you understand that the prop could be called anything).

As you'd notice, this component returns the result (the returned value) of the render prop function which is called with the state argument. This means, the consumer component has access to the state.

Our structure now doesn't solve our problem yet. We need to make a fetch request. But to which endpoint? We could receive that as props. Let's modify the component more.

```jsx
// In the component .js file
import React, { useState, useEffect } from 'react'
import {fetchData} from './utils'
...
const FetchComponent = (props) => {
    const {coffee, endPoint} = props
    const [state, setState] = useState({
        data: null,
        isLoading: false
    })
    const renderProp = coffee
    ...
    useEffect(() => {
        const data = fetchData(endPoint)
        setState({
            data,
            isLoading: true
        })
    }, [])
    ...
    return (
        renderProp(state)
    )
}
export default FetchComponent
```

That's it for the main component. Using useEffect, we make a fetch request to the end point provided by the consumer component. `fetchData` is an assumed function which makes a fetch request. It depends on the method you want to achieve that - could be [axios](). It would also be asynchronous so you would have to handle it with `promise` or `async/await`. I didn't bother about that for simplicity of the article.

When the data is gotten, the state is updated and of course, the consumer component is re-rendered.

Let's head over to our consumer components. For simplicity, we'd consider only two components.

For the first component, which is UsersComponent, we have:

```jsx
// in the UsersComponent file
import React from 'react'
import FetchComponent from 'path-to-component'
...
const UsersComponent = () => {
    return (
        <FetchComponent coffee={(state) => {
            // do whatever you want with the state
            return (
                // whatever ui you want
                state.isLoading ? (
                    <p>Loading users....</p>
                ) : (
                    <div>
                        {state.data.map(user => (
                            {/* show users */}
                        ))}
                    </div>
                )
            )
        }} />
    )
}
export default UsersComponent
```

For the second component, UserProfile, we have:

```jsx
// in the UserProfile file
import React from 'react'
import FetchComponent from 'path-to-component'
...
const UserProfile = () =>
    return (
        <FetchComponent coffee={function(state) {
            // do whatever you want with the state
            return (
                // whatever ui you want
                 state.isLoading ? (
                    <p>Loading details....</p>
                ) : (
                    <div>
                        {state.data.map(details => (
                            {/* show details */}
                        ))}
                    </div>
                )
            )
        }} />
    )
}
export default UsersComponent
```

From these components, you'd notice how the `coffee` props works and returns what would be displayed on the UI.

### Tip

If you love having elements between opening and closing tag, like `<Component>...</Component>`, that's also possible with render props. It's not compulsory for render props components to appear as `<Component />`. To achieve this, we can make use of the `children` prop. Remember that any prop could be a render prop. Hence we'd have:

In FetchComponent,

```jsx
...
const renderProp = props.children
return (
    renderProp(state)
)
...
```

In other components,

```jsx
...
return (
    <FetchComponent>
        {(state) => {
            // ui to render
        }}
    </FetchComponent>
)
...
```

Whichever you love, use it.

## Things to Note

-   `UsersComponent` and `UserProfile` didn't have to look the same. They could use their own instance of state however they wanted.
-   `FetchComponent` did not care what other components look like. It's majorly concerned with the logic.
-   `FetchComponent` is very usable with the very little number of props required.

## Wrap up

There are many other scenarios to consider, but this is one which I've found render props really helpful.

As I stated earlier, render props shouldn't be the first thing to consider. There's nothing wrong with sharing props to achieve component structure. Think of render props when you are about to share (or already sharing) similar functionalities accross a number of components.

Check out [Higher Order Functions](), a similar technique to render props.

Thanks for reading : )
