# isomorphic-react-scaffold

A react scaffold with isomorphic rendering out of the box, and also my practice of configuring webpack

## Feature

### This isomorphic scaffold come with what:

[`Ant Design`](https://github.com/ant-design/ant-design)

[`React Router`](https://github.com/ReactTraining/react-router)

[`styled components`](https://github.com/styled-components/styled-components)

## Demo

`npm run build` will build bundles for client and server in ./client and ./server, respectively .

`ts-node server.ts`to host an express server

Page2 would be rendered on server side if you access `localhost:3202/page-2` directly,

while it would be rendered on client side if you access it by clicking the button provided in `localhost:3202/page-1`
