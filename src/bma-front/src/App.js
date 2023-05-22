import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Container from './components/layouts/Container'
import Navbar from './components/layouts/Navbar'
import Footer from './components/layouts/Footer'
import Home from './components/pages/Home'
import PortalFuncionario from'./components/pages/PortalFuncionario'
import AreadoBeneficiario from './components/beneficiarios/AreadoBeneficiario'


function App() {


  return (
    
    <Router>
      <Navbar />
      <Container customClass="min-height">
      <Routes>
        <Route path = "/" element ={<Home/>}/>               
        <Route path='/PortalFuncionario' element={<PortalFuncionario/>}/>
        <Route path='/AreadoBeneficiario' element={<AreadoBeneficiario/>}/>

      
      </Routes>
      </Container>
      <Footer />
      
    </Router>

  )
}

export default App;
