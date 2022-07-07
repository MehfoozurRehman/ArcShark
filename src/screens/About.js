import React from "react";
import aboutbanner from "../assets/Aboutbanner.png";
import AboutHeadingWrapper from "../assets/AboutHeadingWrapper.png";
import Aboutcards from "../components/Aboutcards";

export default function About() {
  return (
    <>
      <div className="about__overlay">
        <img src={aboutbanner} className="about__banner" alt="aboutbanner" />
        <div className="about__overlay__content">
          <div className="about__overlay__content__left">
            <div className="about__overlay__content__left__text">
              Nice to meet you!
            </div>
            <div className="about__overlay__content__left__heading">
              About our Company
            </div>
          </div>
          <div className="about__overlay__content__right">
            <div className="about__overlay__content__right__content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ut
              nesciunt aliquid aut cum eaque, facere quo, architecto sit
              perferendis, molestias quaerat voluptate et quis corrupti. Soluta,
              aliquam quaerat nisi cum tempora distinctio dolore laborum est nam
              dolor architecto expedita excepturi. Magni quam omnis dolorum
              perferendis, voluptatibus debitis libero itaque expedita molestias
              eveniet ipsum, quaerat porro aut ea architecto voluptate autem
              repellendus dolorem enim officia! Doloremque esse consequatur
              accusantium, quia molestias rerum nisi. Odit cupiditate eos quasi
              debitis nemo in, necessitatibus blanditiis assumenda reiciendis.
              Rem laboriosam assumenda, omnis officiis ipsum reprehenderit
              ducimus delectus dicta animi cumque fuga veniam a perspiciatis
              repellendus ratione magni eum aliquid ea temporibus? Eum in,
              maiores mollitia sed iste perspiciatis dolorum officiis
              praesentium iusto necessitatibus. Iure distinctio veniam, expedita
              saepe natus enim reiciendis laudantium neque nam quibusdam esse
              laboriosam minus delectus ipsam unde ratione obcaecati inventore
              quidem labore consectetur deleniti fugiat harum sapiente? Dolorum
              molestias error ipsa excepturi, dignissimos maxime eligendi
              dolores nobis nostrum. Quaerat, laudantium quasi. Facilis impedit
              beatae maiores vero? Hic dolore, quidem impedit tempora, quasi in
              facilis sunt velit quas fugiat, libero voluptates perferendis
              numquam? Incidunt odio nesciunt neque aspernatur amet tempore
              ratione voluptatum, quaerat quidem voluptates hic reiciendis in
              officiis ipsam architecto.
            </div>
          </div>
        </div>
      </div>
      <div className="about__section__two">
        <div className="about__heading__here__sec">
          <div className="about__heading__here__sec__heading">Heading here</div>
          <div className="about__heading__here__sec__text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </div>
        </div>
        <div className="about__heading__here__sec__wrapper">
          <img
            src={AboutHeadingWrapper}
            alt="AboutHeadingWrapper"
            className="about__heading__here__sec__wrapper__img"
          />
        </div>
        <div className="about__heading__here__sec__cards__row">
          <Aboutcards
            img={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="62.362"
                height="59.309"
                viewBox="0 0 62.362 59.309"
              >
                <defs>
                  <linearGradient
                    id="linear-gradient"
                    x1="0.5"
                    x2="0.5"
                    y2="1"
                    gradientUnits="objectBoundingBox"
                  >
                    <stop offset="0" stop-color="#5b57a4" />
                    <stop offset="1" stop-color="#c495c3" />
                  </linearGradient>
                </defs>
                <g
                  id="Group_539"
                  data-name="Group 539"
                  transform="translate(6786.065 -6361.691)"
                >
                  <path
                    id="Path_3180"
                    data-name="Path 3180"
                    d="M2.047,0H60.315a2.276,2.276,0,0,1,2.047,2.451V56.858a2.276,2.276,0,0,1-2.047,2.451H2.047A2.276,2.276,0,0,1,0,56.858V2.451A2.276,2.276,0,0,1,2.047,0Z"
                    transform="translate(-6723.703 6421) rotate(180)"
                    fill="url(#linear-gradient)"
                  />
                  <path
                    id="Icon_simple-elasticsearch"
                    data-name="Icon simple-elasticsearch"
                    d="M17.714,24.6H2.458a19.168,19.168,0,0,1,0-11.308H27.505A5.654,5.654,0,0,1,27.553,24.6ZM17,26.494H3.153A18.959,18.959,0,0,0,20.446,37.786a18.9,18.9,0,0,0,15.682-8.37,9.6,9.6,0,0,0-6.87-2.937ZM29.258,11.412a9.6,9.6,0,0,0,6.87-2.922A18.888,18.888,0,0,0,3.153,11.412H29.258Z"
                    transform="translate(-6773.751 6372.39)"
                    fill="#fff"
                  />
                </g>
              </svg>
            }
            title="Heading here"
            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
          />
          <Aboutcards
            img={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="62.362"
                height="59.309"
                viewBox="0 0 62.362 59.309"
              >
                <defs>
                  <linearGradient
                    id="linear-gradient"
                    x1="0.5"
                    x2="0.5"
                    y2="1"
                    gradientUnits="objectBoundingBox"
                  >
                    <stop offset="0" stop-color="#5b57a4" />
                    <stop offset="1" stop-color="#c495c3" />
                  </linearGradient>
                </defs>
                <g
                  id="Group_539"
                  data-name="Group 539"
                  transform="translate(6786.065 -6361.691)"
                >
                  <path
                    id="Path_3180"
                    data-name="Path 3180"
                    d="M2.047,0H60.315a2.276,2.276,0,0,1,2.047,2.451V56.858a2.276,2.276,0,0,1-2.047,2.451H2.047A2.276,2.276,0,0,1,0,56.858V2.451A2.276,2.276,0,0,1,2.047,0Z"
                    transform="translate(-6723.703 6421) rotate(180)"
                    fill="url(#linear-gradient)"
                  />
                  <path
                    id="Icon_simple-elasticsearch"
                    data-name="Icon simple-elasticsearch"
                    d="M17.714,24.6H2.458a19.168,19.168,0,0,1,0-11.308H27.505A5.654,5.654,0,0,1,27.553,24.6ZM17,26.494H3.153A18.959,18.959,0,0,0,20.446,37.786a18.9,18.9,0,0,0,15.682-8.37,9.6,9.6,0,0,0-6.87-2.937ZM29.258,11.412a9.6,9.6,0,0,0,6.87-2.922A18.888,18.888,0,0,0,3.153,11.412H29.258Z"
                    transform="translate(-6773.751 6372.39)"
                    fill="#fff"
                  />
                </g>
              </svg>
            }
            title="Heading here"
            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
          />
          <Aboutcards
            img={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="62.362"
                height="59.309"
                viewBox="0 0 62.362 59.309"
              >
                <defs>
                  <linearGradient
                    id="linear-gradient"
                    x1="0.5"
                    x2="0.5"
                    y2="1"
                    gradientUnits="objectBoundingBox"
                  >
                    <stop offset="0" stop-color="#5b57a4" />
                    <stop offset="1" stop-color="#c495c3" />
                  </linearGradient>
                </defs>
                <g
                  id="Group_539"
                  data-name="Group 539"
                  transform="translate(6786.065 -6361.691)"
                >
                  <path
                    id="Path_3180"
                    data-name="Path 3180"
                    d="M2.047,0H60.315a2.276,2.276,0,0,1,2.047,2.451V56.858a2.276,2.276,0,0,1-2.047,2.451H2.047A2.276,2.276,0,0,1,0,56.858V2.451A2.276,2.276,0,0,1,2.047,0Z"
                    transform="translate(-6723.703 6421) rotate(180)"
                    fill="url(#linear-gradient)"
                  />
                  <path
                    id="Icon_simple-elasticsearch"
                    data-name="Icon simple-elasticsearch"
                    d="M17.714,24.6H2.458a19.168,19.168,0,0,1,0-11.308H27.505A5.654,5.654,0,0,1,27.553,24.6ZM17,26.494H3.153A18.959,18.959,0,0,0,20.446,37.786a18.9,18.9,0,0,0,15.682-8.37,9.6,9.6,0,0,0-6.87-2.937ZM29.258,11.412a9.6,9.6,0,0,0,6.87-2.922A18.888,18.888,0,0,0,3.153,11.412H29.258Z"
                    transform="translate(-6773.751 6372.39)"
                    fill="#fff"
                  />
                </g>
              </svg>
            }
            title="Heading here"
            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
          />
        </div>
      </div>
    </>
  );
}
