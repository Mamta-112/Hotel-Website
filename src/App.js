import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { Signup } from './4Task/Signup';
// import { Login } from './4Task/Login';

// import Card from './1Task/Card';
// import { ApiTable } from './2Task/ApiTable';
// import { ApiEdit } from './2Task/ApiEdit';
// import { Header } from './3yositaCode/Header';
import { Home } from './5Task/Home';
// import { Slider } from './6Task/Slider';

function App() {
  return (
    <>
    
   {/* <Slider/> */}
      <Home/>
      {/* <Router>
        <div>
          <Routes>
           
            <Route path="/" element={<Signup />} />  
            <Route path="/login" element={<Login />} />  
          </Routes>
        </div>
      </Router> */}

      {/* <Card /> */}
      {/* <ApiTable /> */}
      {/* <ApiEdit /> */}
      {/* <Header /> */}
     
    </>
  );
}

export default App;

