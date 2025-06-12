import Nav from './component/nav';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Home from './component/home';
import Footer from './component/footer';
import Contact from './component/contactUs';
import Login from './component/login';
import BlogList from './component/blogList';
import BlogDetails from './component/blogDetails';
import Cart from './component/cart';
import './style2.css'
import './index.css'
import PageNotFound from './component/404Page';
import Recipt from './component/recipt';

function App() {
  
  return (
    <Router>
 <div className="App bg-gray-200 w-screen">
      <Nav/>
     <div>
     <Switch> 
        <Route exact path='/coffee-service/'>
        <Home/>
      </Route>
       <Route path='/coffee-service/contact-us'>
        <Contact/>
      </Route>
      <Route path='/coffee-service/Log-in'>
        <Login/>
      </Route>
      <Route path='/coffee-service/blog-list'>
        <BlogList/>
      </Route>
      <Route path='/coffee-service/Blog-details'>
        <BlogDetails/>
      </Route>
       <Route path='/coffee-service/cart'>
        <Cart/>
      </Route>
       <Route path='/coffee-service/recipt'>
        <Recipt/>
      </Route>
      <Route path='/coffee-service*'>
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
