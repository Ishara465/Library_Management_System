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
import IssuedBooks from "./components/IssuedReturnBooks/IssuedBook/IssuedBooks";
import ReturnBooks from "./components/IssuedReturnBooks/ReturnBook/ReturnBooks";
import IBookList from "./components/IssuedReturnBooks/IssuedBook/IBookList";
import IBookInfo from "./components/IssuedReturnBooks/IssuedBook/IBookInfo";
import IBookUpdate from "./components/IssuedReturnBooks/IssuedBook/IBookUpdate";
import RBookCrudButton from "./components/IssuedReturnBooks/ReturnBook/RBookCrudButton";
import RViewBooks from "./components/IssuedReturnBooks/ReturnBook/RViewBooks";
import RBookUpdate from "./components/IssuedReturnBooks/ReturnBook/RBookUpdate";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/books" element={<Books />}></Route>
        <Route path="/bookList" element={<BookList />}></Route>
        <Route path="/bookUpdate/:id" element={<BookUpdate />}></Route>
        <Route path="/crudButton" element={<CrudButton />}></Route>
        <Route path="/sideNavBar" element={<SideNavigation />}></Route>
        <Route path="/bookInfo/:id" element={<BookInfo />}></Route>
        <Route path="/createMember" element={<CreateMember />}></Route>
        <Route path="/memberInfo" element={<MemberInfo />}></Route>
        <Route path="/memberCrudButton" element={<MemberCrudButton />}></Route>
        <Route path="/memberUpdate" element={<MemberUpdate />}></Route>
        <Route path="/issuedBook" element={<IssuedBooks />}></Route>
        <Route path="/returnBook" element={<ReturnBooks />}></Route>
        <Route path="/iBookList" element={<IBookList />}></Route>
        <Route path="/iBookInfo" element={<IBookInfo />}></Route>
        <Route path="/iBookUpdate" element={<IBookUpdate />}></Route>
        <Route path="/rBookCrudButton" element={<RBookCrudButton />}></Route>
        <Route path="/rViewBooks" element={<RViewBooks />}></Route>
        <Route path="/rBookUpdate" element={<RBookUpdate />}></Route>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
