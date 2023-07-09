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
      data-source="${original}"
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
    
    const instance = basicLightbox.create(`
   <img
      class="gallery__image"
        src="${evt.target.dataset.source}"
    />
  `, {
        onShow: () =>{ window.addEventListener('keydown', onEscapeDown) },
        onClose: () => { window.removeEventListener('keydown', onEscapeDown)}
  });
  instance.show();
    

function onEscapeDown(evt) { 
    console.log(evt.code)
    if (evt.code === "Escape")
        instance.close();
}
}


