import { provider, inject } from "kaop"
import { beforeInstance } from "kaop-ts"


@provider.singleton
class Bar {
  val1 = undefined;
  val2 = undefined;
  constructor(arg1, arg2) {
    this.val1 = arg1;
    this.val2 = arg2;
  }
}

@beforeInstance(inject.args(Bar))
class Dummy {
  constructor(bar) {
    console.log(bar)
  }
}

Bar(1, 3)

new Dummy
