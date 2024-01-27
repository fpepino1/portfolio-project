
  
  document.onreadystatechange = function () {
    if (document.readyState === 'complete') {// Initialize the carousels with unique IDs
  var carouselProject001 = new bootstrap.Carousel(
    document.getElementById('carouselProject001'),
    {
      interval: 5000, // Adjust the interval as needed
    }
  );

  var carouselProject003 = new bootstrap.Carousel(
    document.getElementById('carouselProject003'),
    {
      interval: 5000, // Adjust the interval as needed
    }
  );}}