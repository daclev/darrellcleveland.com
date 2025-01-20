import React from 'react';
import ReactDOM from 'react-dom/client';  // Ensure you're using `react-dom/client`
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import './index.css';
import "typeface-raleway";
import Home from "./pages/home";
import Blog from './pages/blog';
import About from "./pages/about";
import Post from "./pages/post";
import NotFound from './pages/notfound';

const root = ReactDOM.createRoot(document.getElementById('root'));  // Create a root
root.render(
  <React.StrictMode>
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="/post/:id" element={<Post />} />
        </Routes>
      </div>
    </Router>
  </React.StrictMode>
);
