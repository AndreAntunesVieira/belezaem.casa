import TestimonialsDB from '../../models/TestimonialsDB'

export default async function getAllTestimonials(_req, res) {
  try {
    const testimonials = await new TestimonialsDB().all()
    res.json({ testimonials })
  } catch (e) {
    console.log(e)
    return res.json({ message: 'error' })
  }
}
