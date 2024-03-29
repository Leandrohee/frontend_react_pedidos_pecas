import { GlobalStyle } from "./paginas/global.style.js";                //Quando tem {} é pq foi exportado a própria constante
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pedidos2024 from "./components/pedidos2024/pedidos2024.jsx";     //Quando não tem {} é pq foi exportado default

function App() {
  return (
    <>
      <GlobalStyle/>
      <BrowserRouter>                                                             {/*REGULA AS ROTAS*/}
          <Routes>                                                                {/*APLICA TODAS AS ROTAS*/}
            <Route path="/" element={<Pedidos2024/>}></Route>                      
            {/* <Route path="/main" element={}></Route> */}
          </Routes>
      </BrowserRouter> 
    </>
  );
}

export default App;
