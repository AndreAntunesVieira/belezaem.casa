import TestimonialsDB from '../../../models/TestimonialsDB'

export default async function getAllTestimonials(_req, res) {
  return new TestimonialsDB()
    .all()
    .then(testimonials => res.json({ testimonials }))
    .catch(e => {
      console.log(e)
      res.json({ message: 'error' })
    })
}
