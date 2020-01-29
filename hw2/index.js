import { Sum } from "./sum.js";

class Application {
  render() {
    const div = document.createElement("div");
    const createCounter = new Sum();
    div.append(createCounter.options());

    return div;
  }
}

const app = new Application();
document.body.append(app.render());
