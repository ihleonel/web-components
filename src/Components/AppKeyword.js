class KeywordsField extends window.HTMLElement {
  constructor () {
    super()

    const shadow = this.attachShadow({ mode: 'open' })
    const message = document.createElement('p')
    message.innerHTML = 'Web component'
    shadow.appendChild(message)
  }
}

export default KeywordsField
