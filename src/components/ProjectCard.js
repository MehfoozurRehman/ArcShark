import React, { useContext } from "react";
import { ProjectDetailsVisibleContext } from "../App";
import { project } from "../assets";

export function ProjectCard({ hovertext }) {
  const setProjectDetailsVisible = useContext(ProjectDetailsVisibleContext);
  return (
    <a
      onClick={() => {
        setProjectDetailsVisible(true);
        window.scrollTo(0, 0);
      }}
      className="home__content__entry"
    >
      <img src={project} alt="project" className="home__content__entry__img" />
      <div className="home__content__entry__overlay">
        <div className="home__content__entry__overlay__header">
          <div className="home__content__entry__overlay__header__heading">
            Project Name Here
          </div>
          <div className="home__content__entry__overlay__header__row">
            <div className="home__content__entry__overlay__header__row__name">
              Arslan Goursi
            </div>
            <div className="home__content__entry__overlay__header__row__stats">
              <div className="home__content__entry__overlay__header__row__stats__entry">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14.196"
                  height="14.196"
                  viewBox="0 0 14.196 14.196"
                >
                  <path
                    id="Icon_awesome-thumbs-up"
                    data-name="Icon awesome-thumbs-up"
                    d="M2.883,6.211H.665A.665.665,0,0,0,0,6.876V13.53a.665.665,0,0,0,.665.665H2.883a.665.665,0,0,0,.665-.665V6.876A.665.665,0,0,0,2.883,6.211ZM1.774,13.087a.665.665,0,1,1,.665-.665A.665.665,0,0,1,1.774,13.087ZM10.647,2.258c0,1.176-.72,1.836-.923,2.621h2.82A1.657,1.657,0,0,1,14.2,6.491a2.007,2.007,0,0,1-.539,1.364l0,0a2.316,2.316,0,0,1-.258,2.2,2.192,2.192,0,0,1-.454,2.073,1.472,1.472,0,0,1-.17,1.237c-.566.813-1.968.824-3.154.824H9.537a7.959,7.959,0,0,1-3.315-.88,4.363,4.363,0,0,0-1.46-.449.333.333,0,0,1-.327-.333V6.608a.332.332,0,0,1,.1-.236c1.1-1.085,1.571-2.234,2.471-3.136A3.358,3.358,0,0,0,7.71,1.6c.123-.513.381-1.6.941-1.6C9.316,0,10.647.222,10.647,2.258Z"
                    fill="#fff"
                  />
                </svg>
                90k
              </div>
              <div className="home__content__entry__overlay__header__row__stats__entry">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15.049"
                  height="10.033"
                  viewBox="0 0 15.049 10.033"
                >
                  <path
                    id="Icon_awesome-eye"
                    data-name="Icon awesome-eye"
                    d="M14.958,9.135A8.38,8.38,0,0,0,7.525,4.5,8.381,8.381,0,0,0,.091,9.135a.845.845,0,0,0,0,.763,8.38,8.38,0,0,0,7.434,4.635A8.381,8.381,0,0,0,14.958,9.9.845.845,0,0,0,14.958,9.135ZM7.525,13.279a3.762,3.762,0,1,1,3.762-3.762A3.762,3.762,0,0,1,7.525,13.279Zm0-6.27a2.49,2.49,0,0,0-.661.1A1.25,1.25,0,0,1,5.115,8.855,2.5,2.5,0,1,0,7.525,7.008Z"
                    transform="translate(0 -4.5)"
                    fill="#fff"
                  />
                </svg>
                120k
              </div>
            </div>
          </div>
        </div>
        <div className="home__content__entry__overlay__info">{hovertext}</div>
      </div>
    </a>
  );
}
