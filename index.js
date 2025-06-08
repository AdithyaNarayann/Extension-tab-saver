let myleads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click",function() {
    myleads.push(inputEl.value)
    inputEl.value = ""
    inputEl.focus()
    renderlist()   
})

function renderlist() {
    let listitems = ""
    for(let  i=0;i<myleads.length;i++){
        // const li = document.createElement("li")
        // li.textContent = myleads[i]
        // ulEl.append(li)
        listitems += `
            <li>
                <a href= '${myleads[i]}' target='_blank'>${myleads[i]}</a>
            </li>
        `
    }
    ulEl.innerHTML = listitems

}
