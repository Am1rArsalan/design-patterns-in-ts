abstract class UIControl {
  public abstract draw(): void;
}

class Line extends UIControl {
  public draw(): void {
    console.log("draw a line ");
  }
}

class TextField extends UIControl {
  public draw(): void {
    console.log("draw a TextField");
  }
}

class Circle extends UIControl {
  public draw(): void {
    console.log("draw a Circle");
  }
}

interface Tool /* State */ {
  mouseDown(): void;
  mouseUp(): void;
}

class Bucket /* Concrete A*/ implements Tool {
  public mouseDown() {
    console.log("mouse down Bucket");
  }

  public mouseUp() {
    console.log("mouse up Bucket");
  }
}

class Eraser /* Concrete B*/ implements Tool {
  public mouseDown() {
    console.log("mouse down Eraser");
  }

  public mouseUp() {
    console.log("mouse up Eraser");
  }
}

class Pen /* Concrete C*/ implements Tool {
  public mouseDown() {
    console.log("mouse down pen ");
  }

  public mouseUp() {
    console.log("mouse up pen ");
  }
}

/////////////////////////////////// Context
class Canvas /* Context */ {
  private _tool: Tool = new Pen();

  public mouseDown() {
    this._tool.mouseDown();
  }

  public mouseUp() {
    this._tool.mouseUp();
  }

  public get tool(): Tool {
    return this._tool;
  }

  public setTool(UITool: Tool) {
    this._tool = UITool;
  }
}

enum EStatus {
  Running = "Running",
  Stop = "Stop",
}

class Clock {
  private _status: EStatus = EStatus.Stop;

  public click() {
    if (this.status === EStatus.Running) {
      this.setStatus(EStatus.Stop);
    } else if (this.status === EStatus.Stop) {
      this.setStatus(EStatus.Running);
    }
  }

  public get status(): EStatus {
    return this._status;
  }

  public setStatus(newStatus: EStatus) {
    this._status = newStatus;
  }
}

//////////////////////////////////

interface IClockState {
  click: () => void;
}

class StopClock implements IClockState {
  private clock: Clock2;

  constructor(runningClock: Clock2) {
    this.clock = runningClock;
  }

  public click() {
    console.log("run clock");
    this.clock.setStatus(new RunningClock(Object(this)));
  }
}

class RunningClock implements IClockState {
  private clock: Clock2;

  constructor(stoppedClock: Clock2) {
    this.clock = stoppedClock;
  }

  public click() {
    console.log("Stop clock");
    this.clock.setStatus(new StopClock(Object(this)));
  }
}

// context
class Clock2 {
  private _status: IClockState = new RunningClock(Object(this));

  public click() {
    this._status.click();
  }

  public getStatus(): IClockState {
    return this._status;
  }

  public setStatus(newStatus: IClockState) {
    this._status = newStatus;
  }
}

(function main() {
  let clock = new Clock2();
  clock.click();
  clock.click();
  clock.click();
  clock.click();
  clock.click();
  clock.click();
  clock.click();
  clock.click();

  function drawUIControl(uiControl: UIControl) {
    uiControl.draw();
  }

  //drawUIControl(new TextField());
  //drawUIControl(new Line());
  //drawUIControl(new Circle());

  let canvas = new Canvas();
  canvas.setTool(new Pen());
  canvas.mouseDown();
  canvas.mouseUp();
  canvas.mouseDown();

  canvas.setTool(new Eraser());
  canvas.mouseDown();
  canvas.mouseUp();
  canvas.mouseDown();

  canvas.setTool(new Pen());
  canvas.mouseDown();
  canvas.mouseUp();
  canvas.mouseDown();
})();
