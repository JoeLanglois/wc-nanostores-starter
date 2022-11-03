import { atom, computed, Store } from 'nanostores';

interface Task {
  uid: string;
  name: string;
  done: false;
}

function _addTask(name: string, tasks: Task[]): Task[] {
  const id = Date.now().toString();
  const task: Task = { uid: id, name, done: false };
  return tasks.concat([task]);
}

function filterTodos(tasks: Task[]): Task[] {
  return tasks.filter((t) => !t.done);
}

const inboxTasks = atom<Task[]>([]);
export const inboxTodos = computed([inboxTasks], filterTodos);

export const addTask = (name: string) => {
  inboxTasks.set(_addTask(name, inboxTasks.get()));
};
