import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Pages/Shared/Header/Header';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Authentication/Login/Login';
import Blogs from './Pages/Blogs/Blogs';
import Footer from './Pages/Shared/Footer/Footer';
import SignUp from './Pages/Authentication/SignUp/SignUp';

function App() {
    return (
        <div>
            <Header></Header>
            <Routes>
                <Route path='/' element={<Home></Home>}></Route>
                <Route path='/home' element={<Home></Home>}></Route>
                <Route path='/blogs' element={<Blogs></Blogs>}></Route>
                <Route path='/login' element={<Login></Login>}></Route>
                <Route path='/signup' element={<SignUp></SignUp>}></Route>
            </Routes>
            <Footer></Footer>
        </div>
    );
}

export default App;
