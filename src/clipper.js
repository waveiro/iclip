class Clipper {
  static pipe(...functions) {
    return new Promise(((resolve, reject) => {
      try {
        return functions.reduce((acc, currentValue) => currentValue(acc), {});
      } catch (e) {
        reject(e);
      }
    }));
  }
}

module.exports = Clipper;
