class Counter {
  constructor(hash = {}) {
    this.initial = hash.initial ? hash.initial : 0;
    this.iStep = hash.iStep ? hash.iStep : 1;
    this.dStep = hash.dStep ? hash.dStep : 1;
    this.min = hash.min === undefined ? -Infinity : hash.min;
    this.max = hash.max === undefined ? Infinity : hash.max;
    this.counter = this.initial;
  }

  render() {
    const blockForCounter = document.createElement("div");
    blockForCounter.className = "block-for-counter";

    const iStepBtn = document.createElement("input");
    iStepBtn.type = "button";
    iStepBtn.value = `${this.iStep}`;

    const result = document.createElement("span");
    result.className = "result";
    result.innerHTML = `${this.initial}`;

    const dStepBtn = document.createElement("input");
    dStepBtn.type = "button";
    dStepBtn.value = `${this.dStep}`;

    document.body.appendChild(blockForCounter);
    blockForCounter.appendChild(dStepBtn);
    blockForCounter.appendChild(result);
    blockForCounter.appendChild(iStepBtn);

    iStepBtn.addEventListener("click", this.increment.bind(this));
    dStepBtn.addEventListener("click", this.decrement.bind(this));

    this.sum();
  }
  renderResAllCouters() {
    const blockForResult = document.createElement("div");
    blockForResult.className = "block-for-result";

    const resAllCounters = document.createElement("span");
    resAllCounters.className = "result-all-counters";
    resAllCounters.innerHTML = "0";

    document.body.appendChild(blockForResult);
    blockForResult.appendChild(resAllCounters);
  }
  sum() {
    let sum = 0;
    const result = document.querySelectorAll(".result");
    const resAllCounters = document.querySelector(".result-all-counters");

    for (let i = 0; i < result.length; i += 1) {
      sum += parseInt(result[i].innerText);
    }
    resAllCounters.innerHTML = `Result all counters ${sum}`;
  }

  increment(event) {
    const result = event.target.parentElement.querySelector(".result");

    if (this.counter + this.iStep <= this.max) {
      this.counter = this.counter + this.iStep;
      result.innerText = this.counter;
      this.sum();
    }
  }
  decrement(event) {
    const result = event.target.parentElement.querySelector(".result");

    if (this.counter - this.dStep >= this.min) {
      this.counter = this.counter - this.dStep;
      result.innerHTML = this.counter;
      this.sum();
    }
  }
}

const counter1 = new Counter({
  initial: 0,
  dStep: 1,
  iStep: 1,
  min: 0,
  max: 10
});

const counter10 = new Counter({
  initial: 0,
  dStep: 10,
  iStep: 10,
  min: -190,
  max: 100
});

const counter100 = new Counter();

counter1.renderResAllCouters();
counter1.render();
counter10.render();
counter100.render();
