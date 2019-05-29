# React Starter Kit ⚛️

> A simple React starter kit setup using; [Redux ⚛️](https://redux.js.org/introduction), [React Router 🔀](https://reacttraining.com/react-router/), [Webpack 📦](https://webpack.js.org/), [Babel 🐠](https://babeljs.io/), [Jest 🚦](https://jestjs.io/), [Eslint ⚙️](https://eslint.org/), [Flow 🔎](http://flow.org/) and [Emotion 👩‍🎤](https://emotion.sh/).

## Getting started 🚀

Before you get going you&rsquo;ll need to make sure you have node or yarn and installed locally on your environment.

### Instructions

- Git clone this repo `git clone git@github.com:richmccartney/react-starter-kit.git`
- `cd react-starter-kit`
- Install all the dependencies with your chosen package manager `yarn install` or `npm install` _(We use yarn)_.
- Run `yarn start` to start the webpack dev server.
- View your project live at [http://localhost:8080](http://localhost:3000) 👍

## Features

- React 16
  - Including React Router for declarative routing
  - Including Redux for state containers
- Webpack 4
  - Includes webdev server and production / development configs
- Babel
- Eslint &amp; Prettier for code formatting
- Unit testing with Jest &amp; Enzyme
- Flow for static type checking
- Emotion for performant and flexible CSS-in-JS.

## Build for production

To build the react app for production use the command `yarn build`. This will package and move all required files in to the `/dist` folder. 

## TODO 

- [ ] Include a SSR setup for the project, we will be using [webpack node modules externals](https://github.com/liady/webpack-node-externals) to create this and express server. 💨
- [ ] Setup [Storybook 5](https://storybook.js.org/) for greater component documentation 🖼
- [ ] Include Cypress testing, begin simple functional testing and component tests 🔎
- [ ] CI tooling, Circle CI / Jenkins / Travis? And automated publishing ⚙️
- [ ] Netlify demo 🚀 
- [ ] Include [Build Tracker](https://buildtracker.dev/), lets track and setup a performance budget 💪
- [ ] Setup [React Component Benchmark](https://github.com/paularmstrong/react-component-benchmark) for component performance and improvements ⚛️
