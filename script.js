// THE 32ND FLOOR — SCROLL REVEAL

const revealElements = document.querySelectorAll(
    '.introduction, .letter-section, .memories, .wishes'
);

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            revealObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15
});

revealElements.forEach((element) => {
    element.classList.add('reveal');
    revealObserver.observe(element);
});
// ENVELOPE OPENING INTERACTION

const envelopeScreen = document.getElementById('envelopeScreen');
const openEnvelopeBtn = document.getElementById('openEnvelope');
const backgroundMusic = document.getElementById('backgroundMusic');
backgroundMusic.volume = 0.25;

openEnvelopeBtn.addEventListener('click', () => {

    // Prevent the button from being clicked repeatedly
    openEnvelopeBtn.disabled = true;

    // Start the opening animation
    envelopeScreen.classList.add('opening');
    // Start the background music
backgroundMusic.play().catch(error => {
    console.log("Music could not start:", error);
});

    // Fade away the envelope screen after the letter slides out
    setTimeout(() => {
        envelopeScreen.classList.add('closed');
    }, 1800);

});
// MUSIC MUTE / UNMUTE CONTROL

const musicToggle = document.getElementById('musicToggle');

musicToggle.addEventListener('click', () => {

    backgroundMusic.muted = !backgroundMusic.muted;

    if (backgroundMusic.muted) {
        musicToggle.textContent = '🔇';
        musicToggle.setAttribute('aria-label', 'Unmute background music');
    } else {
        musicToggle.textContent = '♫';
        musicToggle.setAttribute('aria-label', 'Mute background music');
    }

});

// THE RECIPE OF US — FIRST CHALLENGE

const startRecipeBtn = document.getElementById('startRecipe');
const recipeChallenge = document.getElementById('recipeChallenge');

startRecipeBtn.addEventListener('click', () => {

    recipeChallenge.classList.add('active');

    startRecipeBtn.textContent = 'THE FIRST INGREDIENT ♡';

    recipeChallenge.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
    });

});

// FIRST CHALLENGE — ANSWER CHECK


// FIRST CHALLENGE — ANSWER CHECK

const recipeOptions = document.querySelectorAll('.recipe-option');
const recipeFeedback = document.getElementById('recipeFeedback');
const secondChallenge = document.getElementById('secondChallenge');

recipeOptions.forEach((option) => {

    option.addEventListener('click', () => {

        if (option.dataset.answer === 'correct') {

            recipeFeedback.textContent =
                "Correct! 😂 The Chief Mischief Officer strikes again.";

            recipeOptions.forEach((button) => {
                button.disabled = true;
            });

            setTimeout(() => {
                secondChallenge.classList.add('active');

                secondChallenge.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center'
                });
            }, 1200);

        } else {

            recipeFeedback.textContent =
                "Haha! Think again. Who usually takes over the kitchen?";

        }

    });

});

// SECOND CHALLENGE — FINAL REVEAL

const secondOptions = document.querySelectorAll('.recipe-second-option');
const secondFeedback = document.getElementById('secondFeedback');
const finalRecipeCard = document.getElementById('finalRecipeCard');

secondOptions.forEach((option) => {

    option.addEventListener('click', () => {

        if (option.dataset.answer === 'correct') {

            secondFeedback.textContent =
                "Exactly! That's the secret ingredient. ❤️";

            secondOptions.forEach((button) => {
                button.disabled = true;
            });

            setTimeout(() => {

                finalRecipeCard.classList.add('active');

                finalRecipeCard.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center'
                });

            }, 1200);

        } else {

            secondFeedback.textContent =
                "The food is lovely, but think about what happens around it. 😂";

        }

    });

});
