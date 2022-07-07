import React from "react";
import { MapPin } from "react-feather";
import { homebanner, Socialbanner } from "../assets";
import { HomeScreenFilterSelect } from "./HomeScreenFilterSelect";
import { HomeScreenRoleFilter } from "./HomeScreenRoleFilter";

export function HomeJumbotron({
  noFilter,
  location,
  selectedRole,
  setSelectedRole,
}) {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  return (
    <div className="home__jumbotron">
      <img
        src={selectedRole === "People" ? Socialbanner : homebanner}
        alt={selectedRole === "People" ? "Socialbanner" : "homebanner"}
        className="home__jumbotron__img"
      />
      <div className="home__jumbotron__overlay">
        <form className="home__jumbotron__overlay__form">
          <div className="home__jumbotron__overlay__form__top">
            <div className="home__jumbotron__overlay__form__top__input">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25.621"
                height="25.621"
                viewBox="0 0 30.621 30.621"
              >
                <g
                  id="Icon_feather-search"
                  data-name="Icon feather-search"
                  transform="translate(-3 -3)"
                >
                  <path
                    id="Path_7"
                    data-name="Path 7"
                    d="M28.5,16.5a12,12,0,1,1-12-12A12,12,0,0,1,28.5,16.5Z"
                    fill="none"
                    stroke="#fff"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="3"
                  />
                  <path
                    id="Path_8"
                    data-name="Path 8"
                    d="M31.5,31.5l-6.525-6.525"
                    fill="none"
                    stroke="#fff"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="3"
                  />
                </g>
              </svg>
              <input
                type="search"
                autoFocus
                className="home__jumbotron__overlay__form__top__input__field"
                placeholder="Search for best architecture projects & Jobs"
              />
            </div>
            {location ? (
              <HomeScreenFilterSelect
                options={options}
                placeholder="Location"
                isMulti={false}
                svg={<MapPin size={20} color="#ffffff" />}
              />
            ) : (
              <>
                <HomeScreenRoleFilter
                  label="People"
                  selectedRole={selectedRole}
                  setSelectedRole={setSelectedRole}
                />
                <HomeScreenRoleFilter
                  label="Projects"
                  selectedRole={selectedRole}
                  setSelectedRole={setSelectedRole}
                />
              </>
            )}
          </div>
          {noFilter ? null : (
            <div className="home__jumbotron__overlay__form__bottom">
              <HomeScreenFilterSelect
                options={options}
                placeholder="Creative Fields"
                svg={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18.215"
                    height="12.868"
                    viewBox="0 0 18.215 12.868"
                  >
                    <path
                      id="Icon_material-network-check"
                      data-name="Icon material-network-check"
                      d="M13.836,7.136a.4.4,0,0,0-.339.19l-.058.124L9.15,17.1a1.631,1.631,0,0,0-.215.795,1.662,1.662,0,0,0,3.287.348l.008-.025L14.25,7.55A.41.41,0,0,0,13.836,7.136ZM1.5,10.447,3.156,12.1a10.483,10.483,0,0,1,8.718-3l.985-2.219A12.851,12.851,0,0,0,1.5,10.447ZM18.059,12.1l1.656-1.656a12.723,12.723,0,0,0-4.628-2.956l-.439,2.335A10.446,10.446,0,0,1,18.059,12.1Zm-3.312,3.312L16.4,13.759a8.179,8.179,0,0,0-2.2-1.565l-.455,2.418A6,6,0,0,1,14.747,15.415ZM4.812,13.759l1.656,1.656A5.878,5.878,0,0,1,9.8,13.759l1.06-2.384A8.179,8.179,0,0,0,4.812,13.759Z"
                      transform="translate(-1.5 -6.687)"
                      fill="#f9ffff"
                    />
                  </svg>
                }
              />
              <HomeScreenFilterSelect
                options={options}
                placeholder="Location"
                svg={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10.752"
                    height="15.36"
                    viewBox="0 0 10.752 15.36"
                  >
                    <path
                      id="Icon_material-location-on"
                      data-name="Icon material-location-on"
                      d="M12.876,3A5.372,5.372,0,0,0,7.5,8.376c0,4.032,5.376,9.984,5.376,9.984s5.376-5.952,5.376-9.984A5.372,5.372,0,0,0,12.876,3Zm0,7.3a1.92,1.92,0,1,1,1.92-1.92A1.921,1.921,0,0,1,12.876,10.3Z"
                      transform="translate(-7.5 -3)"
                      fill="#fff"
                    />
                  </svg>
                }
              />
              <HomeScreenFilterSelect
                options={options}
                placeholder="Education"
                svg={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18.42"
                    height="15.071"
                    viewBox="0 0 18.42 15.071"
                  >
                    <path
                      id="Icon_material-school"
                      data-name="Icon material-school"
                      d="M4.849,13.023v3.349l5.861,3.2,5.861-3.2V13.023l-5.861,3.2ZM10.71,4.5,1.5,9.524l9.21,5.024,7.535-4.111v5.786H19.92v-6.7Z"
                      transform="translate(-1.5 -4.5)"
                      fill="#fff"
                    />
                  </svg>
                }
              />
              <HomeScreenFilterSelect
                options={options}
                placeholder="Availability"
                svg={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20.832"
                    height="13.257"
                    viewBox="0 0 20.832 13.257"
                  >
                    <path
                      id="Icon_material-people"
                      data-name="Icon material-people"
                      d="M15.7,13.182a2.841,2.841,0,1,0-2.841-2.841A2.829,2.829,0,0,0,15.7,13.182Zm-7.575,0a2.841,2.841,0,1,0-2.841-2.841A2.829,2.829,0,0,0,8.128,13.182Zm0,1.894c-2.206,0-6.628,1.108-6.628,3.314v2.367H14.757V18.39C14.757,16.183,10.335,15.075,8.128,15.075Zm7.575,0c-.275,0-.587.019-.919.047a4,4,0,0,1,1.865,3.267v2.367h5.682V18.39C22.332,16.183,17.91,15.075,15.7,15.075Z"
                      transform="translate(-1.5 -7.5)"
                      fill="#fff"
                    />
                  </svg>
                }
              />
              <HomeScreenFilterSelect
                options={options}
                placeholder="Organization"
                svg={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20.832"
                    height="13.257"
                    viewBox="0 0 20.832 13.257"
                  >
                    <path
                      id="Icon_material-people"
                      data-name="Icon material-people"
                      d="M15.7,13.182a2.841,2.841,0,1,0-2.841-2.841A2.829,2.829,0,0,0,15.7,13.182Zm-7.575,0a2.841,2.841,0,1,0-2.841-2.841A2.829,2.829,0,0,0,8.128,13.182Zm0,1.894c-2.206,0-6.628,1.108-6.628,3.314v2.367H14.757V18.39C14.757,16.183,10.335,15.075,8.128,15.075Zm7.575,0c-.275,0-.587.019-.919.047a4,4,0,0,1,1.865,3.267v2.367h5.682V18.39C22.332,16.183,17.91,15.075,15.7,15.075Z"
                      transform="translate(-1.5 -7.5)"
                      fill="#fff"
                    />
                  </svg>
                }
              />
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
