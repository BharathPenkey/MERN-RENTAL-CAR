
import './App.css';
import { BrowserRouter,Routes,Route} from 'react-router-dom';

import Admin from "./pages/Admin";
import AddCar from "./pages/AddCar";
function App() {
  return (
  <div className="App">
    <BrowserRouter>
    <div className='pages'>
      <Routes>
        <Route path="/"/>
        <Route path="/admin" element={<Admin/>}/>
            <Route path="/addcar" element={<AddCar/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  </div>
  );
}

export default App;
