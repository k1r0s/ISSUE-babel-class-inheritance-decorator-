"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _dec2, _class3;

var _kaopTs = require("kaop-ts");

var _kaop = require("kaop");

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Yolo = (_dec = _kaop.provider.singleton, _dec(_class = function Yolo() {
  _classCallCheck(this, Yolo);

  this.msg = "hi!";
}) || _class);
var Foo = (_dec2 = (0, _kaopTs.beforeInstance)(_kaop.inject.args(Yolo)), _dec2(_class3 = function Foo(_yolo) {
  _classCallCheck(this, Foo);

  this.yolo = undefined;

  this.yolo = _yolo;
}) || _class3);

var Bar = function (_Foo) {
  _inherits(Bar, _Foo);

  function Bar() {
    _classCallCheck(this, Bar);

    return _possibleConstructorReturn(this, (Bar.__proto__ || Object.getPrototypeOf(Bar)).apply(this, arguments));
  }

  _createClass(Bar, [{
    key: "sayHello",
    value: function sayHello() {
      console.log(this.yolo.msg);
    }
  }]);

  return Bar;
}(Foo);

var bar = new Bar();
console.log(bar);

bar.sayHello();