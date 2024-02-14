import "./index.css"
import 'bootstrap/dist/css/bootstrap.min.css';


import {NavBar} from  './components/Navbar/NavBar'
import { Home } from "./pages/home/Home";
import { Disover } from "./pages/discover/Disover";
import { Join } from "./pages/join/Join";
import './App.css'

function App() {
  
  return (
    <>
      <NavBar/>
      <Home/>
      <Disover/>
      <Join/>
      
    </>
  )
}

export default App
