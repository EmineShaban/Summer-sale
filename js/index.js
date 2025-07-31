var action = "click";
var speed = "500";

$(document).ready(function () {
    $('li.usp:first-of-type').next()
        .slideToggle(speed)
    // Question handler
    $('li.usp').on(action, function () {
        // Get next element
        $(this).next()

            .slideToggle(speed)
            // Select all other answers
            .siblings('li.a')
            .slideUp();
    });
});




const target = document.querySelector("#value");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        console.log("Div is in the viewport!");
        animateValue(obj, 0, 88, 1000);
        animateValue(obj2, 0, 82, 1000);
        animateValue(obj3, 0, 11500, 1000);
      } else {
        console.log("Div is out of the viewport.");
      }
    });
  },
  {
    threshold: 0.1, // Trigger when 10% of the div is visible
  }
);

observer.observe(target);

function animateValue(obj, start, end, duration) {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    obj.innerHTML = Math.floor(progress * (end - start) + start);
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}

const obj = document.getElementById("value");
const obj2 = document.getElementById("value2");
const obj3 = document.getElementById("value3");





// INGREDIENTS

$(document).on('click', '.ingredient', function (event) {
    var $name = $(this);
    var $details = $name.next();
    $($details).toggleClass('is-visible');
});

$(document).click(function (e) {
    if (($(e.target).is('.ingr-popup')) || $(e.target).is('.close')) {
        $(".ingr-popup").removeClass('is-visible');
    }
});