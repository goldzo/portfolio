document.addEventListener("DOMContentLoaded", function() {
    document.addEventListener("keydown", function() {
        var audio = document.getElementById("backgroundMusic");
        audio.play();
        document.getElementById("container").style.display = "block"; // Show content
        document.getElementById("startMessage").style.display = "none"; // Hide start message
    });
});

const joke = document.getElementById("joke");
const punchline = document.getElementById("punchline");

function getJoke() {
    axios.get("https://official-joke-api.appspot.com/jokes/random", {
        headers: {
            Accept: "application/json",
        },
    })
    .then((res) => {
        joke.innerText = res.data.setup;
        punchline.innerText = res.data.punchline;
    })
    .catch((err) => {
        console.log(err);
    });
}

function revealSetup() {
    punchline.innerText = joke.innerText; // Display the setup
    punchline.classList.add("clicked"); // Change punchline color
}