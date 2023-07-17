//jquery practice
moviesList = [];

$("#movieForm").on("submit", function(evt) {
   evt.preventDefault();
   console.log(evt);
   const movieValue = $("input[name='title']").val();
   const ratingValue = $("input[name='rating']").val();

   appendMovie(movieValue, ratingValue);
})

function appendMovie(movie, rating){
  const newRow = $("<tr>");
  const movieCell = $("<td>").text(movie);
  const ratingCell = $("<td>").text(rating);
  const button = $('<button>');
  button.text('x');
  button.on('click', function() {
   const parentElement = $(this).parent();
   parentElement.remove();
 });

  newRow.append(movieCell);
  newRow.append(ratingCell);
  newRow.append(button);

  $("table").append(newRow);
}



