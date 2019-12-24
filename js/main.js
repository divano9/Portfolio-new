



//responsive nav

let navClass = document.getElementById('main-nav').className;
const nav = document.getElementById('main-nav');



/* let screenW = document.documentElement.clientWidth;


if (screenW > 992) {
  nav.classList.remove("nav-top")
  nav.classList.remove("nav-side-mob")
  nav.classList.add("nav-side")
} else if (screenW > 600) {
  nav.classList.remove("nav-side")
  nav.classList.remove("nav-side-mob")
  nav.classList.add("nav-top");
} else {
  nav.classList.remove("nav-side")
  nav.classList.remove("nav-top")
  nav.classList.add("nav-side-mob")
}
 */





/* function emptyClass(id) {
  document.getElementById(`${id}`).className = " ";

}

function hideArrows() {
  document.getElementById("up").style.display = "none";
  document.getElementById("down").style.display = "none";
}

function changeContent(id, content) {
  document.getElementById(`${id}`).innerHTML = `${content}`;
}

if (nav.classList.contains("nav-top")) {
  emptyClass("main-menu");
  emptyClass("social");
  emptyClass("down");

  hideArrows();

  changeContent("nav-home", "HOME");
  changeContent("nav-about-me", "ABOUT");
  changeContent("nav-skills", "SKILLS");
  changeContent("nav-projects", "PROJECTS");
  changeContent("nav-contact", "CONTACT");
  
}

if (nav.classList.contains("nav-side-mob")) {
  emptyClass("main-menu");
  emptyClass("social");
  emptyClass("down");

  changeContent("up", "<i class='fas fa-long-arrow-alt-up'></i>");
  changeContent("down", '<i class="fas fa-long-arrow-alt-down"></i>');

  changeContent("nav-home", "HOME");
  changeContent("nav-about-me", "ABOUT");
  changeContent("nav-skills", "SKILLS");
  changeContent("nav-projects", "PROJECTS");
  changeContent("nav-contact", "CONTACT");
  
} */



  const navMob = document.getElementById("mob-nav");


  // Look for .hamburger
  var hamburger = document.querySelector(".hamburger");
  // On click
  hamburger.addEventListener("click", function() {
    // Toggle class "is-active"
    hamburger.classList.toggle("is-active");
    // Do something else, like open/close menu
    if(hamburger.classList.contains("is-active")){
      navMob.style.display = "block";
      console.log("active")
      document.body.classList.add("lockScroll");
    }else{
      navMob.style.display = "none"
      console.log("not")
      document.body.classList.remove("lockScroll");
    }

   
  });


  if(hamburger.classList.contains("is-active")){
    document.getElementsByClassName("nav-side-mob").style.display = "block";
  }

  

  

//copy email to clipboard

const copyBtn = document.getElementById("copy-btn");

function copyToClip(event) {
  event.preventDefault()
  var copyText = document.getElementById("myEmail");
  var textArea = document.createElement("textarea");
  textArea.value = copyText.textContent;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("Copy");
  textArea.remove();
  copyBtn.innerHTML = "E-MAIL COPIED"
  setTimeout(revertTxt, 2000)
}

function revertTxt(){
  copyBtn.innerHTML = "COPY E-MAIL"
}

  
  
  

  



let sw = document.getElementById("sw");

const start = document.getElementsByClassName("start");


// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");
var btnT = document.getElementById("myBtnT");
var btnM = document.getElementById("myBtnM");

var btn2 = document.getElementById("myBtn2");
var btnT2 = document.getElementById("myBtnT2");
var btnM2 = document.getElementById("myBtnM2");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function () {
  modal.style.display = "block";
  sw.classList.add("starwars");
  btn.style.display = "none";
  btn2.style.display = "inline-block";
}

btnT.onclick = function () {
  modal.style.display = "block";
  sw.classList.add("starwars");
  btnT.style.display = "none";
  btnT2.style.display = "inline-block";
}

btnM.onclick = function () {
  modal.style.display = "block";
  sw.classList.add("starwars");
  btnM.style.display = "none";
  btnM2.style.display = "inline-block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
  location.reload()
  btn2.style.display = "none";
  btn2.style.display = "inline-block";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    location.reload()
    btn2.style.display = "none";
    btn2.style.display = "inline-block";
  }
}



//not star wars crawling text

StarWars = (function () {

  /* 
   * Constructor
   */
  function StarWars(args) {
    // Context wrapper
    this.el = $(args.el);

    // Audio to play the opening crawl
    this.audio = this.el.find('audio').get(0);


    // Start the animation
    this.start = this.el.find('.start');


    // The animation wrapper
    this.animation = this.el.find('.animation');

    // Remove animation and shows the start screen
    this.reset();

    // Start the animation on click
    this.start.bind('click', $.proxy(function () {
      this.start.hide();
      this.audio.play();
      this.el.append(this.animation);


    }, this));


    // Reset the animation and shows the start screen
    $(this.audio).bind('ended', $.proxy(function () {
      this.audio.currentTime = 0;
      this.reset();

    }, this));
  }

  /*
   * Resets the animation and shows the start screen.
   */
  StarWars.prototype.reset = function () {
    this.start.show();
    this.cloned = this.animation.clone(true);
    this.animation.remove();
    this.animation = this.cloned;
  };

  return StarWars;
})();

new StarWars({
  el: '.starwars'
});
