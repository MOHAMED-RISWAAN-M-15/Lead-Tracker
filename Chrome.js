let myleads=[]
const inputEl=document.getElementById("input-el")
const inputBtn=document.getElementById("input-btn")
const ulEl=document.getElementById("ul-el")
const deletebtn=document.getElementById("delete-btn")
const tabBtn=document.getElementById("tab-btn")
  /*leadfromlocal first contain is null
  after page reload  value assing*/
const leadfromlocal=JSON.parse(localStorage.getItem("myleads"));
// line evalute as true after page reload if leadfromlocal has value 
if (leadfromlocal){

  myleads=leadfromlocal;
  render(myleads)
  
}
function render(leads){
  let listitems=""
  for (let i=0;i<leads.length;i++){
    listitems+=`
    <li>
    <a href='myleads[i]'>${leads[i]}</a> 
    </li>`
    ulEl.append(listitems)
  }
  ulEl.innerHTML=listitems
}


inputBtn.addEventListener("click",function(){
  myleads.push(inputEl.value);
  inputEl.value="";
  localStorage.setItem("myleads",JSON.stringify(myleads));
  render(myleads);
})

tabBtn.addEventListener("click",function(){
   chrome.tabs.query({active:true,currentWindow:true},function(tabs){
    let activeTab=tabs[0];
    myleads.push(activeTab.url)
   localStorage.setaItem("myleads",JSON.stringify(myleads))
   render(myleads)
})
    
   })
   

deletebtn.addEventListener("dblclick",function(){
  localStorage.removeItem("myleads");
  myleads=[];
  render(myleads)
  
})

