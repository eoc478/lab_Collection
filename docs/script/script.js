function changeBG() {
  // const title = document.querySelector('h1');

  // title.style.opacity = "1";
  
  // document.body.style.backgroundColor = "rgba(170, 201, 237, 1)";

  // title.style.animation = "none";

  const video = document.getElementById("videoBG");
  const title = document.querySelector("h1");

  // Make sure video starts and fades in
  video.play();
  video.style.opacity = "1";

  // Stop the blinking and make title visible
  title.style.color = "red";
  title.style.animation = "none";
  title.style.opacity = "1";

}

// function playBGVideo() {
//   const video = document.getElementById("videoBG");
//   const title = document.querySelector("h1.title");

//   // Make sure video starts and fades in
//   video.play();
//   video.style.opacity = "1";

//   // Stop the blinking and make title visible
//   title.style.animation = "none";
//   title.style.opacity = "1";
// }

