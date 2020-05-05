function getType(obj) {
  return Object.prototype.toString.call(obj).split(' ')[1].replace(']', '');
}

module.exports = {
  getType,
};
