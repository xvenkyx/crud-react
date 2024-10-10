import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/common/Header';
import Home from './components/layout/Home';
import CreateUser from './components/user/CreateUser';
import ShowUser from './components/user/ShowUser';
import EditUser from './components/user/EditUser';
import User from './components/user/User'

function App() {
  return (
    <div className="App">
      <header className="container">
        <div className="">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/edit-user/:id" element={<EditUser />} />
            <Route path="/user/:id" element={<User />} />
            <Route path="/create-user" element={<CreateUser />} />
            <Route path="/show-user" element={<ShowUser />} />
          </Routes>
          
        </div>
      </header>
    </div>
  );
}

export default App;
