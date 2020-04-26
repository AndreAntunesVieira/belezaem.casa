import SchedulesDB from '../../models/SchedulesDB'

export default async function fetchNextSchedules(_req, res) {
  try {
    const schedules = await new SchedulesDB().nextSchedules()
    const days = []
    let currentDay = ''
    schedules.forEach(schedule => {
      const day = schedule.date.replace(/T.*/, '').replace(/(.+)-(.+)-(.+)/, '$3/$2/$1')
      if (currentDay !== day) {
        currentDay = day
        const weekDay = getWeekDay(schedule.date)
        days.push({ day: currentDay, weekDay, schedules: [] })
      }
      schedule.hour = schedule.date.replace(/(.+)-(.+)-(.+)T(.+):(.+):.*/, '$4:$5')
      days[days.length - 1].schedules.push(schedule)
    })
    res.json({ days })
  } catch (e) {
    console.log(e)
    return res.json({ message: 'error' })
  }
}

function getWeekDay(date) {
  const weekDayNumber = new Date(date).getDay()
  const days = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo']
  return days[weekDayNumber - 1]
}
