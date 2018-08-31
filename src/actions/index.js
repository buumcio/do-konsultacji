import axios from "axios";

const getNews = query => {
  const request = axios.get(
    `https://newsapi.org/v1/=everything?q=${query}`
  );

  return dispatch => {
    request.then(({ data }) => {
      dispatch({
        type: "GET_NEWS",
        payload: data.news
      });
    });
  };
};

export default getNews;