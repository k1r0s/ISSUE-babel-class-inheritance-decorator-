import { beforeMethod } from "kaop-ts"

const delay = meta => {
  console.log("async task started");
  setTimeout(() => {
    console.log("async task finished");
    meta.commit();
  }, 500)
}

class Foo {

  @beforeMethod(delay)
  @beforeMethod(delay)
  @beforeMethod(delay)
  @beforeMethod(delay)
  // @http('host.api/resource')
  static someAsyncCall(response) {
    console.log("method body");
  }
}

Foo.someAsyncCall();
