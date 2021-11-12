import PostsListItem from '../PostsListItem';
import './PostsList.scss';

export default function PostsList({ posts }) {
  return (
    <ul>
      {posts.map(post => (
        <PostsListItem key={post.id} {...post} />
      ))}
    </ul>
  );
}
