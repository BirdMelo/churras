// import { itemList_btn } from "./itemList_btn.js";
import { guestList } from "../script.js";

export function showCust() {
    let totalCust = 0;

    const totalCost_p = document.querySelector('#resultTotal');
    const costPerPerson = document.querySelector('#resultPerPerson');
    const itemData = JSON.parse(localStorage.getItem('dataItems')) || [];
    itemData.forEach(item => {
        totalCust += (Number(item.cost) * Number(item.quant > 0 ? item.quant : 1))
    });
    const perPerson = guestList.length > 0 ? (totalCust / guestList.length) : totalCust;
    totalCost_p.textContent = `R$ ${brPriceFormat(totalCust)}`;
    costPerPerson.textContent = `R$ ${brPriceFormat(perPerson)}`;
}
function brPriceFormat(price) {
    return price.toFixed(2).replace('.', ',');
}
