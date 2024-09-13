import './App.css';
import {BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home"
import Admindashboard from "./Pages/Admin/Admindashboard";
import AddNewProduct from "./Pages/Admin/AddNewProduct";
import Footer from "./Components/Footer";
import AllProducts from "./Pages/Admin/AllProducts";
import Header from "./Components/Header";
import ViewProduct from "./Pages/ViewProduct";
import Signup from "./Pages/Signup";
import Men from "./Pages/Men";
import Womens from "./Pages/Womens";
import Kids from "./Pages/Kids";
import Login from "./Pages/Login";
import { ReactNotifications } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import Cart from "./Pages/Cart";
import {useState} from "react";
function App() {

    const [loggedInUser, setLoggedInUser] = useState(null);
    const handleLogin = (email) => {
        setLoggedInUser(email);
    };

    return (
    <div>
        <ReactNotifications />
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/" element={<Footer />} />
                <Route path='/add-product' element={<AddNewProduct />}></Route>
                <Route path='/admin-dashboard' element={<Admindashboard />}></Route>
                <Route path='/products-table' element={<AllProducts />}></Route>
                <Route path="/product/:id" element={<ViewProduct loggedInUser={loggedInUser}/>}></Route>
                <Route path="/men" element={<Men/>}></Route>
                <Route path="/women" element={<Womens/>}></Route>
                <Route path="/kid" element={<Kids/>}></Route>
                <Route path="/signup" element={<Signup/>}></Route>
                <Route path="/login" element={<Login onLogin={handleLogin} />} />
                <Route path="/cart" element={<Cart loggedInUser={loggedInUser} />} />
            </Routes>
            <Footer/>
      </BrowserRouter>

    </div>
  );
}
// constants.js

export default App;
