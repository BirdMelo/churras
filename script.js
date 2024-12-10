import { add_li, create_li } from "./app/crud.js";
import { showCust } from "./app/showCust.js";
import { customPrompt } from "./app/customPrompt.js";

const guestInput = document.querySelector('#name')
const guest_btn = document.querySelector('form label button')
const addItem_btn = document.querySelector('.button')

export const guestList = JSON.parse(localStorage.getItem('people')) || []
export const itemList = JSON.parse(localStorage.getItem('shopping')) || []

addItem_btn.addEventListener('click', async (event)=> {
    event.preventDefault()
    const text = await customPrompt()
    add_li('shopping', text)
})
create_li(itemList, 'shopping')
guestInput.addEventListener('keydown',(event)=>{
    if(event.key === 'Enter'){
        event.preventDefault()
        add_person()
    }
})
guest_btn.addEventListener('click', add_person)
function add_person(){
    if(guestInput.value.trim()){
        add_li('people', guestInput.value)
        guestList.push(...JSON.parse(localStorage.getItem('people')) || [])
        guestInput.value = ''
        location.reload()
    }
}
create_li(guestList, 'people')

showCust();

