//examine the document object
console.dir(document);
console.log(document.domain);
console.log(document.URL);
console.log(document.title);
console.log(document.doctype);
console.log(document.head);
console.log(document.body);
console.log(document.all[8]);
console.log(document.links);
console.log(document.images);
const header=document.getElementById("header-title");
header.style.border="solid 2px black";
const item=document.getElementsByClassName("list-group-item");
// item[1].style.color="green";
// item[2].style.fontWeight="bold";
//to make all in one code
for(var i=0;i<item.length;i++){
item[i].style.color="green";
item[i].style.fontWeight="bold";

}









