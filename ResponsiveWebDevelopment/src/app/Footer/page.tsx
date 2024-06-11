'use client'
import style from './Footer.module.css';
import Logo from '../../assets/logo.png';
import Image from 'next/image';


const Footer = () =>{
return(
    <>
        <footer className={style.footer}>
            <div className={style.container_box}>
                    <div className={style.logo}>
                        <Image className={style.img_logo} src={Logo} alt='Logo'/>
                    </div>

                    <div className={style.desc_footer}>
                            <p>© Copyright 2024 Ocean, Inc. All rights reserved . Various trademarks held by their respective owners.
                                 Ocean, Inc. Fiap, Av. Paulista, 1106 - 7º andar - Bela Vista, São Paulo - SP, 01311-000, Brasil</p>
                    </div>

                    <div className={style.names_footer}>
                        <p>ㅤNome: Gustavo Maia RM: 553270</p>
                        <p>ㅤNome: Kaua Almeida RM:552618</p>
                        <p>Nome: Rafael Vida RM:553721</p>
                        <p>Turma: 1TDSPS</p>
                    </div>
            </div>
        </footer>
    </>
)
}

export default Footer;