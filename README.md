![concrete-banner](./src/docs/images/concrete-banner.jpg)

# Concrete Challenge

> a client-side application that consults a GitHub API and the following repositories of a given user. 

## Demo

![concrete-demo](./src/docs/images/concrete-demo.gif)

## Challenge Requirements

### Navigation

Navigation | Done
---------- | ------
When searching for a user through github login, direct to search result | ✔️
If user is found present user details page (Layout result), otherwise display friendly message (Layout NotFound) | ✔️

### Requirements

Requirements | Done
------------ | ------
I, as a user, wish to search for a GitHub user | ✔️
I, as a user, want to see the details of this searched user (number of followers, number of followed, avatar image, email and bio) | ✔️
I, as a user, want to see the listing of this user's repositories that was sought, ordered by the decreasing number of stars | ❌

### Done Definition

Done Definition | Done
--------------- | ------
The layout must be implemented according to the Zeplin.io specification | ✔️
A framework is not required, but we recommend React.js | ✔️
Routes required | ✔️

## Build With

- [Yarn package](https://yarnpkg.com/lang/en/) ![yarn-badge](https://img.shields.io/badge/yarn-1.19.1-blue)
- [React.js](https://github.com/facebook/react) - This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
- [axios](https://github.com/axios/axios) - Promise based HTTP client for the browser.
- [react-router-dom](https://reacttraining.com/react-router/web/guides/quick-start) - The components router. 
- [VsCode](https://code.visualstudio.com/) - Code Editor | IDE

## Assets

- CSS
- Fonts:
    - [Google Fonts - Raleway](https://fonts.google.com/specimen/Raleway)
    - [Online Web Fonts - Monaco](https://www.onlinewebfonts.com/download/440785c689da19fbbdb1346932c8c029)
- [Layout](https://zpl.io/VxYQp7g)
- [Github API](https://developer.github.com/v3/) endpoints:
    - Details of a user: https://api.github.com/users/{username}
    - Repositórios de um usuário: https://api.github.com/users/{username}/repos

## Getting Started

### Requirements

To run this project you will need [![node-badge](https://img.shields.io/badge/node-v12.13.1-blue)](https://nodejs.org/en/) installed in your computer, if you have not, you can click on node badge and the link will redirect to the node page installer, after that the environment it will ready for start.

### Installation

Download the project or clone it, then enter the `./concrete-app` directory and run:

```
yarn install
```

to install all the project dependencies.

or:

```
npm install
```

if you are using [![npm](https://img.shields.io/badge/npm-6.12.1-blue)](https://www.npmjs.com/) or higher as package manager.

<!-- ## Available Scripts

In the project directory `./concrete-app`, you can run: -->

### Running

To run the app in the development mode, enter the `./concrete-app` directory and run:

```
yarn start
```

to open [http://localhost:3000](http://localhost:3000) to view it in the browser.

or:

```
npm start
```

if you are using [![npm](https://img.shields.io/badge/npm-6.12.1-blue)](https://www.npmjs.com/) or higher as package manager.

The page will reload if you make edits. You will also see any lint errors in the console.

## Author

[Raissa Martins](https://www.linkedin.com/in/raissamartinsmenezes/) - Front-end Developer | Teacher and Tutor at @reprograma | web full-stack student at @DigitalHouseBrasil

<!-- ### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information. -->

<!-- ### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information. -->

<!-- ### `yarn eject` -->

<!-- **Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify -->
