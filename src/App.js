import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Checkout from './components/Checkout';
import { useIsAuthenticated } from "@azure/msal-react";
import {SignInButton}  from "./components/SignInButton";
import { SignOutButton } from './components/SignOutButton';
import {
  BrowserRouter as Router,
  Switch,
  Route
  
} from "react-router-dom";




function App() {
  const isAuthenticated = useIsAuthenticated();
  return (
    
    isAuthenticated ? 
      <Router>
        <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header/>
            <Checkout/>
          </Route>
          
          {/*This is degfault route*/ }
          <Route path="/">
            <Header/>
            <Home/>
            <Footer/>
            
            
          </Route>
        </Switch>
        </div>
      </Router>
      : <SignInButton />

    
  );
}

export default App;
