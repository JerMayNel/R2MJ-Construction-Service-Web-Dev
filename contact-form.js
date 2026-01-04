document.getElementById("contactForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    mobile: document.getElementById("mobile").value,
    message: document.getElementById("message").value,
  };

  try {
    const response = await fetch("/.netlify/functions/submit-form", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    if (result.success) {
      alert("Message sent successfully!");
      e.target.reset();
    } else {
      alert("Failed to send message.");
    }
  } catch (err) {
    alert("Server error. Try again later.");
  }
});
