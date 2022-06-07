import './App.css';
import {BrowserRouter as Router, Route, Link, Routes, Navigate} from 'react-router-dom';
import Layout from './components/Layout/Layout';
import UserProfile from './components/Profile/UserProfile';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';

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
      This is the home page
      </div>
  );
}

const Book = () => {
  return (
    <div>
      This is the home page
      </div>
  );
}

const NewBook = () => {
  return (
    <div>
      This is the movies  page
      </div>
  );
}


const UpdateBook = () => {
  return (
    <div>
      This is the home page
      </div>
  );
}



const App = () => {



  return (
    <div className="App">
      <h2>Welcome to the Book CRUD Auth App</h2>
    
   

 
   <Layout>
      <Routes>
                <Route path='/' element={<Home/>} /> 
                <Route path='/books/new' element={<NewBook/>} />
                <Route path='/books/update/:id' element={<UpdateBook />} />
                <Route path="/books" element={<Books />} />  
                <Route path="/books/:id" element={<Book />} />
                <Route path="/books/:id" element={<Navigate to='/books' />} />
                <Route path='/' element={<HomePage/>} /> 
                <Route path="/auth" element={<AuthPage />} />  
                <Route path="/profile" element={<UserProfile />} />  
            </Routes>
            </Layout>
    </div>
  );
}

export default App;

