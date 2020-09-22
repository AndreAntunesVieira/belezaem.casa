import React from 'react'
import styled from 'styled-components'
import Button from '../Button'
import ModalBase from './ModalBase'
import request from '../../helpers/Request'

const saveSchedule = async (id, data) => {
  const res = await fetch(`/api/schedules/${id}`, {
    method: 'put',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' },
  }).catch(_e => null)
  return res.json().catch(_e => null)
}

const EditScheduleModal = ({ setActiveModal, updateSchedule, setFetching, schedule }) => {
  const date = schedule.date.replace(/T.*/, '')
  const hour = schedule.date.replace(/.*T(\d{2}:\d{2}).*/, '$1')
  const onDelete = async e => {
    e.preventDefault()
    setFetching(true)
    setActiveModal(false)
    await request(`schedules/${schedule.id}`, { method: 'delete' })
    setFetching(false)
    updateSchedule()
  }
  const onSchedule = e => {
    setFetching(true)
    e.preventDefault()
    const data = serializeForm(e.target)
    const sufix = 'preencha todos os campos'
    if (!data.user) return alert(`Quem vai atender? ${sufix}`)
    if (!data.title) return alert(`Título do atendimento faltando, ${sufix}`)
    if (!data.date) return alert(`Data do atendimento faltando, ${sufix}`)
    if (!data.time) return alert(`Horário do atendimento faltando, ${sufix}`)
    setActiveModal(false)
    saveSchedule(schedule.id, data).then(() => updateSchedule())
    return data
  }
  return (
    <Container onClick={_e => setActiveModal(false)}>
      <form onClick={e => e.stopPropagation()} onSubmit={onSchedule}>
        <h4>Marcar atendimento</h4>

        <div className="form-control">
          <label>Quem fará o atendimento?</label>
          <select name="user" defaultValue={schedule.user}>
            <option value="">Escolha</option>
            <option value="gaby">Gaby</option>
            <option value="thay">Thay</option>
          </select>
        </div>

        <div className="form-control">
          <label>Nome da cliente</label>
          <textarea placeholder="Digite o nome" name="client" defaultValue={schedule.client} />
        </div>

        <div className="form-control">
          <label>Qual é o atendimento</label>
          <textarea placeholder="Título do atendimento" name="title" defaultValue={schedule.title} />
        </div>

        <div className="form-control">
          <label>Que dia será?</label>
          <input placeholder="dd/mm/aaaa" type="date" name="date" defaultValue={date} />
        </div>

        <div className="form-control">
          <label>Que horas será o atendimento</label>
          <input placeholder="hh:mm" type="time" name="time" defaultValue={hour} />
        </div>
        <div className="flex jc-end">
          <Button className="btn-danger MR8" onClick={onDelete}>
            Apagar
          </Button>
          <Button className="btn-success">Salvar</Button>
        </div>
      </form>
    </Container>
  )
}

const Container = styled(ModalBase)`
  textarea {
    min-height: 40px;
  }
  button {
    align-self: flex-end;
  }
`

export default EditScheduleModal

export function serializeForm(formElement) {
  const inputs: any[] = formElement.querySelectorAll('input, select, textarea,[aria-selected=true],[aria-checked=true]')
  return Object.values(inputs).reduce((obj, input) => {
    const name = input.name || input.dataset.name
    const value = input.value || input.dataset.value
    if (!name || !value) return obj
    return {
      ...obj,
      ...fromDotObject(value, name, obj),
    }
  }, {})
}

function fromDotObject(value, name, obj) {
  if (!name.match(/.*\..*/)) return { [name]: value }
  const [base, field] = name.split(/\.(.+)/)
  return {
    [base]: { ...obj[base], [field]: value },
  }
}
