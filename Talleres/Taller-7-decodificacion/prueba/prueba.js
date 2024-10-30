const pruebaLogica = () => {
  const decodificar = (texto) => {
    const mapeoVocales = {
      '?': 'a',
      '[': 'e',
      '\\': 'i',
      '~': 'o',
      '+': 'u',
      '¬': 'ó',
    };
    const mapeoConsonantes = {
      '^': 'm',
      '`': 'c',
      '*': 'p',
      '/': 'l',
      '#': 'v',
      $: 'r',
      '%': 'b',
      ']': 'n',
      '}': 'q',
      '{': 's',
      '=': 't',
      '!': 'j',
      '¡': 'd',
      ';': 'f',
      _: 'z',
      '¿': 'y',
      '-': 'h',
    };
    const mensajeSinEspacios = texto.replaceAll('()', ' ');
    const convertirVocales = mensajeSinEspacios
      .split('')
      .map((caracter) => {
        if (mapeoVocales[caracter]) {
          return mapeoVocales[caracter];
        }
        if (mapeoConsonantes[caracter]) {
          return mapeoConsonantes[caracter];
        }
        return caracter;
      })
      .join('');

    return convertirVocales;
  };

  const mensajeCodificado =
    '^[()`~^*/?`[()^+`-~()#[$()/~()%\\[]()}+[()[{=~¿()=$?%?!?]¡~()¿()`¬^~()[{=~()?+^[]=?()^\\{()*~¡[$[{()¡[()?=[]`¬]()¿()[{;+[$_~()`~]=\\]+~';
  const mensajeDecodificado = decodificar(mensajeCodificado);
  console.log(mensajeDecodificado);
};

pruebaLogica();
