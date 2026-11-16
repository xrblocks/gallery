import {css, html, LitElement} from 'lit';

import {MicButtonPressedEvent} from './GeminiLiveEvents.js';

export class MicButton extends LitElement {
  static properties = {micRecording: {type: Boolean}};
  declare micRecording: boolean;

  constructor() {
    super();
    this.micRecording = false;
  }

  static override styles = css`
    .mic-input {
      flex-grow: 0;
      border-radius: 3rem;
      width: 3rem;
      height: 100%;
      background: #00000088;
      color: white;
      border: none;
    }

    .mic-input-icon {
      text-align: center;
      line-height: 3rem;
      width: 100%;
    }

    .material-symbols-outlined {
      font-variation-settings:
        'FILL' 0,
        'wght' 400,
        'GRAD' 0,
        'opsz' 24;
    }
  `;

  onMicButtonClicked() {
    this.dispatchEvent(new MicButtonPressedEvent());
  }

  getHaloCss() {
    return `box-shadow:
            0 0 10px rgba(22,127,56, 0.4),
            0 0 20px rgba(22,127,56, 0.3),
            0 0 30px rgba(22,127,56, 0.2);
    `;
  }

  override render() {
    let micInputStyle = '';
    if (this.micRecording) {
      micInputStyle = this.getHaloCss();
    }
    return html`
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&icon_names=mic"
      />
      <button
        class="mic-input"
        style=${micInputStyle}
        @click=${this.onMicButtonClicked.bind(this)}
      >
        <span class="material-symbols-outlined mic-input-icon"> mic </span>
      </button>
    `;
  }
}

customElements.define('xrblocks-simulator-geminilive-micbutton', MicButton);
