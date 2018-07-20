import { onException } from "kaop-ts"

class Foo {

  // @onException(meta => {
  //   console.log(meta.exception.message)
  //   meta.handle() // this prevent the exception to be raised
  // })
  static throwError() {
    asdasd
  }
}

Foo.throwError();
