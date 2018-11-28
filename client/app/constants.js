//miliseconds in a day, week and month
export const periodDecoder = [8.64e7, 6.048e8, 2.592e9];

export class Event {
  static get JOIN() {
    return '0';
  }
  static get DROP() {
    return '1';
  }
  static get FINISH() {
    return '2';
  }
}

export class Point {
  static get ONE() {
    return 'one';
  }
  static get TWO() {
    return 'two';
  }
  static get THREE() {
    return 'three';
  }
  static get FIVE() {
    return 'five';
  }
  static get EIGHT() {
    return 'eight';
  }
  static get THIRTEEN() {
    return 'thirteen';
  }
  static get TWENTYONE() {
    return 'twentyone';
  }
}

export class Status {
  static get NOT_REGISTERED() {
    return 'not_registered';
  }
  static get IN_PROGRESS() {
    return 'in_progress';
  }
  static get DONE() {
    return 'done';
  }
}
