class c1 {
  constructor(nm, mks) {
    this.name = nm;
    this.marks = mks;
  }
  printinfo() {
    console.log(`hello ${this.name}`);
    console.log(`your score ${this.marks}`);
  }
}
let user = new c1("prachi", 50);
user.printinfo();
