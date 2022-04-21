import { Routes, Route } from 'react-router-dom'

import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";

import { GlobalStyle, Container } from './assets/styles/global'

import { Home } from './pages/Home'
import { Footer } from './components/Footer'
import Modal from 'react-modal'
import BackgroundImg from '../src/assets/images/eberhard-grossgasteiger-EcVGogpC1G4-unsplash.jpeg'

Modal.setAppElement('#root')

Sentry.init({
  dsn: "https://90397ec20d3b4a049c0ad80690d57084@o1214090.ingest.sentry.io/6353969",
  integrations: [new BrowserTracing()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

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
