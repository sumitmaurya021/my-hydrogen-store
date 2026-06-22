import { Link } from 'react-router';
import { workoutClassesData } from '~/data/workoutClassesData';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '~/assets/css/WorkoutClasses.css';

export function WorkoutClasses() {
  return (
    <section className="workout-classes-section">
      <div className="workout-classes-header">
        <h2 className="workout-classes-heading">{workoutClassesData.heading}</h2>
        <p className="workout-classes-subheading">{workoutClassesData.subheading}</p>
        <Link to={workoutClassesData.buttonLink} className="workout-classes-button">
          {workoutClassesData.buttonText}
        </Link>
      </div>

      <div className="workout-classes-slider">
        <Swiper
          modules={[Pagination, Navigation]}
          spaceBetween={20}
          slidesPerView={1.2}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            480: {
              slidesPerView: 2.2,
            },
            768: {
              slidesPerView: 3.5,
            },
            1024: {
              slidesPerView: 4.5,
            },
            1280: {
              slidesPerView: 5.5,
            }
          }}
        >
          {workoutClassesData.classes.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="workout-class-card">
                <div className="workout-class-image-wrapper">
                  <img src={item.imageUrl} alt={item.title} loading="lazy" />
                  <div 
                    className="workout-class-icon"
                    dangerouslySetInnerHTML={{ __html: item.iconSvg }}
                  />
                </div>
                <h3 className="workout-class-title">{item.title}</h3>
                <Link to={item.linkUrl} className="workout-class-link">
                  {item.linkText}
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
