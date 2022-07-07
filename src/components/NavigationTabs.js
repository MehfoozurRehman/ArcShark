export default function NewFunction({
  Heading,
  Website,
  Location,
  Ceo,
  Date,
  Study,
  Year,
  Organization,
}) {
  return (
    <div className="userdash__overlay__content__right__header__entry__data">
      <div className="userdash__overlay__content__right__header__entry__data__heading">
        {Heading}
      </div>
      <div className="userdash__overlay__content__right__header__entry__data__city">
        {Year}
      </div>

      <div className="userdash__overlay__content__right__header__entry__data__city">
        {Location}
      </div>

      <div className="userdash__overlay__content__right__header__entry__data__web__organiztion">
        {Organization}
      </div>
      <div className="userdash__overlay__content__right__header__entry__data__web">
        {Website}
      </div>
      <div className="userdash__overlay__content__right__header__entry__data__heading__study">
        {Study}
      </div>
      <div className="userdash__overlay__content__right__header__entry__data__heading">
        {Ceo}
      </div>
      <div className="userdash__overlay__content__right__header__entry__data__city">
        {Date}
      </div>
    </div>
  );
}
