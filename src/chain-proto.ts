import { beforeMethod } from "kaop-ts"

const delay = beforeMethod(meta => {
  console.log("delay")
  setTimeout(meta.commit, 100);
});

class Foo {

  @delay
  someMethod() {
    console.log("Foo:someMethod");
  }
}

class Bar extends Foo {

  @delay
  someMethod() {
    super.someMethod();
    console.log("Bar:someMethod");
  }
}

const b = new Bar

b.someMethod();
