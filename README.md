# Next.js Truffle box

This box comes with everything you need to start using Truffle to write, compile, test, and deploy smart contracts, and interact with them from a Next.js app.

## Installation

First ensure you are in an empty directory.

Run the `unbox` command using 1 of 2 ways.

```sh
# Install Truffle globally and run `truffle unbox`
$ npm install -g truffle
$ truffle unbox next

# Alternatively, run `truffle unbox` via npx
$ npx truffle unbox next
```

You can find detailed installation instruction at: [trufflesuite.com/docs/truffle/how-to/install](https://trufflesuite.com/docs/truffle/how-to/install)

Start the Next.js dev server.

```sh
$ cd client
$ npm run dev
```

From there, follow the instructions on the hosted Next.js app. It will walk you through using Truffle and Ganache to deploy the `SimpleStorage` contract, making calls to it, and sending transactions to change the contract's state.

## FAQ

- **How do I use this with Ganache (or any other network)?**

  The Truffle project is set to deploy to Ganache by default. If you'd like to change this, it's as easy as modifying the Truffle config file! Check out [our documentation on adding network configurations](https://trufflesuite.com/docs/truffle/reference/configuration/#networks). From there, you can run `truffle migrate` pointed at another network, connect MetaMask to use that network, and see the change take place.

- **Where can I find more resources?**

  This Box is a sweet combo of [Truffle](https://trufflesuite.com) and [Next.js](https://nextjs.org). Either one would be a great place to start!
