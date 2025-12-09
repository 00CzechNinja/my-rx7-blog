import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="hero">
            <div className="bg-white py-5 text-center">
                <motion.h1
                    className="hero-title"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5 }}
                >
                    Mazda RX7
                </motion.h1>
            </div>
            <div className="hero-bg">
                <div className="hero-subtitle">
                    <p className="hero-location">Hiroshima, Japan</p>
                    <p>The art of rotary performance, design, and legacy.</p>
                </div>
            </div>
        </section>
    );
};

export default Hero;