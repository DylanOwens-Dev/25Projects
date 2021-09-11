var boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes() {
    const triggerBtm = window.innerHeight / 5 * 4

    boxes.forEach(box => {
        var top = box.getBoundingClientRect().top

        if (top < triggerBtm) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    });
}