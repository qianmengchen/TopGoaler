import { Event, Point, Status } from '../constants';

it('returns correct Event constants', () => {
  expect(Event.JOIN).toBe('0');
  expect(Event.DROP).toBe('1');
  expect(Event.FINISH).toBe('2');
});

it('returns correct Point constants', () => {
  expect(Point.ONE).toBe('one');
  expect(Point.TWO).toBe('two');
  expect(Point.THREE).toBe('three');
  expect(Point.FIVE).toBe('five');
  expect(Point.EIGHT).toBe('eight');
  expect(Point.THIRTEEN).toBe('thirteen');
  expect(Point.TWENTYONE).toBe('twentyone');
});

it('returns correct Status constants', () => {
  expect(Status.NOT_REGISTERED).toBe('not_registered');
  expect(Status.IN_PROGRESS).toBe('in_progress');
  expect(Status.DONE).toBe('done');
});
