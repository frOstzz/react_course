export class Counter {
  constructor(hash = {}, increment, decrement, handleChanges) {
    this.initial = hash.initial === undefined ? 0 : hash.initial;
    this.iStep = hash.iStep === undefined ? 1 : hash.iStep;
    this.dStep = hash.dStep === undefined ? 1 : hash.dStep;
    this.max = hash.max === undefined ? Infinity : hash.max;
    this.min = hash.min === undefined ? -Infinity : hash.min;
    this.handleChanges = handleChanges;
    this.increment = increment;
    this.decrement = decrement;
  }

  render() {
    const iStepBtn = document.createElement("input");
    iStepBtn.type = "button";
    iStepBtn.value = `${this.iStep}`;

    const dStepBtn = document.createElement("input");
    dStepBtn.type = "button";
    dStepBtn.value = `${this.dStep}`;

    const result = document.createElement("span");
    result.className = "counter";
    result.append(this.initial);

    const div = document.createElement("div");
    div.className = "block-for-conter";
    div.append(dStepBtn, result, iStepBtn);

    iStepBtn.addEventListener("click", this.increment.bind(this));
    dStepBtn.addEventListener("click", this.decrement.bind(this));

    return div;
  }
}
