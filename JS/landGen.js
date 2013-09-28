/**
 * Created with JetBrains WebStorm.
 * User: mdvn
 * Date: 9/22/13
 * Time: 6:13 PM
 * To change this template use File | Settings | File Templates.
 */


var world = worldGen();

//character initial position
var xPos=0;         //initial position x
var yPos=0;         //initial position y
var endCondition = true;
var oldPosition =world[yPos][xPos];
world[yPos][xPos] ='*' +world[yPos][xPos]+'*';
presentWorld();
//Movement through our arrays




do {

    world[yPos][xPos]=oldPosition;
    var movement= prompt('Move your character which direction (N,S,E,W,Q)');
    if(movement=='N' || movement =='n'){yPos--;}
    if(movement=='S' || movement =='s'){yPos++;}
    if(movement=='E' || movement =='e'){xPos++;}
    if(movement=='W' || movement =='w'){xPos--;}
    if(movement=='q' || movement=='Q'){endCondition=false;}
    //console.log('x:' +xPos+' | '+' y:'+yPos);
    if(xPos==-1){xPos = 9}
    if(yPos==-1){yPos = 9}
    if(xPos==10){xPos = 0}
    if(yPos==10){yPos = 0}
    //console.log(world[yPos][xPos]);

    oldPosition= world[yPos][xPos];
    world[yPos][xPos] = '*' +world[yPos][xPos]+'*';
    presentWorld();


}
while  (endCondition);        //Something is true


//console.clear();


