import "./barcode.scss"
import template from "./barcode.html"
import Barcode from "jsbarcode"
// read jsbarcode lib for more information

let reusableCanvas;

export default {
  template,
  onCreate() {
  },
  onUpdate() {
    console.log(this.value)
    if(!reusableCanvas){
        reusableCanvas = document.createElement('canvas') // criando
        // canvas que serve como tela para desenhar o barcode
    }
    new Barcode(reusableCanvas,this.value) // passa o canvas e o valor
    // desenha na tela o codigo de barras no elemento passado
    this.$refs.barcode.setAttribute('src', reusableCanvas.toDataURL('image/jpeg'))
  },
  props: {
    value: "",
  },
}
