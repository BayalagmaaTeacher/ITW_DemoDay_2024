const gridItems = [
  { span: 3, color: 'c-3', url: './imgs/0.jpg' },
  { span: 1, color: 'c-1', url: './imgs/10.jpeg' },
  { span: 2, color: 'c-2', url: './imgs/1.jpg' },
  { span: 2, color: 'c-4', url: './imgs/2.jpg' },
  { span: 1, color: 'c-5', url: './imgs/3.jpg' },
  { span: 1, color: 'c-3', url: './imgs/4.jpg' },
  { span: 2, color: 'c-2', url: './imgs/5.jpeg' },
  { span: 1, color: 'c-1', url: './imgs/6.jpeg' },
  { span: 3, color: 'c-4', url: './imgs/7.jpeg' },
  { span: 2, color: 'c-5', url: './imgs/8.jpeg' },
  { span: 1, color: 'c-3', url: './imgs/9.jpeg' },
  { span: 1, color: 'c-1', url: './imgs/11.jpeg' },
  { span: 2, color: 'c-2', url: './imgs/12.jpg' },
  { span: 1, color: 'c-4', url: './imgs/Screenshot 2024-05-03 at 01.27.23.png' },
  { span: 3, color: 'c-5', url: './imgs/Screenshot 2024-05-03 at 01.27.56.png' },
  { span: 2, color: 'c-3', url: './imgs/Screenshot 2024-05-03 at 01.28.57.png' },
  { span: 1, color: 'c-2', url: './imgs/Screenshot 2024-05-03 at 01.32.17.png' },
  { span: 1, color: 'c-1', url: './imgs/Screenshot 2024-05-03 at 01.34.09.png' },
  { span: 2, color: 'c-4', url: './imgs/Screenshot 2024-05-03 at 01.35.46.png' },
  { span: 1, color: 'c-5', url: './imgs/Screenshot 2024-05-03 at 01.36.02.png' },
  { span: 3, color: 'c-3', url: './imgs/Screenshot 2024-05-03 at 01.37.05.png' },
  { span: 2, color: 'c-2', url: './imgs/Screenshot 2024-05-03 at 01.37.14.png' },
  { span: 1, color: 'c-1', url: './imgs/Screenshot 2024-05-03 at 01.37.41.png' },
  { span: 1, color: 'c-4', url: './imgs/Screenshot 2024-05-03 at 01.38.02.png' },
  { span: 2, color: 'c-5', url: './imgs/Screenshot 2024-05-03 at 01.38.26.png' },
  { span: 1, color: 'c-3', url: './imgs/Screenshot 2024-05-03 at 01.38.44.png' },
  { span: 1, color: 'c-1', url: './imgs/Screenshot 2024-05-03 at 01.38.53.png' },
  { span: 2, color: 'c-2', url: './imgs/Screenshot 2024-05-03 at 01.39.01.png' },
  { span: 1, color: 'c-4', url: './imgs/Screenshot 2024-05-03 at 01.39.09.png' },
  { span: 3, color: 'c-5', url: './imgs/Screenshot 2024-05-03 at 01.39.17.png' },
  { span: 2, color: 'c-3', url: './imgs/Screenshot 2024-05-03 at 01.39.25.png' },
  { span: 1, color: 'c-2', url: './imgs/Screenshot 2024-05-03 at 01.39.32.png' },
  { span: 1, color: 'c-1', url: './imgs/Screenshot 2024-05-03 at 01.39.42.png' },
  { span: 2, color: 'c-2', url: './imgs/Screenshot 2024-05-03 at 01.39.49.png' },
  { span: 1, color: 'c-4', url: './imgs/Screenshot 2024-05-03 at 01.39.58.png' },
  { span: 3, color: 'c-5', url: './imgs/Screenshot 2024-05-03 at 01.40.10.png' },
  { span: 2, color: 'c-3', url: './imgs/Screenshot 2024-05-03 at 01.40.20.png' },
  { span: 1, color: 'c-2', url: './imgs/Screenshot 2024-05-03 at 01.40.31.png' },
  { span: 1, color: 'c-1', url: './imgs/Screenshot 2024-05-03 at 01.40.39.png' },
  { span: 2, color: 'c-4', url: './imgs/Screenshot 2024-05-03 at 01.40.45.png' },
  { span: 1, color: 'c-5', url: './imgs/Screenshot 2024-05-03 at 01.40.57.png' },
  { span: 3, color: 'c-3', url: './imgs/Screenshot 2024-05-03 at 01.41.04.png' },
  { span: 2, color: 'c-2', url: './imgs/Screenshot 2024-05-03 at 01.41.17.png' },
  { span: 1, color: 'c-1', url: './imgs/Screenshot 2024-05-03 at 01.41.34.png' },
  { span: 1, color: 'c-4', url: './imgs/Screenshot 2024-05-03 at 01.41.45.png' },
  { span: 2, color: 'c-5', url: './imgs/Screenshot 2024-05-03 at 01.41.53.png' },
  { span: 1, color: 'c-3', url: './imgs/Screenshot 2024-05-03 at 01.42.18.png' },
  { span: 3, color: 'c-2', url: './imgs/Screenshot 2024-05-03 at 01.42.32.png' },
  { span: 2, color: 'c-1', url: './imgs/Screenshot 2024-05-03 at 01.42.40.png' },
  { span: 1, color: 'c-4', url: './imgs/Screenshot 2024-05-03 at 01.43.01.png' },
  { span: 1, color: 'c-5', url: './imgs/Screenshot 2024-05-03 at 01.43.12.png' },
  { span: 2, color: 'c-3', url: './imgs/Screenshot 2024-05-03 at 01.43.40.png' }
];


  const gridContainer = document.querySelector('.grid');
  
  gridItems.forEach((item, index) => {
    const div = document.createElement('div');
    div.classList.add('card', `span-${item.span}`, item.color);
    div.style.backgroundImage = `url('${item.url}')`;
    gridContainer.appendChild(div);
  });
  

  document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.button');

    buttons.forEach(button => {
      button.addEventListener('click', function(event) {
        const value = event.target.dataset.value;
        localStorage.setItem('lastClicked', value);
      });
    });
  });


  const allwebs = [
    {
      grade: '7a',
      webs: [
        {
          names: ['zoloo', 'zoko', 'azaa'],
          web: 'url#'
        }
      ]
    },
    {
      grade: '7b',
      webs: [
        {
          names: ['zoloo', 'zoko', 'azaa'],
          web: 'url#'
        }
      ]
    },
    {
      grade: '8a',
      webs: [
        {
          names: ['zoloo', 'zoko', 'azaa'],
          web: 'url#'
        }
      ]
    },
    {
      grade: '8b',
      webs: [
        {
          names: ['zoloo', 'zoko', 'azaa'],
          web: 'url#'
        }
      ]
    },
    {
      grade: '9a',
      webs: [
        {
          names: ['zoloo', 'zoko', 'azaa'],
          web: 'url#'
        }
      ]
    },
    {
      grade: '9b',
      webs: [
        {
          names: ['zoloo', 'zoko', 'azaa'],
          web: 'url#'
        }
      ]
    },
    {
      grade: '9v',
      webs: [
        {
          names: ['zoloo', 'zoko', 'azaa'],
          web: 'url#'
        }
      ]
    },
   
   
  ];
  