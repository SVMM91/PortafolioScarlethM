import AboutMe from "./components/AboutMe"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Footer from "./components/Footer"
import Work from "./components/Work"
import Stacks from "./components/Stacks"
import Proyectos from "./components/Proyectos"
import CarruselMarcas from "./components/CarrsuelMarcas"
import ScrollToTop from "./components/ScrollTop"



function App() {
    return (
        <>
        <Header /> 
        <Hero />
        <AboutMe/>
        <CarruselMarcas/>
        <Proyectos/>
        <Work/>
        <Stacks/>
        <Footer/> 
        <ScrollToTop/>
        </>
    )
}

export default App