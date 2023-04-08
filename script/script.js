const add_task_btn = document.querySelector('button')
const name_task = document.querySelector('input#name_task')

add_task_btn.addEventListener('click', add_task)

count = 0

function add_task() {
    if (name_task.value) {
        count++

        const list = document.querySelector('ul')

        const task = document.createElement('li')
        const task_content = document.createElement('p')

        const remove_btn = document.createElement('button')

        task.setAttribute('id', `${count}`)
        remove_btn.setAttribute('onclick', `remove_task(${count})`)

        task_content.innerHTML = `${name_task.value}`
        task_content.classList.add('height_paragraph')

        remove_btn.innerHTML = `<span class="material-symbols-outlined">
        delete
        </span>`
        remove_btn.classList.add('height_icon')

        task.appendChild(task_content)
        task.appendChild(remove_btn)
        list.appendChild(task)

        name_task.value = ''
        name_task.focus()
    }
}

function remove_task(id) {
    const id_task = document.getElementById(`${id}`).remove()
}
