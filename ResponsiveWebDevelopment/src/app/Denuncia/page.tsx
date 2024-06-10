// pages/denuncia.tsx ou components/Denuncia.tsx (dependendo de onde está localizado)
import React from 'react';
import Formulario from '@/components/Form/Form';
import style from './Denuncia.module.css';


const Denuncia = () => {
  return (
    <section className={style.box}>
        <div className={style.tam}>
          <div className={style.formulario}>
            <Formulario />
          </div>
          <div className={style.background}>
          </div>
        </div>
    </section>
  );
};

export default Denuncia;


