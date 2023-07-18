function showMore() {
    var moreText = document.getElementById("more");
    var buttonText = document.getElementById("read-more-btn");
  
    if (moreText.style.display === "none") {
      moreText.style.display = "block";
      buttonText.innerHTML = "Read Less";
    } else {
      moreText.style.display = "none";
      buttonText.innerHTML = "Read More";
    }
  }
  
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
  