const showAllMenuButton = document.getElementById('v-pills-home-tab')

const drinkMenuButton = document.getElementById('v-pills-profile-tab')

const rollsMenuButton = document.getElementById('v-pills-messages-tab')

const platillosMenuButton = document.getElementById('v-pills-settings-tab')

showAllMenuButton.addEventListener('click', (e) => {
    e.preventDefault()

    document.querySelectorAll('.lunch').forEach(items => {
        if(items.classList.contains('hidden'))
            items.classList.remove('hidden')
    })

    document.querySelectorAll('.drinks').forEach(items => {
        if(items.classList.contains('hidden'))
            items.classList.remove('hidden')
    })

    document.querySelectorAll('.dinner').forEach(items => {
        if(items.classList.contains('hidden'))
            items.classList.remove('hidden')
    })
})

drinkMenuButton.addEventListener('click', (e) => {
    e.preventDefault()

    document.querySelectorAll('.drinks').forEach(item => {
        if(item.classList.contains('hidden'))
            item.classList.remove('hidden')
    })

    document.querySelectorAll('.lunch').forEach(item => {
        item.classList.add('hidden')
    })

    document.querySelectorAll('.dinner').forEach(item => {
        item.classList.add('hidden')
    })
})

rollsMenuButton.addEventListener('click',(e) => {
    e.preventDefault()

    document.querySelectorAll('.lunch').forEach(item => {
        if(item.classList.contains('hidden'))
            item.classList.remove('hidden')
    })

    document.querySelectorAll('.drinks').forEach(item => {
        item.classList.add('hidden')
    })

    document.querySelectorAll('.dinner').forEach(item => {
        item.classList.add('hidden')
    })
})

platillosMenuButton.addEventListener('click', (e) => {
    e.preventDefault()

    document.querySelectorAll('.dinner').forEach(item => {
        if(item.classList.contains('hidden'))
            item.classList.remove('hidden')
    })

    document.querySelectorAll('.lunch').forEach(item => {
        item.classList.add('hidden')
    })

    document.querySelectorAll('.drinks').forEach(item => {
        item.classList.add('hidden')
    })
})

