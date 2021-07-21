import React, { useRef,useState } from 'react';
import { BrowserRouter as r ,Switch,Route, useLocation} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import { TransitionGroup,CSSTransition } from 'react-transition-group';
import {WelcomeSection} from './pages/Welcome/Welcome.js';
import {ExpSection} from './pages/Exp/Exp.js';
import {SkillSection} from './pages/skill/skill.js';
import {AboutmeSection} from './pages/Aboutme/aboutme.js';
//import { div,section,col,button } from 'react-bootstrap';
//import 'bootstrap/dist/css/bootstrap.min.css';


const scrollToRef = (ref) => window.scrollTo({
  behavior: "smooth",
  left: 0,
  top: ref.current.offsetTop
})  
function App() {
  const myRef = useRef(null);
  const bg = ['#EAE7DC','#565656','#e85a4f'];
  //const go = () => scrollToRef(myRef);
  const go = () => myRef.current.scrollIntoView({ behavior: 'smooth' });
  let location = useLocation();
  return (
    <div>
      
    <Navbar color={location.pathname === '/exp' ? '#17252a':'#000'} />
    <TransitionGroup>
    <CSSTransition
      key={location.key}
      classNames="page"
      timeout={300}
    >
    <Switch location={location}>
      <Route path="/" exact component={() => <WelcomeSection bgc={bg[0]}/>} />
      <Route path="/exp" exact component={() => <ExpSection bgc={bg[1]}/>} />
      <Route path="/skill" exact component={() => <SkillSection bgc={bg[2]}/>} />
      <Route path="/aboutme" exact component={() => <AboutmeSection bgc={bg[2]}/>} />
    </ Switch>
    </CSSTransition>
    </TransitionGroup>
    </div>
  );
}


export default App;
