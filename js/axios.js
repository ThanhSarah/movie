const url = 'https://api.themoviedb.org/3';
const movie_key = 'api_key=9110d1d8a2470793845246dc710f14c3';

const main = document.getElementById('main');
const form = document.getElementById('form');
const inputText = document.getElementById('text');
const search = document.getElementById('search');
const content = document.getElementById('content');

search.addEventListener('click', function () {
    axios.get(`${url}/search/movie?${movie_key}&query=${inputText.value}`)
        .then(function (res) {
            const data = res.data.results;
          
            let html=""
            data.forEach(movie => {
                html+= createHtml(movie);
            });
            main.innerHTML=html;
        })
})
function createHtml(movie) {
    const html = `
    <a id="content" href="detailmovie.html" onclick="detail(${movie.id})">
        <div class="content">
            <div class="img">
                <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="">
            </div>
            <div class="text">
                <h1>${movie.title}</h1>
                <p class="intro">${movie.release_date}</p>
                <p>${movie.overview}</p>
            </div>
        </div>
    <a/>
    `
    return html;
}


async function detail(id){
    axios.get(`${url}/movie/${id}`)
    .then(function (res){
        console.log(res);
    }) 
}



