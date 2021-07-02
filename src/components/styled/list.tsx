import styled from 'styled-components'

// Grays
export const gray1 = "#383737";
export const gray2 = "#565555";
export const gray3 = "#857c81";
export const gray4 = "#b9b9b9";
export const gray5 = "#e0dddd";

// Colors
export const primary1 = "#6ca583";
export const accent1 = "#9b8dab";

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
  line-height: 45px;
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