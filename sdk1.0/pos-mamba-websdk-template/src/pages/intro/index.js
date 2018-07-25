import './intro.scss'
import template from './intro.html'

export default {
  template,
  state () {
    return {
      printObject: {
        user_dithering: false,
        scale_to_paper_width: true
      }
    }
  },
  onCreate () {
    this.$refs['print'].el.onclick = _ => {
      this.$refs['print-area'].print(this.printObject, err => {
        console.log(err)
      })
    }
  }
}
