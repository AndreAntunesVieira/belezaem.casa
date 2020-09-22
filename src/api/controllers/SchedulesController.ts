import BaseController from '../vendor/BaseController'

export default class SchedulesController extends BaseController {
  SchedulesDB: any
  UserDB: any

  async create() {
    const data = this.body
    data.date += `T${data.time}:00`
    delete data.time
    const user: any = await this.UserDB.findBySlug(this.body.user)
    delete data.user
    data.user_id = user.id
    return this.SchedulesDB.saveSchedule(data)
  }

  async next() {
    const schedules = await this.SchedulesDB.nextSchedules()
    this.setHeader('Cache-Control', 'no-cache')
    const days = this.joinSchedulesByDay(schedules)
    return { days }
  }

  async delete() {
    await this.SchedulesDB.delete(Number(this.queryParams.id))
    return { message: 'deleted' }
  }

  private joinSchedulesByDay(schedules) {
    const days = []
    let currentDay = ''
    schedules.forEach(schedule => {
      const date = schedule.date.toISOString()
      const day = date.replace(/T.*/, '').replace(/(.+)-(.+)-(.+)/, '$3/$2/$1')
      if (currentDay !== day) {
        currentDay = day
        const weekDay = this.getWeekDay(date)
        days.push({ day: currentDay, weekDay, schedules: [] })
      }
      schedule.hour = date.replace(/(.+)-(.+)-(.+)T(.+):(.+):.*/, '$4:$5')
      days[days.length - 1].schedules.push(schedule)
    })
    return days
  }

  private getWeekDay(date) {
    const weekDayNumber = new Date(date).getDay()
    const days = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    return days[weekDayNumber]
  }
}
