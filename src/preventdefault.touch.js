
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

const touchEvents = {
  touchstart: 0,
  touchend: 0,
  touchmove: 0,
  touchcancel: 0,
};

const touchUi = gui.addFolder('Touch Events');
Object.keys(touchEvents).forEach((key) => {
  touchUi.add(touchEvents, key).listen();
  target.addEventListener(key, (event) => {
    event.preventDefault();
    touchEvents[key] += 1;
  });
});
touchUi.open();
