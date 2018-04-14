# Canvas Drawing

This project was built with HTML, CSS, and JavaScript. It originated as a class exercise at Access Code, operated by [Coalition for Queens](https://www.c4q.nyc/) (C4Q).  

## Instructions

Desktop version: "Draw" shapes on the canvas by typing on your keyboard.

Mobile/Tablet version: "Draw" shapes with the buttons displayed onscreen.

Play with the Canvas Drawing at [https://chaltinpagan.github.io/canvas-drawing](https://chaltinpagan.github.io/canvas-drawing)

## Desktop

For the desktop version, it employs the **keydown** event listener. I decided to use a keydown event because this will fire an event for both keys that produce a character value and for keys that do not produce a character value.

Lowercase letters draw boxes.
Uppercase letters draw lines.
Numbers draw circles.
Non-alphanumeric keys draw triangles.

Coordinates, shape dimensions, and hex colors are randomly generated. There are ternary operators in place to prevent shapes from falling outside the canvas, to prevent shapes from being too small, and to prevent the generation of an invalid hex code.

Hex code generator comes from Paul Irish at [https://www.paulirish.com/2009/random-hex-color-code-snippets/](https://www.paulirish.com/2009/random-hex-color-code-snippets/)

Keypress event, shape, coordinates, dimensions, and hex color will be logged to the console.

## Mobile/Tablet

For the mobile version, I added onscreen buttons. These employ a **touchend** event to draw on the canvas. CSS media queries will display a special canvas for mobile and tablet devices.

## Note

To use the desktop version, the screen must have a minimum of 700px height and 1200px wide. Zooming in will cause media queries for mobile to go into effect.

Media queries can still use finessing.

## Screenshots

Website: [chaltinpagan.github.io/canvas-drawing](https://chaltinpagan.github.io/canvas-drawing)

Web view:
![Screenshot](/screenshots/canvas-drawing-screen-1.png)

Mobile view:

<img src="/screenshots/canvas-drawing-screen-2.png" alt="mobile" style="width: 300px">