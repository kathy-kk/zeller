import React from 'react'
import Avatar from 'react-avatar'
import { Container, List, ListItem, Title, Item, ContainerTitle, blue1, blue2 } from './styled/list'

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
      <ContainerTitle>{selectedRole} Users </ContainerTitle>
      <List>{filtedData.map((user, index) => <ListItem key={index}>
          <Avatar name={user.name} maxInitials={1} size={'40'} fgColor={blue2}  textSizeRatio={2} color={blue1} round={'10px'}/>
          <Item>
          <Title>{user.name} </Title>
          <div>{user.role}</div></Item>
      </ListItem>)}</List>
  </Container>
}
export default UserListComponent