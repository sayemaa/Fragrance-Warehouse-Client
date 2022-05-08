import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Pages/Shared/Header/Header';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Authentication/Login/Login';
import Blogs from './Pages/Blogs/Blogs';
import Footer from './Pages/Shared/Footer/Footer';
import SignUp from './Pages/Authentication/SignUp/SignUp';
import UpdateItem from './Pages/UpdateItem/UpdateItem';
import RequireAuth from './Pages/Authentication/RequireAuth/RequireAuth';
import AddItem from './Pages/AddItem/AddItem';
import ManageInventory from './Pages/ManageInventory/ManageInventory';
import NotFound from './Pages/Shared/NotFound/NotFound';
import About from './Pages/About/About';
import { ToastContainer } from 'react-toastify';
import MyItems from './Pages/MyItems/MyItems';

function App() {
    return (
        <div>
            <Header></Header>
            <Routes>
                <Route path='/' element={<Home></Home>}></Route>
                <Route path='/home' element={<Home></Home>}></Route>
                <Route path='/inventory/:itemId' element={
                    <RequireAuth>
                        <UpdateItem></UpdateItem>
                    </RequireAuth>
                }></Route>
                <Route path='/manage' element={
                    <RequireAuth>
                        <ManageInventory></ManageInventory>
                    </RequireAuth>
                }></Route>
                <Route path='/additem' element={
                    <RequireAuth>
                        <AddItem></AddItem>
                    </RequireAuth>
                }></Route>
                <Route path='/myitems' element={
                    <RequireAuth>
                        <MyItems></MyItems>
                    </RequireAuth>
                }></Route>
                <Route path='/blogs' element={<Blogs></Blogs>}></Route>
                <Route path='/about' element={<About></About>}></Route>
                <Route path='/login' element={<Login></Login>}></Route>
                <Route path='/signup' element={<SignUp></SignUp>}></Route>
                <Route path="*" element={<NotFound></NotFound>}></Route>
            </Routes>
            <Footer></Footer>
            <ToastContainer />
        </div>
    );
}

export default App;
