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

  var vogal = ['a','e','i','o','u'];  
  var aux = [];
  var cont = 0;
  //test
  // TODO sua implementacao
  for(var i = 0; i <= input.length; i++) {
    aux[i] = myStream.next();
    
    for(var i = 0; i <= aux.length; i++) {
      if(aux[i] === vogal[i]) {
        cont = cont + 1;                
      }
      else {
        return vogal[i];
      }
    }
  }
};

module.exports = {
  firstChar,
};
