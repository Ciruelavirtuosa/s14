class mando {
  base10_16() {
    let base = parseInt(document.getElementById("num1").value);
    let arreglo = this.isDigitos(base, 16);
    let $resp = document.getElementById("resp");
    let base16 = "";
    for (let i = arreglo.length - 1; i >= 0; i--) {
      let digitoHex = arreglo[i].toString(16).toUpperCase();
      base16 = base16 + digitoHex;
    }
    $resp.textContent = `[Base10=${base}] ==> Base16=${base16}`;
  }
  base2_16() {
    let base = parseInt(document.getElementById("num1").value);
    let arreglo = this.isDigitos(base, 10);
    let $resp = document.getElementById("resp");
    let base10 = 0,
      limite = arreglo.length - 1;
    for (let i = arreglo.length - 1; i >= 0; i--) {
      base10 = base10 + arreglo[i] * this.isExponente(2, limite);
      limite = limite - 1;
    }
    let base16 = base10.toString(16).toUpperCase();
    $resp.textContent = `[Base2=${base}] ==> Base16=${base16}`;
  }
  isExponente(base, exp) {
    let res = 1
    for (let i = 1; i <= exp; i++) {
      res *= base
    }
    return res
  }
  isDigitos(numero, base) {
    let digitos = []
    while (numero > 0) {
      digitos.push(Math.floor(numero % base))
      numero = parseInt(numero / base)
    }
    return digitos
  }
  base10_8() {
    let base = parseInt(document.getElementById("num1").value)
    let arreglo = this.isDigitos(base, 8)
    let $resp = document.getElementById("resp")
    let base8 = ""
    for (let i = arreglo.length - 1; i >= 0; i--) {
      base8 = base8 + arreglo[i].toString()
    }
    $resp.textContent = `[Base10=${base}] ==> Base8=${base8}`
  }
  base10_2() {
    let base = parseInt(document.getElementById("num1").value)
    let arreglo = this.isDigitos(base, 2)
    let $resp = document.getElementById("resp")
    let base2 = ""
    for (let i = arreglo.length - 1; i >= 0; i--) {
      base2 = base2 + arreglo[i].toString()
    }
    $resp.textContent = `[Base10=${base}] ==> Base2=${base2}`
  }
  base2_8() {
    let base = parseInt(document.getElementById("num1").value)
    let arreglo = this.isDigitos(base, 8)
    let $resp = document.getElementById("resp")
    let base8 = 0, limite = arreglo.length - 1
    for (let i = arreglo.length - 1; i >= 0; i--) {
      base8 = base8 + arreglo[i] * this.isExponente(2, limite)
      limite = limite - 1
    }
    $resp.textContent = `[Base2=${base}] ==> Base8=${base8}`
  }
  base2_10() {
    let base = parseInt(document.getElementById("num1").value)
    let arreglo = this.isDigitos(base, 10)
    let $resp = document.getElementById("resp")
    let base10 = 0, limite = arreglo.length - 1
    for (let i = arreglo.length - 1; i >= 0; i--) {
      base10 = base10 + arreglo[i] * this.isExponente(2, limite)
      limite = limite - 1
    }
    $resp.textContent = `[Base2=${base}] ==> Base2=${base10}`
  }
  isumarDigitos(numero) {
    let suma = 0;
    let digito;
    for (let i = 0; i < numero.length; i++) {
      digito = parseInt(numero[i], 10);
      if (!isNaN(digito)) {
        suma += digito;
      }
    }
    return suma;
  }
  sumardigitos() {
    let caracter = document.getElementById("num1").value
    let $resp = document.getElementById("resp")
    $resp.textContent = `La suma de los digitos ${caracter } es ${this.isumarDigitos(caracter)}`
  }
  copiararrecaden(arreglo, caracter) {
    let cadena = "";
    for (let i = 0; i < arreglo.length; i++) {
      if (arreglo[i] == caracter) {
        cadena += ";";
        i++
      }
      cadena += arreglo[i];
    }
    return cadena;
  }
  copiarcadenarr(arreglo, caracter) {
    let cadena = "";
    for (let i = 0; i < arreglo.length; i++) {
      if (arreglo[i] == caracter) {
        cadena += ",";
        i++
      }
      cadena += arreglo[i];
    }
    return cadena;
  }
  arre() {
    let arrays = document.getElementById("num3").value
    let arreglo = document.getElementById("num4").value
    let $resp = document.getElementById("resp")
    let arrys = this.copiararrecaden(arrays, arreglo)
    $resp.textContent = `El array convertido en cadena es ${arrys}`
  }
  cadena() {
    let arrays = document.getElementById("num3").value
    let arreglo = document.getElementById("num4").value
    let $resp = document.getElementById("resp")
    let arrys = this.copiarcadenarr(arrays, arreglo)
    $resp.textContent = `La cadena convertido en array es ${arrys}`
  }
  isoracion(cadena) {
    let resultado = "";
    let mayus = true;
    for (let i = 0; i < cadena.length; i++) {
      if (mayus && cadena[i] !== " ") {
        resultado += cadena[i].toUpperCase();
        mayus = false;
      } else {
        resultado += cadena[i];
      }
      if (cadena[i] === " ") {
        mayus = true;
      }
    }
    return resultado;
  }
  palabraoracion() {
    let caracter = document.getElementById("num1").value
    let $resp = document.getElementById("resp")
    $resp.textContent = this.isoracion(caracter)
  }
  isCaracteres(cadena) {
    let comas = 0
    let puntos = 0
    let puntoycoma = 0
    let dospuntos = 0
    for (let pos = 0; pos < cadena.length; pos++) {
      if (cadena[pos] == ',') {
        comas++
      } else if (cadena[pos] == '.') {
        puntos++
      } else if (cadena[pos] == ';') {
        puntoycoma++
      } else if (cadena[pos] == ':') {
        dospuntos++
      }
    }
    let resultado = `Comas: ${comas}\nPuntos: ${puntos}\nPunto y coma: ${puntoycoma}\nDos puntos: ${dospuntos}`;
    return resultado;
  }
  caracteresespeciales() {
    let caracter = document.getElementById("num1").value
    let $resp = document.getElementById("resp")
    $resp.textContent = this.isCaracteres(caracter)
  }
  isinsertar(arr, elemento) {
    var pos = 0;
    while (pos < arr.length && arr[pos] < elemento) {
      pos++;
    }
    arr.splice(pos, 0, elemento);
    return arr.sort((a, b) => a - b);
  }
  insertarelemento() {
    let arrys = document.getElementById("num3").value
    let elements = document.getElementById("num4").value
    let $resp = document.getElementById("resp")
    let arreg = this.misplit(arrys, ";")
    $resp.textContent =`se inserto el elemento ${elements} en el arrary su resultado es ${this.isinsertar(arreg, elements)}`
  }
  iseliminar(arr, elementos) {
    let resultado = [];
    for (let pos = 0; pos < arr.length; pos++) {
      if (!elementos.includes(arr[pos])) {
        resultado.push(arr[pos]);
      }
    }
    return resultado;
  }
  eliminarelemento() {
    let arrys = document.getElementById("num3").value
    let elements = document.getElementById("num4").value
    let $resp = document.getElementById("resp")
    let arreg = this.misplit(arrys, ";")
    if (this.isbusarr(arreg,elements)!=-1) {
      $resp.textContent = `se elimino el elemento${elements} del arrary su resultado es ${this.iseliminar(arreg, elements)}`
    } else {
      $resp.textContent =`no se cuentra el elemento a elimnar en el array`
    }
  }
  misplit(str, separador) {
    let arr = [];
    let word = "";
    let num = 0
    for (let i = 0; i < str.length; i++) {
      if (str[i] !== separador) {
        word += str[i];
      } else {
        num = parseInt(word)
        arr.push(num);
        word = "";
      }
    }
    if (word !== "") {
      num = parseInt(word)
      arr.push(num);
    }
    return arr;
  }
  ismenor(nums) {
    let min = nums[0]
    for (let pos = 0; pos < nums.length; pos++) {
      if (nums[pos] < min) {
        min = nums[pos];
      }
    }
    return min
  }
  ismayor(nums) {
    let max = 0
    for (let pos = 0; pos < nums.length; pos++) {
      if (nums[pos] > max) {
        max = nums[pos]
      }
    }
    return max
  }
  mayor() {
    let arrys = document.getElementById("num1").value
    let $resp = document.getElementById("resp")
    let arreg = this.misplit(arrys, ";")
    $resp.textContent = `El valor mas bajo del arrasys es: ${this.ismayor(arreg)}`

  }
  menor() {
    let arrys = document.getElementById("num1").value
    let $resp = document.getElementById("resp")
    let arreg = this.misplit(arrys, ";")
    $resp.textContent = `El valor mas bajo del arrasys es: ${this.ismenor(arreg)}`
  }
  isbusarr(arr, buscar) {
    let pos = 0, enc = 0
    while (pos < arr.length && enc == 0) {
      if (arr[pos] == buscar) {
        enc = 1
      } else {
        pos += 1
      }
    }
    if (enc == 1) {
      return pos
    } else {
      return -1
    }
  }
  buscarreglo() {
    let cadena = document.getElementById("num3").value
    let subcadena = document.getElementById("num4").value
    let $resp = document.getElementById("resp")
    let arre = this.misplit(cadena, ";")
    let pos = this.isbusarr(arre, subcadena)
    if (pos >= 0) {
      $resp.textContent = `[${arre}] - ${subcadena} se encuentra en la posicion: ${pos}`
    } else {
      $resp.textContent = `[${arre}] - ${subcadena} no se encuentra en el arreglo`
    }
  }
  isbuscadena(arr, buscar) {
    let pos1 = 0, pos2 = 0, posicion = -1
    let encon = false
    while (pos1 < arr.length && !encon) {
      if (arr[pos1] == buscar[pos2]) {
        if (pos2 == 0) {
          posicion = pos1
        }
        pos2++
        if (pos2 == buscar.length) {
          encon = true
        }
      } else {
        pos2 = 0
        if (arr[pos1] == buscar[pos2]) {
          posicion = pos1
          pos2++
        } else {
          posicion = -1
        }
      }
      pos1++
    }
    if (encon) {
      return posicion
    } else {
      return -1
    }
  }
  buscarcadena() {
    let cadena = document.getElementById("num3").value
    let subcadena = document.getElementById("num4").value
    let $resp = document.getElementById("resp")
    let pos = this.isbuscadena(cadena, subcadena)
    if (pos >= 0) {
      $resp.textContent = `[${cadena}] - ${subcadena} se encuentra en la posicion: ${pos}`
    } else {
      $resp.textContent = `[${cadena}] - ${subcadena} no se encuentra en la cadena`
    }
  }
  isvuelto(diferencia) {
    let billetes = [50, 20, 10, 5, 1]
    let vuelto = '';
    for (let pos = 0; pos < billetes.length; pos++) {
      let cantidadbilletes = Math.floor(diferencia / billetes[pos]);
      if (cantidadbilletes > 0) {
        vuelto += `${cantidadbilletes} billetes de ${billetes[pos]}\n`;
        diferencia -= cantidadbilletes * billetes[pos];
      }
    }
    return vuelto;
  }
  vuelto() {
    let num = document.getElementById("num1").value
    let $resp = document.getElementById("resp")
    if (num < 100) {
      $resp.textContent = this.isvuelto(num)
    } else {
      $resp.textContent = `${num}, no es valido debe ingresar un numero natural menor a 100 `
    }
  }
  aromano(num) {
    let numerosromanos = {
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1
    }
    let roman = ""
    for (let pro in numerosromanos) {
      while (num >= numerosromanos[pro]) {
        roman += pro
        num -= numerosromanos[pro]
      }
    }
    return roman
  }
  romanos() {
    let rom = document.getElementById("num1").value
    let $resp = document.getElementById("resp")
    if (rom < 100) {
      $resp.textContent = this.aromano(rom)
    } else {
      $resp.textContent = `solo se admiten numeros menores a 100`
    }
  }
}
let cal = new mando();