import styled from "styled-components";
import Navbar from "../navbar/navbar";
import Formpesquisa from "../formpesquisa/formpesquisa";

const Pedidos2024 = styled.section`                         //Estou criando uma tag html section 
    display: flex;
    flex-wrap: wrap;

    .div-principal{
        display: flex;
        justify-content: start;
        text-align: center;
        flex-direction: column;
        width: 90vw;
    }

    h1{
        margin: 10px;
        text-align: center;
        justify-content: center;
        width: 100%;
        font-family: 'Roboto', sans-serif;
        font-size: 3rem;
        font-weight: 300;
    }

    form{
    }
`

export default()=>{
    return(
        <Pedidos2024>
            <Navbar/>
            <div className="div-principal">
                <h1>Pedidos 2024</h1>
                <Formpesquisa>
                </Formpesquisa>
                <table>
                    <thead>
                        <tr>
                            <th>PEDIDO</th>
                            <th>OFICINA</th>
                            <th>O.S</th>
                            <th>PREFIXO</th>
                            <th>MODELO</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                    </tbody>
                </table>
            </div>
        </Pedidos2024>  
    )
}