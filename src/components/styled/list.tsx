import styled from 'styled-components'

//Blues
export const blue1 = '#cce0ff'
export const blue2 = '#4d79ff'

// Grays
export const gray1 = '#383737';
export const gray2 = '#565555';


// Fonts
export const fontFamily = "'Segoe UI', 'Helvetica Neue',sansserif";
export const fontSize = "15px";

export const Container = styled.div`
  font-family: ${fontFamily};
  font-size: ${fontSize};
  color: ${gray2};
`;

export const List = styled.ul`
  list-style: none;
  padding: 0px 20px;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 20px;
  padding-left: 10px;
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: row;
  padding: 10px 0px;
`;

export const Title = styled.span`
  font-size: 18px;
  color: ${gray1};
  margin-bottom: 5px;
`;

export const ContainerTitle = styled.div`
font-size: 20px;
color: ${gray1};
padding-left:20px;
margin-bottom: 5px;
`