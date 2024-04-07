/**
 * Класс Entity - базовый для взаимодействия с сервером.
 * Имеет статическое свойство URL, равно пустой строке.
 * */
class Entity {
  static URL = "";

  /**
   * Запрашивает с сервера список данных.
   * Это могут быть счета или доходы/расходы
   * (в зависимости от того, что наследуется от Entity)
   * */
  static list(data, callback) {
    const options = {
      url: this.URL,
      data,
      method: "GET",
      callback
    };
    createRequest(options);
  }

  /**
   * Создаёт счёт или доход/расход с помощью запроса
   * на сервер. (в зависимости от того,
   * что наследуется от Entity)
   * */
  static create(data, callback) {
    const options = {
      url: this.URL,
      data,
      method: "PUT",
      callback
    };
    createRequest(options);
  }

  /**
   * Удаляет информацию о счёте или доходе/расходе
   * (в зависимости от того, что наследуется от Entity)
   * */
  static remove(data, callback) {
    const options = {
      url: this.URL,
      data,
      method: "DELETE",
      callback
    };
    createRequest(options);
  }
}
