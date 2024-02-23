
let addCardBtn = document.getElementById("addCard")
let todoContainer = document.getElementById("todo")

addCardBtn.addEventListener("click", addingtask)

function addingtask() {
     let card = document.createElement("div")
     card.className = "card"
     card.innerHTML = "click to Edit"
     todoContainer.append(card)
     card.setAttribute("contenteditable", "true")
     card.focus()

     card.addEventListener("blur", (eventDetails)=>{
          let targetCard = eventDetails.target 
          if(!targetCard.innerHTML.trim()){
                targetCard.remove() // remove the card if it is empty
          }
     })

     const selector =  document.createElement("select")
    selector.innerHTML = `
        <option value="todo1">ToDo</option>  
        <option value="inProgress">InProgress</option>
        <option value="done">Done</option>
    `  
    card.append(selector)

   selector.addEventListener("change", (eventDetails)=>{

    //    let obj = {
    //           todo1: "ToDo",
    //           inProgress1: "InProgress",
    //           done1: "Done"
    //    }
       const status = eventDetails.target.value // id

       document.getElementById(status).append(card)
   })

}










