
// $(document).ready(function(){
//     $(window).scroll(function(){
//         var scroll = $(window).scrollTop();
//         if (scroll > 100) {
//           $(".netflix-navbar").css("background" , "#0C0C0C");
//         }
  
//         else{
//             $(".netflix-navbar").css("background" , "transparent");  	
//         }
//     });

//   })


// function position(id){
//   var card = document.getElementsByClassName('card')[id];
//   // card.style.transform = 'scale(1.5)';
//   console.log(id)
// }

function scrollToDiv(divId) {
  document.getElementById(divId).scrollIntoView({ behavior: 'smooth' });
}
$(document).ready(function() {
  const movies = JSON.parse(localStorage.getItem('movies')) || [];
  const carouselInner = $('carousel-inner-new');
  const newMoviesSection = $('#newMovies');

  movies.forEach((movie, index) => {
    const activeClass = index === 0 ? 'active' : '';

    const movieCardCarousel = `
      <div class="carousel-item ${activeClass}">
        <section class="d-flex">
          <div class="card">
            <img src="${movie.image}" class="card-img-top" alt="${movie.title}">
            <div class="card-body">
              <section class="d-flex justify-content-between">
                <div>
                  <i class="bi bi-play-circle-fill card-icon"></i>
                  <i class="bi bi-plus-circle card-icon"></i>
                </div>
                <div>
                  <i class="bi bi-arrow-down-circle card-icon"></i>
                </div>
              </section>
              <section class="d-flex align-items-center justify-content-between">
                <p class="netflix-card-text m-0" style="color: rgb(0, 186, 0);">97% Relevant</p>
                <span class="m-2 netflix-card-text text-white">Limited Series</span>
                <span class="border netflix-card-text p-1 text-white">HD</span>
              </section>
              <span class="netflix-card-text text-white">${movie.description}</span>
            </div>
          </div>
        </section>
      </div>
    `;

    const movieCardNewSection = `
      <div class="col-md-3">
        <div class="card bg-dark text-white">
          <img src="${movie.image}" class="card-img-top" alt="${movie.title}">
          <div class="card-body">
            <h5 class="card-title">${movie.title}</h5>
            <p class="card-text">${movie.description}</p>
            <a href="${movie.video}" class="btn btn-primary">Watch Now</a>
          </div>
        </div>
      </div>
    `;

    carouselInner.append(movieCardCarousel);
    newMoviesSection.append(movieCardNewSection);
  });
});
