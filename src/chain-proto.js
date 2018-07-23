import { beforeInstance } from "kaop-ts"

const delay = beforeInstance(meta => {
  console.log("delay")
  setTimeout(meta.commit, 100);
});

@delay
class Foo {
  constructor() {
    console.log("Foo");
  }
}

@delay
class Bar extends Foo {
  constructor() {
    super();
    console.log("Bar");
  }
}

new Bar
