import axios from 'axios';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'http://jsonplaceholder.typicode.com';
const POSTS_URL = '/posts';
const LIMIT_OUTPUT = '?_page=0&_limit=10';
const ONE_AUTHOR_POSTS = '?userId=';

export async function getPosts() {
  try {
    const { data } = await axios.get(POSTS_URL + LIMIT_OUTPUT);
    return data;
  } catch (err) {
    toast.error(
      'Something went wrong while getting Posts. Please try again later.'
    );
    console.error(err.message);
  }
}

export async function getOneAuthorsPosts(authorId) {
  try {
    const { data } = await axios.get(POSTS_URL + ONE_AUTHOR_POSTS + authorId);
    return data;
  } catch (err) {
    toast.error(
      'Something went wrong while getting Posts. Please try again later.'
    );
    console.error(err.message);
  }
}
