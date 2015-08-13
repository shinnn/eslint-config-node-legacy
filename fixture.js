var foo = 1;

var obj = {
  foo: foo,
  bar: function bar() {
    console.log('Hi');
  }
};

foo = 2;

obj.bar();
