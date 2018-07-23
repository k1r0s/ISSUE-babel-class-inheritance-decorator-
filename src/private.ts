class Foo {
  a
  b
  read() {
    return this.a
  }
}


const inst = new Foo();

const p: any = new Proxy(inst, {
  get: function(target, property, r) {
    console.log(r)
    console.log('target: ', target);
    console.log('called: ', property);
    return target[property];
  }
});

p.read()

p.a
