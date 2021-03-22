$(document).ready(function () {
  // jQuery methods go here...
  // document.getElementById("mainfloormap").style.display = "block";
  // document.getElementById("groundfloormap").style.display = "none";
  // document.getElementById("concoursemap").style.display = "none";
  $(".mainlink").click(function (e) {
    e.preventDefault();
    $(".main").load("./html/main.html");
  });

  $(".mainimg").hover(
    function () {
      $(".maintext").css("visibility", "visible");
      $(".maintext").css("color", "#80b4de");
      $(".maintext").text("MAIN");
    },
    function () {
      $(".maintext").css("visibility", "hidden");
    }
  );

  $(".concourselink").click(function (e) {
    e.preventDefault();

    $(".main").load("./html/concourse.html");
  });

  $(".concourseimg").hover(
    function () {
      $(".maintext").css("visibility", "visible");
      $(".maintext").css("color", "#cad08f");
      $(".maintext").text("CONCOURSE");
    },
    function () {
      $(".maintext").css("visibility", "hidden");
    }
  );

  $(".groundlink").click(function (e) {
    e.preventDefault();
    $(".main").load("./html/ground.html");
  });

  $(".groundimg").hover(
    function () {
      $(".maintext").css("visibility", "visible");
      $(".maintext").css("color", "#fecc83");
      $(".maintext").text("GROUND");
    },
    function () {
      $(".maintext").css("visibility", "hidden");
    }
  );
  console.log("home loaded");
});

function loadDoc(el, url) {
  //runs PHP script to access database and display shelves
  var xhttp = new XMLHttpRequest();
  console.log(el);
  xhttp.open("GET", url, true);
  xhttp.onload = function () {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById(el).innerHTML = this.responseText;
    }
  };
  xhttp.send();
}
