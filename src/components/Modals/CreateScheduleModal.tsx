import React from 'react'
import styled from 'styled-components'
import Button from '../Button'
import ModalBase from './ModalBase'

const saveSchedule = async data => {
  const res = await fetch(`/api/schedules`, {
    method: 'post',
    body: JSON.stringify(data),
    headers: { 'content-type': 'application/json' },
  }).catch(_e => null)
  return res.json().catch(_e => null)
}

const CreateScheduleModal = ({ setActiveModal, updateSchedule }) => {
  const onSchedule = e => {
    e.preventDefault()
    const data = serializeForm(e.target)
    const sufix = 'preencha todos os campos'
    if (!data.user) return alert(`Quem vai atender? ${sufix}`)
    if (!data.title) return alert(`Título do atendimento faltando, ${sufix}`)
    if (!data.date) return alert(`Data do atendimento faltando, ${sufix}`)
    if (!data.time) return alert(`Horário do atendimento faltando, ${sufix}`)
    setActiveModal(false)
    saveSchedule(data)
      .then(() => updateSchedule())
    return data
  }
  return (
    <Container onClick={_e => setActiveModal(false)}>
      <form onClick={e => e.stopPropagation()} onSubmit={onSchedule}>
        <h4>Marcar atendimento</h4>

        <div className="form-control">
          <label>Quem fará o atendimento?</label>
          <select name="user">
            <option value="">Escolha</option>
            <option value="gaby">Gaby</option>
            <option value="thay">Thay</option>
          </select>
        </div>

        <div className="form-control">
          <label>Qual é o atendimento</label>
          <textarea placeholder="Título do atendimento" name="title" />
        </div>

        <div className="form-control">
          <label>Que dia será?</label>
          <input placeholder="dd/mm/aaaa" type="date" name="date" />
        </div>

        <div className="form-control">
          <label>Que horas será o atendimento</label>
          <input placeholder="hh:mm" type="time" name="time" />
        </div>
        <Button className="btn-success">Salvar</Button>
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

export default CreateScheduleModal

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
