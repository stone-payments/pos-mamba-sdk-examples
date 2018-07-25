import './qr-code.scss'
import template from './qr-code.html'
import QR from 'qrious'

let qrEl

export default {
  template,
  onCreate () {
      qrEl = new QR();
  },
  onUpdate(){
      // check canvas existance
      if(!qrEl) {
        qrEl = new QR();
      }
      console.log(qrEl);
     
      qrEl.set({
        size: this.size || 140,
        foreground: this.color,
        value: this.value,
        level: String(this.level).toUpperCase() || 'M'
      });
     
      this.$refs.qrCode.setAttribute('src', qrEl.toDataURL('image/jpeg'));
  },
  props: {
    size: 140,
    level: 'M',
    color: 'black',
    value: '',
  }
}
