import React from "react";
import { user, usersigninpage } from "../assets";
import { HomeContentCard } from "../components/HomeContentCard";

export default function Usersigninpage() {
  return (
    <>
      <div className=" userdash__page">
        <div className="userdash__pagepage__banner">
          <img
            className="userdash__pagepage__banner__img"
            src={usersigninpage}
            alt=""
          />
        </div>
        <div className="userdash__overlay">
          <div className="userdash__overlay__content">
            <div className="userdash__overlay__left">
              <div className="userdash__overlay__content__left">
                <div className="userdash__overlay__content__left__header">
                  <div className="userdash__overlay__content__left__header__avatar">
                    <img src={user} width={60} height={60} alt="user" />
                  </div>
                  <div className="userdash__overlay__content__left__header__avatar__name">
                    <div className="userdash__overlay__content__left__header__avatar__name__heading">
                      Username
                    </div>
                    <div className="userdash__overlay__content__left__header__avatar__name__heading__text">
                      Design & Art Direction
                    </div>
                  </div>
                </div>
                <div className="userdash__overlay__content__left__header__links">
                  <div className="userdash__overlay__content__left__header__links__entry">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 16.615 16.615"
                    >
                      <g
                        id="Group_539"
                        data-name="Group 539"
                        transform="translate(-258.072 -323.385)"
                      >
                        <path
                          id="Icon_metro-earth2"
                          data-name="Icon metro-earth2"
                          d="M10.878,18.543a8.307,8.307,0,1,1,8.307-8.307A8.308,8.308,0,0,1,10.878,18.543Zm6.733-9a.052.052,0,0,0,.026-.036.253.253,0,0,0,.08.146c0,.005,0,0,0,.011s.007,0,.011,0a.251.251,0,0,0,.158.059.256.256,0,0,0,.217-.125.125.125,0,0,1,.011.012c0-.008,0-.017,0-.025a.252.252,0,0,0,.034-.122.26.26,0,0,0-.26-.26.256.256,0,0,0-.214.12s0-.008-.006-.006a.235.235,0,0,0-.04-.124v.269A.271.271,0,0,1,17.611,9.539ZM5.682,9.461c0-.078-.179-.212-.225-.212,0-.014-.073-.174-.1-.174,0-.054-.19-.3-.22-.191-.02.069.145.161.145.24.031,0,.159.244.185.287.281.476-.21.151-.21-.051a.662.662,0,0,1-.162-.336,1.073,1.073,0,0,1-.137-.261c0-.152-.084-.224-.25-.224-.008-.015-.147-.211-.15-.211a.55.55,0,0,0-.174-.286,2.013,2.013,0,0,1-.037-.423,1.432,1.432,0,0,0-.055-.444,7.246,7.246,0,0,0,4.092,9.881c0-.258.022-.566.081-.566,0-.038.033-.2.062-.2a3.146,3.146,0,0,0,0-.336c-.037-.074.049-.169.075-.286.144-.072.042-.8.151-.8a4.932,4.932,0,0,0,.024-.908c.028,0-.164-.2-.162-.2-.183,0-.312-.294-.312-.423a.783.783,0,0,1-.063-.211c.042,0-.262-.444-.262-.436-.161-.089.009-.214.025-.36-.14-.046,0-.423.062-.423a.117.117,0,0,1,.075-.1c.031.124.176-.062.062-.062,0-.082-.009-.258,0-.3,0-.127-.112-.375-.2-.112-.093-.046-.329-.038-.349-.186.015-.073-.134-.223-.187-.249.049-.128-.253-.3-.362-.3,0-.028-.058-.015-.075-.05-.111,0-.137-.15-.262-.15-.145,0-.291-.1-.424-.1-.045-.089-.252-.054-.3-.15-.109,0-.151-.206-.154-.281,0-.093-.079-.416-.209-.416ZM16.2,5.295a.026.026,0,0,1,0,.011c.008,0,.017.009.026.012Zm.156.172a.168.168,0,0,1,.028.088c.018,0,.027-.009.042-.013C16.4,5.516,16.378,5.492,16.355,5.466Zm.451,2.366c.008-.224-.187-.187-.249-.312-.064,0-.088-.05-.175-.05a.107.107,0,0,0-.134.04c-.133.051-.053-.065-.153-.065,0-.128-.046-.164-.187-.15-.081.183-.206.292-.187.5.06.014.049.027.037.087.079,0,.561-.025.561-.075.017,0,.1.172.1.025.067,0,.1.157.262.112C16.682,7.975,16.949,7.832,16.807,7.832Zm.025,2.65c.009-.046-.023-.066-.05-.112.071,0-.225-.549-.225-.634-.045-.022-.1-.179-.113-.236a.6.6,0,0,1-.15-.249.9.9,0,0,1-.237-.311c.089.01.224.028.224-.087-.06,0-.069-.074-.012-.074-.019-.076.04-.131.053-.191a1.408,1.408,0,0,0,.046-.269.411.411,0,0,0-.174.037c0,.05-.152-.012-.174-.012-.033-.065-.27.085-.336-.05-.107-.1-.078-.172-.113-.309-.018-.07-.113-.074-.17-.085-.163-.032-.045.194-.054.245.1,0-.063.124-.063.186-.168-.036-.112-.224-.211-.274-.03-.05-.006-.087-.075-.087,0-.066.035-.187-.037-.211,0-.032-.141-.045-.162-.087-.089,0-.3-.337-.361-.224-.04.073.034.09.049.15.129-.025.117.213.275.186a.432.432,0,0,0,.012.1c.117-.028.1.087.162.087-.043.057-.178-.09-.141.033.021.072.009.133-.084.2,0-.077-.006-.286-.087-.286-.055-.11-.219-.084-.288-.186-.056,0-.078-.174-.174-.186a.2.2,0,0,1-.113.05c-.052.105-.349.011-.349.025s-.166.4-.175.448c-.018.112-.108.114-.135.22-.013.053-.339.028-.339.067a.332.332,0,0,1-.262-.3,2.342,2.342,0,0,1,.05-.448c.029.008.034.018.05.05.086-.032.287.021.287-.075q.125,0,.075.1c.078.015.212.034.212-.075-.046,0-.05,0-.05-.05.15-.155-.112-.3-.112-.373-.053-.018-.161-.132-.084-.089s.3.11.209-.048a.017.017,0,0,0,.012-.012c.026.019.138.133.138.025.031,0,.149-.075.05-.075.009-.056.007-.1.012-.137.158.085.07-.058.15-.112,0,.1.085-.05.137-.05.062-.092.2-.021.237-.125-.076-.025-.062-.216-.062-.286.092.015.194-.124.208-.029.005.037.01.139.029.153.137.072.1-.041.1-.112-.046,0-.106-.16-.113-.237-.037.005-.1.021-.113.049-.136,0-.228-.049-.336-.049a1.929,1.929,0,0,1-.125-.162c-.076-.13.076-.092.1-.1,0-.124.515-.1.537-.3-.169,0,.174-.287.174-.286.115-.1.175-.183.318-.194.06,0,.73-.189.73-.105l.209.005A7.237,7.237,0,0,0,6.061,4.8a.184.184,0,0,1,.02.069c.068,0,.166-.048.187.038a.427.427,0,0,1-.1-.013c.024.193-.084.075-.174.075a.251.251,0,0,0-.083-.032l-.084.076c0,.008,0,.009,0,.018.029,0,.014.045.1.073a1.85,1.85,0,0,0,.3.067.964.964,0,0,0,.2-.015c0-.01.171-.087.05-.087C6.5,5,6.467,4.985,6.393,4.984c.006-.073.179-.025.25-.025.054-.091,0-.08.049-.163.057-.1.125-.013.163-.111a.174.174,0,0,1,.125.123c.045.037.275.376.275.137.082.028.123.181.125.262.149-.022.162-.133.162-.249.034,0-.012-.056-.012-.075.056-.02.125.053.125-.024.024,0,.025.024.025.05.077.015.127-.009.174.008s.016.181,0,.241c-.019.076-.164.077-.164.112-.164.123.194.186.25.261a.69.69,0,0,1-.162-.024c-.081,0-.277.086-.349.024.1,0,.134-.121.15-.236a.179.179,0,0,0-.228.115c-.044.153-.145-.006-.2.1-.02.006-.2.09-.2.062-.2.029-.15.2-.15.386.08.048.244.186.237.261.182.032.248.051.412.075a.2.2,0,0,0,.1.062c0,.107.1.088.187.088,0-.137.159.114.174.161-.022,0,.037.14.05.187-.025-.009-.033,0-.025.025.079.029.2.021.225-.062-.076,0-.05-.087-.05-.137a.094.094,0,0,1,.012-.174c0,.071.257-.044.112-.1a.28.28,0,0,0,0-.271c-.037-.044-.083,0-.1-.065.1-.024.026-.211.025-.3.031-.012.112.02.112,0,.1,0,.256.121.312-.025.16.073.033.143.2.087A.721.721,0,0,0,9,5.99c0,.009,0,.062.037.062,0,.04-.025-.023-.025.049.023,0,.15.025.15-.024.08,0,.137-.1.137-.174.05-.033.139.274.2.274.045.07.187.171.187.236.03.031.062.022.062.112.038,0,.113-.149.113-.012a.236.236,0,0,1,.15.137c-.09,0,0,.087-.051.087,0,.086-.193.018-.236.012-.06.267-.42.075-.638.144a.743.743,0,0,0-.348.415c.139,0,.2-.12.325-.162.1,0,.121-.061.212-.087,0,.025.025.012.025.037-.178,0-.07.115-.018.2a.214.214,0,0,0,.11.093.494.494,0,0,0-.042.094h0c-.034.011-.1.036-.113.062-.2.022-.1.009-.088-.039.007.017.079,0,.076,0-.012-.06-.03-.052-.012-.087-.109,0-.162.05-.25.05-.015.03-.091.1-.125.1a.591.591,0,0,1-.15.261c0-.02-.178.112-.162.112-.039.064-.083.062-.1.161a.838.838,0,0,0-.062.2c-.077.051-.106.261-.237.261-.08.16-.225.139-.225.348a1.1,1.1,0,0,1,.083.341c.019.088.048.179-.07.181-.008-.013-.09-.137-.075-.137a.791.791,0,0,0-.1-.267c-.049-.069-.141.011-.212-.019-.031-.061-.238-.075-.312-.075.012.046.046.061.05.112a.283.283,0,0,1-.16.044c-.109-.015-.1-.1-.215-.088a.361.361,0,0,0-.325.367,1.1,1.1,0,0,0,0,.373c0,.105.087.182.087.261.085,0,.18.186.262.186.009.066-.042.076.1.075,0-.007.077-.048.087-.1-.1-.024,0-.15.062-.174,0,.089.125-.03.125-.037l.138-.05c0-.1.094.01.025.05-.067,0-.062.112-.1.112-.016.08-.048.15-.066.227-.024.1.054.106.029.2a1.561,1.561,0,0,0,.3,0,.088.088,0,0,0-.012-.05c.145,0,.012.274.1.274,0,.1.05.184.05.249a.165.165,0,0,1,.087.186c.083.011.262.032.262-.075.126,0,.135.086.126.174.251,0,.094-.249.2-.249.01-.041.027-.048.051-.021.051.028.09-.051.131-.076a.338.338,0,0,1,.067-.035c.035.021.038.015.054.039a.374.374,0,0,0,.2-.079c.09.011.061.2.229.216a.6.6,0,0,0,.282-.017c.015-.01.068.034.074.052.056,0,.052.049.076.048a.02.02,0,0,0,.025.012c.007.021.052.028.075.087,0,.054.112.063.112.1.08.04-.028.051.1.089a.9.9,0,0,0,.2.061c.023-.089.1.012.138.012.02.04.03.01.049.05.116.1.039.059.087.162.056.036.073.163.088.236-.045,0-.013.171-.013.187-.054,0,.138.1.138-.025.079.013.131.1.187.1-.033.075.087.132.087.013.118.012.087.188.075.249.088,0,.113-.049.188-.058a.508.508,0,0,1,.274-.089.519.519,0,0,1,.519.519.513.513,0,0,1-.44.5.909.909,0,0,1-.065.071c0,.025-.006.273-.013.273,0,.05-.038.323-.075.323,0,.141-.092.166-.125.3-.076.056-.281.15-.313.211-.059,0-.1.05-.162.05-.008.017-.136.137-.113.137-.009.088.007.3-.041.354-.032.038-.078.034-.058.094-.07,0,0,.05-.106.05a.247.247,0,0,0-.2.183.277.277,0,0,1-.12.24c0,.035-.162.046-.162.137.015,0,0,.169,0,.186a.3.3,0,0,0-.187.087c-.163,0-.143.017-.249.087,0,.022-.015.1-.037.1,0,.126-.09.011-.163.075.029,0,.065.124.05.124,0,.11-.068.119-.137.2-.033.022-.064.112-.087.112,0,.074-.037.141-.037.211.016,0,0,.032.012.061.035-.01.036-.049.05-.049,0-.062.1.037.037.037-.051.078-.107.079-.138.187-.031,0-.058.03-.081.065a7.226,7.226,0,0,0,8.016-3.055,1.992,1.992,0,0,1,.057-.42c.051.037.089.107.125,0-.09-.018-.068-.049-.037-.124a.315.315,0,0,0,.159.043c.017-.032.031-.066.048-.1-.051-.039.019-.142.044-.092.013-.025.024-.051.036-.076-.006,0,0,0-.012,0,0-.045.008-.039.038-.062a.046.046,0,0,0,0,.009,7.231,7.231,0,0,0,.715-3.128c0-.037-.005-.072-.006-.109-.013.051-.039.106-.075.118,0,.033-.371.194-.349.261-.065,0-.295.065-.337.149a.579.579,0,0,0-.25.1c-.232,0-.187-.273-.3-.273Zm1.056-2.842h-.276s0,0-.006-.007-.073-.132-.05-.162a.369.369,0,0,1,.045,0c-.023-.057-.049-.113-.074-.17a.359.359,0,0,1-.183.092c0,.021-.111.236,0,.236a.038.038,0,0,0,0,.011.258.258,0,0,0,.022.516h.1c.006.047.032.088.123.109.029.12.242.163.275.037-.09,0-.061-.087-.053-.145h.073a.26.26,0,0,0,0-.519Zm-.756,3.376c.018,0,.138,0,.138-.023a1.269,1.269,0,0,0,.362-.05c0,.161-.136.251-.113.411-.09,0-.05.092-.05.124-.058.036-.067.1-.137.137,0,.072-.162.192-.21.253s-.217.189-.238.277c.006-.021-.3.315-.226.315,0,.063-.085.56.025.56,0,.044.094.461.037.461,0,.134-.087.216-.087.323-.043.029-.1.045-.125.088-.076,0-.113.162-.15.162,0,.173-.05.3-.05.5.014,0-.1.28-.1.3-.092.062-.325.283-.325.4,0,0-.162.227-.187.261a1.607,1.607,0,0,0-.425.1c-.08,0-.287.063-.336-.012,0-.079-.043-.179-.05-.287-.038,0-.045-.161-.087-.161a4.29,4.29,0,0,1-.2-.51.836.836,0,0,0-.05-.211c0-.171-.125-.314-.125-.472-.037,0-.113-.348-.075-.348a3.9,3.9,0,0,1,.09-.505,1.2,1.2,0,0,0-.053-.516c-.021,0-.093-.119-.1-.149a.378.378,0,0,1-.137-.323.842.842,0,0,0,.075-.448.558.558,0,0,0-.313-.037c-.08-.161-.621-.062-.774-.062,0,.088-.376-.017-.412-.087-.092,0-.274-.2-.274-.286a1.024,1.024,0,0,1-.262-.51c-.087-.044-.061-.212-.013-.212a.887.887,0,0,0-.051-.264c-.015-.052.051-.109.051-.171a.75.75,0,0,1,.1-.439,1.7,1.7,0,0,0,.1-.185c.052-.13.067-.006.138-.123.067-.033.106-.144.175-.2.03-.04.031-.057,0-.087a.749.749,0,0,0,.087-.236c.1-.136.029-.074.125-.062.035-.038.094-.137.15-.137a.158.158,0,0,1,.138-.075c0,.075.2-.024.225-.024a.574.574,0,0,1,.312-.15c0-.085.442.024.512.012V8.292c.094.022.267.4.249.485a.973.973,0,0,1,.187,0c0,.08.152.1.221.1.1,0,.378-.01.378-.141a.117.117,0,0,1,.126.137c.084.009.584.019.549.124.073,0,.092.125.162.125-.014.086.087.311.162.311a.392.392,0,0,0,.113.261.911.911,0,0,0,.262.4c-.047.088.071.161.1.249-.007,0,.025.13.062.15,0,.088.186.448.288.448.007.044-.1.063.037.073Zm-2.7-2.786c.019-.074.063-.017.1,0,.1.031.063,0,.134-.034C14.673,8.4,14.557,8.242,14.436,8.23Zm-.263-.373c.051,0,.065.228-.075.186,0-.057-.036-.161.038-.161C14.158,7.97,14.173,7.934,14.173,7.856Zm-.062-.149c.058.025.083.017.075-.025.076.025-.01.079-.025.137C14.122,7.781,14.134,7.768,14.111,7.707ZM12.775,6.6c-.123-.032.126-.068.137-.1a.058.058,0,0,1-.054-.079c.019-.043.049.051.092.03.05-.005.15-.08.1.065s-.1.255-.286.258c-.067-.067,0-.1.012-.174Zm.462-.51c.1,0,.012.075-.01.075.017.007,0,.067,0,.087.093,0,.1-.058.162-.075-.014.084-.107.1-.016.171.048.038.1.083.078.14.119,0,.137.114.112.249.066,0,.063,0,.063-.063.064.018.059.075,0,.075-.059.117-.214.112-.325.112,0-.09-.018-.1-.1-.071-.114.035-.025-.091-.023-.153.012,0,.259.011.112-.037-.008-.134-.038-.174-.162-.174,0-.091-.032-.085-.047-.185-.021-.148.116.01.16-.151ZM13.2,6.9c0,.031-.062.055-.075.012.012,0,.017,0,.012-.012ZM12.176,5.563h-.519a.26.26,0,1,1,0-.519h.519a.26.26,0,1,1,0,.519Zm-3.025,4.6c.029,0,.063.011.063.037C9.176,10.195,9.127,10.231,9.151,10.158Zm-.474.025c-.021.039-.189.033-.212-.013.062,0,.111.025.174,0,0-.034-.029-.062-.05-.1.068,0,.144.052.237.05,0-.058-.025.012,0-.062a.291.291,0,0,1,.137.137,1.852,1.852,0,0,0-.287-.012Zm-.549-.3A.35.35,0,0,1,7.9,9.772c.062,0,.123.028.162-.037.158.016.172.125.3.125.024.042.16.139.029.151a.288.288,0,0,1-.265-.127Zm.1.348c-.046,0-.123.02-.087-.075C8.2,10.166,8.231,10.191,8.228,10.233Zm.087-.012-.075.012C8.248,10.175,8.3,10.111,8.315,10.22Zm.462.547c-.01.035-.008.037-.049.037,0-.016.008-.032.012-.049ZM7.654,9.735l.037.012c.016.062.05.031.087.012C7.778,9.832,7.611,9.853,7.654,9.735Z"
                          transform="translate(255.502 321.457)"
                        />
                      </g>
                    </svg>
                    <a href="#"> www.umbrella.com</a>
                  </div>

                  <div className="userdash__overlay__content__left__header__links__entry">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 12.169 17.384"
                    >
                      <path
                        id="Icon_material-location-on"
                        data-name="Icon material-location-on"
                        d="M13.584,3A6.08,6.08,0,0,0,7.5,9.084c0,4.563,6.084,11.3,6.084,11.3s6.084-6.736,6.084-11.3A6.08,6.08,0,0,0,13.584,3Zm0,8.258a2.173,2.173,0,1,1,2.173-2.173A2.174,2.174,0,0,1,13.584,11.258Z"
                        transform="translate(-7.5 -3)"
                        fill="currentolor"
                      />
                    </svg>
                    <a href="#">Hariyana, India</a>
                  </div>
                </div>
                <div className="userdash__overlay__content__left__button">
                  <button className="userdash__overlay__content__left__button__follow">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="19.254"
                      height="19.254"
                      viewBox="0 0 19.254 19.254"
                    >
                      <g
                        id="Group_540"
                        data-name="Group 540"
                        transform="translate(0 -1.002)"
                      >
                        <path
                          id="Icon_awesome-plus-circle"
                          data-name="Icon awesome-plus-circle"
                          d="M10.19.563a9.627,9.627,0,1,0,9.627,9.627A9.625,9.625,0,0,0,10.19.563Zm5.59,10.714a.467.467,0,0,1-.466.466H11.742v3.571a.467.467,0,0,1-.466.466H9.1a.467.467,0,0,1-.466-.466V11.742H5.065a.467.467,0,0,1-.466-.466V9.1a.467.467,0,0,1,.466-.466H8.637V5.065A.467.467,0,0,1,9.1,4.6h2.174a.467.467,0,0,1,.466.466V8.637h3.571a.467.467,0,0,1,.466.466Z"
                          transform="translate(-0.563 0.439)"
                          fill="currentColor"
                        />
                      </g>
                    </svg>
                    Follow
                  </button>
                  <button className="userdash__overlay__content__left__button__message">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14.878"
                      height="14.878"
                      viewBox="0 0 14.878 14.878"
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
                      <path
                        id="Icon_material-message"
                        data-name="Icon material-message"
                        d="M16.39,3H4.488a1.486,1.486,0,0,0-1.48,1.488L3,17.878,5.976,14.9H16.39a1.492,1.492,0,0,0,1.488-1.488V4.488A1.492,1.492,0,0,0,16.39,3ZM14.9,11.927H5.976V10.439H14.9Zm0-2.232H5.976V8.207H14.9Zm0-2.232H5.976V5.976H14.9Z"
                        transform="translate(-3 -3)"
                        fill="url(#linear-gradient)"
                      />
                    </svg>
                    Message
                  </button>
                </div>
                <div className="userdash__overlay__content__left__ounter__section">
                  <div className="userdash__overlay__content__left__ounter__section__folower">
                    <div className="userdash__overlay__content__left__ounter__section__folower__svg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="18.642"
                        viewBox="0 0 17.95 18.642"
                      >
                        <g
                          id="Group_541"
                          data-name="Group 541"
                          transform="translate(-270.067 -476.975)"
                        >
                          <g
                            id="Group_516"
                            data-name="Group 516"
                            transform="translate(270.067 476.975)"
                          >
                            <path
                              id="Path_1491"
                              data-name="Path 1491"
                              d="M370.309,52.157a5.351,5.351,0,0,0-3,9.275,1.385,1.385,0,0,1-.151.016c-2.562,0-5.124.006-7.685,0a2.656,2.656,0,0,1-2.557-2.956c.1-.844.15-1.694.237-2.541a20.184,20.184,0,0,1,.3-2.528,3.466,3.466,0,0,1,3.435-2.6.724.724,0,0,1,.49.211,3.1,3.1,0,0,0,1.969,1.049,4.692,4.692,0,0,0,2.55-.231,2.459,2.459,0,0,0,1.084-.774.845.845,0,0,1,.849-.257,3.558,3.558,0,0,1,2.424,1.253A.88.88,0,0,1,370.309,52.157Z"
                              transform="translate(-356.893 -42.809)"
                              fill="currentColor"
                            />
                            <path
                              id="Path_1492"
                              data-name="Path 1492"
                              d="M368.05,41.549a3.747,3.747,0,0,1-3.919-3.223,3.89,3.89,0,0,1,2.313-4.459,4.1,4.1,0,0,1,4.178.561,3.873,3.873,0,0,1,1.392,3.6,3.784,3.784,0,0,1-1.381,2.673A3.928,3.928,0,0,1,368.05,41.549Z"
                              transform="translate(-360.737 -33.543)"
                              fill="currentColor"
                            />
                            <path
                              id="Path_1493"
                              data-name="Path 1493"
                              d="M382.409,64.536a3.987,3.987,0,1,1,3.987-3.982A3.98,3.98,0,0,1,382.409,64.536Zm-.666-3.321c0,.225,0,.418,0,.612a.667.667,0,1,0,1.33,0c0-.2,0-.4,0-.614.22,0,.419,0,.618,0a.666.666,0,1,0-.009-1.329c-.2,0-.4,0-.609,0,0-.211,0-.4,0-.582a.67.67,0,1,0-1.331,0c0,.19,0,.381,0,.583-.228,0-.428,0-.628,0a.666.666,0,1,0,.008,1.329C381.321,61.217,381.52,61.214,381.743,61.214Z"
                              transform="translate(-368.446 -45.896)"
                              fill="currentColor"
                            />
                          </g>
                        </g>
                      </svg>
                    </div>
                    <div className="userdash__overlay__content__left__ounter__section__folower__entry">
                      <div className="userdash__overlay__content__left__ounter__section__folower__entry__counter">
                        3072
                      </div>
                      <div className="userdash__overlay__content__left__ounter__section__folower__entry__counter__text">
                        Followers
                      </div>
                    </div>
                  </div>
                  <div className="userdash__overlay__content__left__ounter__section__folower">
                    <div className="userdash__overlay__content__left__ounter__section__folower__svg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 19.024 12.297"
                      >
                        <g
                          id="Group_539"
                          data-name="Group 539"
                          transform="translate(-268.488 -543.964)"
                        >
                          <g
                            id="Group_517"
                            data-name="Group 517"
                            transform="translate(268.488 543.964)"
                          >
                            <path
                              id="Path_1494"
                              data-name="Path 1494"
                              d="M426.669,45.3a2.551,2.551,0,0,1-.716,1.084,16.723,16.723,0,0,1-4.736,3.794,9,9,0,0,1-3.363,1.016,8.29,8.29,0,0,1-4.083-.706,14.146,14.146,0,0,1-4.131-2.815c-.576-.551-1.113-1.143-1.647-1.734a1.236,1.236,0,0,1-.04-1.677,17.022,17.022,0,0,1,4.673-4.018,9.788,9.788,0,0,1,3.559-1.251,8.02,8.02,0,0,1,4.015.536,13.339,13.339,0,0,1,4.249,2.729c.655.609,1.258,1.276,1.862,1.939a3.1,3.1,0,0,1,.358.657Zm-9.515,3.868a4.09,4.09,0,1,0-4.08-4.1A4.083,4.083,0,0,0,417.154,49.165Z"
                              transform="translate(-407.645 -38.925)"
                              fill="currentColor"
                            />
                            <path
                              id="Path_1495"
                              data-name="Path 1495"
                              d="M429.661,48.9a2.93,2.93,0,1,0-5.861-.021C423.8,50.5,429.658,50.512,429.661,48.9Z"
                              transform="translate(-417.361 -42.742)"
                              fill="currentColor"
                            />
                            <path
                              id="Path_1496"
                              data-name="Path 1496"
                              d="M428.405,53.5a2.931,2.931,0,1,1,2.932-2.92A2.933,2.933,0,0,1,428.405,53.5Z"
                              transform="translate(-419.037 -44.418)"
                              fill="currentColor"
                            />
                          </g>
                        </g>
                      </svg>
                    </div>
                    <div className="userdash__overlay__content__left__ounter__section__folower__entry">
                      <div className="userdash__overlay__content__left__ounter__section__folower__entry__counter">
                        1,221
                      </div>
                      <div className="userdash__overlay__content__left__ounter__section__folower__entry__counter__text">
                        Project Views
                      </div>
                    </div>
                  </div>
                  <div className="userdash__overlay__content__left__ounter__section__folower">
                    <div className="userdash__overlay__content__left__ounter__section__folower__svg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="15"
                        viewBox="0 0 17.001 17.001"
                      >
                        <path
                          id="Icon_awesome-thumbs-up"
                          data-name="Icon awesome-thumbs-up"
                          d="M3.453,7.438H.8a.8.8,0,0,0-.8.8V16.2a.8.8,0,0,0,.8.8H3.453a.8.8,0,0,0,.8-.8V8.235A.8.8,0,0,0,3.453,7.438ZM2.125,15.673a.8.8,0,1,1,.8-.8A.8.8,0,0,1,2.125,15.673ZM12.751,2.7c0,1.408-.862,2.2-1.1,3.139h3.378A1.984,1.984,0,0,1,17,7.773a2.4,2.4,0,0,1-.645,1.634l0,0a2.774,2.774,0,0,1-.309,2.639,2.626,2.626,0,0,1-.544,2.482,1.763,1.763,0,0,1-.2,1.482c-.678.974-2.357.987-3.778.987h-.094a9.532,9.532,0,0,1-3.97-1.053A5.226,5.226,0,0,0,5.7,15.41a.4.4,0,0,1-.391-.4v-7.1a.4.4,0,0,1,.118-.283c1.315-1.3,1.881-2.676,2.959-3.756a4.021,4.021,0,0,0,.843-1.956C9.381,1.3,9.69,0,10.36,0,11.157,0,12.751.266,12.751,2.7Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                    <div className="userdash__overlay__content__left__ounter__section__folower__entry">
                      <div className="userdash__overlay__content__left__ounter__section__folower__entry__counter">
                        2,3123
                      </div>
                      <div className="userdash__overlay__content__left__ounter__section__folower__entry__counter__text">
                        Appreciations
                      </div>
                    </div>
                  </div>
                </div>
                <div className="userdash__overlay__content__left__about__me">
                  <div className="userdash__overlay__content__left__about__me__heading">
                    About Us
                  </div>
                  <div className="userdash__overlay__content__left__about__me__text">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </div>
                </div>
                <div className="userdash__overlay__content__left__social__content">
                  <div>
                    <a href="#">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="26.14"
                        height="25.982"
                        viewBox="0 0 26.14 25.982"
                      >
                        <g
                          id="Group_540"
                          data-name="Group 540"
                          transform="translate(-292.928 -898)"
                        >
                          <path
                            id="Icon_awesome-facebook"
                            data-name="Icon awesome-facebook"
                            d="M26.7,13.633A13.07,13.07,0,1,0,11.59,26.545V17.411H8.27V13.633h3.32v-2.88c0-3.275,1.95-5.085,4.937-5.085a20.114,20.114,0,0,1,2.926.255V9.138H17.8a1.889,1.889,0,0,0-2.13,2.041v2.453H19.3l-.58,3.778H15.675v9.134A13.075,13.075,0,0,0,26.7,13.633Z"
                            transform="translate(292.365 897.438)"
                            fill="#1877f2"
                          />
                        </g>
                      </svg>
                    </a>
                  </div>
                  <div>
                    <a href="#">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25.778"
                        height="25.778"
                        viewBox="0 0 25.778 25.778"
                      >
                        <g
                          id="Group_541"
                          data-name="Group 541"
                          transform="translate(-351.428 -898.5)"
                        >
                          <g
                            id="Icon_feather-instagram"
                            data-name="Icon feather-instagram"
                            transform="translate(349.928 897)"
                          >
                            <path
                              id="Path_9"
                              data-name="Path 9"
                              d="M8.694,3H20.083a5.694,5.694,0,0,1,5.694,5.694V20.083a5.694,5.694,0,0,1-5.694,5.694H8.694A5.694,5.694,0,0,1,3,20.083V8.694A5.694,5.694,0,0,1,8.694,3Z"
                              fill="none"
                              stroke="#e90505"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="3"
                            />
                            <path
                              id="Path_10"
                              data-name="Path 10"
                              d="M21.127,15.822a4.556,4.556,0,1,1-3.838-3.838,4.556,4.556,0,0,1,3.838,3.838Z"
                              transform="translate(-2.182 -2.151)"
                              fill="none"
                              stroke="#e90505"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="3"
                            />
                            <path
                              id="Path_11"
                              data-name="Path 11"
                              d="M26.25,9.75h0"
                              transform="translate(-5.597 -1.625)"
                              fill="none"
                              stroke="#e90505"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="3"
                            />
                          </g>
                        </g>
                      </svg>
                    </a>
                  </div>
                  <div>
                    <a href="#">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="28.25"
                        height="22.944"
                        viewBox="0 0 28.25 22.944"
                      >
                        <g
                          id="Group_542"
                          data-name="Group 542"
                          transform="translate(-409.928 -900)"
                        >
                          <path
                            id="Icon_awesome-twitter"
                            data-name="Icon awesome-twitter"
                            d="M25.346,9.1c.018.251.018.5.018.753,0,7.654-5.826,16.473-16.473,16.473A16.361,16.361,0,0,1,0,23.726a11.977,11.977,0,0,0,1.4.072,11.6,11.6,0,0,0,7.188-2.474,5.8,5.8,0,0,1-5.413-4.015,7.3,7.3,0,0,0,1.093.09,6.123,6.123,0,0,0,1.524-.2,5.791,5.791,0,0,1-4.643-5.682v-.072a5.831,5.831,0,0,0,2.617.735A5.8,5.8,0,0,1,1.972,4.438,16.457,16.457,0,0,0,13.91,10.5a6.536,6.536,0,0,1-.143-1.326,5.8,5.8,0,0,1,10.02-3.961,11.4,11.4,0,0,0,3.675-1.4A5.774,5.774,0,0,1,24.916,7a11.607,11.607,0,0,0,3.334-.9,12.446,12.446,0,0,1-2.9,2.993Z"
                            transform="translate(409.928 896.619)"
                            fill="#00acee"
                          />
                        </g>
                      </svg>
                    </a>
                  </div>
                  <div>
                    <a href="#">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="31.496"
                        height="22.146"
                        viewBox="0 0 31.496 22.146"
                      >
                        <g
                          id="Group_543"
                          data-name="Group 543"
                          transform="translate(-471.927 -900)"
                        >
                          <path
                            id="Icon_awesome-youtube"
                            data-name="Icon awesome-youtube"
                            d="M31.888,7.965a3.958,3.958,0,0,0-2.785-2.8C26.647,4.5,16.8,4.5,16.8,4.5s-9.849,0-12.305.662a3.958,3.958,0,0,0-2.785,2.8A41.516,41.516,0,0,0,1.05,15.6a41.516,41.516,0,0,0,.658,7.63,3.9,3.9,0,0,0,2.785,2.758c2.456.662,12.305.662,12.305.662s9.849,0,12.305-.662a3.9,3.9,0,0,0,2.785-2.758,41.516,41.516,0,0,0,.658-7.63,41.516,41.516,0,0,0-.658-7.63ZM13.577,20.278V10.912L21.809,15.6l-8.232,4.683Z"
                            transform="translate(470.877 895.5)"
                            fill="#eb2424"
                          />
                        </g>
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="userdash__overlay__content__left__footer">
                  <div className="userdash__overlay__content__left__footer__heading">
                    Member Since 2002
                  </div>
                  <div className="userdash__overlay__content__left__footer__buttons">
                    <button>Block</button>
                    <button>Report</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="userdash__right__container">
              <div className="userdash__overlay__content__right__header">
                <div className="userdash__overlay__content__right__header__entry">
                  <div className="userdash__overlay__content__right__header__entry__btn">
                    Work Experience
                  </div>
                  <div className="userdash__overlay__content__right__header__entry__btn">
                    Education
                  </div>
                  <div className="userdash__overlay__content__right__header__entry__btn">
                    Skills
                  </div>
                  <div className="userdash__overlay__content__right__header__entry__btn">
                    Awards
                  </div>
                  <div className="userdash__overlay__content__right__header__entry__btn">
                    Languages
                  </div>
                </div>
                <div className="userdash__overlay__content__right__header__entry__card">
                  <newFunction />
                  {newFunction()}
                  {newFunction()}
                  {newFunction()}
                </div>
                <div className="userdash__overlay__content__right__header__entry__card">
                  {newEducation()}
                  {newEducation()}
                  {newEducation()}
                  {newEducation()}
                </div>
                <div className="userdash__overlay__content__right__header__entry__card">
                  {newSkills()}
                  {newSkills()}
                  {newSkills()}
                  {newSkills()}
                  {newSkills()}
                </div>
                <div className="userdash__overlay__content__right__header__entry__card">
                  {newAwards()}
                  {newAwards()}
                  {newAwards()}
                  {newAwards()}
                </div>
              </div>
              <div className="userdash__overlay__content__right__header__entry__card"></div>
              <div className="userdash__overlay__content__right">
                <div className="home__content" style={{ marginTop: 0 }}>
                  <HomeContentCard
                    hovertext={
                      "Lorem Ipsum is simply dummy text of the printing and typesettin industry Lorem Ipsum has been the industry standard dummy text ever since the Lorem ipsum dolor sit amet consectetur adipisicing elit Quidem, sint."
                    }
                  />
                  <HomeContentCard
                    hovertext={
                      "Lorem Ipsum is simply dummy text of the printing and typesettin industry Lorem Ipsum has been the industry standard dummy text ever since the Lorem ipsum dolor sit amet consectetur adipisicing elit Quidem, sint."
                    }
                  />
                  <HomeContentCard
                    hovertext={
                      "Lorem Ipsum is simply dummy text of the printing and typesettin industry Lorem Ipsum has been the industry standard dummy text ever since the Lorem ipsum dolor sit amet consectetur adipisicing elit Quidem, sint."
                    }
                  />
                  <HomeContentCard
                    hovertext={
                      "Lorem Ipsum is simply dummy text of the printing and typesettin industry Lorem Ipsum has been the industry standard dummy text ever since the Lorem ipsum dolor sit amet consectetur adipisicing elit Quidem, sint."
                    }
                  />
                  <HomeContentCard
                    hovertext={
                      "Lorem Ipsum is simply dummy text of the printing and typesettin industry Lorem Ipsum has been the industry standard dummy text ever since the Lorem ipsum dolor sit amet consectetur adipisicing elit Quidem, sint."
                    }
                  />
                  <HomeContentCard
                    hovertext={
                      "Lorem Ipsum is simply dummy text of the printing and typesettin industry Lorem Ipsum has been the industry standard dummy text ever since the Lorem ipsum dolor sit amet consectetur adipisicing elit Quidem, sint."
                    }
                  />
                  <HomeContentCard
                    hovertext={
                      "Lorem Ipsum is simply dummy text of the printing and typesettin industry Lorem Ipsum has been the industry standard dummy text ever since the Lorem ipsum dolor sit amet consectetur adipisicing elit Quidem, sint."
                    }
                  />
                  <HomeContentCard
                    hovertext={
                      "Lorem Ipsum is simply dummy text of the printing and typesettin industry Lorem Ipsum has been the industry standard dummy text ever since the Lorem ipsum dolor sit amet consectetur adipisicing elit Quidem, sint."
                    }
                  />
                  <HomeContentCard
                    hovertext={
                      "Lorem Ipsum is simply dummy text of the printing and typesettin industry Lorem Ipsum has been the industry standard dummy text ever since the Lorem ipsum dolor sit amet consectetur adipisicing elit Quidem, sint."
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
function newFunction() {
  return (
    <div className="userdash__overlay__content__right__header__entry__data">
      <div className="userdash__overlay__content__right__header__entry__data__heading">
        Marshmello Inc
      </div>
      <div className="userdash__overlay__content__right__header__entry__data__web">
        www.umbrella.com
      </div>
      <div className="userdash__overlay__content__right__header__entry__data__city">
        Lahore
      </div>
      <div className="userdash__overlay__content__right__header__entry__data__heading">
        CEO
      </div>
      <div className="userdash__overlay__content__right__header__entry__data__city">
        2018 - 2020
      </div>
    </div>
  );
}
function newEducation() {
  return (
    <div className="userdash__overlay__content__right__header__entry__data">
      <div className="userdash__overlay__content__right__header__entry__data__heading">
        Slow University
      </div>
      <div className="userdash__overlay__content__right__header__entry__data__web">
        United States
      </div>

      <div className="userdash__overlay__content__right__header__entry__data__city">
        slow.com
      </div>
      <div className="userdash__overlay__content__right__header__entry__data__heading">
        BS( architecture )
      </div>
      <div className="userdash__overlay__content__right__header__entry__data__city">
        June 2018 - July 2020
      </div>
    </div>
  );
}
function newSkills() {
  return (
    <div className="userdash__overlay__content__right__header__entry__data">
      <div className="userdash__overlay__content__right__header__entry__data__heading">
        Skill Name
      </div>
    </div>
  );
}
function newAwards() {
  return (
    <div className="userdash__overlay__content__right__header__entry__data">
      <div className="userdash__overlay__content__right__header__entry__data__heading">
        Award Name
      </div>
      <div className="userdash__overlay__content__right__header__entry__data__web">
        2018
      </div>

      <div className="userdash__overlay__content__right__header__entry__data__heading">
        Organization Name
      </div>
      <div className="userdash__overlay__content__right__header__entry__data__city">
        www.org.com
      </div>
    </div>
  );
}
