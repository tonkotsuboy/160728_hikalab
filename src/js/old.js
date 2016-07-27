var filePath = "";

if (window.innerWidth >= 1280)
  filePath = "large.jpg";
else if (window.innerWidth >= 640
  && window.devicePixelRatio >= 2)
  filePath = "medium.jpg";
else
  filePath = "small.jpg";

$("#mainVisual")
  .html('<img src="images/' + filePath + '" />')
