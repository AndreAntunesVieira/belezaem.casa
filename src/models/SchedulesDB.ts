import DB from './DB'

export default class SchedulesDB extends DB {
  static collection = 'schedules'
  async nextSchedules() {
    await this.connect()
    return this.collection
      .find({ date: { $gt: new Date().toISOString() } })
      .sort({ date: 1 })
      .toArray()
  }
  async saveSchedule(data) {
    await this.connect()
    return this.collection.insert(data)
  }
}
