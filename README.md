# DipDup

A collection of packages simpifying Tezos dapps development.

## Install

| Name                | Description                      | NPM                                                            |
| ------------------- | -------------------------------- | -------------------------------------------------------------- |
| @dipdup/mempool     | GQL client for Tezos mempool API | [![npm version](https://badge.fury.io/js/%40dipdup%2Fmempool.svg)](https://badge.fury.io/js/%40dipdup%2Fmempool) |
| @dipdup/metadata    | GQL client for Tezos contract&token metadata API | [![npm version](https://badge.fury.io/js/%40dipdup%2Fmetadata.svg)](https://badge.fury.io/js/%40dipdup%2Fmetadata) |
| @dipdup/profiles    | GQL client for Tezos profiles API | [![npm version](https://badge.fury.io/js/%40dipdup%2Fprofiles.svg)](https://badge.fury.io/js/%40dipdup%2Fprofiles) |
| @dipdup/opgflow     | Persistent mempool client tracking the operation upon the inclusion | [![npm version](https://badge.fury.io/js/%40dipdup%2Fopgflow.svg)](https://badge.fury.io/js/%40dipdup%2Fopgflow) |
| @dipdup/tzkt-api    | Fully typed client for TzKT blockchain API | [![npm version](https://badge.fury.io/js/%40dipdup%2Ftzkt-api.svg)](https://badge.fury.io/js/%40dipdup%2Ftzkt-api) |
| @dipdup/tzkt-events | Fully typed client for TzKT subscription API | [![npm version](https://badge.fury.io/js/%40dipdup%2Ftzkt-events.svg)](https://badge.fury.io/js/%40dipdup%2Ftzkt-events) |

## Build

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
