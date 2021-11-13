import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';
import BabysForm from './Pages/BabysForm/BabysForm';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import AuthProvider from './Pages/useContext/AuthProvider';
import ExploreProducts from './Pages/ExploreProducts/ExploreProducts/ExploreProducts';
import Navigation from './Pages/Shared/Navigation/Navigation';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import OrderProducts from './Pages/Home/orderProducts/OrderProducts';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Navigation></Navigation>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/explore">
              <ExploreProducts></ExploreProducts>
            </Route>
            <PrivateRoute exact path="/purchase/:purchaseId">
              <OrderProducts></OrderProducts>
            </PrivateRoute>
            <Route path="/form">
              <BabysForm></BabysForm>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
