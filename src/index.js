import { beforeInstance } from "kaop-ts"

@beforeInstance(meta => meta.args.push(1, 2, 3))
class Foo {
  constructor(...args) {
    console.log("constructor", args);
  }
}

new Foo
