import React, { useState } from 'react'
import { Container } from './styles'
import { Helmet } from 'react-helmet'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGamepad } from '@fortawesome/free-solid-svg-icons'
import { faEthereum } from '@fortawesome/free-brands-svg-icons'
import { ModalDefault } from '../../components/ModalDefault'

export function Home() {
  const [isOpenModal, setIsOpenModal] = useState(false)

  function handleOpenModal() {
    setIsOpenModal(true)
  }

  function handleCloseModal() {
    setIsOpenModal(false)
  }

  return (
    <>
      <Helmet>
        <meta name="description" content="Curso desenvolvimento de games" />
        <title>Curso Desenvolvimento de Games Completo | Hello World!</title>
      </Helmet>

      <Container>
        <h1>
          <FontAwesomeIcon icon={faGamepad} /> Hello Danki Code!
        </h1>
        <h2>
          Buy <FontAwesomeIcon icon={faEthereum} />
        </h2>

        <button type={'button'} onClick={handleOpenModal}>
          Open Modal
        </button>
      </Container>

      <ModalDefault isOpen={isOpenModal} closeModal={handleCloseModal} />
    </>
  )
}
