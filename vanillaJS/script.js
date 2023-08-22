async function fetchMovies() {
    try {
      const response = await fetch('/fe-vanilla-test/movies.json'); // Replace with your actual API endpoint
      const moviesData = await response.json();
      return moviesData;
    } catch (error) {
      console.error('Error fetching movies:', error);
      return [];
    }
  }
  
  function createStarRating(rating) {
    const starContainer = document.createElement('div');
    starContainer.classList.add('star-rating');
  
    for (let i = 1; i <= 5; i++) {
      const star = document.createElement('img');
      star.src = i <= rating ? '/fe-vanilla-test/star-filled.svg' : '/fe-vanilla-test/star-empty.svg';
      star.alt = i <= rating ? 'Filled Star' : 'Empty Star';
      starContainer.appendChild(star);
    }
  
    return starContainer;
  }
  
  async function renderMovies() {
    const movieGrid = document.getElementById('movieGrid');
    const movies = await fetchMovies();
  
    movies.forEach(movie => {
      const movieCard = document.createElement('div');
      movieCard.classList.add('movie-card');
  
      const title = document.createElement('h2');
      title.textContent = movie.Title;
  
      const rating = createStarRating(parseInt(movie.imdbRating)); // Parse rating value
  
      movieCard.appendChild(title);
      movieCard.appendChild(rating);
      movieGrid.appendChild(movieCard);
    });
    
    return Promise.resolve(); // Return a promise to indicate completion
  }
  
  // Call the renderMovies function and handle the returned Promise.
  renderMovies().then(() => {
    console.log('Movie rendering completed.');
  });
  