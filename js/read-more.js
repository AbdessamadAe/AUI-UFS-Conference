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


//header in read more section
$(document).ready(function() {
  $("#list-header2").click(function() {
    const subList = $(this).next();
    const buttonText = $(this).text();
    
    if (buttonText.includes("Read More")) {
      $(this).text(buttonText.replace("Read More", "Read Less"));
      subList.show();
    } else {
      $(this).text(buttonText.replace("Read Less", "Read More"));
      subList.hide();
    }
  });
});

//header in Call For Papers page
$(document).ready(function() {
  const subList = $("#list-strands").next();
  subList.hide();

  $("#list-strands").click(function() {
    const buttonText = $(this).text();
    
    if (buttonText.includes("Read More")) {
      subList.show();
      $(this).text(buttonText.replace("Read More", "Read Less"));
    } else {
      $(this).text(buttonText.replace("Read Less", "Read More"));
      subList.hide();
    }
  });
});

//For arabic list
$(document).ready(function() {
  const subList = $("#list-header-ar").next();
  subList.hide();

  $("#list-header-ar").click(function() {
    const buttonText = $(this).text();
    
    if (buttonText.includes("إقرأ المزيد")) {
      subList.show();
      $(this).text(buttonText.replace("إقرأ المزيد", "إقرأ أقل"));
    } else {
      $(this).text(buttonText.replace("إقرأ أقل", "إقرأ المزيد"));
      subList.hide();
    }
  });
});

