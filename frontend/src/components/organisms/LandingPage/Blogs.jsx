/* eslint-disable no-unused-expressions */
import React from 'react';
import { register } from 'swiper/element';
import { motion } from 'framer-motion';
import SectionHeader from '../../molecules/LandingPage/SectionHeader';
import { blogs } from '../../../shared/constants';
import SliderNavigation from '../../molecules/LandingPage/SliderNavigation';
import Blog from '../../molecules/LandingPage/Blog';
import { centerVariants } from '../../../shared/constants/motion';

register();
function Blogs() {
  const sliderRef = React.useRef(null);
  const swiperParams = {
    spaceBetween: 16,
    grabCursor: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      992: {
        slidesPerView: 2,
      },
    },
  };
  React.useEffect(
    () => {
      sliderRef.current && Object.assign(sliderRef.current, swiperParams);
    },
    [],
  );
  return (
    <section id="blog">
      <div className="container">
        <div className="flex flex-col gap-y-24">
          <SectionHeader
            title="Resources"
            link="#"
          />

          <motion.div
            variants={centerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ margin: '0px 0px -200px 0px', once: true }}
            className="flex flex-col gap-y-4"
          >
            <swiper-container ref={sliderRef}>
              {
                blogs.map(blog => (
                  <swiper-slide key={blog.id}>
                    <Blog
                      id={blog.id}
                      title={blog.title}
                      description={blog.description}
                      thumbnail={blog.thumbnail}
                    />
                  </swiper-slide>
                ))
              }
            </swiper-container>
            <SliderNavigation ref={sliderRef} />
          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default Blogs;
