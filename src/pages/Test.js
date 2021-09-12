import styled from '@emotion/styled'
import React, { useState } from 'react'
import Modal from '../components/Modal/Modal';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Button = styled.button`
    min-width: 100px;
    padding: 16px 32px;
    border-radius: 4px;
    border: none;
    background: #141414;
    color: #fff;
    font-size: 24px;
    cursor: pointer;

`
export default function Test() {
    const [showModal, setShowModal] = useState(false)
    const openModal = () => {
        setShowModal(prev=> !prev)
    }
    return (
        <div>
            <Container>
                <Button onClick={openModal}>
                    Halo
                </Button>
                <Modal showModal={showModal} setShowModal={setShowModal}/>
            </Container>
        </div>
    )
}
