/**
 * Created with JetBrains WebStorm.
 * User: mdvn
 * Date: 9/22/13
 * Time: 6:35 PM
 * To change this template use File | Settings | File Templates.
 */
function landSelection(){
    var initValue= Math.random()*10;
    // console.log(initValue);
    var percentChange = Math.floor(initValue);
    // console.log(percentChange);

    var woods=0;
    var jungle=1;
    var swamp=2;
    var desert=3;
    var mountains=4;
    var dungeons=5;
    var hills=6;
    var tundra=7;
    var wasteland=8;
    var city=9;
    var  returnLandType;

    if(percentChange ==woods)
    {returnLandType= 'woods'}
    else if(percentChange == jungle)
    {returnLandType= 'jungle'}
    else if (percentChange==swamp){
        returnLandType= 'swamp'}
    else if (percentChange==desert){
        returnLandType= 'desert'}
    else if (percentChange==mountains){
        returnLandType= 'mountains'}
    else if (percentChange==dungeons){
        returnLandType= 'dungeons'}
    else if (percentChange==hills){
        returnLandType= 'hills'}
    else if (percentChange==tundra){
        returnLandType= 'tundra'}
    else if (percentChange==wasteland){
        returnLandType= 'wasteland'}
    else if (percentChange==city){
        returnLandType= 'city'}
    return returnLandType;
}

function tabGen (len){
    if(len>7){
        return '\t';
    } else if (len>3){
        return '\t\t';
    } else if (len <=3){
        return '\t\t\t';
    }
}

//console.log(landSelection());

function worldGen() {

    var world=[];
    for(j=0;j<10;j++){
        //remove the rowOfLand variable and replace it with an Array
        //    var rowOfLand='';
        world[j]=[];
        for(i=0;i<10;i++){
            world[j][i]=landSelection();
            //console.log(world[j][i]);

        }
    }
    return world;

}
