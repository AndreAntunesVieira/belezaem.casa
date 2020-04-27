import SchedulesDB from '../../models/SchedulesDB'

export default async function fetchNextSchedules(_req, res) {
  try {
    const schedules = await new SchedulesDB().nextSchedules()
    console.log(schedules)
    const days = joinSchedulesByDay(schedules)
    res.json({ days })
  } catch (e) {
    console.log(e)
    res.json({
      DATABASE_URL: process.env.DATABASE_URL,
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
  const days = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo']
  return days[weekDayNumber - 1]
}
