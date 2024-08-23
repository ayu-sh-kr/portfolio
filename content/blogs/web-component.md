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


#### Installation

::code-group
```Shell
npm install @ayu-sh-kr/dota-core
```
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


::code-group

```html
<body>
    <app-header/>
    <script type="module" src="./app.header.component.ts"></script>
</body>
```

#### Method calling

You should be wondering how can we call methods with this style of component creations. As the Dota-Core
uses **Vanilla Js** under the hood you can call method by binding them to their called element.