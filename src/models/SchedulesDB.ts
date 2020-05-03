import DB from './DB'

export default class SchedulesDB extends DB {
  static tableName = 'schedules'

  async nextSchedules() {
    return this.table
      .where('date', '>', new Date())
      .innerJoin('users', 'users.id', 'schedules.user_id')
      .orderBy('date')
      .select({
        date: 'date',
        title: 'title',
        client: 'client',
        user: 'users.slug',
      })
      .then(this.disconnect)
  }

  async saveSchedule(data) {
    return this.table.insert(data)
  }
}
