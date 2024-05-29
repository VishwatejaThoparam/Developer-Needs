import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import AboutPage from './Components/About';
// import HomePage from './Components/Home';
import Hosting from './Components/HostingPage';
import IndexPage from './Components/Index';
import Login from './Components/LoginPage';
import NavbarHeader from './Components/Navbar';
import AspDNetFullStack from './Components/Pages/ASP.NET_FSD';
import JavaFullStack from './Components/Pages/JAVA_FSD';
import LampFullStack from './Components/Pages/LAMP_FSD';
import MeanFullStack from './Components/Pages/MEAN_FSD';
import MERNFullStack from './Components/Pages/MERN_FSD';
import PhpFullStack from './Components/Pages/PHP_FSD';
import PythonFullStack from './Components/Pages/PYTHON_FSD';
import ReferencePage from './Components/Pages/Reference';
import BasicNeeds from './Components/Pages/Start_Needs';








function  App() {
  return (
    <Router>
      <NavbarHeader/>
      <Routes>
        {/* <Route exact path='/' Component={HomePage}/> */}
        <Route exact path='/' Component={IndexPage}/>
        <Route exact path='/about' Component={AboutPage}/>
        <Route exact path="/asp" Component={AspDNetFullStack}/>
        <Route exact path='/java' Component={JavaFullStack}/>
        <Route exact path='lamp' Component={LampFullStack}/>
        <Route exact path='/mean' Component={MeanFullStack}/>
        <Route exact path='/mern' Component={MERNFullStack}/>
        <Route exact path='/php' Component={PhpFullStack}/>
        <Route exact path='/python' Component={PythonFullStack}/>
        <Route exact path='/basicNeeds' Component={BasicNeeds}/>
        <Route exact path='/host' Component={Hosting}/>
        <Route exact path='/login' Component={Login}/>
        <Route exact path='/ref' Component={ReferencePage}/>
        {/* <Route exact path='/test' element={</>} /> */}
      </Routes>
    </Router>
    
  );
}

export default App;
