// Handle File a Claim Form Submission
document.getElementById('claim-form').addEventListener('submit', function(event) {
  event.preventDefault();
  const policyNumber = document.getElementById('policy-number').value;
  const claimDescription = document.getElementById('claim-description').value;
  // Simulate claim submission
  alert(`Claim for policy ${policyNumber} has been submitted.\nDescription: ${claimDescription}`);
  document.getElementById('claim-form').reset();
});

// Handle Track Claim Form Submission
document.getElementById('track-claim-form').addEventListener('submit', function(event) {
  event.preventDefault();
  const claimId = document.getElementById('claim-id').value;
  // Simulate tracking a claim and displaying status
  const status = "Processing"; // This can be dynamic, e.g., fetched from an API
  document.getElementById('claim-status').innerText = `Status for claim ${claimId}: ${status}.`;
});

// Handle Chatbot Interaction
const chatLog = document.getElementById('chat-log');
document.getElementById('send-message').addEventListener('click', function() {
  const userInput = document.getElementById('user-input').value;
  if (userInput) {
      chatLog.innerHTML += `<div><strong>You:</strong> ${userInput}</div>`;
      // Simulate chatbot response
      setTimeout(() => {
          const botResponse = `I'm here to help with any insurance-related questions.`;
          chatLog.innerHTML += `<div><strong>Bot:</strong> ${botResponse}</div>`;
          chatLog.scrollTop = chatLog.scrollHeight; // Auto-scroll to the bottom
      }, 1000);
      document.getElementById('user-input').value = '';
  }
});
