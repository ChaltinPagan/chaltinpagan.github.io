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

    //All shapes are line drawings. They are not filled with color.
    //Works for most keys. Keys that don't produce a shape include "Shift", "Ctrl", and "Alt." 
    document.addEventListener("keypress", (event) => {

        x = Math.random()*1000;
        y = Math.random()*800;
        w = Math.random()*100;
        h = Math.random()*100;
        r = Math.random()*100;
        xTwo = Math.random()*100; //Use xPlus for x in lineTo function for triangles.
        yTwo = Math.random()*100; //Use yPlus for y in lineTo function for triangles.
        xThree = Math.random()*100; //Use xPlus for x in lineTo function for triangles.
        yThree = Math.random()*100; //Use yPlus for y in lineTo function for triangles.

        //I originally used RGB values for my shapes. For some reason, Chrome displayed all random colors as black. I changed the random color generator to hex values.
        // r = Math.random()*255
        // g = Math.random()*255
        // b = Math.random()*255
        //context.strokeStyle = "rgb("+r+","+g+","+b+")";

        //The following random hex generator code comes from Paul Irish at https://www.paulirish.com/2009/random-hex-color-code-snippets/
        //The below hex color generator sometime generates an invalid hex code (five characters after the hashtag instead of six). I wrote a function to address that outcome. If an invalid hex code is generated, then the shape will be a fallback color. The fallback color is a light gray.
        hex = '#'+ Math.floor(Math.random()*16777215).toString(16);
        let colorTwo = () => (hex.length === 7) ? hex : "#d3d3d3";

        if (event.key.match(/[a-z]/) && event.key.length === 1) {
            //All letter keys (a-z) will produce a rectangle. This is case insensitive.
            context.strokeStyle = colorTwo();
            context.strokeRect(x, y, w, h);
            console.log(event);
            console.log(`Color is ${colorTwo()}.`);
            console.log(`Coordinates are ${x}, ${y}.`);
            console.log(`Height is ${h} and width is ${w}.`);
        } else if (event.key.match(/[0-9]/)){
            //All number keys (0-9) will produce a circle.
            context.strokeStyle = colorTwo();
            context.beginPath();
            context.arc(x,y,r,0,2*Math.PI);
            context.stroke();
        } else {
            // All other keys will produce a triangle.
            context.strokeStyle = colorTwo();
            context.strokeStyle = colorTwo();
            context.beginPath();
            context.moveTo(x, y);
            //Add xTwo, yTwo, xThree, yThree to x and y to draw the triangle on different parts of the canvas. Otherwise, triangles will be concentrated near (0,0). 
            context.lineTo(x+xTwo, y+yTwo); 
            context.lineTo(x+xThree, y+yThree); 
            context.closePath(); 
            context.stroke(); 
            console.log(event);
            console.log(`Color is ${colorTwo()}.`);
            console.log(`Strating coordinates are ${x}, ${y}.`);
            console.log(`Second stroke moves to ${xTwo}, ${yTwo}.`);
            console.log(`Thrid stroke moves to ${xThree}, ${yThree}.`);
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
