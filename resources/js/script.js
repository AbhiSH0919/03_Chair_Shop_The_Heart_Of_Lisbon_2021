"use strict";

// ===========================================================================
/**
 * ===============PRICING-CARD-HOVER-EFFECT===============
 */
const itemPricingCards = document.querySelectorAll(".item-card");
itemPricingCards.forEach((itemCard) => {
	// =====HOVER-ON-SHOW-EFFECT=====
	itemCard.addEventListener("mouseover", function () {
		itemPricingCards.forEach((itemCard) => {
			itemCard.classList.add("hover-effect");
		});

		this.classList.remove("hover-effect"); // ===HOVERED-CARD-REMOVE-EFFECT===
	});

	// =====HOVER-NONE-REMOVE-EFFECT=====
	itemCard.addEventListener("mouseout", function () {
		itemPricingCards.forEach((itemCard) => {
			itemCard.classList.remove("hover-effect");
		});
	});
});

// ===========================================================================
/**
 * ===============TABLE VIEW===============
 */
const seeTable = document.querySelector(".see-table");

seeTable.addEventListener("click", function (e) {
	e.preventDefault();
	seeTable.nextElementSibling.classList.toggle("show-table");
});

// ===========================================================================
/**
 * ===============ACCORDION-LIST-OPEN-&-CLOSE===============
 */
const accordion = document.querySelector(".accordion");
accordion.addEventListener("click", function (e) {
	const acList = e.target.closest(".accordion-list");
	if (!acList) return;

	if (
		acList.classList.contains("activeList") &&
		e.target.closest(".question-box")
	) {
		acList.classList.remove("activeList");
	} else {
		[...this.children].forEach((list) => {
			list.classList.remove("activeList");
		});
		acList.classList.add("activeList");
	}
});

// ===========================================================================
// ===============TESTIMONIAL-SLIDE===============
const testimonialContentBox = document.querySelector(".testimonial-box");
const testimonial = document.querySelector(".testimonial");
// ===============CREATE-TESTIMONIAL-CLONE-&-ADD===============
for (let i = 0; i < 3; i++) {
	let testimonialClone = testimonial.cloneNode(true);
	testimonialContentBox.appendChild(testimonialClone);
}

const testimonials = document.querySelectorAll(".testimonial");
const leftBtn = document.querySelector(".btn-left");
const rightBtn = document.querySelector(".btn-right");
const dots = document.querySelectorAll(".dot");
let activeSlide = 0;

/**
 * ===============SLIDE-TRANSFORM-FUNCTION===============
 */
const slideShow = () => {
	if (activeSlide < 0) {
		activeSlide = testimonials.length - 1;
	} else if (activeSlide > testimonials.length - 1) {
		activeSlide = 0;
	}

	testimonials.forEach((slide) => {
		slide.style.transform = `translateX(-${100 * activeSlide}%)`;
	});

	dots.forEach((dot) => {
		dot.classList.remove("dot-fill");
		dots[activeSlide].classList.add("dot-fill");
	});
};

// ===============SLIDE-EVENT-HANDLING===============
leftBtn.addEventListener("click", function () {
	activeSlide--;
	slideShow();
});

rightBtn.addEventListener("click", function () {
	activeSlide++;
	slideShow();
});

dots.forEach((dot, index) => {
	dot.addEventListener("click", function () {
		activeSlide = index;
		slideShow();
	});
});

setInterval(() => {
	activeSlide++;
	if (activeSlide > testimonial.length - 1) {
		activeSlide = 0;
	}
	slideShow();
}, 15000);
