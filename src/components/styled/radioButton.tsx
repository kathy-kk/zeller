import styled from 'styled-components'

export const blue1 = '#cce0ff'
export const blue2 = '#4d79ff'

// Grays
export const gray1 = '#383737';
export const gray2 = '#565555';

export const ContainerTitle = styled.div`
font-size: 20px;
color: ${gray1};
padding-left:15px;
padding-top:20px;
margin-bottom: 5px;
`

export const RadioButtonLabel = styled.label`
  position: absolute;
  top: 25%;
  left: 4px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: white;
  border: 1px solid #bebebe;
`;

export const Wrapper = styled.div`
  height: auto;
  width: 100%;
  padding: 0px 16px 24px 16px;
  box-sizing: border-box;
`;

interface ItemProps{
  checked: Boolean
}

export const Item = styled.div`
  display: flex;
  align-items: center;
  height: 48px;
  position: relative;
  border-radius:5px;
  background: ${(props: ItemProps) => props.checked? blue1: 'white'}
`;

const RadioButton = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  margin-right: 10px;
  &:hover ~ ${RadioButtonLabel} {
    background: #bebebe;
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 12px;
      height: 12px;
      margin: 6px;
      background: #eeeeee;
    }
  }
  ${(props) =>
    props.checked &&
    ` 
    &:checked + ${RadioButtonLabel} {
      background: white;
      border: 1px solid ${blue2};
      &::after {
        content: "";
        display: block;
        border-radius: 50%;
        width: 12px;
        height: 12px;
        margin: 6px;
        box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.1);
        background: ${blue2};
      }
    }
  `}
`;
export default RadioButton