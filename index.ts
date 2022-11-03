import { Ion } from './ion';
import { inboxTodos, addTask } from './inbox';

import './views/tasklist';

setTimeout(() => {
  addTask('Do stomehting');
}, 1000);

class Sidebar extends Ion {
  constructor() {
    super();

    this.useStore(inboxTodos);
  }

  view() {
    return this.html`
      <aside>
        <div>Inbox <div>${inboxTodos.get().length}</div></div>
      </aside>
    `;
  }
}

customElements.define('x-sidebar', Sidebar);
