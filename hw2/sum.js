import { Counter } from "./counter.js";

export class Sum {
  constructor() {
    this.initial = [5, 10, 100];
    this.sumAllCounters = this.sumForCounter();
  }

  decrement(event) {
    const newValue = this.initial - this.dStep;

    if (newValue >= this.min) {
      const resCounter = event.target.parentElement.querySelector(".counter");

      this.initial = newValue;
      resCounter.innerHTML = this.initial;

      this.handleChanges(this.initial);
    }
  }

  increment(event) {
    const newValue = this.initial + this.iStep;

    if (newValue <= this.max) {
      const resCounter = event.target.parentElement.querySelector(".counter");

      this.initial = newValue;
      resCounter.innerHTML = this.initial;

      this.handleChanges(this.initial);
    }
  }

  options() {
    const counter1 = new Counter(
      {
        initial: this.initial[0] ? this.initial[0] : 0,
        iStep: 1,
        dStep: 1,
        min: -10,
        max: 15
      },
      this.increment,
      this.decrement,
      this.handleChanges.bind(this, 0)
    );
    const counter10 = new Counter(
      {
        initial: this.initial[1] ? this.initial[1] : 0,
        iStep: 10,
        dStep: 10,
        min: -50,
        max: 100
      },
      this.increment,
      this.decrement,
      this.handleChanges.bind(this, 1)
    );
    const counter100 = new Counter(
      {
        initial: this.initial[2] ? this.initial[2] : 0,
        iStep: 100,
        dStep: 100,
        min: -200,
        max: 500
      },
      this.increment,
      this.decrement,
      this.handleChanges.bind(this, 2)
    );

    const sumAllCountersText = document.createElement("span");
    sumAllCountersText.className = "counter";
    sumAllCountersText.innerHTML = `Sum all counters: <strong>${this.sumAllCounters}</strong>`;

    const container = document.createElement("div");
    container.append(
      sumAllCountersText,
      counter1.render(),
      counter10.render(),
      counter100.render()
    );

    return container;
  }

  handleChanges(i, value) {
    this.initial[i] = value;
    this.sumAllCounters = this.sumForCounter();
    this.counter = document.querySelector(".counter");
    this.counter.innerHTML = `Sum all counters: <strong>${this.sumAllCounters}</strong>`;
  }

  sumForCounter() {
    this.sum = 0;
    for (let i in this.initial) {
      this.sum += this.initial[i];
    }
    return this.sum;
  }
}
