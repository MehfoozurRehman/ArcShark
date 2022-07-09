import React from "react";
import { messengerBg } from "../assets";
import { MessengerChatEntry } from "../components/MessengerChatEntry";
import { MessengerChatUser } from "../components/MessengerChatUser";

export default function Messenger() {
  const chat = [
    { user: true, data: "Lorem ipsum dolor sit amet." },
    {
      user: false,
      data: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid perspiciatis beatae deserunt quod adipisci, repellat obcaecati alias voluptates placeat recusandae ut? Sed quia rem repudiandae, ducimus cum vero! Expedita, aliquam?",
    },
    {
      user: false,
      data: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum, earum!",
    },
    { user: true, data: "Lorem ipsum dolor sit amet." },
    {
      user: false,
      data: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid perspiciatis beatae deserunt quod adipisci, repellat obcaecati alias voluptates placeat recusandae ut? Sed quia rem repudiandae, ducimus cum vero! Expedita, aliquam?",
    },
    {
      user: true,
      data: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum, earum!",
    },
    { user: false, data: "Lorem ipsum dolor sit amet." },
    {
      user: true,
      data: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid perspiciatis beatae deserunt quod adipisci, repellat obcaecati alias voluptates placeat recusandae ut? Sed quia rem repudiandae, ducimus cum vero! Expedita, aliquam?",
    },
    {
      user: true,
      data: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum, earum!",
    },
    { user: false, data: "Lorem ipsum dolor sit amet." },
    {
      user: false,
      data: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid perspiciatis beatae deserunt quod adipisci, repellat obcaecati alias voluptates placeat recusandae ut? Sed quia rem repudiandae, ducimus cum vero! Expedita, aliquam?",
    },
    {
      user: true,
      data: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum, earum!",
    },
  ];

  return (
    <>
      <img
        src={messengerBg}
        alt="messengerBg"
        className="messenger__background"
      />
      <div className="messenger__content">
        <div className="messenger__content__sidebar">
          <div className="messenger__content__sidebar__heading">Messages</div>
          <div className="messenger__content__sidebar__content">
            <MessengerChatUser defaultChecked />
            <MessengerChatUser />
            <MessengerChatUser />
            <MessengerChatUser />
            <MessengerChatUser />
            <MessengerChatUser />
            <MessengerChatUser />
            <MessengerChatUser />
            <MessengerChatUser />
            <MessengerChatUser />
            <MessengerChatUser />
            <MessengerChatUser />
            <MessengerChatUser />
            <MessengerChatUser />
            <MessengerChatUser />
            <MessengerChatUser />
            <MessengerChatUser />
          </div>
        </div>
        <div className="messenger__content__main">
          <div className="messenger__content__main__heading">Umer Gill</div>
          <div className="messenger__content__main__chat">
            {chat.map((item) => (
              <MessengerChatEntry isUser={item.user} data={item.data} />
            ))}
          </div>
          <div className="messenger__content__main__form">
            <input
              type="text"
              placeholder="Write message here"
              className="messenger__content__main__form__input"
            />
            <button className="messenger__content__main__form__button">
              Send
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
