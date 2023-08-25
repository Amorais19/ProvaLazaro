import styled from "styled-components"
import { colors } from "../../styles/GlobalStyle"

export const Aside = styled.aside`
    div {

        /* SideBar */
        height: 100%; 
        width: 160px; 
        position: fixed;
        z-index: 1;
        top: 0;
        left: 0;
        overflow-x: hidden;
        padding-top: 20px;
        /* Itens */
        display: flex;
        flex-direction: column;

        p {
            padding: 1rem;
        }
        
        #co {
            text-decoration: none;
            p {
                background-color: ${colors.pmenu};
                color: ${colors.white};
            }
        }
        #ca {
            text-decoration: none;
            p {
                background-color: ${colors.ppmenu};
                color: ${colors.white};
            }
        }
    }
`