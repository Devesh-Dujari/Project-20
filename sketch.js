var gardenImg;
var cat, catSitting, catRunning, catHappy;
var rat, ratStanding, ratTeasing, ratHappy;

function preload() {
    
    gardenImg = loadImage("images/garden.png");
    catSitting = loadAnimation("images/cat1.png");
    catRunning = loadAnimation("images/cat2.png" , "images/cat3.png");
    catHappy = loadAnimation("images/cat4.png");
    ratStanding = loadAnimation("images/mouse1.png");
    ratTeasing = loadAnimation("images/mouse2.png" , "images/mouse3.png");
    ratHappy = loadAnimation("images/mouse4.png");

}

function setup(){
    
    createCanvas(500, 400);

    cat = createSprite(400, 325, 10, 10);
    cat.addAnimation("cat sitting", catSitting);
    cat.scale = 0.1;

    rat = createSprite(100, 325, 10, 10);
    rat.addAnimation("rat standing", ratStanding);
    rat.scale = 0.1;
    
}

function draw() {

    background(gardenImg);

    //console.log(rat.x - cat.x); 

    if(keyDown("left_arrow"))
    {
        cat.addAnimation("cat running", catRunning);
        cat.changeAnimation("cat running");
        cat.velocityX = -2;

        rat.addAnimation("rat teasing", ratTeasing);
        rat.changeAnimation("rat teasing")
    }

    if(cat.x - rat.x < (cat.width - rat.width)/2) 
        {
            cat.addAnimation("cat is happy", catHappy);
            cat.changeAnimation("cat is happy");
            cat.velocityX = 0;
            cat.x = 170;

            rat.addAnimation("rat is happy", ratHappy);
            rat.changeAnimation("rat is happy");
        } 

    drawSprites();
}
