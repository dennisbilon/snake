let inputDirection = { x: 0, y:0 }
let lastInputDirection = { x: 0, y:0 }

window.addEventListener('keydown',e => {
    switch (e.key) {
        case ('ArrowUp' || 'w'):
            if (lastInputDirection.y !== 0) break
            inputDirection = { x: 0, y: -1 }
            break
        case ('ArrowDown' || 's'):
            if (lastInputDirection.y !== 0) break
            inputDirection = { x: 0, y: 1 }
            break
        case ('ArrowLeft' || 'd'):
            if (lastInputDirection.x !== 0) break
            inputDirection = { x: -1, y: 0 }
            break
        case ('ArrowRight' || 'a'):
            if (lastInputDirection.x !== 0) break
            inputDirection = { x: 1, y: 0 }
            break
    }
})

export function getInputDirection() {
    lastInputDirection = inputDirection
    return inputDirection
}