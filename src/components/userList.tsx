import React from 'react'
import Avatar from 'react-avatar'
import { Container, List, ListItem, Title, Item } from './styled/list'

export interface User{
 email:string,
 id:string,
 name:string,
 role:string
}
interface UserList{
    list: User[],
    selectedRole: String
}
const UserListComponent = (props: UserList) => {
  const { list, selectedRole } = props
  const filtedData = list.filter(user => user.role===selectedRole)
  return <Container>
      <List>{filtedData.map((user, index) => <ListItem key={index}>
          <Avatar name={user.name} maxInitials={1}/>
          <Item>
          <Title>{user.name} </Title>
          <div>{user.role}</div></Item>
      </ListItem>)}</List>
  </Container>
}
export default UserListComponent