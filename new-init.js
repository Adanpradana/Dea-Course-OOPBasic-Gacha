const player = new Player();

function register() {
  player.register = username.value;
  clear();
  display();
  direc("#start", 500);
}

onload = () => {
  if (player.token && player.token !== "") {
    display();
    clear();
  } else {
    reset();
  }
};

const start = () => player.start;
const rollDiceLevel2 = () => player.rollDiceLevel2;
const rollDiceLevel3 = () => player.rollDiceLevel3;
const logoutForm = () => player.logOutPlayer;

const direc = (url, time) => {
  setTimeout(() => {
    location.href = url;
  }, time);
};
