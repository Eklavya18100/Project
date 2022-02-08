let balancee=document.getElementById('balance8');
let income=document.getElementById('money-plus');
let expense=document.getElementById('money-minus');
let list=document.getElementById('list8');
let text=document.getElementById('text8');
let amount=document.getElementById('amount8');
let submit=document.getElementById('btn8');
let data=[];
submit.addEventListener('click',(e)=>{
    let b=text.value;
    data.push({text:text.value,amount:amount.value});
    localStorage.setItem('data',JSON.stringify(data));
    console.log(data);
    e.preventDefault();
    text.value='';
    amount.value='';
    showData();
})
function delete8(a){
    let newData=[];
    console.log('okay');
        data.forEach((ele)=>{
            if(a!==ele.text){
                console.log('okay');

                newData.push({text:ele.text, amount:ele.amount});
            }
        })
        data=newData;
        localStorage.setItem('data',JSON.stringify(data));
        showData();
    }
function showData(){
    list.innerHTML='';
    let inc=0,exp=0;
    data.forEach((ele)=>{
        let child=document.createElement('li');
        if(ele.amount<0){
            child.className='minus8';
            child.innerHTML=`${ele.text}<span>-$${Math.abs(ele.amount)}</span><button class="delete-btn8" onclick="delete8('${ele.text}')">x</button>`
            exp=exp+(+ele.amount);
        }
        else{
            child.className='plus8';
            child.innerHTML=`${ele.text}<span>+$${Math.abs(ele.amount)}</span><button class="delete-btn8" onclick="delete8('${ele.text}')">x</button>`
            inc=inc+(+ele.amount);
        }
        list.appendChild(child);
    })
    income.innerText='$'+inc;
    expense.innerText='$'+exp;
    balancee.innerText='$'+(inc-exp);
}
function updatePage(){
    data=JSON.parse(localStorage.getItem('data'));
    showData();
}
updatePage();
