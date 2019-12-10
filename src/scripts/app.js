$(document).ready(function(){
  //Redirect to corresponding pages on click of nav li.
  $("nav li").each(function(index){
    $(this).click(function(){
      if ($(this).text() === "HOME") {
        window.location.href = "index.html";
      } else {
        window.location.href = $(this).text().toLowerCase() + ".html";
      }
    })
  })

  $('#cta').click(function(){
    window.location.href = "programs.html";
  })

  $('#register').click(function(){
    window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSfcp8KsHaUb6p4-MUahGbk9MK_QA7LdIHmE6_VEg29pzfYA9A/viewform?usp=sf_link";
  })
})
