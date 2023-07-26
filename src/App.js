import React from "react";
import { Routes, Route } from "react-router-dom";
// import About from "./Components/About";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import OrderSummary from "./Components/OrderSummary";
import NoMatch from "./Components/NoMatch";
import Products from "./Components/Products";
import FeaturedProduct from "./Components/FeaturedProduct";
import NewProduct from "./Components/NewProduct";
import Users from "./Components/Users";
import UserDetails from "./Components/UserDetails";
import Admin from "./Components/Admin";
import Profile from "./Components/Profile";
// A promise is returned by this dynamic import ##import('./Components/About')## which is then converted into a module that contains a default exported react component which is our About component
const LazyAbout= React.lazy(()=> import('./Components/About'));


function App() {
  return (<>
    <Navbar/>
    <Routes>
      <Route path='/'element={<Home/>}/>
      <Route path='about' element={<React.Suspense fallback='Loading...'>
        <LazyAbout/>
        </React.Suspense>}/>
      <Route path='order-summary' element={<OrderSummary/>}></Route>
      <Route path="products" element={<Products/>}>
        {/* Index Router */}
        <Route index element={<FeaturedProduct/>}></Route>
        {/* Nested Router */}
        <Route path="feature" element={<FeaturedProduct/>}></Route>
        <Route path="new" element={<NewProduct/>}></Route>
      </Route>
      {/* No Routes or component matched */}
      <Route path="*" element={<NoMatch/>}></Route>
      {/* Dynamic Routes */}
      <Route path="users" element={<Users/>}></Route>
      <Route path="users/:Shagani" element={<UserDetails/>}></Route>
      {/* The more specific route is rendered first than dynamic ones with the colon */}
      <Route path='users/admin' element={<Admin/>}></Route>
      {/* Dynamic Routes can be nested and remove 'users' */}
      <Route path="profile" element={<Profile/>}></Route>
    </Routes>
    </>
  );
}

export default App;
