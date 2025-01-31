import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Navigation from "./components/Navigation/Navigation";
import Books from "./components/Books/Books";
import BookList from "./components/Books/BookList";
import CrudButton from "./components/importentComponents/CrudButton";
import SideNavigation from "./components/importentComponents/SideNavigation";
import BookInfo from "./components/Books/BookInfo";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/books" element={<Books />}></Route>
        <Route path="/bookList" element={<BookList />}></Route>
        <Route path="/crudButton" element={<CrudButton />}></Route>
        <Route path="/sideNavBar" element={<SideNavigation />}></Route>
        <Route path="/bookInfo" element={<BookInfo />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
