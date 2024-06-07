
import Link from 'next/link';
import Image from 'next/image';
import style from './Inicial.module.css'
import Mar from '../../assets/mar.jpg'
import Praia from '../../assets/mardois.jpg'
import Grafico from '../../assets/Grafic.png'
import Lixo from '../../assets/catarlixo.jpg'

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
                                                <h2>Quem Somos</h2>
                                                <p>A Ocean é uma plataforma inovadora dedicada a conectar cidadãos conscientes com empresas e 
                                                organizações ambientais. Nosso objetivo é facilitar a denúncia e a resolução de problemas
                                                relacionados à poluição dos oceanos, rios e à caça ilegal de animais marinhos. Queremos dar voz
                                                àqueles que testemunham essas atividades prejudiciais, proporcionando uma maneira fácil e eficaz
                                                de relatar essas ocorrências.</p>
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
                                                    <h2>Como Funciona</h2>
                                                    <p>Nosso processo é simples: qualquer pessoa pode registrar na plataforma um reporte detalhado 
                                                    sobre descarte incorreto de lixo, poluição ou caça ilegal, incluindo a fonte, descrição e localização do
                                                    incidente. Esses reportes são armazenados em nosso painel, acessível por empresas e organizações 
                                                    ambientais, que investigam e resolvem os problemas. A transparência permite acompanhar o status
                                                    até a resolução final.</p>
                                          </div>
                                </div> 
                      </div>
                </div>
            </section>

            <div className={style.container_inicial}>
                  <div className={style.box_normal}>
                            <div className={style.space_info}>
                                      <div className={style.text_inicial}>
                                                <h2>Principais Lixos Encontrados nos Oceanos</h2>
                                                <p>Os oceanos enfrentam uma variedade de desafios ambientais, e entre os mais preocupantes está o
                                                acúmulo de lixo. Veja em nosso gráfico os principais resíduos encontrado nos ocenaos</p>
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
                                                    <h2>Nosso Impacto</h2>
                                                    <p>Cada reporte feito na nossa plataforma ajuda a criar um mapa detalhado das áreas mais afetadas,
                                                    permitindo uma resposta rápida e eficaz das organizações competentes. Nossa missão é não apenas 
                                                    mitigar os danos já causados, mas também promover uma cultura de responsabilidade ambiental, 
                                                    incentivando todos a serem vigilantes e proativos na preservação dos oceanos.</p>        
                                          </div>
                                </div> 
                      </div>
                </div>
            </section>

            <div className={style.container_inicial}>
                  <div className={style.final}>
                          <p>Junte-se a nós na Ocean e faça parte da mudança. Seu reporte pode ser o primeiro passo para um oceano mais limpo e saudável 
                            para as futuras gerações.</p>
                            <Link href='/Denuncia'><button className={style.button_inicial}>Novo Reporte</button></Link>
                  </div>
            </div>
        </section>
      </>
    );
  }
  
  export default Inicial;