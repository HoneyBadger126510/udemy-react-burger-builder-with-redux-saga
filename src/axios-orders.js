import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-my-burger-18a74.firebaseio.com/'
});

export default instance;
