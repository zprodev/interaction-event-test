
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

const IS_SUPPORT_POINTER_EVENTS = 'onpointerdown' in window;
const IS_SUPPORT_MOUSE_EVENTS = 'onmousedown' in window;
const IS_SUPPORT_TOUCH_EVENTS = 'ontouchstart' in window;

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

const mouseEvents = {
  mousedown: 0,
  mouseup: 0,
  mousemove: 0,
  mouseenter: 0,
  mouseleave: 0,
  mouseover: 0,
  mouseout: 0,
};

const touchEvents = {
  touchstart: 0,
  touchend: 0,
  touchmove: 0,
  touchcancel: 0,
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

const mouserUi = gui.addFolder('Mouse Events');
Object.keys(mouseEvents).forEach((key) => {
  mouserUi.add(mouseEvents, key).listen();
  target.addEventListener(key, (event) => {
    event.preventDefault();
    mouseEvents[key] += 1;
  });
});
mouserUi.open();

const touchUi = gui.addFolder('Touch Events');
Object.keys(touchEvents).forEach((key) => {
  touchUi.add(touchEvents, key).listen();
  target.addEventListener(key, (event) => {
    event.preventDefault();
    touchEvents[key] += 1;
  });
});
touchUi.open();
