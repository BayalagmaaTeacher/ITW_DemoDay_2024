const allwebs = [
    {
      grade: '7a',
      webs: [
        {
          names: ['Amartuvshin'],
          link: './7a/Amartuvshin/index.html',
          image:'./web/Amartuvshin.png'
        },
        {
          names: ['Anand'],
          link: './7a/Anand/index.html',
          image:'./web/Anand.png'
        },
        {
          names: ['Baasansuren'],
          link: './7a/Baasansuren/index.html',
          image:'./web/Baasansuren.png'
        },
        {
          names: ['Bileg'],
          link: './7a/Bileg/index.html',
          image:'./web/Bileg.png'
        },
        {
          names: ['Ermuun'],
          link: './7a/Ermuun/index.html',
          image: './web/Ermuun.png'
        },
        {
          names: ['Gansuld'],
          link: './7a/Gansuld/index.html',
          image: './web/Gansuld.png'
        },
        {
          names: ['Indranil'],
          link: './7a/Indranil/index.html',
          image:'./web/Indranil.png'
        },
        {
          names: ['Khuselbayar'],
          link: './7a/Khuselbayar/index.html',
          image:'./web/Khuselbayar.png'
        },
        {
          names: ['Maralmaa'],
          link: './7a/Maralmaa/index.html',
          image:'./web/Maralmaa.png'
        },
        {
          names: ['Nandia'],
          link: './7a/Nandia/index.html',
          image:'./web/Nandia.png'
        },
        {
          names: ['Nomin-Erdene'],
          link: './7a/Nomin-Erdene/index.html',
          image: './web/Nomin-Erdene.png'
        },
        {
          names: ['Soyombo'],
          link: './7a/Soyombo/index.html',
          image: './web/Soyombo.png'
        },
        {
          names: ['Tengis'],
          link: './7a/Tengis/index.html',
          image: './web/Tengis.png'
        },
        {
          names: ['Mergen'],
          link: './7a/Mergen/index.html',
          image: './web/Mergen.png'
        },
      ]
    },
    {
      grade: '7b',
      webs: [
        {
          names: ['Amirlan'],
          link: './7b/Amirlan/index.html',
          image: './web/Amirlan.png'
        },
        {
          names: ['Baatarkhuu'],
          link: './7b/Baatarkhuu/index.html',
          image:'./web/Baatarkhuu.png'
        },
        {
          names: ['Enkh-Uchral'],
          link: './7b/Enkh-Uchral/index.html',
          image: './web/Enkh-Uchiral.png'
        },
        {
          names: ['Erkhes'],
          link: './7b/Erkhes/index.html',
          image: './web/Erkhes.png'
        },
        {
          names: ['Garid'],
          link: './7b/Garid/index.html',
          image: './web/Garid.png'
        },
        {
          names: ['Khuselbayr'],
          link: './7b/Khuselbayr/index.html',
          image: './web/Khuselbayr.png'
        },
        {
          names: ['Michid'],
          link: './7b/Michid/index.html',
          image: './web/Michid.png'
        },
        {
          names: ['Molor'],
          link: './7b/Molor/index.html',
          image: './web/Molor.png'
        },
        {
          names: ['Munkh-Erdene'],
          link: './7b/Munkh-Erdene/index.html',
          image: './web/Munkh-Erdene.png'
        },
      ]
    },
    {
      grade: '9a',
      webs: [
        {
          names: ['Tulga', 'TJ', 'Tugs-Erdene'],
          link: 'https://nendhx.github.io/Volleyball/',
          image:'./web/Tulga.png'
        },
        {
          names: ['Urankhishig'],
          link: 'https://liyaxxxx.github.io/9r-angi-3r-uliral-Web/',
          image: './web/Urankhishig.png'
        },
        {
          names: ['Bilguun'],
          link: 'https://bilguunbhaa.github.io/flybeyond/',
          image: './web/Bilguun.png'
        },
        {
          names: ['Ermuun', 'Orgil'],
          link: 'https://rgltsogt.github.io/WebProject/',
          image: './web/orgil.png'
        }
      ]
    },
    {
      grade: '9b',
      webs: [
        {
          names: ['B.Chinguun', 'Khuder'],
          link: 'https://kobi-1.github.io/All-my-brothas/#',
          image:'./web/kobi.png'
        },
        {
          names: ['Angarag', 'E.Chinguun'],
          link: 'https://nenukrc.github.io/Random-generator/main/',
          image: './web/Angarag.png'
        },
        {
          names: ['Bilguun', 'Buyndorj'],
          link: 'https://buyakakkk.github.io/Demo-day2/',
          image: './web/buyka.png'
        },
        {
          names: ['Turmunkh', 'Azjargal'],
          link: 'https://turuuuuuu.github.io/sass/index.html',
          image: './web/Turmunkh.png'
        }
      ]
    },
    {
      grade: '9v',
      webs: [
        {
          names: ['Chingun', 'Nyamragchaa'],
          link: 'https://ulankachingun.github.io/Horse-Booking/',
          image: './web/chingun.png'
        },
        {
          names: ['Tselmeg', 'A.Anand', 'Enkhtushig'],
          link: 'https://nest9v.github.io/tusul22/',
          image: './web/Anand.png'
        },
        {
          names: ['Tselmuun', 'Diana', 'Munkhchimeg'],
          link: 'https://irkaa.github.io/pony/',
          image: './web/diana.png'
        }
      ]
    },
  ];
  
  
// Function to generate HTML code for each website
function generateWebsiteHTML(website) {
    // If image URL is not provided, use a placeholder
    const imageUrl = website.image ? website.image : 'placeholder_image_url.jpg';
  
    // Convert names array to a string
    const names = website.names.join(', ');
  
    // Check if the link property exists
    const linkHTML = website.link ? `<p><a href="${website.link}" target="_blank">Visit Website</a></p>` : '';
  
    return `
      <li>
        <div class="details">
          <div class="product">
            <img src="${imageUrl}" alt="${names}">
          </div>
          <h2>${names}</h2>
          ${linkHTML}
        </div>
      </li>
    `;
  }
  
  // Function to print websites to the HTML
  function printWebsites() {
    const websiteList = document.querySelector("ul"); // Assuming you have a <ul> element as the container
  
    // Loop through all grade levels
    allwebs.forEach(grade => {
      // Loop through all websites in a grade
      grade.webs.forEach(website => {
        const websiteHTML = generateWebsiteHTML(website);
        websiteList.innerHTML += websiteHTML;
      });
    });
  }
  
  // Call the printWebsites function to print websites to the HTML
  printWebsites();
  