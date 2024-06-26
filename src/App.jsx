import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'


function App() {

  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="/" element={ <ItemListContainer saludo="Bienvenidos a Valeste" /> } />
        <Route path="/category/:idCategory" element={ <ItemListContainer saludo="Bienvenidos a Valeste" /> } />
        <Route path="/detail/:idProduct" element={ <ItemDetailContainer saludo="Bienvenidos a Valeste" /> } />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
