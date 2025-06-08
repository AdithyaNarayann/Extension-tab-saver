let myleads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-btn")

const leadsfromlocalstorage = JSON.parse(localStorage.getItem("myleads"))
if (leadsfromlocalstorage){
    myleads=leadsfromlocalstorage
    render(myleads)
}


tabBtn.addEventListener("click",function() {
    chrome.tabs.query({active:true, currentWindow:true}, function(tabs){
        myleads.push(tabs[0].url)
        localStorage.setItem("myleads",JSON.stringify(myleads))
        render(myleads)
    })
})

deleteBtn.addEventListener("click",function() {
    localStorage.clear()
    myleads=[]
    render(myleads)
})

inputBtn.addEventListener("click",function() {
    myleads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myleads",JSON.stringify(myleads))
    inputEl.focus()
    render(myleads)   
    console.log(localStorage.getItem("myleads"))
})  

function render(leads) {
    let listitems = ""
    for(let  i=0;i<leads.length;i++){
        // const li = document.createElement("li")
        // li.textContent = myleads[i]
        // ulEl.append(li)
        listitems += `
            <li>
                <a href= '${leads[i]}' target='_blank'>${leads[i]}</a>
            </li>
        `
    }
    ulEl.innerHTML = listitems

}
