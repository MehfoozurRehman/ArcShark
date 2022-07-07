import React, { useEffect, useState } from "react";
import { usersigninpage } from "../assets";
import { ProfileSidebarAbout } from "../components/ProfileSidebarAbout";
import { ProfileSidebarAdditional } from "../components/ProfileSidebarAdditional";
import { ProfileSidebarCta } from "../components/ProfileSidebarCta";
import { ProfileSidebarLinks } from "../components/ProfileSidebarLinks";
import { ProfileSidebarProfile } from "../components/ProfileSidebarProfile";
import { ProfileSidebarSocials } from "../components/ProfileSidebarSocials";
import { ProfileSidebarStats } from "../components/ProfileSidebarStats";

export default function Profile({ user }) {
  return (
    <>
      <img
        src={usersigninpage}
        alt="user__profile"
        className="user__profile__img"
      />
      <div className="user__profile__content">
        <div className="user__profile__content__sidebar">
          <ProfileSidebarProfile />
          <ProfileSidebarLinks />
          <ProfileSidebarCta />
          <ProfileSidebarStats />
          <ProfileSidebarAbout />
          <ProfileSidebarSocials />
          <ProfileSidebarAdditional />
        </div>
        <div className="user__profile__content__main">
          <ProfileMainTop />
          <div className="user__profile__content__main__bottom">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo quam
            nam ex error eius aliquid sequi ad culpa recusandae, autem at. Minus
            corporis eius, inventore labore mollitia nostrum tempore, aliquam
            laboriosam, expedita ad numquam vero culpa fugiat sed necessitatibus
            veritatis iusto illum. Hic asperiores sapiente, ea maiores aperiam
            iure deleniti perspiciatis odio blanditiis porro tempore quia
            aliquam reprehenderit aspernatur officiis sint voluptate,
            voluptatibus exercitationem quisquam eaque distinctio perferendis
            dolorem incidunt illum. Architecto quo reprehenderit accusamus
            officia ut animi at laborum voluptatem suscipit, totam vero,
            voluptates officiis quos maxime repudiandae? Dicta veritatis
            cupiditate itaque cum at corporis iste voluptatum officia tempora!
            Non distinctio aliquid necessitatibus repudiandae illo quia id
            mollitia sed, incidunt sequi ipsum fugiat sunt voluptatum optio
            similique culpa esse. Quia, rem sint exercitationem voluptatem
            quaerat expedita voluptas quam a explicabo mollitia facere libero
            quasi minus omnis. Cumque, veniam eius? Illo nobis totam ipsam?
            Error totam ea hic officia qui doloremque ut accusamus ipsam aliquid
            vitae. Error vero autem nulla vitae expedita quasi quod laudantium
            similique labore incidunt cum in perferendis excepturi, tempore
            sequi odio ut exercitationem laborum quidem et ipsa. Perferendis
            laboriosam eaque pariatur iste sunt soluta? At natus quasi porro
            illo esse? Placeat adipisci ex repudiandae optio iste cum deleniti
            aut fuga culpa dolore illo reiciendis quia, a atque repellat
            quibusdam quae magni voluptatum pariatur quis quisquam. Aliquid,
            adipisci repellendus, illo sint quae consequatur eos, vero quos
            consequuntur debitis nemo. Rem quaerat dolores ad magnam molestiae
            dolorem natus temporibus, porro corporis ipsum accusantium? Odit
            ipsum ullam blanditiis neque velit ea consequuntur possimus
            accusamus debitis illo. Et, itaque pariatur? Totam harum numquam
            dolore alias ad? Earum officiis ipsam blanditiis perferendis
            cupiditate non consequuntur enim voluptatibus commodi eaque, omnis
            pariatur, aliquid rerum ex sequi ullam? Quibusdam praesentium
            deleniti delectus reiciendis eaque dicta? Dolores eaque ipsa
            deserunt. Ex porro tenetur itaque! Quae odio, dolores vero quibusdam
            tenetur ullam sint laudantium saepe est quam ratione modi
            architecto, esse, itaque consequatur vel nisi beatae aperiam minus?
            Dolor officiis, rerum optio sed at atque qui quia? Qui neque
            asperiores ut in facilis architecto sint nemo temporibus atque
            quisquam, molestias nulla nisi odit itaque modi fugit accusantium
            maiores! Modi porro illum atque, delectus earum perferendis rem
            obcaecati accusamus repudiandae harum dignissimos, sunt numquam
            corrupti, enim explicabo. Repudiandae ab, porro nemo magnam
            laboriosam obcaecati aspernatur modi aliquid est veritatis illo
            ducimus sequi nostrum sint repellendus, sed laborum inventore! Cum
            numquam et qui voluptatum aut, possimus quia fugit ad modi, soluta
            alias! Corrupti, error officiis natus exercitationem quia molestias
            reiciendis laborum praesentium! Totam aliquid possimus repellendus
            libero. Quasi dolores aspernatur doloribus fuga saepe, facilis in
            commodi facere consectetur officia neque odit id, sequi veritatis
            illo molestias error vitae. Nisi ratione, similique delectus quam
            magnam facere dolore veniam eaque quasi rem ducimus eius, maiores
            expedita et animi sint iusto autem quibusdam placeat nulla
            repellendus dolorum! Recusandae vitae adipisci tempora pariatur
            repellendus vero quis eaque sint ea quasi! Quia sint omnis ipsam
            impedit distinctio suscipit quasi! Fuga aspernatur incidunt numquam?
            Optio dolore ipsa hic praesentium modi quia blanditiis recusandae.
          </div>
        </div>
      </div>
    </>
  );
}

function ProfileMainTopTab({ selected, setSelected, children }) {
  return (
    <div className="user__profile__content__main__top__tabs__entry">
      <input
        type="radio"
        className="user__profile__content__main__top__tabs__entry__input"
        name="user__profile__content__main__top__tabs__entry"
        checked={selected === children}
        defaultChecked={selected === children}
        onChange={() => setSelected(children)}
      />
      <div className="user__profile__content__main__top__tabs__entry__content">
        {children}
      </div>
    </div>
  );
}

function ProfileMainTop({}) {
  const [selectedTab, setSelectedTab] = useState("Work Experience");
  console.log(selectedTab);
  return (
    <div className="user__profile__content__main__top">
      <div className="user__profile__content__main__top__tabs">
        <ProfileMainTopTab selected={selectedTab} setSelected={setSelectedTab}>
          Work Experience
        </ProfileMainTopTab>
        <ProfileMainTopTab selected={selectedTab} setSelected={setSelectedTab}>
          Education
        </ProfileMainTopTab>
        <ProfileMainTopTab selected={selectedTab} setSelected={setSelectedTab}>
          Skills
        </ProfileMainTopTab>
        <ProfileMainTopTab selected={selectedTab} setSelected={setSelectedTab}>
          Awards
        </ProfileMainTopTab>
        <ProfileMainTopTab selected={selectedTab} setSelected={setSelectedTab}>
          Languages
        </ProfileMainTopTab>
      </div>
    </div>
  );
}
