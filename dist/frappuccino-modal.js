var activeModal, activeAnimation
var modal = document.querySelector(".fm-modal");
var closeButton = document.querySelector(".fm-modal-close-btn");
var isModalOpen = false

// Animations
var fmPoofAnimation = "fma-poof"
var fmSlideInUpAnimation = "fma-slideInUp"

var fmaAnimations = [fmPoofAnimation, fmSlideInUpAnimation]

// initization
addFMEventListerners()


function addFMEventListerners() {
  document.querySelectorAll(".fm-modal-trigger").forEach(function(el) {
    el.addEventListener("click", function(e) {
      toggleModal(e);
    });
  })

  document.querySelectorAll(".fm-modal-close-btn").forEach(function(el) {
    el.addEventListener("click", function(e) {
      toggleModal(e);
    })
  })

  // event listeners
  window.addEventListener("click", windowOnClick);
}


function toggleModal(e) {
  let target = e.target;

  if (isModalOpen == true) {
    console.log("close modal", activeModal)
    activeModal.classList.remove(activeAnimation)
    isModalOpen = false
    toogleModalVisiability()
    console.log("removed animation", activeModal);
  } else {

    let id = target.getAttribute("data-fm-target").replace("#", "");
    activeModal = document.getElementById(id);

    console.log("open modal", activeModal);
    getActiveAnimationClass()
    activeModal.classList.add(activeAnimation)
    console.log("added animation", activeModal);
    isModalOpen = true
    toogleModalVisiability()
  }

}


// get active Animation
function getActiveAnimationClass() {
  let classList = activeModal.classList
  fmaAnimations.forEach(function(fma) {
    if (classList.contains(fma)) {
      activeAnimation = fma
    }
  })
}


// toogle modal visiability
function toogleModalVisiability() {
  if (isModalOpen == true) {
    activeModal.style.opacity = 1
    activeModal.style.visibility = "visible"
  } else {
    activeModal.style.opacity = 0
    activeModal.style.visibility = "hidden"
  }
}


// dimisses modal if user touches out of bounds
function windowOnClick(e) {
  if (e.target === activeModal) {
    toggleModal(e);
  }
}
