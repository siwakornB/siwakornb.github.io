import React, { useRef } from 'react';
import { BrowserRouter as Router ,Switch,Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/home.js'
//import { div,section,col,button } from 'react-bootstrap';
//import 'bootstrap/dist/css/bootstrap.min.css';


const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)  
function App() {
  const myRef = useRef(null);
  //const go = () => scrollToRef(myRef);
  const go = () => myRef.current.scrollIntoView({ behavior: 'smooth' });

  return (
    <Router>
      <Navbar gofunc={go} />
      <Switch>
        <Route path="/" exact component={Home} cusref={myRef} />
      </Switch>
    </Router>
  );
}


export default App;
