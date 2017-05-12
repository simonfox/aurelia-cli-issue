export class App {
  constructor() {
    this.message = 'Hello World!';
  }

  async doIt() {
    let result = await this._doIt();
    this.message += result;
  }

  _doIt() {
    return Promise.resolve("1122");
  }
}
