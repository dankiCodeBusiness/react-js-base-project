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
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus architecto aut, consequuntur dignissimos explicabo facilis inventore mollitia natus officiis porro repellat soluta tempora! Deserunt ea eveniet magni perspiciatis ratione reiciendis.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus architecto aut, consequuntur dignissimos explicabo facilis inventore mollitia natus officiis porro repellat soluta tempora! Deserunt ea eveniet magni perspiciatis ratione reiciendis.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus architecto aut, consequuntur dignissimos explicabo facilis inventore mollitia natus officiis porro repellat soluta tempora! Deserunt ea eveniet magni perspiciatis ratione reiciendis.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus architecto aut, consequuntur dignissimos explicabo facilis inventore mollitia natus officiis porro repellat soluta tempora! Deserunt ea eveniet magni perspiciatis ratione reiciendis.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus architecto aut, consequuntur dignissimos explicabo facilis inventore mollitia natus officiis porro repellat soluta tempora! Deserunt ea eveniet magni perspiciatis ratione reiciendis.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus architecto aut, consequuntur dignissimos explicabo facilis inventore mollitia natus officiis porro repellat soluta tempora! Deserunt ea eveniet magni perspiciatis ratione reiciendis.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus architecto aut, consequuntur dignissimos explicabo facilis inventore mollitia natus officiis porro repellat soluta tempora! Deserunt ea eveniet magni perspiciatis ratione reiciendis.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus architecto aut, consequuntur dignissimos explicabo facilis inventore mollitia natus officiis porro repellat soluta tempora! Deserunt ea eveniet magni perspiciatis ratione reiciendis.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus architecto aut, consequuntur dignissimos explicabo facilis inventore mollitia natus officiis porro repellat soluta tempora! Deserunt ea eveniet magni perspiciatis ratione reiciendis.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus architecto aut, consequuntur dignissimos explicabo facilis inventore mollitia natus officiis porro repellat soluta tempora! Deserunt ea eveniet magni perspiciatis ratione reiciendis.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus architecto aut, consequuntur dignissimos explicabo facilis inventore mollitia natus officiis porro repellat soluta tempora! Deserunt ea eveniet magni perspiciatis ratione reiciendis.</p>
      </Container>
    </Modal>
  )
}
