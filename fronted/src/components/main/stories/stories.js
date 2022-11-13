import { Plus } from "../../../svg";
import StoryCard from "../story-card/StoryCard";
import "./stories.scss";
import { stories } from "../../../data/HomeData";
export default function Stories() {
  return (
    <div className="story">
      <div className="story__middle">
        <div className="story__middle__row">
          <div className="card__story__new">
            <div className="card__story__new__image">
              <img src="../../../images/default_pic.png" alt="" />
            </div>
            <div className="card__story__new__body">
              <div className="card__story__new__body__button">
                <Plus color="#fff" />
              </div>
              <div className="card__story__new__body__title">Create story</div>
            </div>
          </div>
          {stories.map((item, index) => {
            return (
              <StoryCard
                key={index}
                image={item.image}
                profileName={item.profile_name}
                profilePiture={item.profile_picture}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
