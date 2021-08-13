# TzKT API

[![npm version](https://badge.fury.io/js/%40dipdup%2Ftzkt-api.svg)](https://badge.fury.io/js/%40dipdup%2Ftzkt-api)
[![Made With](https://img.shields.io/badge/made%20with-dipdup-blue.svg?)](https://dipdup.net)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Fully typed cliend for working with TzKT subscriptions API.  
A thin wrapper on top of SignalR converting subscriptions to observables.

## Installation

```
yarn add @dipdup/tzkt-events
```

## Usage

Create an instance of events service specifying TzKT events endpoint.
```js
import { EventsService } from "@dipdup/tzkt-events";

const events = new EventsService({ url: "https://api.tzkt.io/v1/events" });
```

Connection is not initiated until the first request (lazy connection):
```js
const sub = events.operations({ types: [ 'origination' ] })
    .subscribe({ next: console.log });
```

Events service implements subscription router internally (on TzKT your subscriptions are aggregated) hence you can always "unsubscribe" from new updates (however it does not change anything on the TzKT side, just stops firing your observer):
```js
sub.unsubscribe();
```

By default events service will infinitely try to reconnect in case of drop, you can monitor current state by subscribing to status updates:
```js
events.status()
    .subscribe({ next: console.log });
```

In case you need to terminate the connection you can do that (note that event service will start again in case you send a subscription request afterwards):
```js
await events.stop();
```

## Examples

Check out demo apps using TzKT events:
* [Vue2 + composition API](https://github.com/dipdup-net/dipdup-ts/tree/master/examples/tzkt-events-example)