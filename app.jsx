import { Routes, Route, NavLink } from 'react-router-dom'
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Contato from './pages/Contato'

function App() {
  return (
    <>
      <nav style={{
        padding: '20px',
        display: 'flex',
        justifyContent: 'center',
        gap: '40px',
        backgroundColor: '#fff1f2',
        borderBottom: '2px solid #fbcfe8',
        fontSize: '1.1rem'
      }}>
        <NavLink
          to="/"
          end
          style={({ isActive }) => ({
            textDecoration: 'none',
            color: isActive ? '#e11d48' : '#9d174d',
            fontWeight: '600'
          })}
        >
          Início
        </NavLink>

        <NavLink
          to="/sobre"
          style={({ isActive }) => ({
            textDecoration: 'none',
            color: isActive ? '#e11d48' : '#9d174d',
            fontWeight: '600'
          })}
        >
          Sobre
        </NavLink>

        <NavLink
          to="/contato"
          style={({ isActive }) => ({
            textDecoration: 'none',
            color: isActive ? '#e11d48' : '#9d174d',
            fontWeight: '600'
          })}
        >
          Contato
        </NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </>
  )
}

export default App
