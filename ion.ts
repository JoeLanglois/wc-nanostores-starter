import { html, render as _render } from 'lit-html';
import { Store } from 'nanostores';

export class Ion extends HTMLElement {
  html: typeof html;
  subs: Array<() => void>;

  constructor() {
    super();
    this.subs = [];
    this.html = html;
  }

  useStore(store: Store) {
    this.subs.push(
      store.subscribe(() => {
        console.log('YEP');
        this.render();
      })
    );
  }

  disconnectedCallback() {
    this.subs.forEach((unsub) => unsub());
  }

  view() {
    return html``;
  }

  render() {
    _render(this.view(), this);
  }
}
