
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import SignIn from './Component/SignIn/SignIn';
import SignUp from './Component/SignUp/SignUp';
import Aboutus from './Component/Aboutus/Aboutus';
import Services from './Component/Services/Services';
import Doctors from './Component/Doctors/Doctors';
import NotFound from './Component/NotFound/NotFound';
import ServiceDetails from './Component/Services/ServiceDetails/ServiceDetails';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './Component/SignIn/PrivateRoute/PrivateRoute';



function App() {
  return (
    <div className="container-fluid">
     <AuthProvider>
     <Router>
        <Header/>
        <Switch>
          <Route exact path="/">
          <Home/>
          </Route>
          <PrivateRoute  path="/home">
            <Home/>
          </PrivateRoute>
          <Route  path="/services">
            <Services/>
          </Route>
          <PrivateRoute  path="/servicesDetails/:serviceId">
            <ServiceDetails/>
          </PrivateRoute>
          <Route  path="/doctors">
            <Doctors/>
          </Route>
          <Route  path="/aboutus">
            <Aboutus/>
          </Route>
          <Route  path="/signin">
            <SignIn/>
          </Route>
          <Route  path="/signup">
            <SignUp/>
          </Route>
          <Route  path="/*">
            <NotFound/>
          </Route>
        </Switch>
      </Router>
     </AuthProvider>
      
    
   

    </div>
  );
}

export default App;
