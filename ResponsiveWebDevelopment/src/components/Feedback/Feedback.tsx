'use client'
import React, { useState } from 'react';
import style from './Feedback.module.css'

interface FeedbackFormProps {
  onSubmit: (feedbackData: any) => void;
}

const Feedback: React.FC<FeedbackFormProps> = ({ onSubmit }) => {
  const [status, setStatus] = useState('');
  const [descricao, setDescricao] = useState('');
  const [responsavel, setResponsavel] = useState('');
  const [imgUrl, setImgUrl] = useState('');
  const [nomeInstituicao, setNomeInstituicao] = useState('');
  const [emailInstituicao, setEmailInstituicao] = useState('');
  const [telefoneInstituicao, setTelefoneInstituicao] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const feedbackData = {
      feedback: {
        status,
        descricao,
        responsavel,
        img_url: 'img',
      },
      instituicao: {
        nome: nomeInstituicao,
        email: emailInstituicao,
        telefone: telefoneInstituicao,
      },
    };
    onSubmit(feedbackData);
  };

  return (

    <section className={style.container}>
        <form className={style.form_box} onSubmit={handleSubmit}>

          <label className={style.label}>
            Status:
            <select className={style.input_dados} value={status} onChange={(e) => setStatus(e.target.value)} required>
              <option value="">Selecione o Status</option>
              <option value="Pendente">Pendente</option>
              <option value="Em Análise">Em Análise</option>
              <option value="Ação Planejada">Ação Planejada</option>
              <option value="Em Progresso">Em Progresso</option>
              <option value="Resolvido">Resolvido</option>
              <option value="Fechado">Fechado</option>
              <option value="Inválido">Inválido</option>
            </select>
          </label>

          <label className={style.label}>
            Descrição:
            <textarea className={style.input_dados} value={descricao} onChange={(e) => setDescricao(e.target.value)} required></textarea>
          </label>

          <label className={style.label}>
            Responsável:
            <input className={style.input_dados} type="text" value={responsavel} onChange={(e) => setResponsavel(e.target.value)} required />
          </label>


          <label className={style.label}>
            Nome da Instituição:
            <input className={style.input_dados} type="text" value={nomeInstituicao} onChange={(e) => setNomeInstituicao(e.target.value)} required />
          </label>

          <label className={style.label}>
            Email da Instituição:
            <input className={style.input_dados} type="text" value={emailInstituicao} onChange={(e) => setEmailInstituicao(e.target.value)} required />
          </label>

          <label className={style.label}>
            Telefone da Instituição:
            <input className={style.input_dados} type="text" value={telefoneInstituicao} onChange={(e) => setTelefoneInstituicao(e.target.value)} required />
          </label>

          <button className={style.button_feedback} type="submit">Enviar</button>
        </form>
      </section>
  );
};

export default Feedback;
