let username = document.getElementById("username");
let title = document.getElementById("title");
let registerform = document.getElementById("registerform");
let logout = document.getElementById("logout");
let navbar = document.getElementById("navbar");
let goToTop = document.getElementById("top");
let reward = document.getElementById("reward");
let rewardImg = document.getElementById("imgReward");
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

const clear = () => {
  username.value = "";
  registerform.style.display = "none";
};

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

const nextLevel3 = () => {
  clearLevel1();
  clearLevel2();
  showGameLvl3();
};

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

const goToLevel3 = () => {
  direc("#start-level3", 500);
  nextLevel3();
  modalLevel3.style.visibility = "hidden";
  modalLevel3.style.opacity = 0;
};

const closeModal = () => {
  alert(`Terimakasih telah bermain, resiko ditanggung ${sessionStorage.getItem("token")}`);
  player.logoutButton();
  location.reload();
  getModalWin.style.visibility = "hidden";
  getModalWin.style.opacity = 0;
};

//modal lose
const modalLose = () => {
  getModalLose.style.visibility = "visible";
  getModalLose.style.opacity = 1;
};
//button modal lose
const goToHome = () => {
  location.href = "#home";
  getModalLose.style.visibility = "hidden";
  getModalLose.style.opacity = 0;
};

const btnLoseLogout = () => {
  getModalLose.style.visibility = "hidden";
  getModalLose.style.opacity = 0;
  alert(`Terimakasih telah bermain, resiko ditanggung ${sessionStorage.getItem("token")}`);
  logoutForm();
};
