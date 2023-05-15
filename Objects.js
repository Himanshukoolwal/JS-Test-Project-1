// let obj = {id:100, name:"HK",};
// let emp =new Object();
// emp.id =111;
// emp.name="Himanshu";
// emp.salary=134567;
// console.log(emp);
// console.log(obj);

// function Emp(i, n, s){
//     this.id = i;
//     this.name = n;
//     this. salary= s;
// }

// const e= new Emp (102,"HIMANSHU", 2345678);

// console.log(e);
// //
// console.log(emp.name)
// console.log(emp['name']);

// emp.salary=15000;
// emp['name']= 'Koolwal';
// delete emp.id
// console.log(emp)


let emp = {
    id:1011,
    name:"Himanshui",
    salary:12345
};

let keys=Object.keys(emp);
console.log (keys);

let value=Object.values(emp);
console.log(value);

let entry = Object.entries(emp);
console.log (entry);
Object.freeze(emp);
emp.name= "koolwal";
console.log(emp)


Object.seal(emp);
emp.id=100;
console.log(emp);

let o = Object.assign({x:100},emp);
console.log(o);