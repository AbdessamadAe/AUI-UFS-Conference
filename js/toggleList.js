var readMoreButton = document.getElementById("read-more-btn");
readMoreButton.addEventListener("click", showMore);

document.addEventListener("DOMContentLoaded", function() {
  var headers = document.querySelectorAll(".expandable-list .list-header");
  
  headers.forEach(function(header) {
    header.addEventListener("click", function() {
      this.classList.toggle("active");
      var subList = this.nextElementSibling;
      subList.style.display = subList.style.display === "none" ? "block" : "none";
    });
  });
});
  