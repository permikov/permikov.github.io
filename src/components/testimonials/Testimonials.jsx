import React from 'react';
import shapeOne from '../../asserts/shape-1.png';
import shapeTwo from '../../asserts/shape-2.png';
import testimonialIcon from '../../asserts/testimonial-icon.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';
import './testimonials.css';
import { testimonials } from '../../Data';


const Testimonials = () => {
  return (
    <section className="testimonials section" id="testimonials">
        <h2 className="section__title text-cs">Отзывы</h2>
        <p className="section__subtitle">
            Моя <span>Обратная Связь</span>
        </p>
        <Swiper
            spaceBetween={30}
            pagination={{
                clickable: true,
            }}
            breakpoints={{
                540: {
                    slidesPerView: 1,
                    spaceBetween: 30,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 40,
                },
            }}
            modules={[Pagination]}
            className="testimonials__container container mySwiper">
            {testimonials.map(({img, name, author, description}, index) => {
                return (
                    <SwiperSlide className="testimonials__item card card-one" key={index}>
                        <div className="testimonial__header">
                            <div className="testimonial__icon">
                                <img src={testimonialIcon} alt="" />
                            </div>
                            <img src={img} alt="" className="testimonial__img" />
                        </div>
                        <p className="testimonial__description">{description}</p>
                        <h3 className="testimonial__name">{name}</h3>
                        <p className="testimonial__author">{author}</p>
                        <img src={shapeTwo} alt="" className="shape c__shape" />
                    </SwiperSlide>
                );
            })}
        </Swiper>
        <div className='section__deco deco__right'>
            <img src={shapeOne} alt='' className='shape'/>
        </div>
        <div className="section__bg-wrapper">
            <span className="bg__title">Отзывы</span>
        </div>
    </section>
  );
};

export default Testimonials;
