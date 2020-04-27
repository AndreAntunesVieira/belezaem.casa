import styled from 'styled-components'

const ModalBase = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  > * {
    display: flex;
    flex-direction: column;
    padding: 16px;
    max-height: 80%;
    background-color: white;
    border-radius: 8px;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.4);
    justify-content: flex-start;
  }
`

export default ModalBase
