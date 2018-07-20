import { afterMethod } from "kaop-ts"

const Log = afterMethod(meta => {
  console.log("called: ", meta.target.name, meta.key)
  console.log("arguments: ", meta.args)
  console.log("result: ", meta.result)
})


class Foo {
  @Log
  static bar(arg0, arg1) {
    return arg0 + arg1
  }
}

Foo.bar(12, "fff")
