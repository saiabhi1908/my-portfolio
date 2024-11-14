// Initialize Typed.js for typing effect
document.addEventListener("DOMContentLoaded", () => {
    new Typed(".role", {
        strings: ["UI/UX Developer", "Web Developer", "Data Scientist"],
        typeSpeed: 100, // speed of typing (milliseconds)
        backSpeed: 50, // speed of erasing (milliseconds)
        backDelay: 1000, // delay before erasing
        startDelay: 500, // delay before typing starts
        loop: true, // loop the animation
    });
});

// Handle contact form submission
// document.getElementById("contactForm").addEventListener("submit", async function (event) {
    // event.preventDefault(); // Prevent default form submission

    // const formData = new FormData(this); // Get form data
   // const response = await fetch('/send-email', {
       // method: 'POST',
       // headers: { 'Content-Type': 'application/json' },
       // body: JSON.stringify({
           // name: formData.get('name'),
           // email: formData.get('email'),
            // subject: formData.get('subject'),
            // message: formData.get('message')
        // })
   // });

    // Handle response
    // if (response.ok) {
        // alert("Message sent successfully!");
   // } else {
        // alert("Failed to send message.");
    // }
// });
