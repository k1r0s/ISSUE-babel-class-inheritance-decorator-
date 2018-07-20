// import { provider } from "kaop"

// @provider.singleton

function singleton(targetClass) {
  let instance;
  return function (...args) {
    if (!instance) instance = new targetClass(...args);
    return instance;
  }
}

@singleton
class Foo {
  constructor() {
    console.log("constructor invokation")
  }
}

new Foo
new Foo
new Foo
new Foo
