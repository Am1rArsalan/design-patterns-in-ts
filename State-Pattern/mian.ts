/**
 * UIControl.
 */
abstract class UIControl {
  /**
   * draw.
   *
   * @returns {void}
   */
  public abstract draw(): void;
}

/**
 * Line.
 *
 * @extends {UIControl}
 */
class Line extends UIControl {
  /**
   * draw.
   *
   * @returns {void}
   */
  public draw(): void {
    console.log("draw a line ");
  }
}

/**
 * TextField.
 *
 * @extends {UIControl}
 */
class TextField extends UIControl {
  /**
   * draw.
   *
   cskacs        * @returns {void}
   */
  public draw(): void {
    console.log("draw a TextField");
  }
}

/**
 * Circle.
 *
 * @extends {UIControl}
 */
class Circle extends UIControl {
  /**
   * draw.
   *
   * @returns {void}
   */
  public draw(): void {
    console.log("draw a Circle");
  }
}

/**
 * State : Tool.
 * it can be
 * abstract class
 * interface
 */
interface Tool /* State */ {
  /**
   * mouseDown.
   *
   * @returns {void}
   */
  mouseDown(): void;
  /**
   * mouseUp.
   *
   * @returns {void}
   */
  mouseUp(): void;
}

/**
 * Bucket.
 *
 * @implements {Tool}
 */
class Bucket /* Concrete A*/ implements Tool {
  /**
   * mouseDown.
   */
  public mouseDown() {
    console.log("mouse down Bucket");
  }

  /**
   * mouseUp.
   */
  public mouseUp() {
    console.log("mouse up Bucket");
  }
}

/**
 * Eraser.
 *
 * @implements {Tool}
 */
class Eraser /* Concrete B*/ implements Tool {
  /**
   * mouseDown.
   */
  public mouseDown() {
    console.log("mouse down Eraser");
  }

  /**
   * mouseUp.
   */
  public mouseUp() {
    console.log("mouse up Eraser");
  }
}

/**
 * Pen.
 *
 * @implements {Tool}
 */
class Pen /* Concrete C*/ implements Tool {
  /**
   * mouseDown.
   */
  public mouseDown() {
    console.log("mouse down pen ");
  }

  /**
   * mouseUp.
   */
  public mouseUp() {
    console.log("mouse up pen ");
  }
}

/////////////////////////////////// Context
/**
 * Canvas.
 */
class Canvas /* Context */ {
  /**
   * @type {Tool}
   */
  private _tool: Tool = new Pen();

  /**
   * mouseDown.
   */
  public mouseDown() {
    this._tool.mouseDown();
  }

  /**
   * mouseUp.
   */
  public mouseUp() {
    this._tool.mouseUp();
  }

  /**
   * .
   *
   * @returns {Tool}
   */
  public get tool(): Tool {
    return this._tool;
  }

  /**
   * setTool.
   *
   * @param {Tool} UITool
   */
  public setTool(UITool: Tool) {
    this._tool = UITool;
  }
}

enum EStatus {
  Running = "Running",
  Stop = "Stop",
}

/**
 * Clock.
 */
class Clock {
  /**
   * @type {EStatus}
   */
  private _status: EStatus = EStatus.Stop;

  /**
   * click.
   */
  public click() {
    if (this.status === EStatus.Running) {
      this.setStatus(EStatus.Stop);
    } else if (this.status === EStatus.Stop) {
      this.setStatus(EStatus.Running);
    }
  }

  /**
   * .
   *
   * @returns {EStatus}
   */
  public get status(): EStatus {
    return this._status;
  }

  /**
   * setStatus.
   *
   * @param {EStatus} newStatus
   */
  public setStatus(newStatus: EStatus) {
    this._status = newStatus;
  }
}

//////////////////////////////////
//
//
// state
/**
 * IClockState.
 */
interface IClockState {
  /**
   * @type {() => void}
   */
  click: () => void;
}
//// concreat A
/**
 * StopClock.
 *
 * @implements {IClockState}
 */
class StopClock implements IClockState {
  /**
   * @type {Clock2}
   */
  private clock: Clock2;

  /**
   * constructor.
   *
   * @param {Clock2} runingClock
   */
  constructor(runingClock: Clock2) {
    this.clock = runingClock;
  }

  /**
   * click.
   */
  public click() {
    console.log("run clock");
    this.clock.setStatus(new RunningClock(Object(this)));
  }
}

// concreat B
/**
 * RunningClock.
 *
 * @implements {IClockState}
 */
class RunningClock implements IClockState {
  /**
   * @type {Clock2}
   */
  private clock: Clock2;

  /**
   * constructor.
   *
   * @param {Clock2} stopedClock
   */
  constructor(stopedClock: Clock2) {
    this.clock = stopedClock;
  }

  /**
   * click.
   */
  public click() {
    console.log("Stop clock");
    this.clock.setStatus(new StopClock(Object(this)));
  }
}

// context
/**
 * Clock2.
 */
class Clock2 {
  /**
   * @type {IClockState}
   */
  private _status: IClockState = new RunningClock(Object(this));

  /**
   * click.
   */
  public click() {
    this._status.click();
  }

  /**
   * getStatus.
   *
   * @returns {IClockState}
   */
  public getStatus(): IClockState {
    return this._status;
  }

  /**
   * setStatus.
   *
   * @param {IClockState} newStatus
   */
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

  /**
   * drawUIControl.
   *
   * @param {UIControl} uiControl
   */
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
