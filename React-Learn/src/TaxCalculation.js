import React from "react";
import "./App.css";
class TaxCalculation extends React.Component {
  constructor(props) {
    // constructor props are optional
    super(props);
    this.state = {
      sal: 0,
      da: 0,
      hra: 0,
      ta: 0,
      gs: 0,
      pf: 0,
      tax: 0,
      totalTax: 0,
      netSal: 0,
    };
  }
  display = () => {
    const data = {
      da: 0.9 * this.state.sal,
      hra: 0.3 * this.state.sal,
      ta: 0.2 * this.state.sal,
      pf: 0.02 * this.state.sal,
    };
    const gs = data.da + data.hra + data.ta;
    if (this.state.sal > 70000) {
      if (this.state.sal > 0 && this.state.sal < 30000) this.state.tax = 0;
      if (this.state.sal > 30000 && this.state.sal < 60000)
        this.state.tax += 0.5 * this.state.sal;
      if (this.state.sal > 60000 && this.state.sal < 90000)
        this.state.tax += 0.1 * this.state.sal;
      if (this.state.sal > 90000 && this.state.sal < 120000)
        this.state.tax += 0.15 * this.state.sal;
      if (this.state.sal > 120000) this.state.tax += 0.2 * this.state.sal;
    }

    this.setState({
      ...this.state,
      da: data.da,
      hra: data.hra,
      ta: data.ta,
      gs: gs,
      pf: data.pf,
      totalTax: this.state.tax,
      netSal: gs - data.pf - this.state.tax,
    });
  };

  render() {
    return (
      <div className="tax">
        <label htmlFor="empno">Empno</label>
        <input type="number" />
        <br />
        <label htmlFor="ename">Ename</label>
        <input type="text" />
        <br />
        <label htmlFor="sal">Salary</label>
        <input
          type="number"
          id="sal"
          onChange={(e) =>
            this.setState({
              ...this.state,
              sal: e.target.value,
            })
          }
        />
        <br />
        <button onClick={this.display}>Compute Gross Salary</button>
        <br />
        <label htmlFor="da">DA</label>
        <input type="number" disabled value={this.state.da} />

        <label htmlFor="hra">HRA</label>
        <input type="number" disabled value={this.state.hra} />

        <label htmlFor="ta">TA</label>
        <input type="number" disabled value={this.state.ta} />
        <br />
        <label htmlFor="gs">Gross Salary</label>
        <input type="number" disabled value={parseInt(this.state.gs)} />
        <br />
        <label htmlFor="pf">PF</label>
        <input type="number" disabled value={this.state.pf} id="pf" />
        <br />
        <button>Compute tax</button>
        <br />
        <label htmlFor="total">Total Tax</label>
        <input type="number" disabled value={this.state.totalTax} id="tax" />
        <button>Compute Net salary</button>
        <br />
        <label htmlFor="netsal">Net salary</label>
        <input type="number" disabled value={this.state.netSal} />
      </div>
    );
  }
}
export default TaxCalculation;
