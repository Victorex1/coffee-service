import Nav from './component/nav';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
// import Home from './component/home';
import Home from './component/home';
import Footer from './component/footer';
import Contact from './component/contactUs';
import Login from './component/login';
import BlogList from './component/blogList';
import BlogDetails from './component/blogDetails';
import Cart from './component/cart';
import History from './component/history';
import './index.css'
import PageNotFound from './component/404Page';
import Recipt from './component/recipt';

function App() {
  
  return (
    <Router>
 <div className="App bg-gray-200 w-screen ">
      <Nav/>
     <div>
     <Switch> 
        <Route exact path='/'>
        <Home/> 
      </Route>
       <Route  path='/contact-us'>
        <Contact/>
      </Route>
      <Route path='/Log-in'>
        <Login/>
      </Route>
      <Route path='/blog-list'>
        <BlogList/>
      </Route>
      <Route path='/blog-details/:id'>
        <BlogDetails/>
      </Route>
       <Route path='/cart'>
        <Cart/>
      </Route>
       <Route path='/recipt/:id'>
        <Recipt/>
      </Route>
      <Route path='/history'>
      <History/>
      </Route>
      <Route path='*'>
        <PageNotFound/>
      </Route>
     </Switch>
     </div>
     <Footer/>
     </div>
    </Router>
   
  );
}

export default App;
