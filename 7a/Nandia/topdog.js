function Start(){
let array_object =[
    {
    name:  "John",
    age: "23",
},
{
    name:  "Sofia",
    age: "23",
},
{
    name:  "Ariana",
    age: "23",
    },
 ];
 let all_array_object ="";
 for(let i = 0; i < array_object.length; i++){
    console.log(array_object[i].name);
    all_array_object +=
    `<p>${array_object[i].name} - ${array_object[i].age}</p>` + "\n";
 }
 document.getElementById('one').innerHTML = all_array_object;

 let object_array={
    grades:[45,67,98],
    class: ["Math", "English", "History"],
 };
 let all_object_array ="";
 for (let i = 0; i < object_array.class.length; i++){
    console.log(object_array.class[i]);
    all_object_array += 
    `<p>${object_array.class[i]}</p>` + "\n";
 }
 document.getElementById('two').innerHTML = all_array_object;
}
window.onload = Start();