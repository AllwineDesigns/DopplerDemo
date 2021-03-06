const MOUSE_ID = "mouse";
export default class Touches {
  constructor() {
    this.touches = {};
    this.isMouseDown = false;
    this.lastMouseX = 0;
    this.lastMouseY = 0;
    this.mouseVX = 0;
    this.mouseVY = 0;
  }

  touch(e) {
    let seen = {};
    const now = performance.now();
    for(let i = 0; i < e.touches.length; i++) {
      const eTouch = e.touches[i];
      const id = eTouch.identifier;
      seen[id] = true;
      if(this.touches[id]) {
        if(now-this.touches[id].lastTime > 0) {
          const touch = this.touches[id];
          touch.vx = (eTouch.clientX-touch.lastX)/(now-touch.lastTime);
          touch.vy = (eTouch.clientY-touch.lastY)/(now-touch.lastTime);
          touch.lastX = eTouch.clientX;
          touch.lastY = eTouch.clientY;
          touch.lastTime = now;
        }
      } else {
        const touch = {
          lastX: eTouch.clientX,
          lastY: eTouch.clientY,
          vx: 0,
          vy: 0,
          lastTime: now
        };
        this.touches[id] = touch;
      }
    }
    const keys = Object.keys(this.touches);
    for(let id of keys) {
      if(!seen[id]) {
        delete this.touches[id];
      }
    }
    e.preventDefault();
  }

  getTouches() {
    return Object.keys(this.touches).map((touchID, idx) => {
      const touch = this.touches[touchID];
      return { id: touchID, ...touch };
    });
  }

  mouseDown(e) {
    this.touches[MOUSE_ID] = { vx: 0, vy: 0, lastX: e.clientX, lastY: e.clientY, lastTime: performance.now() };
    this.isMouseDown = true;
    e.preventDefault();
  }
  mouseMove(e) {
    if(this.isMouseDown) {
      const now = performance.now();
      const touch = this.touches[MOUSE_ID];
      if(now-touch.lastTime > 0) {
        touch.vx = (e.clientX-touch.lastX)/(now-touch.lastTime);
        touch.vy = (e.clientY-touch.lastY)/(now-touch.lastTime);
        touch.lastX = e.clientX;
        touch.lastY = e.clientY;
        touch.lastTime = now;
      }
    }
    e.preventDefault();
  }
  mouseUp(e) {
    this.isMouseDown = false;
    if(this.touches[MOUSE_ID]) {
      delete this.touches[MOUSE_ID];
    }
    e.preventDefault();
  }
};
