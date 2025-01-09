// scroll-nav.js

window.addEventListener('scroll', function () {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
      nav.classList.add('shrink');
    } else {
      nav.classList.remove('shrink');
    }
  });

document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-items a");
    navLinks.forEach(link => {
        if (link.href === window.location.href) {
            link.classList.add("active");
        }
    });
});

// JavaScript to change logo and logo name when navbar shrinks
window.onscroll = function() {
  const nav = document.querySelector('nav');
  const logoImage = document.getElementById('logo');
  const logoName = document.querySelector('.logo-name');
  
  if (window.scrollY > 50) {  // Adjust the scroll threshold as needed
    nav.classList.add('shrink');
    logoImage.src = 'assets/white-logo.png';  // Change logo to white logo when shrunk
    logoName.src = 'assets/white-logo-name.png';  // Change logo name to white version when shrunk
  } else {
    nav.classList.remove('shrink');
    logoImage.src = 'assets/logo.png';  // Reset logo back to the original
    logoName.src = 'assets/logo-name.png';  // Reset logo name back to the original
  }
};

/* CHATBOX */
function sendMessage() {
  const input = document.getElementById('message-input');
  const message = input.value.trim();

  if (message) {
      const messagesContainer = document.getElementById('chats');

      // Create and append client message
      const clientMessageElement = document.createElement('div');
      clientMessageElement.textContent = message;
      clientMessageElement.classList.add('client-chat');
      messagesContainer.appendChild(clientMessageElement);

      input.value = ''; // Clear the input after sending
      messagesContainer.scrollTop = messagesContainer.scrollHeight; // Scroll to the bottom

      // Simulate admin response
      setTimeout(() => {
          const adminMessageElement = document.createElement('div');
          adminMessageElement.textContent = "Thank you for your message!";
          adminMessageElement.classList.add('admin-chat');
          messagesContainer.appendChild(adminMessageElement);
          messagesContainer.scrollTop = messagesContainer.scrollHeight; // Scroll to the bottom
      }, 1000); // Adjust delay as needed
  }
}

function checkEnter(event) {
  if (event.key === 'Enter') {
      sendMessage();
  }
}

function toggleChatbox() {
  const chatbox = document.getElementById('chatbox');
  chatbox.style.display = chatbox.style.display === 'none' ? 'flex' : 'none'; // Toggle visibility
}

function minimizeChatbox() {
  const chatbox = document.getElementById('chatbox');
  chatbox.style.display = 'none'; // Hide the chatbox
}

// Button

    document.getElementById("scroll-down").addEventListener("click", function() {
      const targetSection = document.getElementById("main-container");
      targetSection.scrollIntoView({ behavior: "smooth" });
    });
    