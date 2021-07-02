import { gql } from '@apollo/client';

export const ListZellerCustomersQuery = gql`
  query ListZellerCustomers {
  listZellerCustomers {
    items {
      email
      id
      name
      role
    }
  }
}
`