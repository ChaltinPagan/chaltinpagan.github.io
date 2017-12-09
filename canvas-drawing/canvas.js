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
        context.fillText("Press any key to 'draw' on the canvas. Different keys draw different shapes. Refresh the page to clear the canvas. Have fun!!", 20, 80)
    });

    //All shapes are line drawings. They are not filled with color.
    //Originally, I used a keypress event listener. I changed this to a keydown event listener because it will fire an event for keys that produce a charcter value and for keys that don't. Now, Shift, Ctrl, and Alt keys will now produce a shape on the canvas and the web page will be compatible with the Chrome browser.
    //Using keydown instead of keypress does affect the capital letter drawings, which are lines. Since the Shift key is pressed to create the capital letter, a triangle will be drawn first and a line will be drawn once a letter key is pressed. If the Shift key held down while multiple letters are pressed, only one triangle is drawn, which is produced upon the initial press of the Shift key.
    document.addEventListener("keydown", (event) => {

        //Shape coordinates.
        x = Math.random()*900;
        y = Math.random()*700 + 150; //I added 150 to the y-coordinate so shapes won't obstruct the fillText() at the top of the page.
        let yCoord = () => (y <= 675) ? y : 675; //I wrote this function for the y-coordinate to compensate for the additional 150px added to the original y variable. This way, a shape will not be drawn outside the visible area.

        //For width, height and radius, I wrote functions in case a randomly generated dimension is too small to be seen with the naked eye. 
        w = Math.random()*100;
        let width = () => (w < 10 ? 10 : w);
        h = Math.random()*100;
        let height = () => (h < 10 ? 10 : h);
        r = Math.random()*100;
        let circleR = () => (r < 10 ? 10 : r); 

        //For the circles, I created additional variables for the x-,y-coordinates of the triangles. Without these, the triangles will be concentrated near (0,0).
        xTwo = x + Math.random()*100; //The x-coordinate of the second lineTo() of the triangle.
        yTwo = yCoord() + Math.random()*100 + 5; //The y-coordinate of the second lineTo() of the triangle.
        xThree = x + Math.random()*100; //The x-coordinate of the thrid lineTo() of the triangle.
        yThree = yCoord() + Math.random()*100 + 5; //The y-coordinate of the third lineTo() of the triangle.

        //Capital letters draw lines. This will calculate the length of the line.
        sqrt = Math.sqrt(Math.pow(xTwo - x, 2) + Math.pow(yTwo - y, 2)); 

        //I originally used RGB values for my shapes. For some reason, Chrome displayed all the random colors as black. I changed the random color generator to hex values.
        // r = Math.random()*255
        // g = Math.random()*255
        // b = Math.random()*255
        //context.strokeStyle = "rgb("+r+","+g+","+b+")";

        //The following random hex generator code comes from Paul Irish at https://www.paulirish.com/2009/random-hex-color-code-snippets/
        //The below hex color generator sometimes generates an invalid hex code (five characters after the hashtag instead of six). I wrote a function to address that outcome. If an invalid hex code is generated, then the shape will be a fallback color. The fallback color is a light gray.
        hex = '#'+ Math.floor(Math.random()*16777215).toString(16);
        let colorTwo = () => (hex.length === 7) ? hex : "#d3d3d3";

        //Start if else statement for keydown event.
        if (event.key.match(/[a-z]/) && event.key.length === 1) {
            //All lowercase letter keys will produce a quadrilateral. I added a length boolean because I wanted to limit quadrilaterals to single-letter keypress events. Keys such as "Enter" and "Backspace" will produce a triangle.
            context.strokeStyle = colorTwo();
            context.strokeRect(x, yCoord(), width(), height());
            console.log(`Lowercase ${event.key} draws a rectangle.\nColor is ${colorTwo()}.\nCoordinates are ${x}, ${yCoord()}.\nHeight is ${height()} and width is ${width()}.`);
        } else if (event.shiftKey && event.key.match(/[A-Z]/) && event.key.length === 1) {
            //Capital letters will produce a line.
            //Since I'm using keydown instead of keypress event listener, I now have to test for a Shift key event.
            //Using keydown instead of keypress event listener means a triangle will be produced in addition to a line. Keys other than letters and numbers will draw triangles. See last else if statement.
            context.strokeStyle = colorTwo();
            context.beginPath();
            context.moveTo(x, yCoord());
            context.lineTo(xTwo, yTwo); 
            context.stroke(); 
            console.log(`Uppercase ${event.key} draws a line.\nColor is ${colorTwo()}.\nStarting coordinates are ${x}, ${yCoord()}.\nEnding coordinates are ${xTwo}, ${yTwo}.\nLine length is ${sqrt}.`);
        } else if (event.key.match(/[0-9]/)){
            //All number keys (0-9) will produce a circle.
            context.strokeStyle = colorTwo();
            context.beginPath();
            context.arc(x,yCoord(),circleR(),0,2*Math.PI);
            context.stroke();
            console.log(`${event.key} draws a circle.\nColor is ${colorTwo()}.\nCoordinates are ${x}, ${yCoord()}.\nRadius is ${circleR()}.`);
        } else {
            // All other keys will produce a triangle. Includes Shift, Ctrl, Alt, and arrow keys.
            context.strokeStyle = colorTwo();
            context.beginPath();
            context.moveTo(x, yCoord());
            context.lineTo(xTwo, yTwo); 
            context.lineTo(xThree,yThree); 
            context.closePath(); 
            context.stroke(); 
            console.log(`${event.key} draws a triangle.\nColor is ${colorTwo()}.\nStarting point coordinates are ${x}, ${yCoord()}.\nSecond point coordinates are ${xTwo}, ${yTwo}.\nThird point coordinates are ${xThree}, ${yThree}.`);
        }
        
    });   
});
