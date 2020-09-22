import Router from './vendor/Router'

const routes = new Router()

routes.post('schedules', 'SchedulesController.create')
routes.get('schedules/next', 'SchedulesController.next')
routes.delete('schedules/:id', 'SchedulesController.delete')

routes.get('testimonials', 'TestimonialsController.index')

routes.post('users/sign-in', 'UsersController.signIn')

export default routes
