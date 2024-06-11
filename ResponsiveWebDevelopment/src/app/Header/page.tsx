'use client'
import React, { useState, useEffect } from 'react';
import style from './Header.module.css';
import Image from 'next/image';
import Link from 'next/link';
import menu from '../../assets/menuHeader.png';
import Logo from '../../assets/logo.png'

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
            if (window.innerWidth < 770) {
                setMenuOpen(false);
            }
        };

        if (typeof window !== 'undefined') {
            window.addEventListener('resize', handleResize);

            return () => {
                window.removeEventListener('resize', handleResize);
            };
        }
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
            <header className={style.header}>
                <div className={style.container}>
                    <div className={style.logo}>
                        <Image className={style.img_logo} src={Logo} alt='Logo'/>
                    </div>

                    <nav className={style.navegation}>
                        {(windowWidth >= 770 || !menuOpen) && (
                            <div className={style.menu_navegation}>
                                <ul className={style.ul}>
                                    <li className={style.li}><Link className={style.a} href="/Inicial">Inicio</Link></li>
                                    <li className={style.li}><Link className={style.a} href="/Denuncia">Novo Reporte</Link></li>
                                    <li className={style.li}><Link className={style.a} href="/DenunciaMap">Reportes</Link></li>
                                    <li className={style.li}><Link className={style.a} href="/Contato">Contato</Link></li>
                                </ul>
                            </div>
                        )}
                    </nav>

                    <div className={style.menu_icon} onClick={toggleMenu}>
                        <Image className={style.menuHeader} src={menu} alt='menu' />
                    
                        {menuOpen && windowWidth < 950 && (
                            <div className={style.menu_content}>
                                <ul className={style.ul}>
                                    <li className={style.li}><Link className={style.a} href="/Inicial">Inicio</Link></li>
                                    <li className={style.li}><Link className={style.a} href="/Denuncia">Novo Reporte</Link></li>
                                    <li className={style.li}><Link className={style.a} href="/DenunciaMap">Reportes</Link></li>
                                    <li className={style.li}><Link className={style.a} href="/Contato">Contato</Link></li>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
