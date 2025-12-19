export default function Home() {
  return (
    <div style={{
      textAlign: 'center',
      padding: '60px',
      backgroundColor: '#fff7f9',
      minHeight: '100vh'
    }}>
      <h1 style={{
        color: '#e11d48',
        fontSize: '3rem',
        marginBottom: '20px'
      }}>
        Jardim React
      </h1>

      <p style={{
        color: '#701a75',
        fontSize: '1.2rem',
        marginBottom: '30px'
      }}>
        Uma aplicação simples para aprender navegação entre páginas com React Router.
      </p>

      <div style={{
        maxWidth: '600px',
        margin: '0 auto',
        padding: '30px',
        backgroundColor: '#ffffff',
        borderRadius: '12px',
        border: '1px solid #fbcfe8'
      }}>
        <p style={{ color: '#86198f' }}>
          Use o menu acima para navegar entre as páginas sem recarregar a aplicação.
        </p>
      </div>
    </div>
  )
}
