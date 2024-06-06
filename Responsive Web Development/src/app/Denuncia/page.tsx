// pages/denuncia.tsx ou components/Denuncia.tsx (dependendo de onde está localizado)
import React from 'react';
import Formulario from '@/components/Form/Form';
import style from './Denuncia.module.css';
import VideoPlayer from '@/components/VideoPlayer/VideoPlayer';

const Denuncia = () => {
  return (
    <section className={style.box}>
      <div className={style.formulario}>
        <Formulario />
      </div>
      <div className={style.background}>
        <VideoPlayer
          src="https://www.youtube-nocookie.com/embed/52agu-fIzxk?si=DJwbZK8PE6NHAsLL"
          type="video/mp4"
          width="100%"
          height="auto"
          controls={false}
          autoPlay={true}
          loop={true}
          muted={true}
        />
      </div>
    </section>
  );
};

export default Denuncia;


