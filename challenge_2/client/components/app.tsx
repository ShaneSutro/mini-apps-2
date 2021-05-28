import * as React from 'react';
import Chart from 'chart.js/auto';
import * as moment from 'moment';

interface state {
  bpi: {[key: string]: Number}
}

class App extends React.Component<{}, state> {
  constructor(props) {
    super(props);
    this.state = {
      bpi: {},
    };
  }

  getHistoricalData(start: string, end: string) {
    let qparams = '';
    if (start && end) {
      qparams = `?start=${start}&end=${end}`
    }
    return new Promise<void>((resolve, reject) => {
      fetch(`https://api.coindesk.com/v1/bpi/historical/close.json${qparams}`)
      .then(response => response.json())
        .then(data => {
          this.setState({ bpi: data.bpi })
          resolve();
        })
        .catch(err => {
          console.error(err);
          reject(err);
        });
    })
  }

  async componentDidMount() {
    await this.getHistoricalData('2021-05-08', '2021-05-24')
    const ctx = document.getElementById("crypto-chart");
    new Chart(ctx, {
      type: "line",
      data: {
        labels: Object.keys(this.state.bpi),
        datasets: [{
          label: 'Price',
          data: Object.values(this.state.bpi),
          borderColor: 'rgb(75, 192, 192)',
        }]
      }
    })
  }

  render() {
    return (
      <div>
        <h1>Crypto Historical Prices</h1>
        <canvas id='crypto-chart' width="800" height="400"></canvas>
        <p>Powered by <a target="_" href="https://www.coindesk.com/price/bitcoin">CoinDesk</a></p>
      </div>
    );
  }
}

export default App;
