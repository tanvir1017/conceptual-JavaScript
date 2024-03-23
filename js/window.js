function helloWorld() {
  var name = "check";
  console.log("outer this", this);
  checkFunc = () => {
    var secondName = "Hossain";
    var name = "Fahim";
    this.name = "Tanvir";
    console.log(name);
    console.log("inner this", this);
  };
  checkFunc();
  console.log(name);
}

helloWorld();
