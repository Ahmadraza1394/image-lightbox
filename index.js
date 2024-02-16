// //creating element
// const lightbox = document.createElement('div')
// lightbox.id = 'lightbox'  //id of new created element
// document.body.appendChild(lightbox)  //adding element in the body
// const images = document.querySelectorAll('img')
// //loop over all images
// images.forEach(image => {
//     image.addEventListener('click', e => {
//         lightbox.classList.add('active')
//         const img = document.createElement('img')
//         img.src = image.src;
//         while (lightbox.firstChild) {
//             lightbox.removeChild(lightbox.firstChild)
//         }
//         lightbox.appendChild(img)
//     })
// })
// //in order to remove the lightbox image by clicking elsewhere except on image
// lightbox.addEventListener('click', e => {
//     if (e.target !== e.currentTarget) return
//     lightbox.classList.remove('active')
// })
const lightbox1 = document.createElement('div')
lightbox1.id = "lightbox"
document.body.appendChild(lightbox1)
const images1 = document.querySelectorAll('img')
images1.forEach(image1 => {
    image1.addEventListener('click', e => {
        lightbox1.classList.add('active')
        const img1 = document.createElement('img')
        img1.src = image1.src
        while (lightbox1.firstChild) {
            lightbox1.removeChild(lightbox1.firstChild)
        }
        lightbox1.appendChild(img1)
    })
})
lightbox1.addEventListener('click', e => {
    if (e.target !== e.currentTarget) return
    lightbox1.classList.remove('active')
}) 