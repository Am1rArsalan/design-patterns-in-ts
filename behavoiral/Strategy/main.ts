///// strategy pattern
interface ICompressor {
  compress: () => void;
}

interface IFilter {
  filter: () => void;
}

///// concrete
class ImageFilter implements IFilter {
  filter() {
    console.log("filter process");
  }
}

class ImageCompressor implements ICompressor {
  compress() {
    console.log("compress process");
  }
}

////// context
class ImageStorage {
  private _filter: IFilter;
  private _compressor: ICompressor;

  constructor(filter: IFilter, compressor: ICompressor) {
    this._filter = filter;
    this._compressor = compressor;
  }

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
