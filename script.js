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
    let pxSize = 860 / size;
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            const element = document.createElement('div')
            element.style.width = `${pxSize}px`
            element.style.height = `${pxSize}px`
            container.appendChild(element)
            element.addEventListener('mouseover', () => {
                element.style.backgroundColor = 'aqua'
            })
        } 
    }
}

drawGrid(size)