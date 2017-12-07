document.addEventListener("DOMContentLoaded", (event) => {

    canvas = document.querySelector("canvas");

    body = document.querySelector("body");

    body.style.backgroundColor = "#FFFAFA";

    context = canvas.getContext("2d");                          

    document.fonts.load("50px Berkshire Swash").then( (event) => {

        context.fillStyle = "#800020";
        context.font = "50px Berkshire Swash";
        context.fillText("Chaltin's Canvas Drawing", 20, 50)
        
        context.font = "16px Berkshire Swash";
        context.fillText("Press any key to 'draw' on the canvas. Different keys drae different shapes. Refresh the page to clear the canvas. Have fun!!", 20, 80)

    })

    document.addEventListener("keypress", (event) => {

        x = Math.random()*1000;
        y = Math.random()*800;
        w = Math.random()*100;
        h = Math.random()*100;
        r = Math.random()*100;

        //I originally used RGB values for my shapes. For some reason, Chrome displayed all random colors as black. I changed the random color generator to hex values.
        // r = Math.random()*255
        // g = Math.random()*255
        // b = Math.random()*255
        //context.strokeStyle = "rgb("+r+","+g+","+b+")";

        //The following random hex generator code comes from Paul Irish at https://www.paulirish.com/2009/random-hex-color-code-snippets/
        //The below hex color generator sometime generates an invalid hex code (five characters after the hashtag instead of six). I wrote a function to address that outcome. If an invalid hex code is generated, then the shape will be a fallback color. The fallback color is a light gray.
        hex = '#'+ Math.floor(Math.random()*16777215).toString(16);
        let colorTwo = () => (hex.length === 7) ? hex : "#d3d3d3";

        if (event.key.match(/[a-z]/)) {
            //Keys a through z will produce a rectangle. This is case insensitive.
            context.strokeStyle = colorTwo();
            context.strokeRect(x, y, w, h);
            console.log(event);
            console.log(`Color is ${colorTwo()}.`);
            console.log(`Coordinates are ${x}, ${y}.`);
            console.log(`Height is ${h} and width is ${w}.`);
        } else {
            //All other keys will produce a circle.
            context.strokeStyle = colorTwo();
            context.beginPath();
            context.arc(x,y,r,0,2*Math.PI);
            context.stroke();
            console.log(event);
            console.log(`Color is ${colorTwo()}.`);
            console.log(`Coordinates are ${x}, ${y}.`);
            console.log(`Radius is ${r}.`);
        }
        
    });


    
    // Code below is to create a random box based on x,y coordinates of click. I didn't like the way this looked on the screen.
    // document.addEventListener("click", (event) => {

    //     x = event.clientX;
    //     y = event.clientY;
    //     w = Math.random()*100
    //     h = Math.random()*100

    //     r = Math.random()*255
    //     g = Math.random()*255
    //     b = Math.random()*255

    //     context.strokeStyle = "rgb("+r+","+g+","+b+")";
    //     context.strokeRect(x, y, w, h);

    // })
    
});
