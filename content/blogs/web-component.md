---
slug: web-component
title: "Web Component using Dota Core"
description: "In this blog we will take a look at how can we utilize the npm library @dota/core to create web
components."
published: true
publishedOn: "2024-08-23T15:08:00.000Z"
topics:

- Web Components
- Library
- Typescript

---

[@ayu-sh-kr/dota-core](https://www.npmjs.com/package/@ayu-sh-kr/dota-core) is a web component library that provide API
for creating and managing web components.
With it's API one can reduce lots of boiler plate code used in creating a web component. It's a proxy and event driven
library that automated event handling and component registration for user.

For creating web component we will start of our project on **Vanilla Javascript** and using **Typescript**

::big-group
#### Installation

::code-group
```Shell
npm install @ayu-sh-kr/dota-core
```
::
::
::big-group
#### Creating a web component

To create a component we will require to import **@Component** (decorator to register the web component) and abstract
class **BaseElement**, this is minimum requirement to create a web component


::code-group
```typescript
import {BaseElement, Component, HTML} from "@ayu-sh-kr/dota-core/dist";

@Component({
    selector: 'app-header',
    shadow: false
})
export class AppHeader extends BaseElement {

    render() {
        return HTML`
            <ul>
                <li>Home</li>
                <li>Menu</li>
                <li>Service</li>
                <li>Contact</li>
            </ul>
        `
    }
}
```
::

::

::big-group
#### Using the Component

To use the web component we must insure that it is registered and which will be taken care by the _@Component_
decorator.
Import the component file where you need, as **module** script in **html** file and import as **file** in your **ts**
file.


::code-group
```typescript
import './app-header.component.ts'

document.getElementById('#app')!.innerHTML = `
    <app-header/>
`
```
::
::

::code-group

```html
<body>
    <app-header/>
    <script type="module" src="./app.header.component.ts"></script>
</body>
```
::

::big-group
#### Property Binding
Properties are very important aspect of web component, and they hold the state of the component. We provide value to the properties of the component
as an attribute to the component. To bind the element attribute to it property we use the decorator **@Property**

::code-group
```typescript
import {BaseElement, Component, Property} from "@ayu-sh-kr/dota-core/dist";

@Component({
    selector: 'property-example',
    shadow: false
})
export class PropertyExample extends BaseElement {
    
    @Property({name: 'data'})
    data!: string;
    
    render() {
        return `
            
        `
    }

}
```
::

::code-group
```html
<property-example data="Some Value"/>
```
::

::

::big-group
#### Method calling

You should be wondering how can we call methods with this style of component creations. As the Dota-Core
uses **Vanilla Js** under the hood you can call method by binding them to their called element.

To bind a method we use event binding.

::code-group
```typescript

let element = document.getElementById('#id');
element.addEventListener('click', () => {
    console.log('clicked')
})
```
::


**Dota-Core** working on the above principle provides a very neat way to bind events to the method. They provide **@BindEvent**
decorator to achieve the same, just decorate the method you want to bind and event to and provide the _event_ and _id_ as **object** to it.
Also give the element that you want to bind the event an **id**

::code-group
```typescript
import {BaseElement, Component, HTML, BindEvent} from "@ayu-sh-kr/dota-core/dist";

@Component({
    selector: 'reactive-click',
    shadow: false
})
export class ReactiveClick extends BaseElement {
    
    @BindEvent({event: 'click', id: '#button'})
    handleClick() {
        console.log('Clicked')
    }
    
    render() {
        return `
            <button id="button">Click Me</button>
        `
    }
    
}
```
::
::

::big-group
#### Event Emitter
Event is very important aspect of any component not just the web component, through events components communicate and update their state.
To deal with events, **Dota-Core** provides **EventEmitter** class to emit custom events.

Event emitted can be of two level.
1. **Window** (Global Scope)
2. **Root** (Component Scope)

To Emit events we first need an **EventEmitter** object which can be initialized with a decorator or directly

::code-group
```typescript
import {EventEmitter, BaseElement, Event} from "@ayu-sh-kr/dota-core/dist";

export class EventExample extends BaseElement {
    @Event
    event!: EventEmitter<string>
}
```
::

OR

::code-group
```typescript
import {EventEmitter, BaseElement, Event} from "@ayu-sh-kr/dota-core/dist";
export class EventExample extends BaseElement {

    @Event
    event! = new EventEmitter('onEvent');

    render() {
        return `
            
        `
    }

}
```
::

Example of the EventEmitter

::code-group
```typescript
import {BaseElement, Component, EventEmitter, Event} from "@ayu-sh-kr/dota-core/dist";

@Component({
    selector: 'emit-example',
    shadow: false
})
export class EmitExample extends BaseElement {

    @Event
    change!: EventEmitter<string>
    
    @BindEvent({event: 'click', id: '#button'})
    emitEvent() {
        this.change.emit('data', this) // event is root level
        this.change.emit('data') // event is global scoped
    }

    render() {
        return `
            <button id="button">Click Me</button>
        `
    }

}
```
::
::

::big-group
#### Event Listeners
When a component emits some event then it should be listened by some other components. Listening to event similar to Binding the event to a method
which will react to certain occurrence of the event.

To make method listen to some event we will decorate it with **@EventListener** which takes an object stating _event name_ and _event type_

::code-group
```typescript
import {BaseElement, Component, EventListener} from "@ayu-sh-kr/dota-core/dist";
import './emit-example.component.ts'

@Component({
    selector: 'listen-example',
    shadow: false
})
export class ListenExample extends BaseElement {
    
    @EventListener({name: 'onChange', type: EventType.ROOT})
    listenEvent() {
        console.log('Do Something')
    }

    render() {
        return `
            <emit-example/>
        `
    }

}
```
::

::