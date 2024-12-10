const prompt = document.querySelector('#howMach')
export function customPrompt(){
    // const label = document.createElement('label')
    // label.textContent = `Quantos ${unit} de ${name} terá no churrasco ?`
    // prompt.append(label)

    // const input = document.createElement('input')
    // input.setAttribute('type', 'text')
    // prompt.append(input)

    // prompt.style.display = 'grid'
    // return new Promise((resolve)=>{
    //     input.addEventListener('keydown', ( event )=>{
    //         if(event.key === 'Enter'){
    //             event.preventDefault()
    //             const quant = input.value
    //             input.value = ''
    //             prompt.style.display = 'none'
    //             resolve(`${name} ${quant}${unit}`)
    //             prompt.innerHTML = ''
    //         }
    //     })
    // })

    const titleprompt = document.createElement('h3')
    titleprompt.textContent = 'Informações do produto'

    const name_label = document.createElement('label')
    name_label.textContent = 'nome do produto:'
    const valor_label = document.createElement('label')
    valor_label.textContent = 'valor:'
    const units_label = document.createElement('label')
    const quant_label = document.createElement('label')
    quant_label.textContent = 'quantidade:'

    const name_input = document.createElement('input')
    name_input.type = 'text'
    const valor_input = document.createElement('input')
    valor_input.type = 'number'
    const quant_input = document.createElement('input')
    quant_input.type = 'number'
    
    const units_select = document.createElement('select')
    units_select.id = 'units'

    const KgOption = document.createElement('option')
    KgOption.value = 'Kg'
    KgOption.textContent = 'Kg'
    const GOption = document.createElement('option')
    GOption.value = 'G'
    GOption.textContent = 'G'
    const LOption = document.createElement('option')
    LOption.value = 'L'
    LOption.textContent = 'L'
    const mLOption = document.createElement('option')
    mLOption.value = 'mL'
    mLOption.textContent = 'mL'

    units_select.append(KgOption, GOption, LOption, mLOption)
    units_label.append(units_select)

    const cancel_btn = document.createElement('button')
    cancel_btn.textContent = 'cancelar'
    cancel_btn.addEventListener('click', ()=> location.reload())
    const ok_btn = document.createElement('button')

    prompt.append(cancel_btn, ok_btn, quant_input, quant_label, units_label, valor_input, valor_label, name_input, name_label, titleprompt)
    
    ok_btn.textContent = 'confirmar'
    prompt.style.display = 'grid'
    return new Promise((resolve)=> {
        ok_btn.addEventListener('click', ()=> {
            const item = {
                name: name_input.value,
                cost: valor_input.value,
                quant: quant_input.value,
                unit: units_select.value
            }
            const itemData = JSON.parse(localStorage.getItem('dataItems')) || [];
            itemData.push(item)
            localStorage.setItem('dataItems', JSON.stringify(itemData))
            resolve(`${item.name} ${item.quant}${item.unit}`)
            prompt.innerHTML = ''
            prompt.style.display = 'none'
        })
    })

}