import SchedulesDB from '../../models/SchedulesDB'
import UserDB from '../../models/UserDB'

export default async function index(req, res) {
  console.log('h1', req.body)
  if (req.method !== 'POST') {
    res.statusCode(404)
    return res.send('')
  }
  const data = req.body
  data.date += `T${data.time}:00`
  delete data.time
  const user: any = await new UserDB().findBySlug(req.body.user)
  delete data.user
  data.user_id = user.id
  new SchedulesDB()
    .saveSchedule(data)
    .then(() => {
      res.json(data)
    })
    .catch(e => {
      console.log(e)
      res.statusCode(400)
      res.send(e.message)
    })
}
