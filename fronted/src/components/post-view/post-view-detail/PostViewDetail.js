import { Dots } from "../../../svg";
import "./PostViewDetail.scss";
export default function PostViewDetail({ post, user }) {
  return (
    <div className="post__view__detail">
      <div className="post__view__detail__profile">
        <div className="post__view__detail__profile__left">
          <img src={user?.picture} />
          <div className="post__view__detail__profile__left__group">
            <div className="post__view__detail__profile__left__group__name">
              {user?.first_name} {user?.last_name}
            </div>
            <div className="post__view__detail__profile__left__group__time">
              a month ago
            </div>
          </div>
        </div>
        <div className="post__view__detail__profile__right">
          <Dots />
        </div>
      </div>
      <div className="post__view__detail__text">{post?.text}</div>
      {post && post.images && (
        <div className="post__view__detail__image">
          <img src={post && post.images && post.images[0]?.url} alt="" />
        </div>
      )}
      <div className="post__view__detail__action">
        <div className="post__view__detail__action__group">
          <div className="post__view__detail__action__group__item">
            <span>0</span>
            <span>comments</span>
          </div>
          <div className="post__view__detail__action__group__item">
            <span>0</span>
            <span>share</span>
          </div>
        </div>
      </div>
      <div className="post__view__detail__share">
        <div className="post__view__detail__share__item"></div>
        <div className="post__view__detail__share__item"></div>
        <div className="post__view__detail__share__item"></div>
      </div>
      <div className="post__view__detail__comment"></div>
    </div>
  );
}
