import Ember from 'ember';
import layout from '../templates/components/number-to-english';

export default Ember.Component.extend({
  layout,

  number: 0,

  integerToWord: function(number) {
    let data = {
      numero: number,
      enteros: number ? Math.floor(number) : '',
      centavos: (((Math.round(number * 100)) - (Math.floor(number) * 100))),
      letrasCentavos: "",

      letrasMonedaCentavoPlural: "CENTAVOS",
      letrasMonedaCentavoSingular: "CENTAVO"
    };

    if (data.centavos > 0) {
      let _this = this;
      data.letrasCentavos = "CON " + (function (){
        if (data.centavos === 1) {
          return _this.millones(data.centavos) + " " + data.letrasMonedaCentavoSingular;
        } else {
          return _this.millones(data.centavos) + " " + data.letrasMonedaCentavoPlural;
        }
        });
    }

    if(data.enteros === 0) {
      return "CERO ";
    }
    if (data.enteros === 1) {
      return this.millones(data.enteros) + data.letrasCentavos;
    } else {
      return this.millones(data.enteros) + data.letrasCentavos;
    }
  },
  
  unidades: function(num) {

      switch(num)
      {
          case 1: return "UN";
          case 2: return "DOS";
          case 3: return "TRES";
          case 4: return "CUATRO";
          case 5: return "CINCO";
          case 6: return "SEIS";
          case 7: return "SIETE";
          case 8: return "OCHO";
          case 9: return "NUEVE";
      }

      return "";
  },

  decenas: function(num) {

      let decena = Math.floor(num/10);
      let unidad = num - (decena * 10);

      switch(decena)
      {
          case 1:
            switch(unidad) {
                case 0: return "DIEZ";
                case 1: return "ONCE";
                case 2: return "DOCE";
                case 3: return "TRECE";
                case 4: return "CATORCE";
                case 5: return "QUINCE";
                default: return "DIECI" + this.unidades(unidad);
            }
            /* falls through */
          case 2:
            switch(unidad) {
                case 0: return "VEINTE";
                default: return "VEINTI" + this.unidades(unidad);
            }
            /* falls through */
          case 3: return this.decenasY("TREINTA", unidad);
          case 4: return this.decenasY("CUARENTA", unidad);
          case 5: return this.decenasY("CINCUENTA", unidad);
          case 6: return this.decenasY("SESENTA", unidad);
          case 7: return this.decenasY("SETENTA", unidad);
          case 8: return this.decenasY("OCHENTA", unidad);
          case 9: return this.decenasY("NOVENTA", unidad);
          case 0: return this.unidades(unidad);
      }
  },

  decenasY: function(strSin, numUnidades)  {
      if (numUnidades > 0) {
        return strSin + " Y " + this.unidades(numUnidades);
      }

      return strSin;
  },

  centenas: function(num)  {
      let centenas = Math.floor(num / 100);
      let decenas = num - (centenas * 100);

      switch(centenas)
      {
          case 1:
              if (decenas > 0) {
                return "CIENTO " + this.decenas(decenas);
              }
              return "CIEN";
          case 2: return "DOSCIENTOS " + this.decenas(decenas);
          case 3: return "TRESCIENTOS " + this.decenas(decenas);
          case 4: return "CUATROCIENTOS " + this.decenas(decenas);
          case 5: return "QUINIENTOS " + this.decenas(decenas);
          case 6: return "SEISCIENTOS " + this.decenas(decenas);
          case 7: return "SETECIENTOS " + this.decenas(decenas);
          case 8: return "OCHOCIENTOS " + this.decenas(decenas);
          case 9: return "NOVECIENTOS " + this.decenas(decenas);
      }

      return this.decenas(decenas);
  },

  seccion: function(num, divisor, strSingular, strPlural)  {
      let cientos = Math.floor(num / divisor);
      let resto = num - (cientos * divisor);

      let letras = "";

      if (cientos > 0) {
          if (cientos > 1) {
            letras = this.centenas(cientos) + " " + strPlural;
          } else {
            letras = strSingular;
          }
      }

      if (resto > 0) { letras += ""; }

      return letras;
  },

  miles: function(num)  {
      let divisor = 1000;
      let cientos = Math.floor(num / divisor);
      let resto = num - (cientos * divisor);

      let strMiles = this.seccion(num, divisor, "MIL", "MIL");
      let strCentenas = this.centenas(resto);

      if(strMiles === "") {
        return strCentenas;
      }

      return strMiles + " " + strCentenas;
  },

  millones: function(num)  {
      let divisor = 1000000;
      let cientos = Math.floor(num / divisor);
      let resto = num - (cientos * divisor);

      let strMillones = this.seccion(num, divisor, "UN MILLON", "MILLONES");
      let strMiles = this.miles(resto);

      if(strMillones === "") {
        return strMiles;
      }

      return strMillones + " " + strMiles;
  },

  word: Ember.computed('number', function() {
    let fullNumber, integerNumber, decimalNumber, integerNumberInWords, decimalNumberInWords, word;
    if (this.decimal) {
      fullNumber = this.number.toString().split('.');
      integerNumber = fullNumber[0].toString();
      decimalNumber = fullNumber[1];
      integerNumberInWords = this.integerToWord(integerNumber);
      if (decimalNumber) {
        decimalNumber = decimalNumber.length === 0 ? decimalNumber + "0" : decimalNumber;
        decimalNumberInWords = this.integerToWord(decimalNumber);
      }
    } else {
      integerNumberInWords = this.integerToWord(this.number.toString());
    }

    switch (this.decimal) {
      case 'word':
        word = decimalNumberInWords ? `${integerNumberInWords} con ${decimalNumberInWords}` : integerNumberInWords;
        break;
      case 'fraction':
        if (decimalNumberInWords) {
          word = `${integerNumberInWords} con <sup>${decimalNumber}</sup>&frasl;<sub>${`1${"0".repeat(decimalNumber.length)}`}</sub>`;
        } else {
          word = integerNumberInWords;
        }
        break;
      default:
        word = integerNumberInWords;
    }
    word = word.toLowerCase();
    if(this.capitalize) {
      word = word.charAt(0).toUpperCase() + word.slice(1);
    }
    return Ember.String.htmlSafe(word);
  })
});
