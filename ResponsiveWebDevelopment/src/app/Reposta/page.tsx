import Link from 'next/link';
import style from './Reposta.module.css'
import Image from 'next/image';
import Enviado from '../../assets/sucess.png'

const Resposta = () => {

  return (
    <>
      <section className={style.box}>
        <Image className={style.img_okay} src={Enviado} alt='Logo'/>

        <div className={style.box_text}>
            <p >Seu reporte foi enviado com sucesso!</p>
            <p>Muito obrigado, em breve uma empresa ira responder seu reporte</p>
        </div>

        <Link href='/DenunciaMap'><button className={style.button_reporte}>Ver reportes</button></Link>
      </section>
    </>
  );
}

export default Resposta;
