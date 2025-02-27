

// let shrimp1, shrimp2, shrimp3, cute;
// let clown, partyhat, bdayhat;
// let fun, fnaf, bday, bowl;

// // keeps selected
// let currentStamp = null;
// let currentBackground = null;

// // let currentkey ='1'

// let stamps = [];

// function preload() {
//     // Load shrimp images
//     shrimp1 = loadImage("rawshrimp.png");
//     shrimp2 = loadImage("shrimpcat.jpeg");
//     shrimp3 = loadImage("bonjour.jpeg");
//     cute = loadImage("cuteshrimp.png");

//     // Load party hats
//     clown = loadImage("clown.png");
//     partyhat = loadImage("partyhat4.png");
//     bdayhat = loadImage("bdayhat.png");

//     // Load backgrounds with resizing 
//     neon= loadImage("neon.jpeg", img => img.resize(1000, 700));
//     fnaf = loadImage("fnaf.jpeg", img => img.resize(1000, 700));
//     bday = loadImage("bday.jpeg", img => img.resize(1000, 700));
//     bowl = loadImage("bowl.jpeg", img => img.resize(1000, 700));
// }

// function setup() {
//     createCanvas(1000, 700);
//     currentBackground = neon; ;
//     background(currentBackground);
// }

// function stellabackground(){
//     if(keyCode === 1 || 2 || 3 || 4){
//         background(currentBackground); 
//     }
// }


// function draw() {
   

//     if (currentBackground) {
//         if(mouseIsPressed){
//         background(currentBackground); 
//     }
//     }



//     // center img on mouse
//     if (currentStamp) {
//         if(mouseIsPressed){
//         image(currentStamp, mouseX - 50, mouseY - 50, 100, 100); 
//         }
//     }



// }


// function keyPressed() {



//     // Change the background based on key press
//     switch (key) {
//         // backgrounds
//         case '1':
//             currentBackground = neon;
//             break;
//         case '2':
//             currentBackground = fnaf;
//             break;
//         case '3':
//             currentBackground = bday;
//             break;
//         case '4':
//             currentBackground = bowl;
//             break;
    
//         // shrimps and hats
//         case 'a':
//             console.log("a=shrimp1");
//             currentStamp = shrimp1;

//             break;

//         case 's':
//             console.log("b= shrimp2");
//             currentStamp = shrimp2;
//             break;
//         case 'd':
//             console.log("c=shrimp3");
//             currentStamp = shrimp3;
//             break;
//         case 'f':
//             console.log("cute");
//             currentStamp = cute;
//             break;
//         case 'g':
//             console.log("e=clown");
//             currentStamp = clown;
//             break;
//         case 'h':
//             console.log("f=partyhat");
//             currentStamp = partyhat;
//             break;
//         case 'j':
//             console.log("g=bdayhat");
//             currentStamp = bdayhat;
//             break;
//         case 'x':
//             console.log("x=erase");
//             clear();
//             break;
//         default:
//             currentStamp = null; // no valid key is pressed=no stamp
//     }
// }

// function Stellasmouse() {
//   console.log("stellasmouse")
//     if (currentStamp) {
//         image(currentStamp, mouseX - 50, mouseY - 50, 100, 100); // Draw stamp at mouse location
//     }
// }

//fixed code 

let shrimp1, shrimp2, shrimp3, cute;
let clown, partyhat, bdayhat;
let fun, fnaf, bday, bowl;

// stores the selected stamp along with its position
let stamps = [];

let currentStamp = null;
let currentBackground = null;

function preload() {
    // Load shrimp images
    shrimp1 = loadImage("rawshrimp.png");
    shrimp2 = loadImage("shrimpcat.jpeg");
    shrimp3 = loadImage("bonjour.jpeg");
    cute = loadImage("cuteshrimp.png");

    // Load party hats
    clown = loadImage("clown.png");
    partyhat = loadImage("partyhat4.png");
    bdayhat = loadImage("bdayhat.png");

    // Load backgrounds with resizing 
    neon= loadImage("neon.jpeg", img => img.resize(1000, 700));
    fnaf = loadImage("fnaf.jpeg", img => img.resize(1000, 700));
    bday = loadImage("bday.jpeg", img => img.resize(1000, 700));
    bowl = loadImage("bowl.jpeg", img => img.resize(1000, 700));
}

function setup() {
    createCanvas(1000, 700);
    currentBackground = neon;
    background(currentBackground);
}

function draw() {
    if (currentBackground) {
        background(currentBackground);
    }

    // Draw all stamps
    for (let i = 0; i < stamps.length; i++) {
        let stamp = stamps[i];
        image(stamp.image, stamp.x, stamp.y, 100, 100);
    }

    // If a stamp is selected, follow the mouse
    if (currentStamp) {
        if (mouseIsPressed) {
            // Save the stamp
            stamps.push({ image: currentStamp, x: mouseX - 50, y: mouseY - 50 });
        }
    }
}

function keyPressed() {
    // Change the background based on key press
    switch (key) {
        // backgrounds
        case '1':
            currentBackground = neon;
            break;
        case '2':
            currentBackground = fnaf;
            break;
        case '3':
            currentBackground = bday;
            break;
        case '4':
            currentBackground = bowl;
            break;
    
        // shrimps and hats
        case 'a':
            console.log("a=shrimp1");
            currentStamp = shrimp1;
            break;

        case 's':
            console.log("b= shrimp2");
            currentStamp = shrimp2;
            break;
        case 'd':
            console.log("c=shrimp3");
            currentStamp = shrimp3;
            break;
        case 'f':
            console.log("cute");
            currentStamp = cute;
            break;
        case 'g':
            console.log("e=clown");
            currentStamp = clown;
            break;
        case 'h':
            console.log("f=partyhat");
            currentStamp = partyhat;
            break;
        case 'j':
            console.log("g=bdayhat");
            currentStamp = bdayhat;
            break;
        case 'x':
            console.log("x=erase");
            clear();
            stamps = []; // Clear all stamps
            break;
        default:
            currentStamp = null; // No valid key is pressed = no stamp
    }
}
