// Não alterar esse objeto
const streamApi = {
  hasNext() {
    return this.stream.length > 0;
  },
  next() {
    if (this.hasNext()) {
      return this.stream.shift();
    }
    return 0;
  },
  init(stream) {
    if (!stream || stream.trim().length === 0) {
      throw new Error('Invalid stream');
    }
    this.stream = Array.from(stream);
  },
};

// Nao alterar a assinatura desse metodo
const firstChar = (input) => {
  const myStream = Object.create(streamApi);
  myStream.init(input);

  // TODO sua implementacao

  return 'x';
};

module.exports = {
  firstChar,
};
