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
        'imageUrl': 'https://images.unsplash.com/photo-1683587023194-a24e5b6549b0?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        "durationInMin": 30
      },
      {
        "type": 'triceps',
        "imageUrl": 'https://images.unsplash.com/photo-1618355281112-e1c89201b2d7?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        "durationInMin": 45
      },
      {
        "type": 'shoulders',
        "imageUrl": 'https://images.unsplash.com/photo-1603309288253-08db72e5117d?q=80&w=2934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        "durationInMin": 60
      },
      {
        "type": 'legs',
        "imageUrl": 'https://images.unsplash.com/photo-1516481157630-05bc0aeb8b19?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        "durationInMin": 90
      },
      {
        "type": 'abs',
        "imageUrl": 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        "durationInMin": 30
      },
      {
        "type": 'cardio',
        "imageUrl": 'https://images.unsplash.com/photo-1517931524326-bdd55a541177?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        "durationInMin": 60
      },
      {
        "type": 'yoga',
        "imageUrl": 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=3020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        "durationInMin": 60
      }
      ]
      setWorkouts(data);
    }  


  React.useEffect(() => {
    getWorkouts()
  }, [])

  return (
    <div className="main">
      <h1 className="mainhead1">Workouts</h1>
      <Swiper
      className="swiper-container"
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
      {workouts && workouts.map((item: any, index:number) => {
        return(

          <SwiperSlide key={index}> 
            <div className="swiper-slide"
              style={{
                backgroundImage: `url(${item.imageUrl})`,
                objectFit: 'contain',
              }}
            > 
            <div className="swiper-slide-content"> 
                <h2>{item.type}</h2>
                <p>{item.durationInMin}</p>
              </div>
            </div>
          </SwiperSlide>
        )
      })
      }
      </Swiper>
    </div>
  )
      }

export default Homedash2