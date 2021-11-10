import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import HomePage from './components/Pages/HomePage';
import AuthProvider from './components/context/AuthProvider/AuthProvider';
import Login from './components/UserAuth/Login/Login';
import Register from './components/UserAuth/Register/Register';
import PrivateRoute from './components/UserAuth/PrivateRoute/PrivateRoute';
import DashBoardPage from './components/Pages/DashBoardPage';
import OrderPage from './components/Pages/OrderPage';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/home">
              <HomePage />
            </Route>
            <PrivateRoute path="/orderItem/:orderId">
              <OrderPage />
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <DashBoardPage />
            </PrivateRoute>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
