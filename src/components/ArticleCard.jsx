import React from 'react';
import { motion } from 'framer-motion';

const ArticleCard = ({ title, text, image, buttonText = 'Číst dál' }) => {
    return (
        <motion.div
            className="card article-card mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            {image && <img src={image} className="card-img-top" alt={title} />}
            <div className="card-body p-4"> {/* Increased padding */}
                <h5 className="card-title fw-bold fs-3 mb-3" style={{ lineHeight: 1.4 }}>{title}</h5> {/* Spaced headings */}
                <p className="card-text text-muted fs-5" style={{ lineHeight: 1.8 }}>{text}</p>
                <a href="#" className="btn btn-dark mt-3">Číst dál</a>
            </div>
        </motion.div>
    );
};

export default ArticleCard;