
import style from './Contato.module.css'
import Image from 'next/image';
import Email from '../../assets/email.png'
import Zap from '../../assets/watsap.png'
import Insta from '../../assets/instagram.png'
import Face from '../../assets/facebook.png'


const Contato = () => {

    return (
      <>
        <section className={style.box_contato}>
            <div className={style.container_contato}>
                <div className={style.icons}>

                     <div className={style.icon_social}>
                                <Image  className={style.img_icon} src={Email} alt='Logo'/>
                                <p>ocean@org.com</p>
                     </div>

                     <div className={style.icon_social}>
                                <Image  className={style.img_icon} src={Zap} alt='Logo'/>
                                <p>(11)95410-2400</p>
                     </div>

                     <div className={style.icon_social}>
                            <Image  className={style.img_icon} src={Insta} alt='Logo'/>
                            <p>@Ocean</p>   
                     </div>

                     <div className={style.icon_social}>
                            <Image  className={style.img_icon} src={Face} alt='Logo'/>
                            <p>Ocean organization</p>   
                     </div>
                </div>


                <div className={style.bg}>
                </div>
            </div>
        </section>
      </>
    );
  }
  
  export default Contato;