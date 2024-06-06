class Parent {
  constructor(name) {
    this._name = name;

    // this.dailyRoutine = this.dailyRoutine.bind(this);
  }

  dailyRoutine() {
    console.log("Menyiapkan aktivitas sehari-hari ...");
    console.log(`${this._name} sedang menyiapkan bekal anak-anak.`);
  }
}

const anonim = (parent) => ({
  followRoutine: parent.dailyRoutine,
});

const runDailyRoutine = () => {
  const parent = new Parent("Ibu");
  anonim(parent).followRoutine();
};

runDailyRoutine();
