let studentName = null;
let realName = Boolean(studentName)
console.log(realName);
console.log(typeof(realName));

/*
when we change it to (number)  => string (Nan) , boolean (false 1 , true 0), undefined (NaN)
string => number(prints number ),boolean( as it is true / false , null (null), undefined as same 
boolean => undefined as (false), null as (false)*/