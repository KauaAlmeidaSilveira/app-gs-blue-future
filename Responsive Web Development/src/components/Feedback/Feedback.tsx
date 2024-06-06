'use client'
import React, { useState } from 'react';

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
        img_url: imgUrl,
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
    <form onSubmit={handleSubmit}>
      {/* Campos de Feedback */}
      <label>
        Status:
        <select value={status} onChange={(e) => setStatus(e.target.value)} required>
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
      <label>
        Descrição:
        <textarea value={descricao} onChange={(e) => setDescricao(e.target.value)} required></textarea>
      </label>
      <label>
        Responsável:
        <input type="text" value={responsavel} onChange={(e) => setResponsavel(e.target.value)} required />
      </label>
      <label>
        URL da Imagem:
        <input type="text" value={imgUrl} onChange={(e) => setImgUrl(e.target.value)} />
      </label>

      {/* Campos da Instituição */}
      <label>
        Nome da Instituição:
        <input type="text" value={nomeInstituicao} onChange={(e) => setNomeInstituicao(e.target.value)} required />
      </label>
      <label>
        Email da Instituição:
        <input type="text" value={emailInstituicao} onChange={(e) => setEmailInstituicao(e.target.value)} required />
      </label>
      <label>
        Telefone da Instituição:
        <input type="text" value={telefoneInstituicao} onChange={(e) => setTelefoneInstituicao(e.target.value)} required />
      </label>

      <button type="submit">Enviar Feedback</button>
    </form>
  );
};

export default Feedback;
