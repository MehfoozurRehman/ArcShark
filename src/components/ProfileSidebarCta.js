import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export function ProfileSidebarCta({ user }) {
  const navigate = useNavigate();
  const [followed, setFollowed] = useState(false);
  return (
    <div className="user__profile__content__sidebar__cta">
      {user ? (
        <>
          <button
            className="user__profile__content__sidebar__cta__button user__profile__content__sidebar__cta__button__primary"
            onClick={() => {
              navigate("/editprofile");
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19.254"
              height="19.254"
              viewBox="0 0 19.254 19.254"
              fill="currentColor"
            >
              <path
                id="Icon_awesome-plus-circle"
                data-name="Icon awesome-plus-circle"
                d="M10.19.563a9.627,9.627,0,1,0,9.627,9.627A9.625,9.625,0,0,0,10.19.563Zm5.59,10.714a.467.467,0,0,1-.466.466H11.742v3.571a.467.467,0,0,1-.466.466H9.1a.467.467,0,0,1-.466-.466V11.742H5.065a.467.467,0,0,1-.466-.466V9.1a.467.467,0,0,1,.466-.466H8.637V5.065A.467.467,0,0,1,9.1,4.6h2.174a.467.467,0,0,1,.466.466V8.637h3.571a.467.467,0,0,1,.466.466Z"
                transform="translate(-0.563 -0.563)"
              />
            </svg>
            Edit Profile
          </button>
          <button
            onClick={() => {
              navigate("/messenger");
            }}
            className="user__profile__content__sidebar__cta__button user__profile__content__sidebar__cta__button__secondary"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14.878"
              height="14.878"
              viewBox="0 0 14.878 14.878"
              fill="currentColor"
            >
              <path
                id="Icon_material-message"
                data-name="Icon material-message"
                d="M16.39,3H4.488a1.486,1.486,0,0,0-1.48,1.488L3,17.878,5.976,14.9H16.39a1.492,1.492,0,0,0,1.488-1.488V4.488A1.492,1.492,0,0,0,16.39,3ZM14.9,11.927H5.976V10.439H14.9Zm0-2.232H5.976V8.207H14.9Zm0-2.232H5.976V5.976H14.9Z"
                transform="translate(-3 -3)"
              />
            </svg>
            Inbox
          </button>
        </>
      ) : (
        <>
          <button
            className="user__profile__content__sidebar__cta__button user__profile__content__sidebar__cta__button__primary"
            onClick={() => {
              setFollowed(!followed);
            }}
          >
            {followed ? (
              "Unfollow"
            ) : (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19.254"
                  height="19.254"
                  viewBox="0 0 19.254 19.254"
                  fill="currentColor"
                >
                  <path
                    id="Icon_awesome-plus-circle"
                    data-name="Icon awesome-plus-circle"
                    d="M10.19.563a9.627,9.627,0,1,0,9.627,9.627A9.625,9.625,0,0,0,10.19.563Zm5.59,10.714a.467.467,0,0,1-.466.466H11.742v3.571a.467.467,0,0,1-.466.466H9.1a.467.467,0,0,1-.466-.466V11.742H5.065a.467.467,0,0,1-.466-.466V9.1a.467.467,0,0,1,.466-.466H8.637V5.065A.467.467,0,0,1,9.1,4.6h2.174a.467.467,0,0,1,.466.466V8.637h3.571a.467.467,0,0,1,.466.466Z"
                    transform="translate(-0.563 -0.563)"
                  />
                </svg>
                Follow
              </>
            )}
          </button>
          <button
            onClick={() => {
              navigate("/messenger");
            }}
            className="user__profile__content__sidebar__cta__button user__profile__content__sidebar__cta__button__secondary"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14.878"
              height="14.878"
              viewBox="0 0 14.878 14.878"
              fill="currentColor"
            >
              <path
                id="Icon_material-message"
                data-name="Icon material-message"
                d="M16.39,3H4.488a1.486,1.486,0,0,0-1.48,1.488L3,17.878,5.976,14.9H16.39a1.492,1.492,0,0,0,1.488-1.488V4.488A1.492,1.492,0,0,0,16.39,3ZM14.9,11.927H5.976V10.439H14.9Zm0-2.232H5.976V8.207H14.9Zm0-2.232H5.976V5.976H14.9Z"
                transform="translate(-3 -3)"
              />
            </svg>
            Message
          </button>
        </>
      )}
    </div>
  );
}
