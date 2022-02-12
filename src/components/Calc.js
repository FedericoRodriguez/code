import { LitElement, html } from 'lit'

export const tagName = 'counter-js'

class CounterJs extends LitElement {
  static get properties() {
    return {
      count: { type: Number },
    }
  }

  constructor() {
    super()
    this.count = 0
  }

  render() {
    return html` <p>Count: ${this.count}</p>
      <br />
      <button @click="${this.increment}">Increment</button>`
  }

  increment() {
    this.count = this.count + 1
  }
}

customElements.define(tagName, CounterJs)
