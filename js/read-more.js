  $(document).ready(function() {
    $("#read-more-btn").click(function() {
      var elem = $("#read-more-btn").text();
      if (elem == "Read More") {
        //Stuff to do when btn is in the read more state
        $("#read-more-btn").text("Read Less");
        $("#more").slideDown();
      } else {
        //Stuff to do when btn is in the read less state
        $("#read-more-btn").text("Read More");
        $("#more").slideUp();
      }
    });
  });

  function toggleList(element) {
    const subList = element.nextElementSibling;
    subList.style.display = subList.style.display === 'none' ? 'block' : 'none';
  }  