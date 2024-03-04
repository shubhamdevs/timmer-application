class Timer {
  constructor(durationInput, startButton, pauseButton) {
    this.durationInput = durationInput;
    this.startButton = startButton;
    this.pauseButton = pauseButton;

    this.timeLeft = 30;

    this.startButton.addEventListener("click", this.start);
    this.pauseButton.addEventListener("click", this.pause);
  }

  start = () => {
    this.tick();
    this.interval = setInterval(this.tick, 1000);
    console.log(timer);
  };

  pause = () => {
    clearInterval(this.interval);
  };

  tick = () => {
    this.timeLeft -= 1;
    this.durationInput.value = this.timeLeft;
    console.log("tick");
  };
}

const durationInput = document.querySelector("#duration");
const startButton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");

const timer = new Timer(durationInput, startButton, pauseButton);
