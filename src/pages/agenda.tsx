import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import CreateScheduleModal from '../components/Modals/CreateScheduleModal'

const getNextSchedules = async () => {
  const res = await fetch(`/api/next-schedules`).catch(_e => null)
  const content = await res.json().catch(_e => null)
  return content.days || []
}

export default function Agenda() {
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
      {activeModal && <CreateScheduleModal setActiveModal={setActiveModal} updateSchedule={updateSchedule} />}
      <Menu>
        <div onClick={() => openScheduleModal()}>Marcar atendimento</div>
      </Menu>
    </Container>
  )
}

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
