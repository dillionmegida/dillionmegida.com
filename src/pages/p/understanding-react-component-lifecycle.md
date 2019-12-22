---
title: "Understanding React Component Lifecycle"
date: "12-22-2019"
cover: "https://res.cloudinary.com/dillionmegida/image/upload/v1577046834/images/blogs_cover/react-lifecycle_nr0ifw.jpg"
pageDescription: "Get to understand the lifecycle of React components and how to manipulate a component's life with the lifecycle methods."
pageKeywords: "css layouts, layouts, layouts in css, css, css stylesheet, css properties, layout property, css display, css flex, css flex-wrap, css flex-direction, css justify-content, css align-items, align-items, justify-content, css styles."
tags: ["react"]
---
Do you know the lifecycle of components in React? Do you have problems understanding any of the lifecycle methods? If yes, then, this article is for you.

Here, I explain the lifecycle of components in React and how to control (or manipulate) the life of components with some lifecycle methods.
## Component Lifecyle
Each component (parent and children) in react live a life - from birth to death. They have a lifecycle which you can use to alter the components. The three main stages of the life of a component are:
- **Mouting**: birth
- **Updating**: growth (due to external factors)
- **Unmouting**: death

React provides lifecycle methods which we could use to interfere with the life of a component. These methods can only be used in `class components`.

Some of the methods have either been deprecated, soon to be or newly introduced. However, we'd look at some of them.

## Mouting (Birth) Stage
In this stage, there are four methods:
### 1. constructor()
Think of this method as the component in the parent's womb. The parent here is `React.Component`. It is a place to set initial values, initialize state of the component and also make the component inherit properties and methods from the parent.
```javascript
class YourComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    // ...other methods
    // ...the birth
}

```
`super(props)` initiates the parent's constructor and allows `YourComponent` to inherit methods from `React.Component`. Stating this method is optional though react automatically does this in the background.
### 2. getDerivedStateFromProps()
This method is always called before the birth of the component. We could have a default state but here, we can get the initial props of the component and update the state.
For example, (using the code above)
```javascript
class... {
    constructor(props) {
        super(props);
        this.state = {
            color: 'green'
        }
    }
    static getDerivedStateFromProps(props, state) {
        return {
            color: props.initialColor
        }
    }
    // ...other methods
    // ...the birth
}
```
It is a static component that has no access to `this`.

Our default state for color is green, but after the `getDerviedStateFromProps` is called with the props and state argument passed to it, it updates the state with the color the component declares. i.e `<YourComponent color='pink'>` will update the color state to pink.

However, if you define your method like this, note that every time you change state (by responding to actions), the color would always be pink. Failure to include the color prop in the component will result in an undefined color state.

### 3. render()
**While other methods are optional, this method must be declared!** This is the point where our component is born and is added to the DOM. The component is **rendered** to the DOM. Using the codes above, we would have;
```javascript
class... {
    constructor(props) {
        super(props);
        state = {
            color: 'green'
        }
    }
    static getDerivedStateFromProps(props, state) {
        return {
            color: props.initialColor
        }
    }
    // ...other methods
    render() {
        <h1>I, a header element, is born! My color is {this.state.color}</h1>
    }
}
```
Using `<YourComponent color='pink'>`, we would have a header element with the text - "I, a header element, is born! My color is pink".

You cannot change state from this method. The method works with the current state of the component and outputs things to the DOM based on the state.

### 4. componentDidMount()
This sounds literal enough, right? I call it a boolean method which returns true when the component has been rendered. It is called immediately after the render method. <br/>
Here, you can make API calls or collect data from a different source after which you can update the state of component thereby causing another render.

Yes, on every state change, the component is re-rendered.

We would change the color when the component is rendered.
```javascript
class... {
    constructor... {
        ...
    }
    static getDerivedStateFromProps... {
        ...
    }
    componentDidMount() {
        this.setState({
            color: 'red'
        })
    }
    // ...other methods
    render() {
        <h1>I, a header element, is born! My color is {this.state.color}</h1>
    }
}
```
Immediately the component is rendered, then text changes to "I, a header element, is born! My color is indigo". It may be difficult noticing the change because what we are rendering on the screen isn't much. To notice it, you can use `setTimeOut` in the method to delay the change of state for some seconds.

If you do not declare the optional methods, React uses the default configurations set for them.

Our child is born, but it needs to grow 🤗

## Updating (Growth) Stage
This growth is triggered once there is a change in state. There are five methods in this stage.
### 1. getDerivedStateFromProps()
In the birth stage, we noticed a change in props altered the state before rendering the component. After mounting, any change in props will alter the component thereby causing another rendering, but this time, it's an **updated** component.
### 2. shouldComponentUpdate()
This also seems literal? It's more of a question. If it returns true, the component is re-rendered but if false, it isn't. The default is true. For example, (from our current program)
```javascript
...
    shouldComponentUpdate() {
        return this.props.color === 'brown'
    }
...
```
If the props is any other color aside brown, our component will never be re-rendered thereby preventing the remaining methods from being called.
### 3. render()
If `shouldComponentUpdate()` returns false, this isn't called. For true, it updates the component on the DOM.
### 4. getSnapshotBeforeUpdate()
With this method, we can get the previous state or props (snapshot) of a component before it was updated.
```javascript
...
    changeColor() {
        this.setState({
            color: 'violet'
        })
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        alert(`The previous color was ${prevState.color}`);
    }
    componentDidUpdate(prevProps, snapShotValue) {
        console.log(snapShotValue);
    }
...
```
_Remember to remove the `shouldComponentUpdate` method or change the code to true, if not, I'll component would never be updated_

The first argument is the previous props and the second is the previous state. When the state changes, we get an alert showing the previous color. **Note that:** This would not work without a method which changes the state when called as we have above.

Also note that the next method, `componentDidUpdate()` should be declared whenever this method is declared. This is because componentDidUpdate receives the snapshot value which the method returns.
### 5. componentDidUpdate()
After the component updates, another method is called which is this. Literal enough right? It can be treated similarly with `componentDidMount()`. It is also good practice to check the previous props or state with the current one before performing any action in this method.
```javascript
...
    componentDidUpdate(prevProps) {
        if(this.props.color !== prevProps.color) {
            // perform actions
        }
    }
...
```
One popular usage of this method is if you have to get resources from a source when the state changes or if you want to update the DOM based on a changed state.

## Unmounting (Death) Stage
Sad to hear, this is also part of life 😢. It isn't compulsory that our components die, but well, the stage remains real. There is only one method in this stage:
### componentWillUnmount()
This method is called when a component is about to be removed from the DOM (die). This happens when state or props is changed based on an action which results in the removal of a component e.g To do list.

Here, you could perform any necessary clean-ups of the component such as canceling API calls.

I hope with this, your understanding of a component's life has become better.

## Useful Resources
- [React Lifecycle - W3Sschools](https://www.w3schools.com/react/react_lifecycle.asp) _W3Schools really helped me in understanding these concepts._
- [React Lifecycle Methods – A Deep Dive](https://programmingwithmosh.com/javascript/react-lifecycle-methods/)

Shoutout to the React team 📣. They did an awesome job with their method namings don't you think?