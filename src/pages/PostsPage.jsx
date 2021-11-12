import { useEffect, useState } from 'react';
import * as apiService from '../services/apiService';
import Loader from 'react-loader-spinner';
import Filter from '../components/Filter/Filter';
import PostsList from '../components/PostsList/PostsList';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

export default function PostsPage() {
  const [posts, setPosts] = useState([]);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = () => {
    setStatus('fetching');

    apiService.getPosts().then(response => {
      setPosts(response);
    });

    setStatus('resolved');
  };

  const getOneAuthorsPosts = id => {
    setStatus('fetching');

    apiService.getOneAuthorsPosts(id).then(response => {
      setPosts(response);
    });

    setStatus('resolved');
  };

  return (
    <>
      {status === 'fetching' && (
        <Loader
          className="Loader"
          type="ThreeDots"
          color="#b00b69"
          height={100}
          width={100}
        />
      )}
      <Filter onSubmit={getOneAuthorsPosts} />
      {posts ? (
        <PostsList posts={posts} />
      ) : (
        <h2>Error getting posts, try later 😟</h2>
      )}
      {posts.length < 1 && (
        <h2>Nothing found, specify search or reload page to get the latest</h2>
      )}
    </>
  );
}
