import './PostsListItem.scss';

export default function PostsListItem({ userId, title, body }) {
  return (
    <li className="postsListItem">
      <h4 className="postsListItem__user">
        Posted by user <b>{userId}:</b>
      </h4>
      <h5 className="postsListItem__title">{title}</h5>
      <p className="postsListItem__text">{body}</p>
    </li>
  );
}
