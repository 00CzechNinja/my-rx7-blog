import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);

    const toggleMenu = () => setIsOpen(!isOpen);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    return (
        <nav className="navbar-custom d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
                <div className="logo-circle">R</div>
                <span className="logo-text">// Rotary Engine Blog</span>
            </div>
            <button className="menu-btn" onClick={toggleMenu}>
                Menu
            </button>
            {isOpen && (
                <motion.div
                    ref={menuRef}
                    className="full-menu"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <button className="close-btn" onClick={toggleMenu}>Close</button>
                    <ul className="menu-list">
                        <li className="menu-item"><a href="#">Home</a></li>
                        <li className="menu-item"><a href="#articles">Články</a></li>
                        <li className="menu-item"><a href="#categories">Kategorie</a></li>
                        <li className="menu-item"><a href="#about">O autorovi</a></li>
                        <li className="menu-item"><a href="#contact">Contact</a></li>
                    </ul>
                    <div className="menu-footer">
                        <p>© 2025 | Privacy Policy | Cookies</p>
                        <p>Address: Example St, City | hello@rx7blog.com</p>
                    </div>
                    {/* Optional video thumbnail */}
                    <div style={{ position: 'absolute', bottom: '1rem', right: '2rem' }}>
                        <img src="https://via.placeholder.com/200x100?text=Video" alt="Video Thumbnail" />
                    </div>
                </motion.div>
            )}
        </nav>
    );
};

export default Navbar;