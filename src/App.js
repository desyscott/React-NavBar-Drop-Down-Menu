import {BrowserRouter as Router, Switch,Route} from "react-router-dom"
import Navbar from "./components/NavBar";
import "./App.css"
import home from "./Pages/home";
import services from "./Pages/services";
import products from "./Pages/products";
import ContactUs from "./Pages/ContactUs";
import SignUp from "./Pages/SignUp";
import marketing from "./Pages/marketing";
import consulting from "./Pages/consulting";
import design from "./Pages/design";
import development from "./Pages/development";
import Footer from "./components/Footer";
import"./App.css"

function App() {
  return (
    <div className="App.css">
    <Router >
    <Navbar/>
    <Switch>
    <Route path="/" exact component={home}/>
    <Route path="/services" exact component={services}/>
    <Route path="/products" exact component={products}/>
    <Route path="/contact-us" exact component={ContactUs}/>
    <Route path="/sign-up" exact component ={SignUp}/>
    <Route path="/marketing" exact component ={marketing}/>
    <Route path="/consulting" exact component ={consulting}/>
    <Route path="/design" exact component ={design}/>
    <Route path="/development" exact component ={development}/>
    </Switch>
    <Footer/>
    </Router>
  
    </div>
  );
}

export default App;
