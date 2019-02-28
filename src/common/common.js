let total = 30;
let msg = passthru`The total is ${total} (${total*1.05} with tax)`;

function passthru(literals) {
  let result = '';
  let i = 0;

  while (i < literals.length){
    result += literals[i++];
    if(i < arguments.length){
      result += arguments[i];
    }
  }
  return result
}
msg

function passthru(literals, ...values) {
  let output = "";
  let index;
  for (index = 0; index < values.length; index++){
    output += literals[index] + values[index];
  }

  output += literals[index]
  return output;
}

let message =
  SaferHTML`<p>${render} has sent you a message.</p>`

function SaferHTML(templateData) {
  let s = templateData[0];
  for (let i = 1;i < arguments.length;i++) {
    let arg = String(arguments[i]);

    // Escape special characters in the substitution.
    s += arg.replace(/&/g, "&amp")
      .replace(/</g, "&lt")
      .replace(/>/g, "&gt;");
    // 不要转义模板中的特殊字符。
    s += templateData[i];
  }
  return s;
}
// 构造函数demo
function Student(props) {
  this.name = props.name || '匿名'; // 默认值为“匿名”
  this.grade = props.grade || 1; // 默认值为1
}
Student.prototype.hello = function() {
  alert('Hello,' + this.name + '!');
}
function createStudent(props) {
  return new Student(props || {})
}

// write
function Cat(name) {
  this.name = name;
  alert(this.name)
}
var catty = new Cat('catty');
catty.name

// write:请利用构造函数定义Cat，并让所有的Cat对象有一个name属性，并共享一个方法say()，返回字符串'Hello, xxx!'：
function Cat(name) {
  this.name = name || '匿名'; // 默认值为“匿名”
}
Cat.prototype.say = function() {
  alert('Hello,' + this.name + '!')
}
function say(name) {
  return new Cat(name)
}
var Kitty = new Cat('Kitty')

/*//wrong demo
function Cat(name) {
  this.name = name || '匿名'; // 默认值为“匿名”
}
Cat.prototype.hello= function() {
  alert('Hello,' + this.name + '!')
}
say.prototype.name = function() {
  return new Cat(name)*/

//原型继承demo
function Student(props){
  this.name = props.name || 'Unnamed'
}
Student.prototype.hello = function () {
  alert('Hello' + this.name + '!')
}
