import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Container from './components/layouts/Container'
import Navbar from './components/layouts/Navbar'
import Footer from './components/layouts/Footer'
import Home from './components/pages/Home/Home'
import CadastroBeneficiario from './components/beneficiarios/CadastroBeneficiario'
import AreadoBeneficiario from './components/beneficiarios/AreadoBeneficiario'


function App() {


  return (
    
    <Router>
      <Navbar />

      <Container customClass="min-height">

      <Routes>

        <Route path = "/" element ={<Home/>}/>               
        <Route path='/CadastroBeneficiario' element={<CadastroBeneficiario/>}/>  
        <Route path='/AreadoBeneficiario' element={<AreadoBeneficiario/>}/>   
               
      </Routes>

      </Container>
      
      <Footer />
      
    </Router>

  )
}

export default App;
