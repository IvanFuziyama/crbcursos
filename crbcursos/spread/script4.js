const objs1=document.getElementsByTagName('p')
const objs2=[...document.getElementsByTagName('p')]

objs2.forEach(element => {
    element.innerHTML="Curso"
    console.log(element)//devtools
});

console.log(objs1)
console.log(objs2)
