import "./StoryCard.scss";
export default function StoryCard({ image, profileName, profilePiture }) {
  return (
    <div className="card__story">
      <div className="card__story__image">
        <img src={image} alt="" />
      </div>
      <div className="card__story__profile">
        <div className="card__story__profile__image">
          <img src={profilePiture} alt="" />
        </div>
        <div className="card__story__profile__name">{profileName}</div>
      </div>
    </div>
  );
}
