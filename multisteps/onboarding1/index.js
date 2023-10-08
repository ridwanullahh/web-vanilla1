const steps = document.querySelectorAll('.step');
let currentStep = 0;
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

function updateContent() {
  steps.forEach((step, index) => {
    if (index === currentStep) {
      step.style.display = "block";
    } else {
      step.style.display = "none";
    }
  });

  if (currentStep === 0) {
    prevBtn.style.display = "none";
  } else {
    prevBtn.style.display = "block";
  }

  if (currentStep === steps.length - 1) {
    nextBtn.textContent = "Finish";
  } else {
    nextBtn.textContent = "Learn More";
  }
}

prevBtn.addEventListener("click", () => {
  if (currentStep > 0) {
    currentStep--;
    updateContent();
  }
});

nextBtn.addEventListener("click", () => {
  if (currentStep < steps.length - 1) {
    currentStep++;
    updateContent();
  } else {
    alert("Onboarding completed!");
  }
});

updateContent();

