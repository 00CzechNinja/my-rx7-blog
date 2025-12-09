import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap'; // Install react-bootstrap if preferred, but we're using vanilla Bootstrap classes.
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ArticleCard from './components/ArticleCard';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

// Note: For react-bootstrap, install: npm install react-bootstrap, then import as above.

const articles = [
    {
        title: 'Historie Mazda RX-7',
        text: 'Mazda RX-7 byla vyráběna od roku 1978 do 2002 přes tři generace. První generace (FB) měla motor 12A. Byla to první masově produkovaná sportovní auto s rotačním motorem. Celkem se prodalo přes 800 000 kusů. Poslední generace (FD) měla sekvenční turbo. Je to nejprodávanější rotační auto v historii.',
        image: 'https://www.insidemazda.co.uk/wp-content/uploads/2020/04/dsc7613-scaled.jpg' // From search
    },
    {
        title: 'Modely RX-7: První Generace (FB)',
        text: 'První RX-7 z roku 1978 měla design inspirovaný Lotusem, ale s unikátním DNA. Motor 12A poskytoval 100-135 koní. Byla lehková a agilní. Pozdější modely měly turbo verze. Prodávala se do 1985.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/8/8c/1994_Mazda_RX-7_R2_in_Vintage_Red%2C_front_left_%28Lime_Rock%29.jpg'
    },
    {
        title: 'Druhá Generace (FC): Evoluce',
        text: 'Od 1985 do 1991, FC měla modernější design a motor 13B. Turbo II verze měla 182 koní a zrychlení pod 7 sekund. Kabriolet přišel v 1988. Je známá pro vyváženost a tuningový potenciál.',
        image: 'https://www.insidemazda.co.uk/wp-content/uploads/2020/04/40th_SavannaRX7_1978_hires_hires-800x499.jpg'
    },
    {
        title: 'Třetí Generace (FD): Ikona',
        text: 'Od 1991 do 2002, FD měla křivkový design 90. let. Twin-turbo 13B-REW motor s 255-280 koni. Je raritní v USA, prodávána jen 3 roky. Známá z filmů a her.',
        image: 'https://www.insidemazda.co.uk/wp-content/uploads/2020/04/RX-7_Savanna_1986_hires_hires-749x600.jpg'
    },
    {
        title: 'Tuning Tipy pro RX-7',
        text: 'Začněte s intake a exhaust pro lepší proudění. Upgradujte turbo pro více koní. Pozor na přehřívání – lepší chlazení je klíč. Podvozek: nižší pružiny a stabilizátory. Dyno tuning je umění pro optimální AFR a jiskru.',
        image: 'https://www.edwardstownmazda.com.au/wp-content/uploads/mazda-rx-7-concept-02.webp'
    },
    {
        title: 'Zajímavosti o RX-7',
        text: 'Měla první masově produkovaný sekvenční turbo motor. Motor je třetina velikosti běžného. Jmenována Import Car of the Year dvakrát. Údržba je náročná kvůli rotačnímu designu. Inspirovala mnoho tunerů.',
    }
];

function App() {
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e) => {
            setCursorPosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e) => {
            if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON') {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseover', handleMouseOver);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseover', handleMouseOver);
        };
    }, []);

    return (
        <>
            <div
                className={`custom-cursor ${isHovering ? 'hover' : ''}`}
                style={{ left: `${cursorPosition.x}px`, top: `${cursorPosition.y}px` }}
            />
            {<>
                <Navbar />
                <Hero />
                <Container id="articles" className="my-5">
                    <Row>
                        <Col lg={8}>
                            <h2 className="fw-bold mb-4">Články o Mazda RX-7</h2>
                            {articles.map((article, index) => (
                                <ArticleCard key={index} {...article} />
                            ))}
                        </Col>
                        <Col lg={4} id="categories">
                            <Sidebar />
                        </Col>
                    </Row>
                </Container>
                <Footer />
            </>}
        </>
    );
}

export default App;