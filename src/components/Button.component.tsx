import styled from "styled-components";
interface ButtonProps{
  $color?:string
}
const Button = styled.button<ButtonProps>`
  padding: 1rem;
  color:red;
  font-size: 2rem;
  background-color: ${({$color})=>$color??"black"};
`
export default Button;