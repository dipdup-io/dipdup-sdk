import { gql } from '@apollo/client/core';


export const MEMPOOL_TRANSACTION_DATA = gql`
  fragment MempoolTransactionData on mempool_transaction {
    amount
    branch
    counter
    created_at
    destination
    errors
    expiration_level
    fee
    gas_limit
    hash
    kind
    level
    network
    parameters
    signature
    source
    status
    storage_limit
  }
`;

export const MEMPOOL_ORIGINATION_DATA = gql`
  fragment MempoolOriginationData on mempool_origination {
    amount
    branch
    counter
    created_at
    destination
    errors
    expiration_level
    fee
    gas_limit
    hash
    kind
    level
    network
    parameters
    signature
    source
    status
    storage_limit
  }
`;

export const MEMPOOL_DELEGATION_DATA = gql`
  fragment MempoolDelegationData on mempool_delegation {
    branch
    counter
    created_at
    delegate
    errors
    expiration_level
    fee
    gas_limit
    hash
    kind
    level
    network
    signature
    source
    status
    storage_limit
  }
`;

export const MEMPOOL_REVEAL_DATA = gql`
  fragment MempoolRevealData on mempool_reveal {
    branch
    counter
    created_at
    delegate
    errors
    expiration_level
    fee
    gas_limit
    hash
    kind
    level
    network
    signature
    source
    status
    storage_limit
  }
`;

export const MEMPOOL_ENDORSEMENT_DATA = gql`
  fragment MempoolEndorsementData on mempool_endorsement {
    baker
    branch
    created_at
    expiration_level
    errors
    hash
    kind
    level
    network
    signature
    status
  }
`;