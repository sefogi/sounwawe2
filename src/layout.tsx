import "./index.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavBar} from  './components/Navbar/NavBar'
import { Footer } from "./components/foooter/Footer";
import { Home } from "./pages/home/Home";
import './App.css'

function App() {
  
  return (
    <>
      <NavBar/>
      <Home/>
      <Footer/>
    </>
  )
}

export default App
