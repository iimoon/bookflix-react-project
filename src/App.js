import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar';
import { Route, Routes } from 'react-router-dom';
import Add from './Component/Add';
import View from './Component/View';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path={'/'} element={<View/>}/>
        <Route path={'/add'} element={<Add data={{id:'',genre:'',title:'',author:'',date:'',publisher:''}} method="post"/>}/>
      </Routes>
    </div>
  );
}

export default App;
