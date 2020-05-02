import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import CreateScheduleModal from '../components/Modals/CreateScheduleModal'
import Menu from './Menu'

const getNextSchedules = async () => {
  const res = await fetch(`/api/next-schedules`).catch(_e => null)
  const content = await res.json().catch(_e => null)
  return content.days || []
}

export default function SignedSchedule({ onSignOut }) {
  const [days, setDays] = useState([])
  const [activeModal, setActiveModal] = useState(false)
  const updateSchedule = () => getNextSchedules().then(days => setDays(days))
  useEffect(() => {
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
      {activeModal && <CreateScheduleModal setActiveModal={setActiveModal} updateSchedule={updateSchedule} />}
      <Menu>
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
