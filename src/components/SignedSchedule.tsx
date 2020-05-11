import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import CreateScheduleModal from '../components/Modals/CreateScheduleModal'
import Menu from './Menu'
import A from './common/A'
import request from '../helpers/Request'
import Notification from './Notification'
import FullNotification from './FullNotification'
import EditScheduleModal from './Modals/EditScheduleModal'

export default function SignedSchedule({ onSignOut, user }) {
  const [days, setDays] = useState([])
  const [addModal, setAddModal] = useState(false)
  const [editModal, setEditModal] = useState(null)
  const [fetching, setFetching] = useState(true)
  const [error, setError] = useState(false)
  const openScheduleEditModal = schedule => {
    setEditModal(schedule)
  }
  const updateSchedule = async () => {
    setFetching(true)
    return request('schedules/next')
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
    setAddModal(true)
  }
  return (
    <>
      {days.map(({ day, weekDay, schedules }) => (
        <Day key={day}>
          <h3>
            {day} ({weekDay})
          </h3>
          <div>
            {schedules.map((schedule: any, key) => (
              <Schedule className={schedule.user} key={key} onClick={() => openScheduleEditModal(schedule)}>
                <small>
                  {schedule.user} - {schedule.hour}
                </small>
                <h4>{schedule.title}</h4>
                <div>Cliente: {schedule.client}</div>
              </Schedule>
            ))}
          </div>
        </Day>
      ))}
      {fetching ? (
        <FullNotification className="ColorBlue P16">Carregando novos atendimentos...</FullNotification>
      ) : (
        <>
          {days.length === 0 && <Notification className="ColorRed P16">Não há atendimentos previstos</Notification>}
          {error && <Notification className="ColorRed P16">{error}</Notification>}
        </>
      )}
      {addModal && (
        <CreateScheduleModal
          user={user}
          setActiveModal={setAddModal}
          setFetching={setFetching}
          updateSchedule={updateSchedule}
        />
      )}
      {editModal && (
        <EditScheduleModal
          schedule={editModal}
          setActiveModal={setEditModal}
          setFetching={setFetching}
          updateSchedule={updateSchedule}
        />
      )}
      <Menu>
        <A href="/">Voltar</A>
        <div className="MainMenuItem" onClick={() => openScheduleModal()}>Marcar atendimento</div>
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
