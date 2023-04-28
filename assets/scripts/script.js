

searchBtn.addEventListener("click" , function() {
    axios.get(`https://www.omdbapi.com/?t=${searchInp.value}&apikey=4ff172aa`).then(res => {
        console.log(res.data)
        if(searchInp.value == "") {
            items.innerHTML = "Search a movie name...";
            items.style.color = "#a0a0a0";
            items.style.marginTop = "20px";
        } else {
            items.innerHTML = `<div class="container__movie">
            <div class="container__movie__img">
              <img
                src="${res.data.Poster}"
                alt="img"
              />
            </div>
            <div class="container__movie__datas" style="text-align: center;">
                <h4 class="movie__name">${res.data.Title}</h4>
                <p class="imdb"><i class="fa-solid fa-star"></i>${res.data.imdbRating}</p>
                <div class="rated__year__production"><span>${res.data.Rated}</span> <span>${res.data.Year}-</span>  <span>${res.data.Production}</span></div>
                <div class="container__movie__datas__genre">
                    <div>${res.data.Genre.split(",").join("</div><div>")}</div>
                </div>
            </div>
          </div>
          <div class="container__movieText">
            <div class="container__movieText__plot">
                <h5>Plot:</h5>
                <span>${res.data.Plot}</span>
            </div>
            <div class="container__movieText__cast">
                <h5>Cast:</h5>
                <span>${res.data.Actors}</span>
            </div>
          </div>
      </div>
            `
        }
        searchInp.value = "";
    })
})