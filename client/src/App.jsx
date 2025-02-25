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
import BookSearch from "./components/Books/BookSearch";
import MemberSearch from "./components/Members/MemberSearch";
import IBookSearch from "./components/IssuedReturnBooks/IssuedBook/IBookSearch";
import RBookSearch from "./components/IssuedReturnBooks/ReturnBook/RBookSearch";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/books" element={<Books />}></Route>
        <Route path="/bookList" element={<BookList />}></Route>
        <Route path="/bookUpdate/:id" element={<BookUpdate />}></Route>
        <Route path="/bookSearch/:name" element={<BookSearch />}></Route>
        <Route path="/crudButton" element={<CrudButton />}></Route>
        <Route path="/sideNavBar" element={<SideNavigation />}></Route>
        <Route path="/bookInfo/:id" element={<BookInfo />}></Route>
        <Route path="/createMember" element={<CreateMember />}></Route>
        <Route path="/memberInfo" element={<MemberInfo />}></Route>
        <Route path="/memberCrudButton" element={<MemberCrudButton />}></Route>
        <Route path="/memberUpdate/:id" element={<MemberUpdate />}></Route>
        <Route path="/memberSearch/:name" element={<MemberSearch />}></Route>
        <Route path="/issuedBook" element={<IssuedBooks />}></Route>
        <Route path="/returnBook" element={<ReturnBooks />}></Route>
        <Route path="/iBookList" element={<IBookList />}></Route>
        <Route path="/iBookInfo/:id" element={<IBookInfo />}></Route>
        <Route path="/iBookUpdate/:id" element={<IBookUpdate />}></Route>
        <Route path="/iBookSearch/:issueId" element={<IBookSearch />}></Route>
        <Route path="/rBookCrudButton" element={<RBookCrudButton />}></Route>
        <Route path="/rViewBooks" element={<RViewBooks />}></Route>
        <Route path="/rBookUpdate/:id" element={<RBookUpdate />}></Route>
        <Route path="/rBookSearch/:returnId" element={<RBookSearch />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
