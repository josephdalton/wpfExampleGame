/**
 * Created with JetBrains WebStorm.
 * User: mdvn
 * Date: 9/28/13
 * Time: 5:42 PM
 * To change this template use File | Settings | File Templates.
 */



var monthSalesData = [];
monthSalesData[0]=120;    //current month
monthSalesData[1]=130;    //current month -1
monthSalesData[2]=140;    //current month -2
monthSalesData[3]=150;    //current month -3
var expectedSalesIncrease = .03;
var currentSales = 150;

//console.log(salesAverage(monthSalesData));
//
//console.log('The Forecast '+ saleForecast(expectedSalesIncrease,salesAverage(monthSalesData)));
//console.log(currentSales,salesAverage(monthSalesData));
//console.log(max(monthSalesData));
//console.log(min(monthSalesData));
//console.log(significantSalesEvents(min(monthSalesData),max(monthSalesData),monthSalesData[0]));


var testArray1=[];
var testArray2=[];
var testArray3=[];
var testArray4=[];

for(i=0;i<10;i++){
    testArray1[i]=100;
    testArray2[i]=100+10*i;
    testArray3[i]=100*i;
    testArray4[i]=100/(1+i);

}
//console.log('Sales Average: \t\t'+ salesAverage(testArray1));
//console.log('Max: \t\t\t\t'+max(testArray1));
//console.log('Min: \t\t\t\t'+min(testArray1));
//console.log('Forecast:\t\t\t'+saleForecast(expectedSalesIncrease,salesAverage(testArray1)));
//console.log('Significant Events:\t'+significantSalesEvents(min(testArray1),max(testArray1),currentSales));
//
//
//
//console.log(testArray2);
//console.log('Sales Average: \t\t'+ salesAverage(testArray2));
//console.log('Max: \t\t\t\t'+max(testArray2));
//console.log('Min: \t\t\t\t'+min(testArray2));
//console.log('Forecast:\t\t\t'+saleForecast(expectedSalesIncrease,salesAverage(testArray2)));
//console.log('Significant Events:\t'+significantSalesEvents(min(testArray2),max(testArray2),currentSales));
//
//
//
//
//console.log(testArray3);
//console.log('Sales Average: \t\t'+ salesAverage(testArray1));
//console.log('Max: \t\t\t\t'+max(testArray1));
//console.log('Min: \t\t\t\t'+min(testArray1));
//console.log('Forecast:\t\t\t'+saleForecast(expectedSalesIncrease,salesAverage(testArray1)));
//console.log('Significant Events:\t'+significantSalesEvents(min(testArray1),max(testArray1),currentSales));
//
//
//
//console.log(testArray4);
//console.log('Sales Average: \t\t'+ salesAverage(testArray1));
//console.log('Max: \t\t\t\t'+max(testArray1));
//console.log('Min: \t\t\t\t'+min(testArray1));
//console.log('Forecast:\t\t\t'+saleForecast(expectedSalesIncrease,salesAverage(testArray1)));
//console.log('Significant Events:\t'+significantSalesEvents(min(testArray1),max(testArray1),currentSales));
//

//console.log('Two Names\nJoe Dalton\t\t\t100\nOtherGuy\t\t\t100');

var cube=[]
for(i=0;i<10;i++){
    cube[i]=[];
    for(j=0;j<10;j++){
        cube[i][j]=[];
        for(k=0;k<10;k++){
            //console.log('i:'+i+'\tj:'+j+'\tk:'+k);
            cube[i][j][k]=i*j*k;
            console.log('i:'+i+'\tj:'+j+'\tk:'+k +'\t\t'+ cube[i][j][k]);
        }

    }
}




