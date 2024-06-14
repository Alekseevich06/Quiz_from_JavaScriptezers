import axios from "axios";

const request = axios.create({
    baseURL: '/api',
    headers: {'Content-Type': 'application/json'}
})


let accessToken = '';

function SetAccessToken(token) {
  accessToken = token;
   
}

/// В каждый запрос добавляет заголовок Authorization
request.interceptors.request.use((config) => {
  if (!config.headers.Authorization) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});


request.interceptors.response.use(
  (response) => response,
  async (error) => {
    const prevRequest = error.config;
    if (error.response.status === 403 && !prevRequest.sent) {
      const response = await axios('/api/token/refresh');
      accessToken = response.data.accessToken;
      prevRequest.sent = true;
      prevRequest.headers.Authorization = `Bearer ${accessToken}`;
      return axiosInstance(prevRequest);
    }
    return Promise.reject(error);
  },
);

export { SetAccessToken };

export default request