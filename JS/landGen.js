/**
 * Created with JetBrains WebStorm.
 * User: mdvn
 * Date: 9/22/13
 * Time: 6:13 PM
 * To change this template use File | Settings | File Templates.
 */


var world = worldGen();

var worldPresentationString ='';
for(outer=0;outer<10;outer++){
    worldPresentationString ='';
    for(inner=0;inner<10;inner++){
        worldPresentationString+=world[outer][inner];
        worldPresentationString+=tabGen(world[outer][inner].length);
    }
    console.log(worldPresentationString);

}

//character initial position
var xPos=0;
var yPos=0;
var endCondition = true;
//Movement through our arrays
do {
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

    console.log(world[yPos][xPos]);







}
while  (endCondition);        //Something is true


//console.clear();


