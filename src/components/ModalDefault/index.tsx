import React from 'react'
import { Container } from './styles'
import Modal from "react-modal";

interface ModalProps {
  isOpen: boolean
  closeModal: () => void
}

export function ModalDefault({ isOpen, closeModal }: ModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      overlayClassName={'react-modal-overlay'}
      className={'react-modal-content'}
      onRequestClose={closeModal}
    >
      <button
          type={'button'}
          onClick={closeModal}
          className={'react-modal-close'}
      >
        <span>&times;</span>
      </button>
      <Container>
        <h1>Modal default</h1>
      </Container>
    </Modal>
  )
}
