import ModelBase from '../vendor/ModelBase'

export default class SchedulesDB extends ModelBase {
  static tableName = 'schedules'

  async nextSchedules() {
    return this.table
      .whereRaw('date >= current_date')
      .innerJoin('users', 'users.id', 'schedules.user_id')
      .orderBy('date')
      .select({
        id: 'schedules.id',
        date: 'date',
        title: 'title',
        client: 'client',
        user: 'users.slug',
      })
      .then(this.disconnect)
  }

  async delete(id: number) {
    return this.table.where({ id }).del()
  }

  async saveSchedule(data) {
    return this.table.insert(data)
  }
}
