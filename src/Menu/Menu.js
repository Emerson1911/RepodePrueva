import React, { useState } from 'react';
import './estilos.css';

const Menu = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <body id="body" className={menuOpen ? 'body_move' : ''}>
            <header>
                <div className="icon__menu" onClick={toggleMenu}>
                    <i className="fas fa-bars" id="btn_open"></i>
                </div>
            </header>

            <div className={`menu__side ${menuOpen ? 'menu__side_move' : ''}`} id="menu_side">
                <div className="name__page">
                    <i className="fab fa-youtube"></i>
                    <h4>MagtimusPro</h4>
                </div>

                <div className="options__menu">	

                    <a href="#" className="selected">
                        <div className="option">
                            <i className="fas fa-home" title="Inicio"></i>
                            <h4>Inicio</h4>
                        </div>
                    </a>

                    <a href="#">
                        <div className="option">
                            <i className="far fa-file" title="Portafolio"></i>
                            <h4>Portafolio</h4>
                        </div>
                    </a>
                    
                    <a href="#">
                        <div className="option">
                            <i className="fas fa-video" title="Cursos"></i>
                            <h4>Cursos</h4>
                        </div>
                    </a>

                    <a href="#">
                        <div className="option">
                            <i className="far fa-sticky-note" title="Blog"></i>
                            <h4>Blog</h4>
                        </div>
                    </a>

                    <a href="#">
                        <div className="option">
                            <i className="far fa-id-badge" title="Contacto"></i>
                            <h4>Contacto</h4>
                        </div>
                    </a>

                    <a href="#">
                        <div className="option">
                            <i className="far fa-address-card" title="Nosotros"></i>
                            <h4>Nosotros</h4>
                        </div>
                    </a>

                </div>
            </div>
        </body>
    );
};

export default Menu;
