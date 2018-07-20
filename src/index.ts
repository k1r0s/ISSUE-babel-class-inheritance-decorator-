import { beforeInstance } from "kaop-ts"

@beforeInstance(() => console.log("before instance"))
class Foo {
  constructor() {
    console.log("constructor invokation")
  }
}

new Foo
