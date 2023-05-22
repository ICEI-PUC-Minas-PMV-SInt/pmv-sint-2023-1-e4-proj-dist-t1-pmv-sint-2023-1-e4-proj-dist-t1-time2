import Message from "../components/Message"
import Sidebar from "../components/sidebar/Sidebar"
import { useLocation } from "react-router-dom"
function Cestas() {
    const location = useLocation()
    let message = ''
    if(location.state) {
        message = location.state.message
    }
    return(
        <>
            <nav>
                <Sidebar/>
            </nav>
            <div className="content">
                <h1> Minha Cesta</h1>
                {message && <Message type="success" msg={message}/>}
            </div>
        </>
    )
}

export default Cestas