import './style.css'

const API_KEY = import.meta.env.VITE_NASA_API_KEY;

fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
  .then(response => response.json())
  .then(data => {
    console.log(data); 

    
    document.querySelector("#app").innerHTML = `
      <main style="padding: 20px; text-align: left; max-width: 800px; margin: 0 auto;">
        <h1>${data.title}</h1>
        <p style="color: var(--text); font-style: italic; margin-bottom: 20px;">Date: ${data.date}</p>
        <img src="${data.url}" alt="${data.title}" style="width: 100%; border-radius: 8px; margin-bottom: 20px;" />
        <p style="line-height: 1.6;">${data.explanation}</p>
      </main>
    `;
  })
  .catch(error => {
    console.error("Error fetching NASA data:", error);
  });