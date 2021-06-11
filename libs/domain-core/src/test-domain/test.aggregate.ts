import { Aggregate } from '../lib/aggregate';
import { TestEvent } from './test.event';

export class TestAggregate extends Aggregate {
  // eslint-disable-next-line
  applyTestEvent(testEvent: TestEvent) {}
}