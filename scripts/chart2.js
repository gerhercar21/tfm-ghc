const ctx = document.getElementById('chartTwo');
      
new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      borderWidth: 1,
      backgroundColor: [
        '#6321A6',
        '#A6147F',
        '#364FD9',
        '#D97B66',
        '#BF1162',
        '#364FD9'
      ]
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: false
      }
    }
  }
});