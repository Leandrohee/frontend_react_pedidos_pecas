import styled from 'styled-components'

const Navbar = styled.nav`
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    width: 10vw;                                                                //Somente 10% da tela na horizontal com a navbar
    height: 100vh;                                                              //Quero que a navbar cubra a tela inteira na vertical
    background-color: red;
`

export default ()=>{
    return(
        <Navbar>
            Alo
        </Navbar>
    )
}