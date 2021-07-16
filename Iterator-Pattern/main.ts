// iterator pattern

//lets assume that we are going to
//build a web broweser .
//in the web browser we have a concept of history

/**
 * Stack.
 */
class Stack<T> {
  /**
   * @type {T[]}
   */
  private _stack: T[] = [];

  /**
   * pop.
   *
   * @returns {T | undefined}
   */
  public pop(): T | undefined {
    let url = this._stack.pop();
    return url;
  }

  /**
   * push.
   *
   * @param {T} url
   */
  public push(url: T) {
    this._stack.push(url);
  }

  /**
   * .
   */
  public get stack() {
    return this._stack;
  }
}

/**
 * IIterator.
 */
interface IIterator<T> {
  /**
   * @type {() => void}
   */
  next: () => void;
  /**
   * @type {() => boolean}
   */
  hasNext: () => boolean;
  /**
   * @type {() => T}
   */
  current: () => T;
}

/**
 * BrowserHistory.
 */
class BrowserHistory<T> {
  //private _urls : Stack<T> = new Stack<T>() ;
  /**
   * @type {T[]}
   */
  private _urls: T[] = [];

  /**
   * constructor.
   *
   * @param {T[]} _urls
   */
  constructor(_urls: T[]) {
    this._urls = _urls;
  }

  /**
   * pop.
   *
   * @returns {T | undefined}
   */
  public pop(): T | undefined {
    let url = this._urls.pop();
    return url;
  }

  /**
   * push.
   *
   * @param {T} url
   */
  public push(url: T) {
    this._urls.push(url);
  }

  /**
   * .
   *
   * @returns {T[]}
   */
  public get urls(): T[] {
    return this._urls;
  }

  /**
   * createIterator.
   *
   * @returns {IIterator<string>}
   */
  public createIterator(): IIterator<string> {
    //return new BrowserHistory.StackItrator(Object(this)) ;
    return new BrowserHistory.ArrayItrator(Object(this));
  }

  /// Array Iterator
  /**
   * @type {}
   */
  static ArrayItrator = class implements IIterator<string> {
    private history: BrowserHistory<string>;
    private index: number = 0;

    constructor(browserHistory: BrowserHistory<string>) {
      this.history = browserHistory;
    }

    public next() {
      this.index = this.index + 1;
    }

    public hasNext(): boolean {
      return this.index < this.history.urls.length;
    }

    public current(): string {
      return this.history.urls[this.index];
    }
  };
  // Iterator
  //static StackItrator =  class implements IIterator<string> {
  //private history : BrowserHistory<string>  ;
  //private index : number  = 0 ;

  //constructor(browserHistory : BrowserHistory<string>) {
  //this.history =  browserHistory  ;
  //}

  //public next(){
  //this.index= this.index + 1 ;
  //}

  //public hasNext() : boolean{
  //return this.index < this.history.urls.stack.length ;
  //}

  //public hasPrevious() : boolean{
  //return this.index > 1 ;
  //}

  //public current() : string {
  //return this.history.urls.stack[this.index] ;
  //}
  //}
}

(function main() {
  let browserHistory = new BrowserHistory<string>([]);
  let history = browserHistory.createIterator();

  browserHistory.push("https://google.com");
  browserHistory.push("https://2google.com");
  browserHistory.push("https://3google.com");
  browserHistory.push("https://4google.com");
  browserHistory.push("https://5google.com");
  browserHistory.push("https://6google.com");
  browserHistory.push("https://7google.com");
  browserHistory.push("https://8google.com");

  browserHistory.pop();
  browserHistory.pop();
  browserHistory.pop();

  console.log(browserHistory.urls);

  while (history.hasNext()) {
    let current = history.current();
    console.log(current);
    history.next();
  }
})();
