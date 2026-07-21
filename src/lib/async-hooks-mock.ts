export class AsyncLocalStorage {
  getStore() {
    return undefined;
  }
  run(store: any, callback: () => any) {
    return callback();
  }
}
