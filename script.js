const container = document.querySelector('.container')
const newBtn = document.querySelector('button')

newBtn.addEventListener('click', () => {
    size = prompt('Grid size ? (max = 100)')
    Number(size)
    if (size > 100) {
        size = 100
    }
    container.innerHTML = ''
    drawGrid(size)
})

let size = 16

function drawGrid(size) {
    let pxSize = 720 / size;
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            const element = document.createElement('div')
            element.style.boxSizing = 'border-box'
            element.style.width = `${pxSize}px`
            element.style.height = `${pxSize}px`
            element.style.backgroundColor = 'white'
            element.style.opacity = '0.4'
            element.style.border = '1px solid black' 
            container.appendChild(element)
        } 
    }
}

drawGrid(size)


container.addEventListener('mouseover', (event) => {
    let target = event.target
    if (target.style.backgroundColor === 'white') {
        const r = Math.floor(Math.random() * 255)
        const g = Math.floor(Math.random() * 255)
        const b = Math.floor(Math.random() * 255)
        target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
    }
    else {
        target.style.opacity = `${Number(target.style.opacity) + 0.05}`
        
    }
    
})


// element.addEventListener('mouseover', () => {
//     const r = Math.floor(Math.random() * 255)
//     const g = Math.floor(Math.random() * 255)
//     const b = Math.floor(Math.random() * 255)

//     element.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
// })