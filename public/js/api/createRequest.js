// пример объекта options:
// options = {
//   url: 'https://example.com',
//   data: { email: 'ivan@poselok.ru', password: 'odinodin' },  // NB! данные, могут отсутствовать!
//   method: 'GET',
//   callback: (err, response) => {
//     console.log( 'Ошибка, если есть', err );
//     console.log( 'Данные, если нет ошибки', response );
//   }
// });

/**
 * Основная функция для совершения запросов
 * на сервер.
 * */
const createRequest = (options = {}) => {
  const xhr = new XMLHttpRequest;
  xhr.responseType = "json";

  const {url, data = null, method} = options; // деструктуризация объекта
  console.log('url: ', url); // url: "/user/current"  // отладка
  console.log('data: ', data); // null || объект FormData  // отладка
  console.log('method: ', method); // "GET"  // отладка

  xhr.addEventListener("load", () => {
    options.callback(null, xhr.response); // {success: true, user: Object}
  });

  xhr.addEventListener("error", () => {
    options.callback(new Error("Ошибка запроса!"), null);
  });

  if (method === "GET") {
    console.log("Это GET-запрос");  // отладка
  } else {
    console.log("Это не GET-запрос!");  // отладка
  }

  try {
    xhr.open(method, url);
    xhr.send(data);
    console.log("Блок try завершился без ошибок!");  // отладка
  } catch(err) {
    console.log("Внимание! Мы в блоке catch!!!");  // отладка
    options.callback(err, null);
  }
};
