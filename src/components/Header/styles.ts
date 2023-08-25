import styled from "styled-components"
import { colors } from "../../styles/GlobalStyle"

export const Header = styled.header`
  background-color: ${colors.titulo};
  margin-left: 160px;
  padding: 0px 10px;
  
  height: 4rem;
  h1 {
    color: ${colors.white};
    padding: 1rem;
  }
`