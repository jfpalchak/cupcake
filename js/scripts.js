// Load resources
window.onload = function () {
    // Random Number Generator, returns integer between 0 - 255
    function getRandomInt() {
        min = Math.ceil(0);
        max = Math.floor(256);
        return Math.floor(Math.random() * (max - min) + min);
    }
    // Concatenate 3 random integers into a random rgb color, 
    // return as string
    function rgbRandom() {
        const color = "rgb(" + getRandomInt() + ", " + getRandomInt() + ", " + getRandomInt() + ")";
        return color;
    }

    // create single function for all event handlers on body of HTML
    function onBody() {
        // Create event handler for mouseover event on body of HTML,
        // updating body's background color with random rgb values
        const body = document.body;
        body.onmouseover = function () {
            body.style.backgroundColor = rgbRandom();
        }

        // Create event handler for mouse click event on body of HTML,
        // scrolling page down the y-axis
        body.onclick = function () {
            window.scrollTo({
                top: 500,
                left: 0,
                behavior: "smooth",
            });
        }
    }

    // create single function for all event handlers on text of HTML
    function onText() {
        // create array of all elements with class flashy
        const body = document.body;
        const classList = body.getElementsByClassName("flashy");
        // for each item in this list, create an event handler for a 
        // mouseover event on any element with class flashy, 
        // changing text color to random rgb
        for (let step = 0; step < classList.length; step++) {
            classList[step].onmouseover = function () {
                classList[step].style.color = rgbRandom();
            }
        }
    }

    // call all event handler functions
    onBody();
    onText();

}