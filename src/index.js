const Clipper = require('./clipper');

class iClip {
  static getClipper() {
    return new Clipper();
  }
}


module.exports = iClip;
