import { Routes, Route } from 'react-router-dom'

import { GlobalStyle, Container } from './assets/styles/global'

import { Home } from './pages/Home'
import { Footer } from './components/Footer'
import Modal from 'react-modal'
import BackgroundImg from '../src/assets/images/eberhard-grossgasteiger-EcVGogpC1G4-unsplash.jpeg'

Modal.setAppElement('#root')

export default function App() {
  return (
    <Container background={BackgroundImg}>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
      <GlobalStyle />
    </Container>
  )
}
