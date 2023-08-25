import styled from 'styled-components'
import { colors } from '../../styles/GlobalStyle'

export const Section = styled.section`
    
    div {
        display: flex;
        flex-direction: column;
        padding: 1rem;
        div {
            p {
                background-color: ${colors.texto};
                border-radius: 10px;
                padding: 1rem;
      }
        }
  }

    margin-left: 160px;
    padding: 0px 10px;
`