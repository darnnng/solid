// without principle

interface IPerson {
    sleep: () => void;
    watchFilm: () => void;
    visitMeeting: () => void;
    writeCode: () => void;
    testCode: () => void;
  }

// with principle

interface IPerson {
  sleep: () => void;
  watchFilm: () => void;
}

interface IWorker {
  visitMeeting: () => void;
  writeCode: () => void;
  testCode: () => void;
}

// class Programmer implements IWorker {
//   //
// }