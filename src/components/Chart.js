import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  datasets: [
    {
      label: '# of Votes',
      data: [12, 5, 4],
      backgroundColor: [
        'rgba(129, 162, 211, 1)',
        'rgba(196, 201, 208, 1)',
        'rgba(91, 91, 91, 1)'
      ],
      borderColor: [
        'rgba(129, 162, 211, 1)',
        'rgba(196, 201, 208, 1)',
        'rgba(91, 91, 91, 1)'
      ],
      borderWidth: 1,
    },
  ],
};

export default function Chart() {
  return (
        <Pie options={{ maintainAspectRatio: false }} data={data} />
  );
}
