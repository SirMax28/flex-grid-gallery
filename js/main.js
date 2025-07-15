const photoContainer = document.getElementById('photo-container');

photoContainer.innerHTML = getPhotoElement(1);

function getPhotoElement(photo_id){
    return `<a href="#" class="photo">
    <img alt="Photo ${photo_id}" src="img/${photo_id}.jpg"></a>`;
}