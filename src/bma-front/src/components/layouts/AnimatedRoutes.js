import {useContext} from 'react'
import { Route, Routes, useLocation,Navigate } from 'react-router-dom'
import PortalBeneficiario from '../pages/PortalBeneficiario'
import PortalFuncionario from '../pages/PortalFuncionario'
import Home from '../pages/Home'
import SobreNos from '../pages/SobreNos'
import Parceiros from '../pages/Parceiros'
import {AnimatePresence} from 'framer-motion'
import AppRoutes from'../../AppRoutes'
import CentraldeCestas from '../pages/central de cestas/CentraldeCestas'
import PaginaPadrao from '../pages/central de cestas/PaginaPadrao'
import { AuthProvider,AuthContext } from '../../context/Auth'
import CadastroBeneficiario from '../beneficiarios/CadastroBeneficiario'
import AreadoBeneficiario from '../beneficiarios/AreadoBeneficiario'

function AnimatedRoutes() {
    const location = useLocation();
    const Private = ({children}) => {
      const {authenticated,loading} = useContext(AuthContext);
      if (loading) {
          return <div className="loading">Carregando...</div>;
      }
      if (!authenticated) { 
          return <Navigate to ="/PortalFuncionario"/>
       } return children
  }
return (
    <AnimatePresence>
    <AuthProvider>
    <Routes location={location} key={location.pathname}>
    <Route path="/" element={<Home />} />
    <Route path="/SobreNos" element={<SobreNos/>} />
    <Route path="/Parceiros" element={<Parceiros/>} />
    <Route path="/PortalFuncionario" element={<PortalFuncionario />} />
    <Route path="/PortalBeneficiario" element={<PortalBeneficiario />} />
    <Route path="/CentraldeCestas" element={<CentraldeCestas/>} />
    <Route path="/PaginaPadrao" element={<PaginaPadrao/>}/>
    <Route path="/AreadoBeneficiario" element ={<AreadoBeneficiario/>}/>
    <Route path="/CadastrodoBeneficiario" element={<CadastroBeneficiario/>}/>
  </Routes>
  </AuthProvider>
  </AnimatePresence>
  
)

}
export default AnimatedRoutes