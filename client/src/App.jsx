import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Navigation from "./components/Navigation/Navigation";
import Books from "./components/Books/Books";
import BookList from "./components/Books/BookList";
import CrudButton from "./components/Books/CrudButton";
import SideNavigation from "./components/importentComponents/SideNavigation";
import BookInfo from "./components/Books/BookInfo";
import CreateMember from "./components/Members/CreateMember";
import MemberInfo from "./components/Members/MemberInfo";
import MemberCrudButton from "./components/Members/MemberCrudButton";
import MemberUpdate from "./components/Members/MemberUpdate";
import BookUpdate from "./components/Books/BookUpdate";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/books" element={<Books />}></Route>
        <Route path="/bookList" element={<BookList />}></Route>
        <Route path="/bookUpdate" element={<BookUpdate />}></Route>
        <Route path="/crudButton" element={<CrudButton />}></Route>
        <Route path="/sideNavBar" element={<SideNavigation />}></Route>
        <Route path="/bookInfo" element={<BookInfo />}></Route>
        <Route path="/createMember" element={<CreateMember />}></Route>
        <Route path="/memberInfo" element={<MemberInfo />}></Route>
        <Route path="/memberCrudButton" element={<MemberCrudButton />}></Route>
        <Route path="/memberUpdate" element={<MemberUpdate />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
