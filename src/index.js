import { beforeInstance } from "kaop-ts"
import { inject, provider } from "kaop"

@provider.singleton
class Yolo {
  msg = "hi!"
}

@beforeInstance(inject.args(Yolo))
class Foo {
  yolo = undefined
  constructor(_yolo) {
    this.yolo = _yolo;
  }
}

class Bar extends Foo {
  sayHello() {
    console.log(this.yolo.msg);
  }
}

const bar = new Bar
console.log(bar);


bar.sayHello();
