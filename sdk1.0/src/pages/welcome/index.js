import "./welcome.scss"
import template from "./welcome.html"
import MyComponent from "../../components/my-component"
import { Native } from "mamba-websdk"

Http = Native.Http

export default {
  template,
  components: {
    MyComponent,
  },
  methods: {
    doGetRequest() {
      this.$refs["res"].innerText = "Doing Get Request . . ."
      console.log(this.connectionType)
      Http.send(
        {
          url: "https://api.juntus.me/pos/mamba/entities",
          headers: this.headers,
          method: "GET",
          connect: this.connectionType,
        },
        (data,error) => {
            this.$refs["res"].innerText = "Data: " + data
            error ? this.$refs["res"].innerText += "\nError: " + error.status : {}
        }
      )
    },
    doPostRequest() {
      this.$refs["res"].innerText = "Doing Post Request . . ."
      console.log(this.connectionType)
      Http.send(
        {
          url: this.url,
          headers: this.headers,
          data: this.data,
          method: "POST",
          connect: this.connectionType,
        },
        (data, error) => {
            this.$refs["res"].innerText = "Data: " + data
            this.$refs["res"].innerText += "\nError: "+ error.status
        }
      )
    },
    clearData() {
        this.$refs["res"].innerText = "Data Cleaned"
    },
    toggleConnection(){
        if(this.connectionType == "LAN"){
          this.connectionType = "NET"
          this.$refs["btn-proxy"].innerText = "LAN"
        } else {
          this.connectionType = "LAN"
          this.$refs["btn-proxy"].innerText = "NET"
        }
    }
  },
  onCreate() {
    this.$refs["res"].innerText = "Use the Buttons"
  },
  onMount() {
    this.$refs["btn-get"].onclick = () => {
      this.doGetRequest()
    }
    this.$refs["btn-post"].onclick = () => {
      this.doPostRequest()
    }
    this.$refs["btn-data"].onclick = () => { 
      this.clearData()
    }
    this.$refs["btn-proxy"].onclick = () => {
      this.toggleConnection()
    }
  },
  state() {
    return {
      url: "https://jsonplaceholder.typicode.com/posts/",
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        "Cache-Control": "no-cache",
        "authorization": "167988962",
      },
      data: JSON.stringify({title:"Supertest", body:"wow"}),
      connectionType: "NET",
    }
  },
}
