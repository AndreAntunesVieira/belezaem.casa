import React from 'react'
import styled from 'styled-components'
import Notification from './Notification'

const FullNotification = ({ className, children }) => (
  <Container>
    <Notification className={className}>{children}</Notification>
  </Container>
)

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  position: fixed;
  background: rgba(0, 0, 0, 0.2);
  width: 100%;
  height: 100%;
  > * {
    background-color: white;
  }
`

export default FullNotification
