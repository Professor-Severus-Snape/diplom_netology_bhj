/**
 * Класс LoginForm управляет формой
 * входа в портал
 * */
class LoginForm extends AsyncForm {
  /**
   * Производит авторизацию с помощью User.login
   * После успешной авторизации, сбрасывает форму,
   * устанавливает состояние App.setState( 'user-logged' ) и
   * закрывает окно, в котором находится форма
   * */
  onSubmit(data) {
    const callback = (err, response) => {
      // Варианты response:
      // response = {success: true, user: {name: "demo", email: "demo@demo", password: "demo", id: "1"}}
      // response = {success: false, error: "Пользователь c email demo@demo и паролем 123 не найден"}
      if (response.success && response.user) {
        this.element.reset();
        App.setState("user-logged");
        App.getModal("login").close();
      }
    }
    User.login(data, callback);
  }
}
