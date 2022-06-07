import './App.css';
import { useContext } from 'react';
import {BrowserRouter as Router, Route, Link, Routes, Navigate, Redirect } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import UserProfile from './components/Profile/UserProfile';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';
import AuthContext from './store/auth-context';

import { useState } from 'react';


const Home = () => {
  return (
    <div>
      This is the home page
      </div>
  );
}


const Books = () => {
  return (
    <div>
      This is the books page
      </div>
  );
}

const Book = () => {
  return (
    <div>
      This is the book :id page
      </div>
  );
}

const NewBook = () => {
  return (
    <div>
      This is the new book page
      </div>
  );
}


const UpdateBook = () => {
  return (
    <div>
      This is the update book page
      </div>
  );
}



const App = () => {

const authCtx = useContext(AuthContext);

  return (
    <div className="App">
      <h2>Welcome to the Book CRUD Auth App</h2>
    
   

 
   <Layout>
       <Routes>
             <Route path='/' element={<HomePage/>} /> 
              {!authCtx.isLoggedIn && (
              <Route path="/auth" element={<AuthPage />} /> 
              )}
              { authCtx.isLoggedIn && (
               <Route path="/profile" element={<UserProfile />} />
              )}
              { authCtx.isLoggedIn && (
                <Route path="/books" element={<Books />} />
              )}
                <Route path="/books/:id" element={<Navigate to='/books' />} />
                <Route path='/books/new' element={<NewBook/>} />
                <Route path='/books/update/:id' element={<UpdateBook />} />
                <Route path="/books/:id" element={<Book />} />
                <Route path="*" element={<Navigate to="/" replace />}
    />
          </Routes>
      </Layout>
    </div>
  );
}

export default App;

