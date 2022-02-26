import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { useState, useEffect, createContext, useContext } from "react";
import axios from 'axios';
import Home from './components/Home';
import Footer from './components/footer';
import Explorer from './components/Explorer';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams
} from "react-router-dom";

const allPostsContext = createContext({
  allPosts: '',
  setAllPosts: () => { },
});

export const filtersContext = createContext({
  fiters: '',
  setFilters: () => { },
});

function App() {
  const [allPosts, setAllPosts] = useState([]);
  const [filters, setFilters] = useState({ categories: [], materials: [] })

  useEffect(() => {
    async function getDatabase() {

      const response = await axios.get(`http://localhost:3003/api/`)
      //setAllPosts([...data.])
    }
    getDatabase()
  }, []);

  return (
    <Router>
      <filtersContext.Provider value={{ filters, setFilters }}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/type/:repair' element={<Explorer />} />
        </Routes>
      </filtersContext.Provider>
      <Footer></Footer>
    </Router>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


