import LoginBen from "../auth/login-beneficiario";
import {motion} from 'framer-motion'

function PortalBeneficiario (){
    return( 
        <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        exit={{ opacity: 0, transition: { duration: 0.3 } }}>
        <LoginBen />
    </motion.div>
    )
}
export default PortalBeneficiario; 
