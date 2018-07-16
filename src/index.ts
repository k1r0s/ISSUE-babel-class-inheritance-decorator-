import { beforeInstance } from "kaop-ts"

@beforeInstance(() => {})
class Foo {}

class Bar extends Foo {
  sayHello() {
    return "hi"
  }
}

const bar = new Bar

console.log(bar.sayHello());
