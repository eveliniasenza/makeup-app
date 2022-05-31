import React from "react";
import {AppRouter} from "./Routes/routes";
import NavBar from './components/NavBar'

const App = () => {
  return (
    <>   
     <AppRouter />
     <NavBar/>
    </>
      
  );
};

export default App;
