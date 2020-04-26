import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const getNextSchedules = async () => {
  const res = await fetch(`/api/next-schedules`).catch(_e => null)
  const content = await res.json().catch(_e => null)
  return content.days || []
}

export default function Agenda() {
  const [days, setDays] = useState([])
  const [activeModal, setActiveModal] = useState(false)
  useEffect(() => {
    getNextSchedules().then(days => setDays(days))
  }, [])
  const openScheduleModal = () => {
    setActiveModal(true)
  }
  return (
    <Container>
      <h1>
        <img src="/logo/icon.png" /> Agenda
      </h1>
      <hr />
      {days.map(({ day, weekDay, schedules }) => (
        <Day key={day}>
          <h3>
            {day} ({weekDay})
          </h3>
          <div>
            {schedules.map(({ user, hour, title }) => (
              <Schedule className={user} key={hour}>
                <small>
                  {user} - {hour}
                </small>
                <h4>{title}</h4>
              </Schedule>
            ))}
          </div>
        </Day>
      ))}
      {activeModal && (
        <Modal>
          <div>
            <h4>Marcar atendimento</h4>

            <div className="form-control">
              <label>Qual é o atendimento</label>
              <input placeholder="Dê um nome para este atendimento" />
            </div>

            <div className="form-control">
              <label>Que dia será?</label>
              <input placeholder="dd/mm/aaaa" type="date" />
            </div>

            <div className="form-control">
              <label>Que horas será o atendimento</label>
              <input placeholder="hh:mm" type="time" />
            </div>
            <Button>Salvar</Button>
          </div>
        </Modal>
      )}
      <Menu>
        <div onClick={() => openScheduleModal()}>Marcar atendimento</div>
      </Menu>
    </Container>
  )
}

const Modal = styled.div`
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
  > div {
    padding: 16px;
    max-height: 80%;
    background-color: white;
    border-radius: 8px;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.4);
  }
`

const Button = styled.button`
  display: inline-block;
  margin-bottom: 0;
  text-align: center;
  text-transform: uppercase;
  vertical-align: middle;
  cursor: pointer;
  background-image: none;
  whitespace: nowrap;
  padding: 6px 12px;
  font-size: 1.4rem;
  border-radius: 3px;
  border: 1px solid transparent;
  text-decoration: none;
  user-select: none;

  &,
  &:active,
  &.active {
    &:focus {
      outline: thin dotted;
      outline: 5px auto -webkit-focus-ring-color;
      outline-offset: -2px;
    }
  }

  &:hover,
  &:focus,
  &.focus {
    text-decoration: none;
    color: #fff;
  }

  &:active,
  &.active {
    outline: 0;
    background-image: none;
  }

  &.disabled,
  &[disabled],
  fieldset[disabled] & {
    cursor: not-allowed;
    pointer-events: none;
    box-shadow: none;
  }

  &.btn-xs {
    padding: 3px 6px;
    font-size: 1.2rem;
  }

  &.btn-sm {
    padding: 4px 8px;
    font-size: 1.3rem;
  }

  &.btn-lg {
    padding: 8px 16px;
    font-size: 1.6rem;
  }

  &.btn-primary {
    //@include btn-variant(#1e88e5, #64b5f6, #42a5f5, #bbdefb, #e3f2fd, #90caf9, #1976d2);
    //@mixin btn-variant($border, $from, $to, $gloss, $color, $hover-from, $active-border) 
  }
  color: var(--btn-color);
  border-color: var(--btn-border);
  background: linear-gradient(to bottom, var(--btn-from) 0%, var(--btn-to) 100%);
  box-shadow: inset 0 1px var(--btn-gross), 0 1px 2px rgba(0,0,0,.2);
  
  &:hover,
  &:focus,
  &.focus {
    border-color: var(--btn-to);
    background: linear-gradient(to bottom, var(--btn-hover-from) 0%, var(--btn-from) 100%);
    box-shadow: inset 0 1px $color, 0 2px 3px rgba(0,0,0,.2);
  }
  &:active,
  &.active {
    border-color: var(--btn-active-border);
    color: var(--btn-gloss);
    background: linear-gradient(to bottom, var(--btn-to) 0%, var(--btn-border) 100%);
    box-shadow: inset 0 2px 2px var(--btn-active-border);
  }
  
  &.disabled,
  &[disabled],
  fieldset[disabled] & {
    background: var(--btn-hover-from);
    border-color: var(--btn-from);
  } 
}
`

const Menu = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  bottom: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  width: 100%;
  height: 48px;
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
  }
`

const Schedule = styled.div`
  padding: 8px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  &.gaby {
    background-color: rgba(255, 0, 255, 0.31);
  }
  &.thay {
    background-color: rgba(255, 255, 0, 0.31);
  }
  &:last-child {
    border-bottom: 2px solid rgba(0, 0, 0, 0.6);
  }
  &:first-child {
    border-top: 2px solid rgba(0, 0, 0, 0.6);
  }
`

const Day = styled.div`
  margin-bottom: 16px;
  width: 100%;
  small {
    color: rgba(0, 0, 0, 0.6);
    text-transform: capitalize;
  }
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  h4 {
    margin-top: 0;
    margin-bottom: 16px;
  }
  h1 {
    margin-top: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 16px;
    border-bottom: 1px solid #999;
    width: 100%;
    padding-bottom: 8px;
    > img {
      height: 68px;
      margin-right: 16px;
    }
  }
  h3 {
    margin: 0 0 16px 0;
    padding-left: 8px;
  }
`
