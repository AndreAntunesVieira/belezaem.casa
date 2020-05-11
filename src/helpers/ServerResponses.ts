export default class ServerResponses {
  constructor(private req, private res) {}

  sendMethodNotAllowed() {
    this.res.status(405)
    this.res.send()
  }
}
