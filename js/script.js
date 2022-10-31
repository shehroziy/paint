const canvas = document.querySelector("canvas")

let ctx = canvas.getContext("2d"),
    isDrawing = false

window.addEventListener("load", ()=>{
    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight
})

const startDraw = ()=>{
    isDrawing = true
}

const drawing = (e)=>{
    if(!isDrawing) return
    ctx.lineTo(e.offsetX, e.offsetY)
    ctx.stroke()
}

const stopDraw = ()=>{
    isDrawing = false
}

canvas.addEventListener("mousedown", startDraw)
canvas.addEventListener("mousemove", drawing)
canvas.addEventListener("mouseup", stopDraw)