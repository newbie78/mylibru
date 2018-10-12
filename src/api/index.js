import axios from 'axios';
import isPropUndefined from 'lodash/fp/isUndefined';

const api = axios.create({
  withCredentials: true,
  baseURL: `${process.env.NODE_ENV === 'development' ?
    process.env.VUE_APP_DOMAIN_TEST : process.env.VUE_APP_DOMAIN_REAL}/api/`,
});

// получить следующую порцию данных по урл из response.data.next
export function next(url) {
  return new Promise((resolve, reject) => {
    api
      .get(url)
      .then((response) => {
        if (!isPropUndefined(response.data.error)) {
          reject(response.data.error);
        }
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

// книги
export function book(uid, sort) {
  return new Promise((resolve, reject) => {
    api
      .get(`userbooks/?bookshelf=3&user=${uid}&o=${sort}&page=1`)
      .then((response) => {
        if (!isPropUndefined(response.data.error)) {
          reject(response.data.error);
        }
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

// хочет прочитать
export function read(uid, sort) {
  return new Promise((resolve, reject) => {
    api
      .get(`userbooks/?bookshelf=4&user=${uid}&o=${sort}&page=1`)
      .then((response) => {
        if (!isPropUndefined(response.data.error)) {
          reject(response.data.error);
        }
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

// прочитанные книги
export function finished(uid, sort) {
  return new Promise((resolve, reject) => {
    api
      .get(`rating/?user=${uid}&o=${sort}&page=1`)
      .then((response) => {
        if (!isPropUndefined(response.data.error)) {
          reject(response.data.error);
        }
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}
