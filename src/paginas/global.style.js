//ESSE ARQUIVO EH RESPONSAVEL POR UM ESTILO GLOBAL NO PROJETO.
//O ESTILO CONFIGURADO AQUI DEVE SER IMPORTADO NO APPS.JS

import { createGlobalStyle } from "styled-components";                      //importando um estilo global so styled-components 

export const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
		margin: 0;
		text-decoration: none;
		box-sizing: border-box;
		font-family: 'Roboto', sans-serif;
    }
`