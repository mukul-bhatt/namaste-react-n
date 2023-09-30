# Assignment-1

💡 Namaste-React

### Questions

React is library or framework??

React.createElement

React is component based

React root

what is emmet

Difference between a Library and Framework?

### Answers

- **A JavaScript library for building user interfaces**
- React is still react even without JSX. We can use react with plain javascript.
- Javascript should be minified when using for production
- React.createElement gives us an object. Plain javascript object. A react element is   just a javascript object.
- React elements are immutable.
- we can use react inside an existing project. React can be used in only one section of the website. For ex. just use react in the search bar.
- React root is generally empty because react will override  everything that is inside the root and will fill it with react code.
- Emmet is a plugin used for making html and css workflow better.


 Libraries and frameworks are both tools used in software development to simplify and streamline the process of building applications

# What is crossorgin?

The **`crossorigin`** attribute is used in HTML **`<script>`** tags to specify how the browser should handle cross-origin requests for JavaScript files. Cross-origin requests occur when a web page hosted on one domain tries to load a JavaScript file from a different domain. Browsers enforce security measures to prevent potentially malicious code from being executed on a web page, and the **`crossorigin`** attribute helps control how these security measures are applied.

**anonymous (default)**: When you don't specify a **`crossorigin`** attribute or set it to "anonymous," the browser will load the script without sending any credentials (like cookies or HTTP authentication) along with the request. This is the most common setting for loading scripts from other domains.

## What is Emmet?

Emmet is a powerful and widely-used web development tool that simplifies and speeds up the process of writing HTML and CSS code. It is essentially a set of shorthand abbreviations and expressions that expand into full HTML or CSS code when triggered. Emmet is often integrated into code editors and IDEs (Integrated Development Environments) to assist developers in writing code more efficiently.

Here are some key features and aspects of Emmet:

1. **Abbreviations**: Emmet allows you to use short, easy-to-remember abbreviations that expand into complete HTML and CSS code snippets. For example, typing `html:5` and then triggering the Emmet expansion would generate the basic structure of an HTML5 document.
2. **Nested Elements**: You can quickly create nested elements by using the `>` operator. For instance, `div>ul>li*3` will generate a `<div>` containing a nested `<ul>` with three `<li>` elements.
3. **CSS Selectors**: Emmet can be used to create complex CSS selectors, making it easier to target and style specific elements in your HTML document.
4. **Math Expressions**: Emmet supports simple math expressions that can be used to generate sequences or ranges of values. For example, `ul>li.item$*5` would generate five list items with class names like `item1`, `item2`, and so on.
5. **ID and Class Names**: You can define IDs and class names for elements using the `#` and `.` symbols, respectively. For instance, `div#header.container` would create a `<div>` element with the `id` attribute set to "header" and the `class` attribute set to "container."
6. **Custom Snippets**: Developers can create and use custom snippets or templates for frequently used code patterns, making it even more efficient.
7. **Integration**: Emmet is integrated into many popular code editors and IDEs like Visual Studio Code, Sublime Text, and Atom, often as a plugin or built-in feature. This allows developers to use Emmet syntax and features seamlessly within their preferred development environment.

Emmet significantly enhances the productivity of web developers by reducing the amount of typing and repetitive tasks when creating HTML and CSS code. It's especially valuable when working on large-scale projects or when prototyping web pages quickly. Learning Emmet can be a time-saving skill for web developers.

## What are CDN’s? Why we use them?

CDN stands for Content Delivery Network. It is a distributed network of servers strategically located in various data centers across the globe. The primary purpose of a CDN is to deliver web content, such as images, videos, stylesheets, JavaScript files, and other resources, to users more efficiently and quickly

## Why is React known as React?

It's known as "React" because of how it handles the updating of user interfaces in response to changes in data. The name "React" reflects the library's primary function of reacting to changes in data and efficiently updating the user interface accordingly.

**What is difference between React and ReactDOM?**

`React` library contains functionality utilised in web and mobile apps (react native). `ReactDOM` library contains functionality utilised in web browser. It contains DOM manipulation utilities.

## What is async and defer?

`Without async/defer` : Browser stops the html parsing once script tag is encountered.
It resumes parsing only after script is fetched and executed.

`Async` : Html parsing is done in parallel while scripts are being fetched from the network and executed.
Once the script is done with execution, html parsing is resumed. This can be used for external scripts like google analytics.
It is better to avoid async for scripts that are dependent on other scripts since we dont know in which order script will be executed.

`Defer` : Similar to async, Html parsing is done in parallel while scripts are being fetched from the network. But scripts are executed only after the
html parsing is done.