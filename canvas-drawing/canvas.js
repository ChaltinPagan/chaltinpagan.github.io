document.addEventListener("DOMContentLoaded", (event) => {

    canvas = document.querySelector("canvas");

    body = document.querySelector("body");

    body.style.backgroundColor = "#FFFAFA";

    context = canvas.getContext("2d");

    document.fonts.load("50px Berkshire Swash").then( (event) => {

        context.fillStyle = "#800020";
        context.font = "50px Berkshire Swash";
        context.fillText("Chaltin's Canvas Drawing", 20, 50)

    })

    document.addEventListener("keypress", (event) => {

        x = Math.random()*1000
        y = Math.random()*1000
        w = Math.random()*100
        h = Math.random()*100

        r = Math.random()*255
        g = Math.random()*255
        b = Math.random()*255

        context.strokeStyle = "rgb("+r+","+g+","+b+")";
        context.strokeRect(x, y, w, h);
    })


    /* 
    Code below is to create a random box based on x,y coordinates of click. I didn't like the way this looked on the screen.
    */
    
    /*
    document.addEventListener("click", (event) => {

        x = event.clientX;
        y = event.clientY;
        w = Math.random()*100
        h = Math.random()*100

        r = Math.random()*255
        g = Math.random()*255
        b = Math.random()*255

        context.strokeStyle = "rgb("+r+","+g+","+b+")";
        context.strokeRect(x, y, w, h);

    })
    */
})
