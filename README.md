# DipDup

A collection of packages simpifying Tezos dapps development.

## Install

| Name                | Description                      | NPM                                                            |
| ------------------- | -------------------------------- | -------------------------------------------------------------- |
| [@dipdup/mempool](https://github.com/dipdup-net/dipdup-ts/tree/master/packages/mempool)     | GQL client for Tezos mempool API | [![npm version](https://badge.fury.io/js/%40dipdup%2Fmempool.svg)](https://badge.fury.io/js/%40dipdup%2Fmempool) |
| [@dipdup/metadata](https://github.com/dipdup-net/dipdup-ts/tree/master/packages/metadata)    | GQL client for Tezos contract&token metadata API | [![npm version](https://badge.fury.io/js/%40dipdup%2Fmetadata.svg)](https://badge.fury.io/js/%40dipdup%2Fmetadata) |
| [@dipdup/profiles](https://github.com/dipdup-net/dipdup-ts/tree/master/packages/profiles)    | GQL client for Tezos profiles API | [![npm version](https://badge.fury.io/js/%40dipdup%2Fprofiles.svg)](https://badge.fury.io/js/%40dipdup%2Fprofiles) |
| [@dipdup/domains](https://github.com/dipdup-net/dipdup-ts/tree/master/packages/domains)    | GQL client for Tezos domains API | [![npm version](https://badge.fury.io/js/%40dipdup%2Fdomains.svg)](https://badge.fury.io/js/%40dipdup%2Fdomains) |
| [@dipdup/opgflow](https://github.com/dipdup-net/dipdup-ts/tree/master/packages/opgflow)     | Persistent mempool client tracking the operation upon the inclusion | [![npm version](https://badge.fury.io/js/%40dipdup%2Fopgflow.svg)](https://badge.fury.io/js/%40dipdup%2Fopgflow) |
| [@dipdup/tzkt-api](https://github.com/dipdup-net/dipdup-ts/tree/master/packages/tzkt-api)    | Fully typed client for TzKT blockchain API | [![npm version](https://badge.fury.io/js/%40dipdup%2Ftzkt-api.svg)](https://badge.fury.io/js/%40dipdup%2Ftzkt-api) |
| [@dipdup/tzkt-events](https://github.com/dipdup-net/dipdup-ts/tree/master/packages/tzkt-events) | Fully typed client for TzKT subscription API | [![npm version](https://badge.fury.io/js/%40dipdup%2Ftzkt-events.svg)](https://badge.fury.io/js/%40dipdup%2Ftzkt-events) |

## Build

First of all, make sure you have **node 14+** and **yarn** globally installed:

If you are using nvm node manager you can do:

```
nvm use
```

Install all the dependencies (across all packages) and link packages between themselves (if any internal dependenciess):

```
yarn lerna:bootstrap
```

Build all the packages/examples:

```
yarn lerna:build
```
