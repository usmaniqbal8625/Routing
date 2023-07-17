import './App.css';
import  Home  from './context/Home';
 import About from './context/About';
 import {BrowserRouter, Route, Routes} from "react-router-dom"



function App() {
  return (
    <BrowserRouter>
   
   <Routes>
 <Route path="/" element={<Home/>} />
<Route path="/home" element={<Home/>} /> */}

<Route path="/about" element={<About/>} />

</Routes>
</BrowserRouter>
  );
}

export default App;
