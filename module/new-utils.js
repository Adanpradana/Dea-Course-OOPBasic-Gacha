let username = document.getElementById("username");
let title = document.getElementById("title");
let registerform = document.getElementById("registerform");
let logout = document.getElementById("logout");
let navbar = document.getElementById("navbar");
let goToTop = document.getElementById("top");
let reward = document.getElementById("reward");
let startSection = document.getElementById("start");
const getModalWin = document.getElementById("modal-bg-win");
const getModalLose = document.getElementById("modal-bg-lose");
const startBtn = document.getElementById("rollDiceLevel1");
const modalLevel3 = document.getElementById("modal-bg-level2");

//const gacha level 1
const gachaOption = ["💎", "🤑", "💸"];
const gachaOption1 = document.getElementById("box1");
const gachaOption2 = document.getElementById("box2");
const gachaOption3 = document.getElementById("box3");

//const  gacha level 2
const startLevel2 = document.getElementById("start-level2");
const startLevel3 = document.getElementById("start-level3");
// const element array game level 2
const gacaOptionLevel2 = ["🎱", "🎊", "🎉", "😍"];
const boxLevel21 = document.getElementById("box1-level-2");
const boxLevel22 = document.getElementById("box2-level-2");
const boxLevel23 = document.getElementById("box3-level-2");
const boxLevel24 = document.getElementById("box4-level-2");

// const element level 3
const gachaOptionLevel3 = ["💎", "❤", "✨", "👮‍♀️", "👮‍♂️"];
const boxLevel31 = document.getElementById("box1-level-3");
const boxLevel32 = document.getElementById("box2-level-3");
const boxLevel33 = document.getElementById("box3-level-3");
const boxLevel34 = document.getElementById("box4-level-3");
const boxLevel35 = document.getElementById("box5-level-3");

const getBoxLevel1 = () => {
  gachaOption1.textContent = gachaOption[0];
  gachaOption2.textContent = gachaOption[1];
  gachaOption3.textContent = gachaOption[2];
};

const getBoxLevel2 = () => {
  boxLevel21.textContent = gacaOptionLevel2[0];
  boxLevel22.textContent = gacaOptionLevel2[1];
  boxLevel23.textContent = gacaOptionLevel2[2];
  boxLevel24.textContent = gacaOptionLevel2[3];
};

const getBoxLevel3 = () => {
  boxLevel31.textContent = gachaOptionLevel3[0];
  boxLevel32.textContent = gachaOptionLevel3[1];
  boxLevel33.textContent = gachaOptionLevel3[2];
  boxLevel34.textContent = gachaOptionLevel3[3];
  boxLevel35.textContent = gachaOptionLevel3[4];
};

//style
const reset = () => {
  registerform.style.display = "block";
  navbar.style.display = "none";
  logout.style.display = "none";
  goToTop.style.display = "none";
  startSection.style.display = "none";
  reward.style.display = "none";
  startLevel2.style.display = "none";
  startLevel3.style.display = "none";
};

function clear() {
  username.value = "";
  registerform.style.display = "none";
}

//clear game and reward section
const clearGame = () => {
  reward.style.display = "none";
  startLevel2.style.display = "none";
  startLevel3.style.display = "none";
};

const clearLevel1 = () => (startSection.style.display = "none");
const showGameLvl2 = () => (startLevel2.style.display = "block");

const clearLevel2 = () => (startLevel2.style.display = "none");
const showGameLvl3 = () => (startLevel3.style.display = "block");

function nextLevel3() {
  clearLevel1();
  clearLevel2();
  showGameLvl3();
}

const display = () => {
  title.textContent = `Welcome ${sessionStorage.getItem("token")}`;
  document.title = sessionStorage.getItem("token");
  navbar.style.display = "flex";
  navbar.style.justifyContent = "space-between";
  logout.style.display = "block";
  goToTop.style.display = "flex";
  startSection.style.display = "block";
  clearGame();
  // level 1 gacha box
  getBoxLevel1();
  //level 2 gacha box
  getBoxLevel2();
  //level 3 gacha box
  getBoxLevel3();
};

//level 1 logic
const rollingDice = () => {
  let roll = [];
  for (let i = 0; i < gachaOption.length; i++) {
    const randomNumber = gachaOption[~~(Math.random() * gachaOption.length)];
    roll.push(randomNumber);
  }
  return roll;
};

const start = () => {
  const rolling = setInterval(function () {
    const result = rollingDice();
    gachaOption1.textContent = result[0];
    gachaOption2.textContent = result[1];
    gachaOption3.textContent = result[2];
  }, 100);

  setTimeout(function () {
    clearInterval(rolling);
    winner();
  }, 1000);
};
const winner = () => {
  if (gachaOption1.textContent == gachaOption2.textContent && gachaOption1.textContent == gachaOption3.textContent) {
    modalWin();
  } else {
    modalLose();
  }
};

const direc = (url, time) => {
  setTimeout(() => {
    location.href = url;
  }, time);
};

// level 2 logic
//declare logic level2
const startGachaLevel2 = () => {
  const array = [];
  for (let i = 0; i < gacaOptionLevel2.length; i++) {
    const random = gacaOptionLevel2[~~(Math.random() * gacaOptionLevel2.length)];
    array.push(random);
  }
  return array;
};

const rollDiceLevel2 = () => {
  const setTimeoutDice = setInterval(function () {
    const resultLevel2 = startGachaLevel2();
    boxLevel21.textContent = resultLevel2[0];
    boxLevel22.textContent = resultLevel2[1];
    boxLevel23.textContent = resultLevel2[2];
    boxLevel24.textContent = resultLevel2[3];
  }, 60);

  setTimeout(() => {
    clearInterval(setTimeoutDice);
    winnerLevel2();
  }, 500);
};
const winnerLevel2 = () => {
  if (boxLevel21.textContent == boxLevel22.textContent && boxLevel21.textContent == boxLevel23.textContent && boxLevel21.textContent == boxLevel24.textContent) {
    console.log(`pkee`);
    modalWinLevel2();
  } else {
    modalLose();
  }
};

//level 3 logic

const rollingDiceLevel3 = () => {
  const array2 = [];
  for (let i = 0; i < gachaOptionLevel3.length; i++) {
    const randomNumber3 = gachaOptionLevel3[~~(Math.random() * gachaOptionLevel3.length)];
    array2.push(randomNumber3);
  }
  return array2;
};

const rollDiceLevel3 = () => {
  const setTimeoutDiceLevel3 = setInterval(function () {
    const resultLevel3 = rollingDiceLevel3();
    boxLevel31.textContent = resultLevel3[0];
    boxLevel32.textContent = resultLevel3[1];
    boxLevel33.textContent = resultLevel3[2];
    boxLevel34.textContent = resultLevel3[3];
    boxLevel35.textContent = resultLevel3[4];
  }, 100);

  setTimeout(() => {
    clearInterval(setTimeoutDiceLevel3);
    winnerLevel3();
  }, 700);
};

const winnerLevel3 = () => {
  if (boxLevel31.textContent == boxLevel32.textContent && boxLevel31.textContent == boxLevel33.textContent && boxLevel31 == boxLevel34.textContent && boxLevel31.textContent == boxLevel35.textContent) {
    modalWin();
  } else {
    modalLose();
  }
};

const modalWinLevel2 = () => {
  modalLevel3.style.visibility = "visible";
  modalLevel3.style.opacity = 1;
};
const modalWin = () => {
  getModalWin.style.visibility = "visible";
  getModalWin.style.opacity = 1;
};

const nextLevel = () => {
  direc("#start-level2", 500);
  showGameLvl2();
  clearLevel1();
  getModalWin.style.visibility = "hidden";
  getModalWin.style.opacity = 0;
};

function goToLevel3() {
  direc("#start-level3", 500);
  nextLevel3();
  modalLevel3.style.visibility = "hidden";
  modalLevel3.style.opacity = 0;
}

function closeModal() {
  alert(`Terimakasih telah bermain, resiko ditanggung ${sessionStorage.getItem("token")}`);
  player.logoutButton();
  location.reload();
  getModalWin.style.visibility = "hidden";
  getModalWin.style.opacity = 0;
}

//modal lose
function modalLose() {
  getModalLose.style.visibility = "visible";
  getModalLose.style.opacity = 1;
}
//button modal lose
function goToHome() {
  location.href = "#home";
  getModalLose.style.visibility = "hidden";
  getModalLose.style.opacity = 0;
}

function btnLoseLogout() {
  getModalLose.style.visibility = "hidden";
  getModalLose.style.opacity = 0;
  alert(`Terimakasih telah bermain, resiko ditanggung ${sessionStorage.getItem("token")}`);
  logoutForm();
}

const rewardId = () => {
  fetch("https://zoo-animal-api.herokuapp.com/animals/rand")
    .then((x) => x.json())
    .then((data) => {
      console.log(`reward anda dalah:`, data);
      const img = new Image(500, 500);
      img.src = data.image_link;
      reward.appendChild(img);
      reward.style.display = "block";
      setTimeout(() => {
        location.href = "#reward";
      }, 1000);
    });
};
