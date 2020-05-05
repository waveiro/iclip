function isUrl(url) {
  const regexUrl = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/;
  return regexUrl.test(url);
}

async function downloadImage(url) {
  if (!isUrl(url)) {
    throw new Error(`${url} is not a valid URL`);
  }
}

module.exports = { downloadImage };
