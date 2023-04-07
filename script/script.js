let add_task_btn = document.querySelector('button')
let name_task = document.querySelector('input#name_task')

add_task_btn.addEventListener('click', add_task)

count = 0

function add_task() {
    if (name_task.value) {
        count++

        let list = document.querySelector('ul')

        let task = document.createElement('li')

        let remove_btn = document.createElement('button')

        task.setAttribute('id', `${count}`)
        remove_btn.setAttribute('onclick', `remove_task(${count})`)

        task.innerHTML = `${name_task.value}`
        remove_btn.innerHTML = `<span class="material-symbols-outlined">
        delete
        </span>`

        task.appendChild(remove_btn)
        list.appendChild(task)


        name_task.value = ''
        name_task.focus()
    }
}

function remove_task(id) {
    let id_task = document.getElementById(`${id}`).remove()
}