import { BrowserRouter, Route, Routes } from "react-router"
import Home from './pages/Home'
import Clientes from './pages/Clientes'
import Chaves from './pages/Chaves'
import Container from "./assets/components/Container"
import Header from './assets/components/Header'
import Footer from './assets/components/Footer'

const AppRoutes = () => {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Container>
                    <Routes>
                        <Route path="/" element={<Home />}></Route>
                        <Route path="/clientes" element={<Clientes />}></Route>
                        <Route path="/chaves" element={<Chaves />}></Route>
                    </Routes>
                </Container>
                
            </BrowserRouter>
        </>

    )
}
export default AppRoutes