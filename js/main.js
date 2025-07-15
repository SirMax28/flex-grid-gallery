const photoContainer = document.getElementById('photo-container');

let content = '';

for(let i=0; i<20; i++){
    content += getPhotoElement(i+1);
}

photoContainer.innerHTML = content;

function getPhotoElement(photo_id){
    return `<a href="#" class="photo"><img alt="Photo ${photo_id}" src="img/${photo_id}.jpg"></a>`;
}
