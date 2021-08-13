# TzKT API

[![npm version](https://badge.fury.io/js/%40dipdup%2Ftzkt-api.svg)](https://badge.fury.io/js/%40dipdup%2Ftzkt-api)
[![Made With](https://img.shields.io/badge/made%20with-dipdup-blue.svg?)](https://dipdup.net)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Fully typed cliend for working with TzKT blockchain API.  
Automatically generated from the OpenAPI [specification](https://api.tzkt.io/v1/swagger.json).

## Installation

```
yarn add @dipdup/tzkt-api
```

## Usage

TzKT endpoints are split by groups called services to facilitate treeshaking:
* [AccountsService](https://api.tzkt.io/#tag/Accounts)
* [BigMapsService](https://api.tzkt.io/#tag/BigMaps)
* [BlocksService](https://api.tzkt.io/#tag/Blocks)
* [CommitmentsService](https://api.tzkt.io/#tag/Commitments)
* [ContractsService](https://api.tzkt.io/#tag/Contracts)
* [CyclesService](https://api.tzkt.io/#tag/Cycles)
* [DelegatesService](https://api.tzkt.io/#tag/Delegates)
* [HeadService](https://api.tzkt.io/#tag/Head)
* [OperationsService](https://api.tzkt.io/#tag/Operations)
* [ProtocolsService](https://api.tzkt.io/#tag/Protocols)
* [QuotesService](https://api.tzkt.io/#tag/Quotes)
* [RewardsService](https://api.tzkt.io/#tag/Rewards)
* [RightsService](https://api.tzkt.io/#tag/Rights)
* [SoftwareService](https://api.tzkt.io/#tag/Software)
* [StatisticsService](https://api.tzkt.io/#tag/Statistics)
* [VotingService](https://api.tzkt.io/#tag/Voting)

You need to create an instance of a service pointing to a particular TzKT API host:

```js
import { AccountsService } from '@dipdup/tzkt-api'

const accounts = new AccountsService({ baseUrl: 'https://api.tzkt.io' });
```

After that you can start making requests:

```js
const smartContracts = await accounts.get({
    kind: { eq: 'smart_contract' },
    balance: { gt: 0 },
    staked: { eq: true },
    select: { fields: [ 'address', 'balance', 'delegate' ] },
    sort: { desc: 'lastActivity' },
    limit: 10
});
```

VSCode will provide autocompletion and tooltips for the request body, but generally you can build queries by just using the [docs](https://api.tzkt.io/).

## Examples

Check out demo apps using TzKT API:
* [Vue2 + composition API](https://github.com/dipdup-net/dipdup-ts/tree/master/examples/tzkt-api-request)