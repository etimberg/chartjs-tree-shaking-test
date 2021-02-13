import Chart from 'chart.js';

// Uncomment this code for the tree-shaking version
// import {
//   Chart,
//   LineElement,
//   PointElement,
//   LineController,
//   CategoryScale,
//   LinearScale,
//   Legend,
//   Tooltip
// } from 'chart.js/tree';

Chart.register(
  LineElement, PointElement, LineController,
  CategoryScale, LinearScale,
  Legend, Tooltip,
)

const ctx = document.getElementById('chart').getContext('2d');
new Chart(ctx, {
  type: 'line',
  data: {
    datasets: [{
      data: [1, 2, 3, 4]
    }],
    labels: ['A', 'B', 'C', 'D']
  },
});
