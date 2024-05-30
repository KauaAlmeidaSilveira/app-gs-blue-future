'use client'
import React, { useState, useEffect } from 'react';
import style from './Header.module.css';
import Image from 'next/image';
import Link from 'next/link';
import menu from '../../assets/menuHeader.png';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
            if (window.innerWidth < 770) {
                setMenuOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
            <header className={style.header}>
                <div className={style.container}>
                    <div className={style.logo}>
                        <h2>LOGO</h2>
                    </div>

                    <nav className={style.navegation}>
                        {(windowWidth >= 770 || !menuOpen) && (
                            <div className={style.menu_navegation}>
                                <ul className={style.ul}>
                                <li className={style.li}><Link className={style.a} href="/">Home</Link></li>
                                <li className={style.li}><Link className={style.a} href="/">OPC</Link></li>
                                <li className={style.li}><Link className={style.a} href="/">OPC</Link></li>
                                <li className={style.li}><Link className={style.a} href="/">OPC</Link></li>
                                </ul>
                            </div>
                        )}
                    </nav>

                    <div className={style.menu_icon} onClick={toggleMenu}>
                        <Image className={style.menuHeader} src={menu} alt='menu' />
                    
                    {menuOpen && windowWidth < 770 && (
                        <div className={style.menu_content}>
                            <ul className={style.ul}>
                                <li className={style.li}><Link className={style.a} href="/">Home</Link></li>
                                <li className={style.li}><Link className={style.a} href="/">OPC</Link></li>
                                <li className={style.li}><Link className={style.a} href="/">OPC</Link></li>
                                <li className={style.li}><Link className={style.a} href="/">OPC</Link></li>
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
