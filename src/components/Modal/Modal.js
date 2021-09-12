import React, {useState} from "react";
import styled from '@emotion/styled'
import { FaTimes } from 'react-icons/fa';
import { Button } from "../Button/Button";
const Background = styled.div`
  top: 0px;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const ModalWrapper = styled.div`
  width: 800px;
  height: 500px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  position: relative;
  z-index: 10;
  border-radius: 10px;
`;


const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;
  p {
    margin-bottom: 1rem;
  }
  button {
    padding: 10px 24px;
    background: #141414;
    color: #fff;
    border: none;
  }
`;

const CloseModalButton = styled(FaTimes)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;
const Input = styled.input`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  `
function Modal({ showModal, setShowModal, handleSubmit, nickname, setNickname}) {


  return (
    <>
    {showModal ? (
    <Background>
        <ModalWrapper showModal={showModal}>
            <ModalContent>
            <h1>Gotcha! Pokemon was caught!</h1>
            <h2>Give Pokemon Nickname</h2>
            <form onSubmit={handleSubmit}>
                <Input 
                  type="text" 
                  placeholder="Nickname" 
                  value={nickname}
                  onChange={e => setNickname(e.target.value)}
                  className="input"/>
                  <Button type="submit" value="Submit">Set Nickname</Button>
            </form>
                
                
            </ModalContent>
            <CloseModalButton onClick={()=> setShowModal(prev => !prev)}/>
        </ModalWrapper>
    </Background>) : null}
        
    </>
  );
}

export default Modal;
