import { add_li, create_li } from "./app/crud.js";
import { showCust } from "./app/showCust.js";
import { customPrompt } from "./app/customPrompt.js";

const guestInput = document.querySelector('#name')
const addItem_btn = document.querySelector('.button')

export const guestList = JSON.parse(localStorage.getItem('people')) || []
export const itemList = JSON.parse(localStorage.getItem('shopping')) || []

addItem_btn.addEventListener('click', async ()=> {
    const text = await customPrompt()
    add_li('shopping', text)
})
create_li(itemList, 'shopping')
guestInput.addEventListener('keydown',(event)=>{
    if(event.key === 'Enter'){
        event.preventDefault()
        if(guestInput.value.trim()){
            add_li('people', guestInput.value)
            guestList.push(...JSON.parse(localStorage.getItem('people')) || [])
            guestInput.value = ''
            location.reload()
        }
    }
})
create_li(guestList, 'people')

showCust();

