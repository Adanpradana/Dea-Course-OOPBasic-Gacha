class Player {
  constructor() {
    this._token = sessionStorage.getItem("token");
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

  //init  level 1
  get rollingDice() {
    let roll = [];
    for (let i = 0; i < gachaOption.length; i++) {
      const randomNumber = gachaOption[~~(Math.random() * gachaOption.length)];
      roll.push(randomNumber);
    }
    return roll;
  }
  get start() {
    const rolling = setInterval(() => {
      const result = player.rollingDice;
      gachaOption1.textContent = result[0];
      gachaOption2.textContent = result[1];
      gachaOption3.textContent = result[2];
    }, 100);
    setTimeout(() => {
      clearInterval(rolling);
      this.winner;
    }, 1000);
  }
  get winner() {
    if (gachaOption1.textContent == gachaOption2.textContent && gachaOption1.textContent == gachaOption3.textContent) {
      modalWin();
    } else {
      modalLose();
    }
  }
  //init level 2
  get startGachaLevel2() {
    const array = [];
    for (let i = 0; i < gacaOptionLevel2.length; i++) {
      const random = gacaOptionLevel2[~~(Math.random() * gacaOptionLevel2.length)];
      array.push(random);
    }
    return array;
  }
  get rollDiceLevel2() {
    const setTimeoutDice = setInterval(function () {
      const resultLevel2 = player.startGachaLevel2;
      boxLevel21.textContent = resultLevel2[0];
      boxLevel22.textContent = resultLevel2[1];
      boxLevel23.textContent = resultLevel2[2];
      boxLevel24.textContent = resultLevel2[3];
    }, 60);

    setTimeout(() => {
      clearInterval(setTimeoutDice);
      this.winnerLevel2;
    }, 500);
  }

  get winnerLevel2() {
    if (boxLevel21.textContent == boxLevel22.textContent && boxLevel21.textContent == boxLevel23.textContent && boxLevel21.textContent == boxLevel24.textContent) {
      modalWinLevel2();
    } else {
      modalLose();
    }
  }

  //init level 3
  get rollingDiceLevel3() {
    const array2 = [];
    for (let i = 0; i < gachaOptionLevel3.length; i++) {
      const randomNumber3 = gachaOptionLevel3[~~(Math.random() * gachaOptionLevel3.length)];
      array2.push(randomNumber3);
    }
    return array2;
  }
  get rollDiceLevel3() {
    const setTimeoutDiceLevel3 = setInterval(function () {
      const resultLevel3 = player.rollingDiceLevel3;
      boxLevel31.textContent = resultLevel3[0];
      boxLevel32.textContent = resultLevel3[1];
      boxLevel33.textContent = resultLevel3[2];
      boxLevel34.textContent = resultLevel3[3];
      boxLevel35.textContent = resultLevel3[4];
    }, 100);

    setTimeout(() => {
      clearInterval(setTimeoutDiceLevel3);
      this.winnerLevel3;
    }, 600);
  }
  get winnerLevel3() {
    if (boxLevel31.textContent == boxLevel32.textContent && boxLevel31.textContent == boxLevel33.textContent && boxLevel31 == boxLevel34.textContent && boxLevel31.textContent == boxLevel35.textContent) {
      this.rewardId;
    } else {
      modalLose();
    }
  }
  //reward
  get rewardId() {
    fetch("https://zoo-animal-api.herokuapp.com/animals/rand")
      .then((x) => x.json())
      .then((data) => {
        let img = new Image(300, 300);
        img.src = data.image_link;
        rewardImg.appendChild(img);
        reward.style.display = "block";
        setTimeout(() => {
          location.href = "#reward";
        }, 1000);
      });
  }
  //logout
  get logOutPlayer() {
    this.logoutButton;
    location.reload();
  }
  get logoutButton() {
    return (this.token = sessionStorage.removeItem("token"));
  }
}
