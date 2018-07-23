import { Native } from 'mamba-websdk'
import template from './other.html'

export default {
  template,
  onCreate () {
    this.$refs['beep'].el.onclick = _ => {
      Native.System.beep()
    }
  }
}
