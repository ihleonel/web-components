class KeywordsField extends window.HTMLElement {
  constructor () {
    super()

    const shadow = this.attachShadow({ mode: 'open' })
    const container = document.createElement('div')
    container.classList.add('container')
    const input = document.createElement('input')

    const cleanInput = () => {
      input.value = ''
    }

    const addTag = (text) => {
      const tag = document.createElement('span')
      tag.classList.add('tag')
      tag.textContent = text
      container.insertBefore(tag, input)
    }

    input.addEventListener('keydown', (event) => {
      if (event.key !== 'Enter') {
        return
      }
      event.preventDefault()
      if (input.value.trim() === '') {
        return
      }
      addTag(input.value.trim())
      cleanInput()
    })
    container.appendChild(input)
    shadow.appendChild(container)
  }
}

export default KeywordsField
