import Formulario from '@/components/Form/Form';
import style from './Denuncia.module.css'


const Denuncia = () => {

    return (
      <section className={style.box}>
        <h1 className={style.title_reporte}>Faça sua Denúncia</h1>
        <Formulario/>
      </section>
    );
  }
  
export default Denuncia;