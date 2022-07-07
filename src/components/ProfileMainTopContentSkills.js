import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

export function ProfileMainTopContentSkills({ slidesPerPage }) {
  return (
    <Swiper slidesPerView={slidesPerPage} spaceBetween={20}>
      <SwiperSlide>
        <div className="user__profile__content__main__top__content__entry">
          <div className="user__profile__content__main__top__content__entry__heading">
            Skill Name
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="user__profile__content__main__top__content__entry">
          <div className="user__profile__content__main__top__content__entry__heading">
            Skill Name
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="user__profile__content__main__top__content__entry">
          <div className="user__profile__content__main__top__content__entry__heading">
            Skill Name
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="user__profile__content__main__top__content__entry">
          <div className="user__profile__content__main__top__content__entry__heading">
            Skill Name
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="user__profile__content__main__top__content__entry">
          <div className="user__profile__content__main__top__content__entry__heading">
            Skill Name
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="user__profile__content__main__top__content__entry">
          <div className="user__profile__content__main__top__content__entry__heading">
            Skill Name
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="user__profile__content__main__top__content__entry">
          <div className="user__profile__content__main__top__content__entry__heading">
            Skill Name
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
