// src/api/commonApi.js
import axios from 'axios';

const commonApi = axios.create({
  timeout: 10000, // 10 seconds timeout
});

export default commonApi;
