import React, { useEffect, useState } from 'react'
import CreateScheduleModal from '../components/Modals/CreateScheduleModal'
import Menu from './Menu'
import A from './common/A'
import request from '../helpers/Request'
import Notification from './Notification'
import FullNotification from './FullNotification'
import EditScheduleModal from './Modals/EditScheduleModal'

export default function SignedCostumers({ onSignOut, user }) {
  const [costumers, setCostumers] = useState([])
  const [addModal, setAddModal] = useState(false)
  const [editModal, setEditModal] = useState(null)
  const [fetching, setFetching] = useState(true)
  const [error, setError] = useState(false)
  const openCostumerEditModal = schedule => {
    setEditModal(schedule)
  }
  const updateSchedule = async () => {
    setFetching(true)
    return request('costumers')
      .then(({ costumers }) => setCostumers(costumers))
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
      <div>
        {costumers.map((costumer: any, key) => (
          <div className="schedule" key={key} onClick={() => openCostumerEditModal(costumer)}>
            <h4>Nome: {costumer.name}</h4>
            <div>Aniversário: <b>{parseDateBr(costumer.birthDate)}</b></div>
            <div>Cadastrada(o) em: <b>{parseDatetimeBr(costumer.createdAt)}</b></div>
            <div>Telefone: <b>{costumer.phone}</b></div>
          </div>
        ))}
      </div>
      {fetching ? (
        <FullNotification className="ColorBlue P16">Carregando clientes...</FullNotification>
      ) : (
        <>{error && <Notification className="ColorRed P16">{error}</Notification>}</>
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
        <A href="/agenda"  >Marcar atendimento</A>
        <div onClick={() => openScheduleModal()}className="MainMenuItem">
          Clientes
        </div>
        <div onClick={() => onSignOut()}>Sair</div>
      </Menu>
    </>
  )
}

function parseDateBr(date){
  if(!date) return date
  return date.replace(/(\d{4})-(\d{2})-(\d{2}).*/, '$3/$2/$1')
}

function parseDatetimeBr(date){
  if(!date) return date
  return date.replace(/(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}).*/, '$3/$2/$1 $4:$5')
}
