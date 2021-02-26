
    var link = document.querySelector(".search-hotel-btn");
    var hotelform = document.querySelector(".search-hotel-form");
    var searchbtn = document.querySelector(".search-btn");
    var checkin = hotelform.querySelector("[name=checkin-date]");
    var checkout = hotelform.querySelector("[name=checkout-date]");
    var older = hotelform.querySelector("[name=older-cliente]");
    var child = hotelform.querySelector("[name=child-client]");
    
    link.addEventListener("click", function(event) {event.preventDefault();
      hotelform.classList.toggle("search-hotel-form-hidden");
  	  hotelform.classList.remove("form-error");});

    link.addEventListener("click", function(event) {event.preventDefault();
      hotelform.classList.toggle("hotelform-animation");
      searchbtn.classList.toggle("search-btn-animation");});

    hotelform.addEventListener("submit", function(event) {if (!checkin.value||!checkout.value||!older.value){event.preventDefault();
      hotelform.classList.add("form-error")} 
  	  else {hotelform.classList.remove("form-error");
  	  localStorage.setItem("older", older.value);
  	  localStorage.setItem("child", child.value)};});

