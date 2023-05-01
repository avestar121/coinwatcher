import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import Chart from 'chart.js/auto';

import 'chartjs-adapter-moment';

import { LineController, TimeScale, LinearScale, LineElement, Tooltip } from 'chart.js';
Chart.register(LineController, TimeScale, LinearScale, LineElement, Tooltip);

export default function SmallGraph({symbol, width, height}) {
  const canvasRef = useRef(null);
  const [chart, setChart] = useState(null);

  useEffect(() => {
    const apiUrl = 'https://api.binance.com/api/v3/klines';
    const interval = '30m';

    axios.get(`${apiUrl}?symbol=${symbol}&interval=${interval}`)
      .then(response => {
        const data = response.data;
        const prices = data.map(datum => parseFloat(datum[4]));
        const labels = data.map(datum => new Date(datum[0]));

        const ctx = canvasRef.current.getContext('2d');
        const newChart = new Chart(ctx, {
          type: 'line',
          data: {
            labels: labels,
            datasets: [{
              label: `${symbol} Price`,
              data: prices,
              borderColor: '#17C784',
              borderWidth: 1.5,
              fill: false,
              pointRadius: 0 
            }]
          },
          options: {
            scales: {
              x: {
                type: 'time',
                time: {
                  unit: 'day',
                  displayFormats: {
                    day: 'MMM DD'
                  }
                },
                ticks: {
                    source: 'auto',
                    maxRotation: 0,
                    autoSkip: true,
                    display: false,
                  },
              },
              y: {
                beginAtZero: false,
                ticks: {
                    source: 'auto',
                    maxRotation: 0,
                    autoSkip: true,
                    display: false,
                  },
              }
            },
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                display: false
              }
            }
          }
          
        });
        setChart(newChart);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <canvas ref={canvasRef} width={30} height={50}></canvas>
    </div>
  );
}
