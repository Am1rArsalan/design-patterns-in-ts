///// strategy pattern
/**
 * ICompressor.
 */
interface ICompressor {
  /**
   * @type {() => void}
   */
  compress: () => void;
}

/**
 * IFilter.
 */
interface IFilter {
  /**
   * @type {() => void}
   */
  filter: () => void;
}
///// concrete
/**
 * ImageFilter.
 *
 * @implements {IFilter}
 */
class ImageFilter implements IFilter {
  /**
   * filter.
   */
  filter() {
    console.log("filter process");
  }
}

/**
 * ImageCompressor.
 *
 * @implements {ICompressor}
 */
class ImageCompressor implements ICompressor {
  /**
   * compress.
   */
  compress() {
    console.log("compress process");
  }
}

////// context
/**
 * ImageStorage.
 */
class ImageStorage {
  /**
   * @type {IFilter}
   */
  private _filter: IFilter;
  /**
   * @type {ICompressor}
   */
  private _compressor: ICompressor;

  /**
   * constructor.
   *
   * @param {IFilter} filter
   * @param {ICompressor} compressor
   */
  constructor(filter: IFilter, compressor: ICompressor) {
    this._filter = filter;
    this._compressor = compressor;
  }

  /**
   * store.
   *
   * @param {string} fileData
   */
  public store(fileData: string) {
    this._compressor.compress();
    this._filter.filter();
    console.log(fileData, "ready to save file");
  }
}

(function main() {
  let storage = new ImageStorage(new ImageFilter(), new ImageCompressor());
  storage.store("file1");
  storage.store("file2");
  storage.store("file3");
  storage.store("file4");
  storage.store("file5");
})();
