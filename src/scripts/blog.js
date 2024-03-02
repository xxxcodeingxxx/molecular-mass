const scrBlk = document.getElementById('screenBlock')
const b1 = document.getElementById('box_1')
const b2 = document.getElementById('box_2')
const b3 = document.getElementById('box_3')
const b4 = document.getElementById('box_4')
const b5 = document.getElementById('box_5')
const b6 = document.getElementById('box_6')
const closer = document.getElementById('closeBtn')

b1.addEventListener('click', () => {
    scrBlk.classList.remove('hidden')
    scrBlk.classList.add('bg-indigo-300')
})

b2.addEventListener('click', () => {
    scrBlk.classList.remove('hidden')
    scrBlk.classList.add('bg-amber-300')
})

b3.addEventListener('click', () => {
    scrBlk.classList.remove('hidden')
    scrBlk.classList.add('bg-sky-300')
})

b4.addEventListener('click', () => {
    scrBlk.classList.remove('hidden')
    scrBlk.classList.add('bg-rose-300')
})

b5.addEventListener('click', () => {
    scrBlk.classList.remove('hidden')
    scrBlk.classList.add('bg-lime-300')
})

b6.addEventListener('click', () => {
    scrBlk.classList.remove('hidden')
    scrBlk.classList.add('bg-blue-300')
})

closer.addEventListener('click', () => {
    location.href = '/blog'
})
