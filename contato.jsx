export default function Contato() {
  return (
    <div style={{
      textAlign: 'center',
      padding: '60px',
      backgroundColor: '#fff7f9',
      minHeight: '100vh'
    }}>
      <h2 style={{
        color: '#e11d48',
        marginBottom: '20px'
      }}>
        Contato
      </h2>

      <p style={{
        color: '#701a75',
        fontSize: '1.1rem',
        marginBottom: '30px'
      }}>
        Entre em contato para saber mais sobre o projeto.
      </p>

      <button style={{
        backgroundColor: '#e11d48',
        color: '#ffffff',
        border: 'none',
        padding: '12px 30px',
        fontSize: '1rem',
        borderRadius: '20px',
        cursor: 'pointer'
      }}>
        Enviar mensagem
      </button>
    </div>
  )
}
