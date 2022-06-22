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
const logoutForm = () => player.logOutPlayer;
