const inputDate = document.querySelector('#inputDate')
const timesModal = document.querySelector('#timesModal tbody')
const inputDataModal = document.querySelector('#inputDataModal tbody')
const smsConfirmModal = document.querySelector('#smsConfirmModal')

const mainContainer = document.querySelector('#main-container')
const spinner = document.querySelector('#spinner')

var toastElList = [].slice.call(document.querySelectorAll('.toast'))

const DEFAULT_TYPE = {
    Id: '1',
    Name: 'дневная'
}

const state = {
    currentFacul: {
        Id: 1,
        Name: 'DEFAULT'
    },
    currentType: DEFAULT_TYPE,
    faculsList: [],
    list: [],
    codeInput: null,
    code: null
    //id_auditoria: 1 //id выбранной аудитории
}

function getToast(id, title, time = 3000) {
    const container = document.querySelector('.toast-container')
    const toastEl = document.createElement('div')
    
    toastEl.className = 'toast align-items-center text-white border-0'
    
    if (id === 'error') toastEl.classList.add('bg-danger')
    if (id === 'info')  toastEl.classList.add('bg-primary')

    toastEl.innerHTML = 
    `
        <div class="d-flex">
            <div class="toast-body">${title}</div>
            <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
    `

    container.append(toastEl)
    return new bootstrap.Toast(toastEl, {
        delay: time
    })
}

const setCurrentFacul = (facul) => {
    state.currentFacul = facul
}

const renderFaculs = (faculs) => {
    const faculsList = document.querySelector('.faculs__list')
    faculsList.innerHTML = ""

    let ul = document.createElement('ul')
    ul.className = 'list-group'

    let lis = faculs.forEach((facul, idx) => {
        let li = document.createElement('li')
        li.className = 'list-group-item'

        let label = document.createElement('label')

        let checkbox = document.createElement('input')
        checkbox.className = "form-check-input me-2"
        checkbox.type = "radio"
        checkbox.name = "faculCheckbox"
        checkbox.dataset.id = facul.Id

        // FACULS CHANGES HANDLE

        if (idx === 0) {
            checkbox.checked = true
            setCurrentFacul(facul)
        }

        checkbox.addEventListener('change', () => {
            setCurrentFacul(facul)
        })

        label.append(checkbox)
        label.append(facul.Name)
        li.append(label)
        ul.append(li)
    })

    faculsList.append(ul)
}

const setCurrentDate = (value) => {
    state.currentDate = value
    inputDate.value = value
}

const renderTimesModal = (title, data) => {
    const timesModalTitle = document.querySelector('#timesModal .modal-title')
    timesModalTitle.innerHTML = title

    const container = document.createElement('div')

    const dateInput = document.createElement('input')
    
    const today = new Date()
    const tomorrow = new Date(today)
    tomorrow.setDate(tomorrow.getDate() + 1)

    let date = tomorrow.toISOString().substring(0, 10);

    dateInput.min = date
    dateInput.type = 'date'
    dateInput.classList = 'form-control mb-4'
    dateInput.value = state.currentDate
    dateInput.onchange = async (e) => {
        const {value} = e.target
        setCurrentDate(value)
        await loadTimesData(value, state.currentType.Id, state.currentFacul.Id)
    }

    container.append(dateInput)
    const renderBtns = () => {
        for (key in data) {
    
            const div = document.createElement('div')
            div.className = 'border border-2 mb-3 rounded'
    
            let row = document.createElement('div')
            row.className = 'row mb-3'
            let col = document.createElement('div')
            col.className = 'col'
            col.innerHTML = `Аудитория: ${key}`

            row.append(col)
            div.append(row)
    
            row = document.createElement('div')
            row.className = 'row mb-1'
            row.innerHTML = ""
    
    
            data[key].forEach((item) => {
                const col = document.createElement('div')
                col.className="col col-3 mb-3"
    
                const time = item.Vremya.slice(0, -3)
                
                const btn = document.createElement('button')
                btn.innerHTML = time
                btn.value = time
                btn.className = "btn btn-primary w-100 px-1"
                btn.dataset.id = item.Id
                btn.disabled = item.Zanyato === '1' || false
                btn.setAttribute('data-id_auditoria', key)
                btn.setAttribute('data-bs-toggle', 'modal')
                btn.setAttribute('data-bs-target', '#inputDataModal')
                
                btn.onclick = () => onTimeBtnClick(btn)
                
                col.append(btn)
                row.append(col)
            })
            
            div.append(row)
            container.append(div)
        }
    }

    let len_Zanyato = 0
    let len_buttons = 0

    for (let i in data) {
        for (let j of data[i]){
            if (j.Zanyato == 1)
                len_Zanyato ++
            len_buttons ++
        }
    }

    

    const len_data = Object.keys(data).length

    if (len_data == 0 || len_buttons == len_Zanyato) {

        const info = document.createElement('div')
        info.innerHTML = `
            <div class="alert alert-primary" role="alert">
                Нет свободных мест для записи на подачу документов
            </div>
        `
        container.append(info)
    }
    renderBtns()

    timesModal.innerHTML = ""
    timesModal.append(container)
}


const renderPhoneModal = (title, data) => {
    const modalTitle = document.querySelector('#inputDataModal .modal-title')
    modalTitle.innerHTML = title

    const passport = document.querySelector('#passport')
    const phone = document.querySelector('#phone')
    // const email = document.querySelector('#email')
    const sendSmsBtn = document.querySelector('#sendSmsBtn')
    
    passport.addEventListener('input', e => {
        state.passport = e.target.value  
    })
    
    phone.addEventListener('input', e => {
        state.phone = e.target.value  
    })

    // email.addEventListener('input', e => {
    //     state.email = e.target.value  
    // })

    sendSmsBtn.onclick = e => onSendSmsBtnClick()
}

const onSendSmsBtnClick = async () => { 
    if (state.phone && state.passport) {
        
        if (!isPhoneValid(state.phone) || !isPassportValid(state.passport)) {
            getToast('error', 'Данные введены не верно!').show()
            return
        }

        getToast('info', 'Отправка СМС на номер ' + state.phone, 3000).show()

        const res = await sendSmsReq(state.phone)

        if (!res.success) {
            getToast('error', 'Ошибка сервера!').show()
            return
        } 

        const smsConfirmBtn = document.querySelector('#smsConfirmBtn')
        const codeInput = document.querySelector('#codeInput')
        
        let smsConfirmModal = new bootstrap.Modal(document.getElementById('smsConfirmModal'))
        smsConfirmModal.show()
        
        smsConfirmBtn.onclick = (e) => {
            onSmsConfirmBtnClick()
        }
        codeInput.onchange = (e) => {
            state.codeInput = e.target.value
        }
    }
    else {
        getToast('error', 'Введите все данные!').show()
    }
    
}

const onSmsConfirmBtnClick = async () => {
    if (state.codeInput && state.codeInput.toString() === state.code.toString()) {

        const res = await saveRequest(state.selectedId, state.phone, state.passport)

        let inputDataModal = bootstrap.Modal.getInstance(document.getElementById('inputDataModal'))
        let smsConfirmModal = bootstrap.Modal.getInstance(document.getElementById('smsConfirmModal'))

        if (+res.Result === 0) {
            const timesList = await loadTimesData(state.currentDate, state.currentType.Id, state.currentFacul.Id)
            getToast('info', 'Код введен верно. Вы записаны!', 5000).show()
            await onSuccess()

            closeModals(['inputDataModal', 'smsConfirmModal']);
            clearCodeInput()
        } 
        if (+res.Result === 1) {
            const timesList = await loadTimesData(state.currentDate, state.currentType.Id, state.currentFacul.Id)
            getToast('error', 'Место уже занято!').show()

            closeModals(['inputDataModal', 'smsConfirmModal']);
            clearCodeInput()
        } 

        if (+res.Result === 2) {

            let TypeFacult = ''
            if (state.currentType.Id == 1)
                TypeFacult = 'Факультет'
            else
                TypeFacult = 'Специальность'

            if (confirm(`Вы уже записаны:\n` +
                        `Дата: ${formatDate(new Date(res.DatePreEntry))}\n`  +
                        `Время: ${(res.TimePreEntry).substr(0, 5)}\n` +
                        `Форма обучения: ${capitalizeFirstLetter(state.currentType.Name)}\n` +
                        `${TypeFacult}: ${res.FacSpec}\n` +
                        `Аудитория: ${state.id_auditoria}\n` +
                        `Хотите удалить запись?`)) {
                const response = await updateRequest(res.Id)//ID
                if (response.success) {
                    const timesList = await loadTimesData(state.currentDate, state.currentType.Id, state.currentFacul.Id)
                    getToast('info', 'Запись успешно удалена!', 5000).show()
                }
            }
        }
    }
    else {
        getToast('error', 'Введен неверный код!').show()
    }
}


const onSuccess = async() => {
    const res = await saveRequest(state.selectedId, state.phone, state.passport)
    let TypeFacult = ''
    if (state.currentType.Id == 1)
        TypeFacult = 'Факультет'
    else
        TypeFacult = 'Специальность'
    await saveRequest(state.selectedId, state.phone, state.passport);
    // await sendMailReq(state.mail);
    const modalSuccess = new bootstrap.Modal(document.getElementById('modalSuccess'));
    const modalTitle = document.querySelector("#modalSuccess .alert");
    modalTitle.innerHTML = ("Вы успешно записаны:" +
                            "<br/>Дата: " + formatDate(new Date(res.DatePreEntry)) + 
                            "<br/>Время: " + state.selectedTime + 
                            "<br/>Форма обучения: " + capitalizeFirstLetter(state.currentType.Name) + 
                            "<br/>" + TypeFacult + ": " + res.FacSpec +
                            "<br/>Аудитория: " + state.id_auditoria)
    modalSuccess.show();
    const button_success = document.querySelector('#button_success');
    button_success.onclick = () => document.location.reload();
}


const renderTimesList = (list) => {
    const data = groupByKey(list, 'Auditoria')
    let TypeFacult = ''
    if (state.currentType.Id == 1)
        TypeFacult = 'Факультет'
    else
        TypeFacult = 'Специальность'

    renderTimesModal(
        `
            Дата: ${formatDate(new Date(state.currentDate))}<br/>
            Форма обучения: ${capitalizeFirstLetter(state.currentType.Name)}<br/>
            ${TypeFacult}:  ${state.currentFacul.Name}
        `,
        data
    )
}

document.addEventListener('DOMContentLoaded', function() {
    main()
}, false);

const setDefaulValueDateInput = () => {
    const today = new Date()
    const tomorrow = new Date(today)
    tomorrow.setDate(tomorrow.getDate() + 1)

    let date = tomorrow.toISOString().substring(0, 10);

    inputDate.min = date
    inputDate.value = date
    setCurrentDate(date)
}

const setInitHandles = () => {

    // DATE CHANGE HANDLE
    inputDate.addEventListener('change', () => {
        setCurrentDate(inputDate.value)
    })

    // TYPES INPUTS CHANGE
    const typesCheckboxes = document.querySelectorAll("input[name='typeCheckbox']") 

    typesCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            state.currentType.Id = checkbox.dataset.id
            state.currentType.Name = checkbox.dataset.name
            loadFaculsByTypeId(checkbox.dataset.id)
        })
    })


}

const onMainBtnClick = async () => {
    const today = new Date()
    const tomorrow = new Date(today)
    tomorrow.setDate(tomorrow.getDate() + 1)
    tomorrow.setHours(0,0,0,0)
    
    if (new Date(state.currentDate) < tomorrow){
        getToast('error', 'Ошибка выбора даты!').show()
        return
    }
    const timesList = await loadTimesData(state.currentDate, state.currentType.Id, state.currentFacul.Id)
    new bootstrap.Modal(document.getElementById('timesModal')).show()
}

const onTimeBtnClick = (btn) => {
    state.selectedTime = btn.value
    state.selectedId = btn.dataset.id
    state.id_auditoria = btn.dataset.id_auditoria

    renderPhoneModal(`Запись на: ${formatDate(new Date(state.currentDate))} ${btn.value}<br/>Аудитория: ${state.id_auditoria}`)
}

const setBtnClickHandler = () => {
    const btn = document.querySelector('#mainBtn')
    btn.onclick = onMainBtnClick
}

async function main() {

    const {DateBeg, DateEnd} = await loadDates();

    if (DateBeg && DateEnd) {
        showContent(true)
    } else {
        showContent(false)
        return
    }
    

    setMask('phone', '+{375} 00 000-00-00')
    setMask('passport', '{HB}0000000')

    setInitHandles()
    setDefaulValueDateInput()
    const faculs = await loadFaculsByTypeId(DEFAULT_TYPE.Id)

    setBtnClickHandler()
}

function showContent(isShow) {
    const title = document.querySelector('.main-title')
    spinner.style.display = 'none'
    mainContainer.style.display = 'block'

    if (isShow) {
        title.innerHTML = `
            Предварительная запись на подачу документов в приемную комиссию ГГУ им. Ф.Скорины на период 
            с <b>${formatDate(new Date(state.dates.DateBeg))}</b>
            по <b>${formatDate(new Date(state.dates.DateEnd))}</b>
        `
    } else {
        mainContainer.innerHTML = `
            <div class="alert alert-primary" role="alert">
                Отсутствует предварительная запись на подачу документов в приемную комиссию ГГУ им. Ф.Скорины
            </div>
        `
    }
}

async function loadDates() {
    try {
        const response = await fetch('getRegDates.php')
        const json = await response.json()
        
        if (json.data.length > 0) {
            state.dates = json.data[0]
            return json.data[0]
        }
        else
            return json.data
    }
    catch (error) {
        console.error('Ошибка function loadDates:', error)
    }
}

async function loadFaculsByTypeId(typeId) {

    const url = ''
    try {
        const response = await fetch(`query.php?RadioTypeOfStady=${typeId || state.currentType.Id}`)
        const json = await response.json()
        state.faculsList = json
        renderFaculs(json)
        return json
    }
    catch (error) {
        console.error('Ошибка function loadFaculsByTypeId:', error)
    }
}

async function loadTimesData(date, typeId, faculId) {

    try {
        const response = await fetch(`query2.php?typeId=${typeId}&faculId=${faculId}&date=${date}`)
        const json = await response.json()
        state.list = json
        renderTimesList(json)
        return json
    }
    catch (error) {
        console.error('Ошибка function loadTimesData:', error)
    }
}

async function sendSmsReq(phone) {

    try {
        const response = await fetch(`query3.php?phone=${phone}`)
        const json = await response.json()
        state.code = json.code
        return json
    }
    catch (error) {
        console.error('Ошибка function sendSmsReq:', error)
    }
}

async function sendMailReq(mail) {
    try {
        const response = await fetch(`./sendMail.php?mail=${mail}`)
        const json = await response.json()
        return json
    }
    catch (error) {
        console.error('Ошибка function sendMailReq:', error)
    }
}

async function saveRequest(id, phone, passport) {

    try {
        const response = await fetch(`query4.php?id_record=${id}&phone=${phone}&pasport_number=${passport}`)
        const json = await response.json()
        state.res = json.data[0]
        return json.data[0]
    }
    catch (error) {
        console.error('Ошибка function saveRequest:', error)
    }
}

async function updateRequest(Id) {

    try {
        const response = await fetch(`queryDeleteRecord.php?Id=${Id}`)
        const json = await response.json()
        return json
    }
    catch (error) {
        console.error('Ошибка function updateRequest:', error)
    }
}

const clearCodeInput = () => {
    const codeInput = document.querySelector("#codeInput");
    codeInput.value = '';
    state.codeInput = null;
}

const closeModals = (ids) => {
    ids.forEach(id => {
        let modal = bootstrap.Modal.getInstance(document.getElementById(id))
        modal.toggle()
    })
}






// HELPERS

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function groupByKey(list, key) {
    return list.reduce((r, a) => {
        r[a[key]] = r[a[key]] || [];
        r[a[key]].push(a);
        return r;
    }, Object.create(null))
}

function formatDate(date) {
    let dd = date.getDate();
    let mm = date.getMonth() + 1;

    let yyyy = date.getFullYear();
    if (dd < 10) {
        dd = '0' + dd;
        }
        if (mm < 10) {
        mm = '0' + mm;
    }
    return (dd + '.' + mm + '.' + yyyy);
}

function setMask(id, mask) {
    IMask(document.getElementById(id), {mask});
}

function isPhoneValid(phone) {
    return /^\+375 (29|25|33|44) [0-9]{3}-[0-9]{2}-[0-9]{2}$/.test(phone)
}
function isPassportValid(passportNumber) {
    return /^(HB)[0-9]{7}$/.test(passportNumber)
}