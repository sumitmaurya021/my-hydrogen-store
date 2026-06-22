import { testimonialsData } from '~/data/testimonialsData';
import '~/assets/css/BlogTestimonials.css';

export function BlogTestimonials() {
  return (
    <section className="blog-testimonials-section">
      <div className="blog-testimonials-container">
        <h2 className="blog-testimonials-title">Real members powered by Peloton</h2>
        
        <div className="blog-testimonials-grid">
          {testimonialsData.map((testimonial) => {
            return (
              <div key={testimonial.id} className="testimonial-card">
                <p className="testimonial-author">
                  {testimonial.author}
                </p>
                <h3 className="testimonial-quote">
                  {testimonial.quote}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
