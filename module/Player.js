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

  //reward
  get rewardId() {
    fetch("https://zoo-animal-api.herokuapp.com/animals/rand")
      .then((x) => x.json())
      .then((data) => {
        let img = new Image(500, 500);
        img.src = data.image_link;
        rewardImg.appendChild(img);
        reward.style.display = "block";
        setTimeout(() => {
          location.href = "#reward";
        }, 1000);
      });
  }

  get logoutButton() {
    return (this.token = sessionStorage.removeItem("token"));
  }

  get logOutPlayer() {
    this.logoutButton;
    location.reload();
  }
}
