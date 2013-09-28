/**
 * Created with JetBrains WebStorm.
 * User: mdvn
 * Date: 9/27/13
 * Time: 5:41 PM
 * To change this template use File | Settings | File Templates.
 */


//Create a function which creates an average of n numbers

//
function salesAverage(salesArray){
    var returnValue =0;
    for(i=1;i<salesArray.length;i++){
        returnValue+=salesArray[i];
    }
    return returnValue/(salesArray.length-1);
}

function saleForecast(incPercent, currentAvgValue){
    return (1+incPercent) *currentAvgValue
}

function monthSalesData(currentSalesValues, avgSales){
    return (currentSalesValues-avgSales)/avgSales;
}


function max(sortingArray){
    var largest = 0;
    for(i=0;i<sortingArray.length;i++){
        if(largest<sortingArray[i]){
            largest = sortingArray[i];
        }
    }
    return largest;
}

function min(sortingArray){
    var smallest = max(sortingArray);
    for(i=0;i<sortingArray.length;i++){
        if(smallest>sortingArray[i]){
            smallest=sortingArray[i];
        }
    }
    return smallest;
}

function significantSalesEvents(minValue,maxValue,current){
    var returnValue ='';
    if(current>maxValue) {returnValue='You are super Cool';}
    else if (current<minValue){returnValue='Better start looking for a job'}
    else {returnValue='Mrah';}
    return returnValue;
}


//function spanishClass(jose,isSpanishClass){
//    var result;
//    if(isSpanishClass){
//       result='It is spanish class please refer to me as Jose.'
//    }
//    else {result= jose;}
//
//    return result;
//
//}
//
//
//
//
//
//var joe='Joseph Dalton';
//
//console.log(joe);
//
//console.log(spanishClass(joe,true));
//




