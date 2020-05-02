import styled from 'styled-components'

const Menu = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  bottom: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  width: 100%;
  height: 48px;
  background-color: white;
  > * {
    width: 100px;
    display: inline-flex;
    height: 100%;
    justify-content: center;
    align-items: center;
    padding: 0 8px;
    text-align: center;
    border-right: 1px solid rgba(0, 0, 0, 0.1);
    border-left: 1px solid rgba(0, 0, 0, 0.1);
    color: rgba(0, 0, 0, 0.8);
  }
`

export default Menu
