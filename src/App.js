import "./App.css";
import { Component } from "react";
import Table from "./components/Table";
import LineChartComponent from "./components/LineChartComponent";

const data = [
  {
    Id: 1,
    Year: 2004,
    Medals: 1,
  },
  {
    Id: 2,
    Year: 2008,
    Medals: 3,
  },
  {
    Id: 3,
    Year: 2012,
    Medals: 6,
  },
  {
    Id: 4,
    Year: 2016,
    Medals: 2,
  },
  {
    Id: 5,
    Year: 2020,
    Medals: 7,
  },
];

class App extends Component {
  state = { activeTabId: "table" };

  onTable = () => {
    this.setState({ activeTabId: "table" });
  };

  onLineChart = () => {
    this.setState({ activeTabId: "lineChart" });
  };

  render() {
    const { activeTabId } = this.state;
    const cssElementTable =
      activeTabId === "table" ? "active-tab-element" : "tab-element";
    const cssElementChart =
      activeTabId === "lineChart" ? "active-tab-element" : "tab-element";
    return (
      <div className="bg-container">
        <div className="alignment">
          <button
            onClick={this.onTable}
            type="button"
            className={cssElementTable}
          >
            Table
          </button>
          <button
            onClick={this.onLineChart}
            type="button"
            className={cssElementChart}
          >
            Line Chart
          </button>
        </div>
        {activeTabId === "table" ? (
          <Table data={data} />
        ) : (
          <LineChartComponent data={data} />
        )}
      </div>
    );
  }
}

export default App;
