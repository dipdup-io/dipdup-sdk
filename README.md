# DipDup.js

A collection of packages simpifying DipDup integration.

## Quickstart

First of all, make sure you have __node 14+__, __yarn__, and __lerna__ globally installed:

```
yarn global add lerna
```

Install all the dependencies (across all packages) and link packages between themselves (if any internal dependenciess):

```
lerna bootstrap
```

Build all the packages/examples:

```
lerna run build
```

Start demo project (vue application):

```
lerna run demo
```