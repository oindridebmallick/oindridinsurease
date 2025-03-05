document.addEventListener("DOMContentLoaded", function () {
    let selectedRating = 0;
    let reviews = JSON.parse(localStorage.getItem("reviews")) || [];

    // ⭐ Star Rating Click Event
    document.querySelectorAll(".star-rating span").forEach(star => {
        star.addEventListener("click", function () {
            selectedRating = parseInt(this.getAttribute("data-value"));
            highlightStars(selectedRating);
        });
    });

    // 📝 Submit Review
    document.getElementById("submit-review").addEventListener("click", function () {
        let policy = document.getElementById("policy-select").value;
        let reviewText = document.getElementById("review-text").value.trim();

        if (selectedRating === 0 || reviewText === "") {
            alert("Please provide a rating and review.");
            return;
        }

        let review = {
            policy,
            rating: selectedRating,
            text: reviewText,
            date: new Date().toLocaleString()
        };

        reviews.push(review);
        localStorage.setItem("reviews", JSON.stringify(reviews));

        // Reset input fields after submission
        document.getElementById("review-text").value = "";
        selectedRating = 0;
        highlightStars(0);

        displayReviews();
    });

    // ✨ Highlight Selected Stars
    function highlightStars(rating) {
        document.querySelectorAll(".star-rating span").forEach(star => {
            let value = parseInt(star.getAttribute("data-value"));
            star.style.color = value <= rating ? "yellow" : "white";
        });
    }

    // 📢 Display Reviews
    function displayReviews(filter = "all") {
        let reviewContainer = document.getElementById("reviews-list");
        reviewContainer.innerHTML = "";

        let filteredReviews = filter === "all" ? reviews : reviews.filter(r => r.rating == filter);

        if (filteredReviews.length === 0) {
            reviewContainer.innerHTML = "<p>No reviews yet.</p>";
            return;
        }

        filteredReviews.forEach(r => {
            let stars = "⭐".repeat(isNaN(parseInt(r.rating)) ? 0 : parseInt(r.rating));

            let reviewElement = document.createElement("div");
            reviewElement.classList.add("review-item");
            reviewElement.innerHTML = `
                <h3>${r.policy} - ${stars}</h3>
                <p>${r.text}</p>
                <small>${r.date}</small>
            `;
            reviewContainer.appendChild(reviewElement);
        });

        console.log("Loaded Reviews:", reviews);
    }

    // 🔍 Filter Reviews by Rating
    document.getElementById("filter-rating").addEventListener("change", function () {
        displayReviews(this.value);
    });

    displayReviews();
});
