
import Link from 'next/link';
import Image from 'next/image';
import style from './Inicial.module.css'
import Mar from '../../assets/mar.jpg'
import Praia from '../../assets/mardois.jpg'
import Grafico from '../../assets/Grafic.png'
import Lixo from '../../assets/catarlixo.jpg'
import Text from '../../data/Text.json'

const Inicial = () => {

    return (
      <>
        <section className={style.box_inicial}>
            <div className={style.container_inicial}>
                  <div className={style.box_normal}>
                      <div className={style.title_inicial}>
                            <p>Bem vindo a Ocean</p>
                        </div>
                            <div className={style.space_info}>
                                      <div className={style.text_inicial}>
                                                <h2>{Text.sub_inicial_um}</h2>
                                                <p>{Text.text_inicial_um}</p>
                                      </div>
                                      <div className={style.image_inicial}>
                                          <div className={style.img_wrapper}>
                                                <Image className={style.img} src={Mar} alt='Mar'/>
                                          </div>
                                      </div>
                            </div> 
                  </div>
            </div>

              <section className={style.box_inicial_two}>
                <div className={style.container_inicial}>
                      <div className={style.box_normal}>
                                <div className={style.space_info}>
                                          <div className={style.image_inicial}>
                                                <div className={style.img_wrapper}>
                                                  <Image className={style.img} src={Praia} alt='Mar'/>
                                                </div>
                                          </div>
                                          <div className={style.text_inicial}>
                                                    <h2>{Text.sub_inicial_dois}</h2>
                                                    <p>{Text.text_inicial_dois}</p>
                                          </div>
                                </div> 
                      </div>
                </div>
            </section>

            <div className={style.container_inicial}>
                  <div className={style.box_normal}>
                            <div className={style.space_info}>
                                      <div className={style.text_inicial}>
                                                <h2>{Text.sub_inicial_tres}</h2>
                                                <p>{Text.text_inicial_tres}</p>
                                      </div>
                                      <div className={style.image_inicial}>
                                              <Image className={style.img_dois} src={Grafico} alt='Mar'/>
                                      </div>
                            </div> 
                  </div>
            </div>

            <section className={style.box_inicial_two}>
                <div className={style.container_inicial}>
                      <div className={style.box_normal}>
                                <div className={style.space_info}>
                                          <div className={style.image_inicial}>
                                             <div className={style.img_wrapper}>
                                                  <Image className={style.img} src={Lixo} alt='Mar'/>
                                             </div>
                                          </div>
                                          <div className={style.text_inicial}>
                                                    <h2>{Text.sub_inicial_quatro}</h2>
                                                    <p>{Text.text_inicial_quatro}</p>        
                                          </div>
                                </div> 
                      </div>
                </div>
            </section>

            <div className={style.container_inicial}>
                  <div className={style.final}>
                          <p>{Text.text_inicial_cinco}</p>
                            <Link href='/Denuncia'><button className={style.button_inicial}>Novo Reporte</button></Link>
                  </div>
            </div>
        </section>
      </>
    );
  }
  
  export default Inicial;