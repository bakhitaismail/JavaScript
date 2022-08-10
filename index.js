
    document.getElementById("class").onclick = function(){
        var _class = prompt("Enter class");
      document.getElementById("class").innerText = _class;
    }
let additional = document.createElement("li")
additional.appendChild(document.createTextNode("Class"))
let additionclass = document.getElementsByClassName("container").appendChild(additional)
console.log(additionclass.children);

var hopperLab = {
    name: "bar",
    func: function() {
        var self = this;
        console.log("outer func:  this.name = " + this.name);
        console.log("outer func:  self.name = " + self.name);
        (function() {
            console.log("inner func:  this.name = " + this.name);
            console.log("inner func:  self.name = " + self.name);
        }());
    }
};

hopperLab.func();

function callBack(message, callback) {
    console.log(
      "JavaScript is awesome: "
      + message);

    if (callback == "function")
        callback();
}

callBack("JavaScript CAT", function callbackFunction() {
    console.log("Callback function in JavaScript.")
});