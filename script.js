const l = [];
const d = document.querySelector('.t');
const a = document.querySelector(".issue");

let table = document.querySelector('tbody');
let count = 0;
function ess(){
let tr = document.createElement('tr');
let td1 = tr.appendChild(document.createElement('td'));
let td2 = tr.appendChild(document.createElement('td'));
let td3 = tr.appendChild(document.createElement('td'));
let td4 = tr.appendChild(document.createElement('td'));
let td5 = tr.appendChild(document.createElement('td'));
let date = new Date().toLocaleString();
// alert(date);
     let bname = document.querySelector(".bname").value;
     let to = document.querySelector(".name").value;
     let st = document.createElement('span');
     st.classList.add('red');
     st.innerHTML = "Not Returned"
    //  let status=st;
     let id = l.length+1;
     let obj = {id,name: bname,to,date,st};
 l.push(obj);
   td2.innerHTML = bname;
   td3.innerHTML = to;
   td1.innerHTML = id;
   td4.innerHTML = date;
   td5.appendChild(st);
  
   td5.innerHTML+=' <a onclick="ess2('+id+')""><span class="material-icons md-36"><img src="Vector.png"></span></a>';
  // console.log(a);
  // td5.innerHTML+=a; 
  if(!bname=="" && !to=="")
   table.append(tr);
 bname="";
 to="";
}
function ess2(id){
  let st1=document.createElement('span');
  let curr=l[id-1].st;
  // console.log(curr.classList);
  
  if(curr.innerHTML.includes('Not')){
    let st1=document.createElement('span');
    st1.classList.add('green');
    st1.innerHTML="Returned"
    l[id-1].st=st1;
    console.log(st1);
  }
  else{
    let st1=document.createElement('span');
    st1.classList.add('red');
    st1.innerHTML="Not Returned"
    l[id-1].st=st1;
  }
  
  rander();

}
function rander(){

  table.innerHTML='';
  l.forEach(ele => {
    let tr = document.createElement('tr');
    let td1 = tr.appendChild(document.createElement('td'));
    let td2 = tr.appendChild(document.createElement('td'));
    let td3 = tr.appendChild(document.createElement('td'));
    let td4 = tr.appendChild(document.createElement('td'));
    let td5 = tr.appendChild(document.createElement('td'));


         let name = ele.name;
         let to = ele.to;
         let status = ele.st;
         let id = ele.id;
         let date = ele.date;
         td1.innerHTML = id;
         td2.innerHTML = name;
       td3.innerHTML = to;
       td4.innerHTML = date;
       td5.appendChild(status);
       td5.innerHTML+=' <a onclick="ess2('+id+')"><span class="material-icons md-36"><img src="Vector.png"></span></a>';
       table.append(tr);
  });

}
a.addEventListener('click',ess);
// let b=document.querySelector('a');
function f(){
alert("hi");
}
// b.addEventListener('click',f);