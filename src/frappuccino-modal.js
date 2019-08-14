var activeModal
var modal = document.querySelector(".fm-modal");
var closeButton = document.querySelector(".fm-modal-close-btn");
var isModalOpen = false

// init
addEventListerners();

function addEventListerners() {
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
  
  console.log("isModalOpen", isModalOpen)
  if (isModalOpen == true) {
     activeModal.classList.toggle("show-modal");
     isModalOpen = false 
    console.log("close modal", modal);
  } else {
    let id = target.getAttribute("data-fm-target").replace("#", "");
    let modal = document.getElementById(id);
    modal.classList.toggle("show-modal");
    console.log("open modal", modal);
    activeModal = modal
    isModalOpen = true
  }
 
}

// dimisses modal if user touches out of bounds
function windowOnClick(e) {
  if (e.target === activeModal) {
    toggleModal(e);
  }
}
