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

function logoutForm() {
  player.logoutButton();
  location.reload();
}
