// Handle button choices
function handleChoice(choice) {
    const homePage = document.getElementById('home');
    const wrongPage = document.getElementById('wrong');
    const finalPage = document.getElementById('final');
    const music = document.getElementById('romantic-music');
  
    homePage.classList.remove('active');
    wrongPage.classList.remove('active');
    finalPage.classList.remove('active');
  
    if (choice === 'yes') {
      music.play();
      finalPage.classList.add('active');
      createHearts();
    } else {
      wrongPage.classList.add('active');
    }
  }
  
  // Create floating hearts animation
  function createHearts() {
    const heartsContainer = document.getElementById('hearts-container');
    for (let i = 0; i < 50; i++) {
      const heart = document.createElement('div');
      heart.classList.add('heart');
      heart.style.left = Math.random() * 100 + 'vw';
      heart.style.animationDuration = 3 + Math.random() * 5 + 's';
      heartsContainer.appendChild(heart);
  
      // Remove heart after animation ends
      heart.addEventListener('animationend', () => {
        heart.remove();
      });
    }
  }
  
  // Show poem page
  function showPoemPage() {
    document.getElementById('final').classList.remove('active');
    document.getElementById('poem').classList.add('active');
  }
  
  // Show plan form page
  function showPlanPage() {
    document.getElementById('poem').classList.remove('active');
    document.getElementById('plan').classList.add('active');
  }
  
  // Handle the Plan Form submission
document.getElementById('planForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    // Get nickname: either from radio selection or custom text
    let nicknameRadio = document.querySelector('input[name="nickname"]:checked');
    let customNickname = document.getElementById('customNickname').value.trim();
    let finalNickname = customNickname !== "" ? customNickname : (nicknameRadio ? nicknameRadio.value : "Darling");
  
    // Get other form values
    let meetPlace = document.getElementById('meetPlace').value.trim() || "our secret spot";
    let meetTime = document.getElementById('meetTime').value || "a lovely time";
    let favColor = document.getElementById('favColor').value.trim() || "your favorite color";
  
    // Get selected items to carry (checkboxes)
    let carryItems = [];
    document.querySelectorAll('input[name="carry"]:checked').forEach(checkbox => carryItems.push(checkbox.value));
    let carryText = carryItems.length > 0 ? carryItems.join(", ") : "something special";
  
    // Create and display the result message
    let resultText = `
      <p>Let's meet, my <strong>${finalNickname}</strong>!<br>
      We'll meet at <strong>${meetPlace}</strong> at <strong>${meetTime}</strong>.<br>
      Your favorite color, <strong>${favColor}</strong>, will make our day even more beautiful.<br>
      And we'll bring <strong>${carryText}</strong> to celebrate our love!</p>`;
  
    document.getElementById('planResult').innerHTML = resultText;
  });