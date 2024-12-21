let movies = [
    { title: "Inception", genre: "Sci-Fi", releaseDate: "2024-12-25" },
    { title: "Isle", genre: "Horror", releaseDate: "2024-12-27" },
    { title: "The Crow", genre: "Horror", releaseDate: "2025-01-01" },
    { title: "We Live In Time", genre: "Love", releaseDate: "2025-01-05" },
    
  ];
  
  
  const handleRegistration = (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    if (!name || !email || !password) {
      alert("Please fill all fields.");
      return;
    }
  

    localStorage.setItem("user", JSON.stringify({ name, email, password }));
  
    alert("Registration successful!");
    window.location.href = "login.html";
  };
  

  const handleLogin = (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user.email === email && user.password === password) {
      alert("Login successful!");
      window.location.href = "movies.html";
    } else {
      alert("Invalid email or password.");
    }
  };
  

  const renderMovies = () => {
    const moviesList = document.getElementById("moviesList");
    moviesList.innerHTML = "";
    movies.forEach(movie => {
      const movieDiv = document.createElement("div");
      movieDiv.classList.add("movie");
      movieDiv.innerHTML = `
        <h3>${movie.title}</h3>
        <p>Genre: ${movie.genre}</p>
        <p>Release Date: ${movie.releaseDate}</p>
      `;
      moviesList.appendChild(movieDiv);
    });
  };
  

  const renderAdminMovies = () => {
    const adminMoviesList = document.getElementById("adminMoviesList");
    adminMoviesList.innerHTML = "";
    movies.forEach((movie, index) => {
      const movieDiv = document.createElement("div");
      movieDiv.classList.add("movie");
      movieDiv.innerHTML = `
        <h3>${movie.title}</h3>
        <p>Genre: ${movie.genre}</p>
        <p>Release Date: ${movie.releaseDate}</p>
        <button onclick="deleteMovie(${index})">Delete</button>
      `;
      adminMoviesList.appendChild(movieDiv);
    });
  };
  

  const deleteMovie = (index) => {
    movies.splice(index, 1);
    renderAdminMovies();
  };
  

  const handleAdminMovieForm = (e) => {
    e.preventDefault();
    const title = document.getElementById("movieTitle").value;
    const genre = document.getElementById("movieGenre").value;
    const releaseDate = document.getElementById("movieDate").value;
  
    movies.push({ title, genre, releaseDate });
    renderAdminMovies();
  };
  

  document.addEventListener("DOMContentLoaded", () => {

    const registerForm = document.getElementById("registerForm");
    if (registerForm) registerForm.addEventListener("submit", handleRegistration);
  

    const loginForm = document.getElementById("loginForm");
    if (loginForm) loginForm.addEventListener("submit", handleLogin);
  

    const adminMovieForm = document.getElementById("adminMovieForm");
    if (adminMovieForm) adminMovieForm.addEventListener("submit", handleAdminMovieForm);
  

    if (document.getElementById("moviesList")) renderMovies();
    if (document.getElementById("adminMoviesList")) renderAdminMovies();
  });