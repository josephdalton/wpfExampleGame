/**
 * Created with JetBrains WebStorm.
 * User: mdvn
 * Date: 9/23/13
 * Time: 10:46 AM
 * To change this template use File | Settings | File Templates.
 */





var variants =1 ;
var calculations =.5;
var conditions =1;
var gitHub =1 ;
var validation =1;
var comments=1;
var files=1;
var completeness=1;
var investment=1;

var grade=0;




function gradingFunction (variants, calculations, conditions, gitHub, validation, comments, files, completeness, investment)
    {
    variants*=5;
    calculations*=10;
    conditions*=35;
    gitHub*=10;
    validation*=10;
    comments*=10;
    files*=10;
    completeness*=5;
    investment*=5;
    var grade=0;
    if(variants!=0 && calculations!=0 && conditions!=0)
    {
    grade = variants+calculations+conditions+gitHub+validation+comments+files+completeness+investment+'%'
    }
     return grade;
    }
console.log(gradingFunction (variants, calculations, conditions, gitHub, validation, comments, files, completeness, investment));




