import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);



const listEl = document.querySelector('.gallery');
listEl.insertAdjacentHTML('beforeend', createMarkUp(galleryItems));

listEl.addEventListener('click', handlerClick);


function createMarkUp(arr) { 
    return arr.map(({preview, original, description}) =>`
    <li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
        src="${preview}"
      alt="${description}"
      width=1200"
      height="800"
    />
  </a>
</li>`).join('');
}



function handlerClick(evt) { 
     evt.preventDefault();
    if (!evt.target.classList.contains("gallery__image"))
        return;
    
    const simple = new SimpleLightbox('.gallery__link',
        {
            captionData: 'alt',
        captionDelay: 250});       
}


