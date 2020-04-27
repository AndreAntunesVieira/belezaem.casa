import SchedulesDB from '../../models/SchedulesDB'

export default function schedules(req, res) {
  if (req.method !== 'POST') {
    res.statusCode(404)
    return res.send('')
  }
  const data = req.body
  data.date += `T${data.time}:00`
  delete data.time
  new SchedulesDB()
    .saveSchedule(req.body)
    .then(() => {
      res.json({})
    })
    .catch(e => {
      console.log(e)
      res.statusCode(400)
      res.send(e.message)
    })
}
