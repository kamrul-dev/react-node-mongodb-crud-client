import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import AddUser from './componets/AddUser/AddUser';
import Home from './componets/Home/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='user/add' element={<AddUser></AddUser>}></Route>
      </Routes>
    </div>
  );
}

export default App;
