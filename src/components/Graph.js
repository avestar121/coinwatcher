import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import Chart from 'chart.js/auto';

import 'chartjs-adapter-moment';

import { LineController, TimeScale, LinearScale, LineElement, Tooltip } from 'chart.js';
Chart.register(LineController, TimeScale, LinearScale, LineElement, Tooltip);

export default function Graph({symbol, activeTab}) {
  const canvasRef = useRef(null);
  const [chart, setChart] = useState(null);

  useEffect(() => {
    const apiUrl = 'https://api.binance.com/api/v3/klines';
    const interval = activeTab;

    axios.get(`${apiUrl}?symbol=${symbol}&interval=${interval}`)
      .then(response => {
        const data = response.data;
        const prices = data.map(datum => parseFloat(datum[4]));
        const labels = data.map(datum => new Date(datum[0]));

        const ctx = canvasRef.current.getContext('2d');

        if (chart) {
          chart.destroy();
        }

        const newChart = new Chart(ctx, {
          type: 'line',
          data: {
            labels: labels,
            datasets: [{
              data: prices,
              borderColor: 'blue',
              fill: false,
              pointRadius: 10,
              pointBackgroundColor: 'rgba(0, 0, 0, 0)',
              pointBorderColor: 'rgba(0, 0, 0, 0)'
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
                },
              },
              y: {
                beginAtZero: false
              }
            },
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                display: false
              },
              crosshair: {
                line: {
                  color: 'rgba(0, 0, 0, 0.5)',
                  width: 1
                },
                sync: {
                  enabled: false
                },
                zoom: {
                  enabled: false
                },
                snap: {
                  enabled: true,
                  mode: 'xy'
                },
                callbacks: {
                  label: function(item, data) {
                    var label = data.datasets[item.datasetIndex].label || '';
                    if (label) {
                      label += ': ';
                    }
                    label += item.yLabel.toFixed(2);
                    return label;
                  }
                },
                
              }
            }
          }
        });
        setChart(newChart);
      })
      .catch(error => {
        console.log(error);
      });

    return () => {
      if (chart) {
        chart.destroy();
      }
    };
  }, [activeTab, symbol]);

  return (
    <div>
      <canvas ref={canvasRef} width={750} height={400}></canvas>
    </div>
  );
}
