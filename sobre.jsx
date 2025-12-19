export default function Sobre() {
  return (
    <div style={{
      padding: '50px',
      maxWidth: '800px',
      margin: '0 auto',
      backgroundColor: '#fff7f9',
      minHeight: '100vh'
    }}>
      <h2 style={{
        color: '#e11d48',
        borderBottom: '2px solid #fbcfe8',
        paddingBottom: '10px',
        marginBottom: '20px'
      }}>
        Sobre o Projeto
      </h2>

      <p style={{ color: '#701a75', fontSize: '1.1rem' }}>
        Este projeto foi desenvolvido para praticar os conceitos básicos
        de rotas em aplicações React, utilizando o React Router.
      </p>

      <ul style={{
        marginTop: '20px',
        color: '#86198f'
      }}>
        <li>Criação de páginas</li>
        <li>Configuração de rotas</li>
        <li>Navegação sem recarregamento</li>
      </ul>
    </div>
  )
}
