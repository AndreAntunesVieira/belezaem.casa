import DB from './DB'

export default class SchedulesDB extends DB {
  static tableName = 'schedules'

  async nextSchedules() {
    return this.table
      .where('date', '>', new Date())
      .orderBy('date')
  }

  async saveSchedule(data) {
    return this.table.insert(data)
  }
}
