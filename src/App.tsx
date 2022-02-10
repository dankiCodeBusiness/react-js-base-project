import { Routes, Route } from 'react-router-dom'

import { GlobalStyle, Container } from './assets/styles/global'

import { Home } from './pages/Home'
import { Footer } from './components/Footer'
import Modal from 'react-modal'

Modal.setAppElement('#root')

export default function App() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
      <GlobalStyle />
    </Container>
  )
}
