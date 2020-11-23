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
    window.location.href = "https://forms.gle/SuaPsXFjtHNv3mWKA";
  })
})
