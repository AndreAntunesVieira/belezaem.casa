import SchedulesDB from '../../models/SchedulesDB'

export default async function schedules(req, res) {
  if (req.method !== 'DELETE') {
    res.statusCode(404)
    return res.send('')
  }
  await new SchedulesDB().delete(Number(req.query.id))
  return res.json({ message: 'deleted' })
}
