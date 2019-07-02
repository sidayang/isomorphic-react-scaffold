# isomorphic-react-scaffold

A react app with isomorphic rendering out of the box, and also my practice of configuring webpack

## Usage

`npm run build` will build bundles for client and server in ./client and ./server, respectively .

`ts-node server.ts`to host an express server

Page2 would be rendered on server side if you access `localhost:3202/page-2` directly,

while it would be rendered on client side if you access it by clicking the button provided in `localhost:3202/page-1`
