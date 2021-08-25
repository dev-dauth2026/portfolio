import React from 'react';
import { Switch , Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Footer from './Footer';


const App=()=>{
  return(
    <>
    <div className='postion-relative'>
    <Navbar/>
    <Switch>
    <Route exact path='/' component={Home} />
    <Route exact path='/about' component={About} />
    <Route exact path='/portfolio' component={Portfolio} />
    <Route exact path='/contact' component={Contact} />
    </Switch><br/>
    <Footer/>
    </div>  
    


    </>
  )
}
export default App;