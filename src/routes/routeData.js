import DashBoard from '../Container/dashBoard';
import Login from '../Container/login';
import SignUp from '../Container/signUp';
import routeRules from './routeRules';

// / eaxct true
// /login exact false
// /dashboard exact true
// /dashboad/customer exact false 


const routeData = [
  {
    path: routeRules.dashBoard,
    element: DashBoard,
    exact: true,
    private: true,
  },
  {
    path: routeRules.loginPage,
    element: Login,
    exact: false,
    private: false,
  },
  {
    path: routeRules.signUp,
    element: SignUp,
    exact: false,
    private: false,
  }
 
];
export default routeData;
