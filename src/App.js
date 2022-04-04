import "./App.css";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import routeData from "./routes/routeData";


const App = () => {


  return (
    <>
    <BrowserRouter>
    <Routes>
            {routeData.map(({path,element:Component,exact}, index) => {
              return  <Route
              path={path}
              element={<Component/>}
              key={index}
              exact={exact}
            />
            })}
          
    </Routes>
    </BrowserRouter>
    </>
   
  );
};

export default App;
