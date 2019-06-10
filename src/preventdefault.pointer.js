
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

const pointerEvents = {
  pointerdown: 0,
  pointerup: 0,
  pointermove: 0,
  pointerenter: 0,
  pointerleave: 0,
  pointerover: 0,
  pointerout: 0,
  pointercancel: 0,
};

const pointerUi = gui.addFolder('Pointer Events');
Object.keys(pointerEvents).forEach((key) => {
  pointerUi.add(pointerEvents, key).listen();
  target.addEventListener(key, (event) => {
    event.preventDefault();
    pointerEvents[key] += 1;
  });
});
pointerUi.open();
