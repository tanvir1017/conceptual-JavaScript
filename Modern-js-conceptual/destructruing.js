const student = {
  name: "Tanvir Hossain",
  reg: 1502064922,
  dep: "Computer",
  collage: "DPI",
  area: {
    name: "Tejgoan indrustial area",
  },
};

const {
  area: { name },
} = student;
console.log(name);
