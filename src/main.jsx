import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import PaginaUno from './pages/PaginaUno'
import PaginaDos from './pages/PaginaDos'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <main>
      <section className='contenedor-uno'>
        <PaginaUno/>
      </section>
      <div className='separador'></div>
      <section className='contenedor-dos'>
        <PaginaDos/>
      </section>
    </main>
  </StrictMode>,
)
