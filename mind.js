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
          names: ['Amartuvshin'],
          link: './Amartuvshin/index.html'
        },
        {
          names: ['Anand'],
          link: './Anand/index.html'
        },
        {
          names: ['Baasansuren'],
          link: './Baasansuren/index.html'
        },
        {
          names: ['Bileg'],
          link: './Bileg/index.html'
        },
        {
          names: ['Ermuun'],
          link: './Ermuun/index.html'
        },
        {
          names: ['Gansuld'],
          link: './Gansuld/index.html'
        },
        {
          names: ['Indranil'],
          link: './Indranil/index.html'
        },
        {
          names: ['Khuselbayar'],
          link: './Khuselbayar/index.html'
        },
        {
          names: ['Maralmaa'],
          link: './Maralmaa/index.html'
        },
        {
          names: ['Nandia'],
          link: './Nandia/index.html'
        },
        {
          names: ['Nomin-Erdene'],
          link: './Nomin-Erdene/index.html'
        },   
        {
          names: ['Soyombo'],
          link: './Soyombo/index.html'
        },
        {
          names: ['Tengis'],
          link: './Tengis/index.html'
        },
      ]
    },
    {
      grade: '7b',
      webs: [
        {
          names: ['Amirlan'],
          link: './Amirlan/index.html'
        },
        {
          names: ['Baatarkhuu'],
          link: './Baatarkhuu/index.html'
        },
        {
          names: ['Enkh-Uchral'],
          link: './Enkh-Uchral/index.html'
        },
        {
          names: ['Erkhes'],
          link: './Erkhes/index.html'
        },
        {
          names: ['Garid'],
          link: './Garid/index.html'
        },
        {
          names: ['Khuselbayr'],
          link: './Khuselbayr/index.html'
        },
        {
          names: ['Michid'],
          link: './Michid/index.html'
        },
        {
          names: ['Molor'],
          link: './Molor/index.html'
        },
        {
          names: ['Munkh-Erdene'],
          link: './Munkh-Erdene/index.html'
        },
      ]
    },
    {
      grade: '9a',
      webs: [
        {
          names: ['Tulga', 'TJ', 'Tugs-Erdene'],
          link: 'https://nendhx.github.io/Volleyball/'
        },
        {
          names: ['Urankhishig'],
          link: 'https://liyaxxxx.github.io/9r-angi-3r-uliral-Web/'
        },
        {
          names: ['Bilguun'],
          link: 'https://bilguunbhaa.github.io/flybeyond/'
        },
        {
          names: ['Ermuun', Orgil],
          link: 'https://rgltsogt.github.io/WebProject/'
        }
      ]
    },
    {
      grade: '9v',
      webs: [
        {
          names: ['Tselmeg','A.Anand','Enkhtushig'],
          link: 'https://nest9v.github.io/tusul22/'
        },
        {
          names: ['Tselmuun','Diana','Munkhchimeg'],
          link: 'https://irkaa.github.io/pony/'
        }
      ]
    },
    
  ];
  