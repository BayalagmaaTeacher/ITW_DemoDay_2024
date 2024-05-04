const allwebs = [
    {
      grade: '7a',
      webs: [
        {
          names: ['Amartuvshin'],
          link: './7a/Amartuvshin/index.html'
        },
        {
          names: ['Anand'],
          link: './7a/Anand/index.html'
        },
        {
          names: ['Baasansuren'],
          link: './7a/Baasansuren/index.html'
        },
        {
          names: ['Bileg'],
          link: './7a/Bileg/index.html'
        },
        {
          names: ['Ermuun'],
          link: './7a/Ermuun/index.html'
        },
        {
          names: ['Gansuld'],
          link: './7a/Gansuld/index.html'
        },
        {
          names: ['Indranil'],
          link: './7a/Indranil/index.html'
        },
        {
          names: ['Khuselbayar'],
          link: './7a/Khuselbayar/index.html'
        },
        {
          names: ['Maralmaa'],
          link: './7a/Maralmaa/index.html'
        },
        {
          names: ['Nandia'],
          link: './7a/Nandia/index.html'
        },
        {
          names: ['Nomin-Erdene'],
          link: './7a/Nomin-Erdene/index.html'
        },
        {
          names: ['Soyombo'],
          link: './7a/Soyombo/index.html'
        },
        {
          names: ['Tengis'],
          link: './7a/Tengis/index.html'
        },
      ]
    },
    {
      grade: '7b',
      webs: [
        {
          names: ['Amirlan'],
          link: './7b/Amirlan/index.html'
        },
        {
          names: ['Baatarkhuu'],
          link: './7b/Baatarkhuu/index.html'
        },
        {
          names: ['Enkh-Uchral'],
          link: './7b/Enkh-Uchral/index.html'
        },
        {
          names: ['Erkhes'],
          link: './7b/Erkhes/index.html'
        },
        {
          names: ['Garid'],
          link: './7b/Garid/index.html'
        },
        {
          names: ['Khuselbayr'],
          link: './7b/Khuselbayr/index.html'
        },
        {
          names: ['Michid'],
          link: './7b/Michid/index.html'
        },
        {
          names: ['Molor'],
          link: './7b/Molor/index.html'
        },
        {
          names: ['Munkh-Erdene'],
          link: './7b/Munkh-Erdene/index.html'
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
          names: ['Ermuun', 'Orgil'],
          link: 'https://rgltsogt.github.io/WebProject/'
        }
      ]
    },
    {
      grade: '9v',
      webs: [
        {
          names: ['Tselmeg', 'A.Anand', 'Enkhtushig'],
          link: 'https://nest9v.github.io/tusul22/'
        },
        {
          names: ['Tselmuun', 'Diana', 'Munkhchimeg'],
          link: 'https://irkaa.github.io/pony/'
        }
      ]
    },
  ];
  
  
  // Function to fetch and display products
  function fetchAndDisplayProducts() {
    const productList = document.getElementById("product-list");
  
    allwebs.forEach(grade => {
      grade.webs.forEach(website => {
        // Create li element
        const li = document.createElement("li");
  
        // Create details div
        const detailsDiv = document.createElement("div");
        detailsDiv.classList.add("details");
  
        // Create h2 element for website name
        const websiteName = document.createElement("h2");
        websiteName.textContent = website.names.join(', ');
  
        // Create p element for website link
        const websiteLink = document.createElement("p");
        websiteLink.innerHTML = `<a href="${website.link}" target="_blank">Visit Website</a>`;
  
        // Create product div
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");
  
        // Append elements to details div
        detailsDiv.appendChild(websiteName);
        detailsDiv.appendChild(websiteLink);
        detailsDiv.appendChild(productDiv);
  
        // Append details div to li
        li.appendChild(detailsDiv);
  
        // Append li to product list
        productList.appendChild(li);
      });
    });
  }
  
  // Call the function to fetch and display products
  fetchAndDisplayProducts();
  