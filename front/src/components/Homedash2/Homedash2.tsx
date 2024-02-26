import React from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './Homedash2.css';

// import required modules
import { Pagination } from 'swiper/modules';

function Homedash2() {
  const [workouts, setWorkouts] = React.useState<any[] | null>(null)

  const getWorkouts = async () => {
    let data : any = [
      {
        "type": 'chest',
        "imageUrl": 'https://images.unsplash.com/photo-1690731033723-ad718c6e585a?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        "durationInMin": 90
      },
      {
        "type": 'back',
        "imageUrl": 'https://images.unsplash.com/photo-1434682881908-b43d0467b798?q=80&w=2374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        "durationInMin": 60
      },
      {
        "type": 'biceps',
        "imageUrl": 'https://images.unsplash.com/photo-1690731033723-ad718c6e585a?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        "durationInMin": 30
      },
      {
        "type": 'triceps',
        "imageUrl": '',
        "durationInMin": 45
      },
      {
        "type": 'shoulders',
        "imageUrl": '',
        "durationInMin": 60
      },
      {
        "type": 'legs',
        "imageUrl": '',
        "durationInMin": 90
      },
      {
        "type": 'abs',
        "imageUrl": '',
        "durationInMin": 30
      },
      {
        "type": 'cardio',
        "imageUrl": '',
        "durationInMin": 60
      },
      {
        "type": 'yoga',
        "imageUrl": '',
        "durationInMin": 60
      }
      ]
    } 
  }

  React.useEffect(() => {
    getWorkouts()
  }, [])

  return (
    <div>
      <h1 className="mainhead1">Workouts</h1>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Homedash2