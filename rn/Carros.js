module.exports = class Carro {  

    constructor(placa) {
      this.placa = placa; 
      this.IniciaisPlacasRJ = 'KLM' //Placas do Rio 
      this.posCaracterValidador = 0; //Posição do caracter para validação.    
    }

    isPlacaValida(){ //Aqui valido se a placa é do Rio de Janeiro        
        if(this.IniciaisPlacasRJ.indexOf(this.placa[this.posCaracterValidador].toUpperCase())>=0) return true
        return false
    }

}
