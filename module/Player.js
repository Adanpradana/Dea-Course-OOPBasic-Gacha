class Player {
  constructor() {
    this._token = sessionStorage.getItem("token");
    this._gacha = [];
  }
  set token(_token) {
    return (this._token = _token);
  }
  get token() {
    return this._token;
  }

  set register(_username) {
    const session = sessionStorage.setItem("token", `${_username}`);
    return (this.token = session);
  }

  logoutButton() {
    return (this.token = sessionStorage.removeItem("token"));
  }
}
