import { Event } from './event';

export class Aggregate {
  id: string
  changes: Event[] = []
  revision = -1

  applyEvent(event: Event) {
    const methodName = `apply${event.type}`;
    if (this[methodName]) this[methodName](event);
    this.revision += 1;
  }

  raiseEvent(event: Event) {
    this.applyEvent(event);
    this.changes.push(event);
  }

  resetChanges() {
    this.changes = [];
  }
}