import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

const Home = () => <div>Home Page</div>;
const Work = () => <div>Work Page</div>;
const Blog = () => <div>Blog Page</div>;
const Contact = () => <div>Contact Page</div>;

function App() {
    return (
        <Router>
            <div className="bg-indigo-900">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/work" element={<Work />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;