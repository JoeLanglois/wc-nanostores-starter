import { Ion } from '../ion';

import { inboxTodos } from '../inbox';

class InboxView extends Ion {
  connectedCallback() {
    this.render();

    this.useStore(inboxTodos);
  }

  view() {
    const todos = inboxTodos.get();

    return this.html`
      <div id="tasklist-view">
         <h2>Inbox</h2>
         ${todos.map(
           (todo) => this.html`
          <div>${todo.name} (${todo.uid})</div>
         `
         )}
      </div>
    `;
  }
}

customElements.define('inbox-view', InboxView);
