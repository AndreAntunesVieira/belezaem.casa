import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import CreateScheduleModal from '../components/Modals/CreateScheduleModal'
import Menu from './Menu'
import A from './common/A'
import request from '../helpers/Request'

export default function SignedSchedule({ onSignOut, user }) {
  const [days, setDays] = useState([])
  const [activeModal, setActiveModal] = useState(false)
  const [fetching, setFetching] = useState(false)
  const [error, setError] = useState(false)
  const updateSchedule = async () => {
    setFetching(true)
    return request(`next-schedules`)
      .then(({ days }) => setDays(days))
      .catch(e => {
        setError(e.error)
      })
      .then(() => setFetching(false))
  }
  useEffect(() => {
    setFetching(true)
    updateSchedule()
  }, [])
  const openScheduleModal = () => {
    setActiveModal(true)
  }
  return (
    <>
      {days.map(({ day, weekDay, schedules }) => (
        <Day key={day}>
          <h3>
            {day} ({weekDay})
          </h3>
          <div>
            {schedules.map(({ user, hour, title, client }) => (
              <Schedule className={user} key={hour}>
                <small>
                  {user} - {hour}
                </small>
                <h4>{title}</h4>
                <div>Cliente: {client}</div>
              </Schedule>
            ))}
          </div>
        </Day>
      ))}
      {fetching ? (
        <div className="ColorBlue P16">Carregando novos atendimentos...</div>
      ) : (
        <>
          {days.length === 0 && <div className="ColorRed P16">Não há atendimentos previstos</div>}
          {error && <div className="ColorRed P16">{error}</div>}
        </>
      )}
      {activeModal && (
        <CreateScheduleModal user={user} setActiveModal={setActiveModal} updateSchedule={updateSchedule} />
      )}
      <Menu>
        <A href="/">Voltar</A>
        <div onClick={() => openScheduleModal()}>Marcar atendimento</div>
        <div onClick={() => onSignOut()}>Sair</div>
      </Menu>
    </>
  )
}

const Schedule = styled.div`
  padding: 8px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  &.gaby {
    background-color: rgba(255, 0, 255, 0.31);
  }
  &.thay {
    background-color: rgba(255, 255, 0, 0.31);
  }
  &:first-child {
    border-top: 2px solid rgba(0, 0, 0, 0.6);
  }
  &:last-child {
    border-bottom: 2px solid rgba(0, 0, 0, 0.6);
    margin-bottom: 32px;
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
