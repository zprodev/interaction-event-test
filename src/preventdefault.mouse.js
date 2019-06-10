
const target = document.createElement("div");
target.style.width = window.innerWidth / 2 + 'px';
target.style.height = window.innerHeight / 2 + 'px';
target.style.backgroundColor = "gray";
document.body.appendChild(target);

const child = document.createElement("div");
child.style.width = window.innerWidth / 4 + 'px';
child.style.height = window.innerHeight / 4 + 'px';
child.style.backgroundColor = "black";
target.appendChild(child);

const gui = new dat.GUI();

const mouseEvents = {
  mousedown: 0,
  mouseup: 0,
  mousemove: 0,
  mouseenter: 0,
  mouseleave: 0,
  mouseover: 0,
  mouseout: 0,
};

const mouserUi = gui.addFolder('Mouse Events');
Object.keys(mouseEvents).forEach((key) => {
  mouserUi.add(mouseEvents, key).listen();
  target.addEventListener(key, (event) => {
    event.preventDefault();
    mouseEvents[key] += 1;
  });
});
mouserUi.open();
