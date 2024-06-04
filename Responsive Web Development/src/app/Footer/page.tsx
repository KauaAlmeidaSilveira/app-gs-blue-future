'use client'
import style from './Footer.module.css'


const Footer = () =>{
return(
    <>
        <footer className={style.footer}>
            <div className={style.container_box}>
                    <div className={style.logo}>
                            <h2>LOGO</h2>
                    </div>

                    <div className={style.desc_footer}>
                            <p>© Copyright 2022 Salesforce, Inc. All rights reserved . Various trademarks held by their respective owners.
                                 Salesforce, Inc. Salesforce Tower, 415 Mission Street, 3rd Floor, San Francisco, CA 94105,United States</p>
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