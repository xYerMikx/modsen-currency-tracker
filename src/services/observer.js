export class Observer {
  constructor() {
    this.observers = []
    this.data = {
      data: [
        {
          x: 0,
          o: 0,
          h: 0,
          l: 0,
          c: 0,
          s: [0, 0],
        },
      ],
    }
  }

  subscribe(fn) {
    this.observers.push(fn)

    fn(this.data)
  }

  unsubscribe(fn) {
    this.observers = this.observers.filter((subscriber) => subscriber !== fn)
  }

  setData(data) {
    this.data = data
    this.observers.forEach((observer) => observer(data))
  }
}

export const observable = new Observer()
