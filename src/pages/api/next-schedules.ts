import SchedulesDB from '../../models/SchedulesDB'

export default async function fetchNextSchedules(_req, res) {
  try {
    const schedules = await new SchedulesDB().nextSchedules()
    const days = joinSchedulesByDay(schedules)
    res.json({ days })
  } catch (e) {
    if (e.message.match(/too many connections/)) {
      res.status(400)
      return res.json({
        days: [],
        error: 'Site sobrecarregado, tente novamente em 1 minuto',
      })
    }
    console.log(e)
    res.status(400)
    res.json({
      days: [],
      error: e.message,
    })
  }
}

function joinSchedulesByDay(schedules) {
  const days = []
  let currentDay = ''
  schedules.forEach(schedule => {
    const date = schedule.date.toISOString()
    const day = date.replace(/T.*/, '').replace(/(.+)-(.+)-(.+)/, '$3/$2/$1')
    if (currentDay !== day) {
      currentDay = day
      const weekDay = getWeekDay(date)
      days.push({ day: currentDay, weekDay, schedules: [] })
    }
    schedule.hour = date.replace(/(.+)-(.+)-(.+)T(.+):(.+):.*/, '$4:$5')
    days[days.length - 1].schedules.push(schedule)
  })
  return days
}

function getWeekDay(date) {
  const weekDayNumber = new Date(date).getDay()
  const days = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  return days[weekDayNumber]
}
