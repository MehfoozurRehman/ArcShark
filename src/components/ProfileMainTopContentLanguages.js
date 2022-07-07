import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

export function ProfileMainTopContentLanguages({ slidesPerPage }) {
  return (
    <Swiper slidesPerView={slidesPerPage} spaceBetween={20}>
      <SwiperSlide>
        <div className="user__profile__content__main__top__content__entry">
          <div className="user__profile__content__main__top__content__entry__heading">
            English
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="user__profile__content__main__top__content__entry">
          <div className="user__profile__content__main__top__content__entry__heading">
            French
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="user__profile__content__main__top__content__entry">
          <div className="user__profile__content__main__top__content__entry__heading">
            Chinese
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="user__profile__content__main__top__content__entry">
          <div className="user__profile__content__main__top__content__entry__heading">
            Urdu
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="user__profile__content__main__top__content__entry">
          <div className="user__profile__content__main__top__content__entry__heading">
            African
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="user__profile__content__main__top__content__entry">
          <div className="user__profile__content__main__top__content__entry__heading">
            German
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="user__profile__content__main__top__content__entry">
          <div className="user__profile__content__main__top__content__entry__heading">
            Dutch
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
