let galleryContainer = document.getElementById("galleryContainer");

async function getData(){
    const getJson = await fetch("../javascripts/gallery.json");
    const data = await getJson.json();


    for(let i = 0; i < data.gallery.length; i++){

        let galleryWrapper = document.createElement("div");
        galleryWrapper.setAttribute("id", "galleryWrapper");
        galleryWrapper.setAttribute("class", "gallery-wrapper");

        let galleryImage = document.createElement("img");
        galleryImage.src = data.gallery[i].img;
        galleryImage.setAttribute("id", data.gallery[i].img);
        galleryImage.setAttribute("class", "gallery-image");

        let galleryName = document.createElement("h1");
        galleryName.src = data.gallery[i].name;
        galleryName.setAttribute("id", data.gallery[i].name);
        galleryName.setAttribute("class", "gallery-name");
        galleryName.textContent = data.gallery[i].name;

        let galleryDescription = document.createElement("p");
        galleryDescription.src = data.gallery[i].description;
        galleryDescription.setAttribute("id", data.gallery[i].description);
        galleryDescription.setAttribute("class", "gallery-description");
        galleryDescription.textContent = data.gallery[i].description;

        galleryContainer.appendChild(galleryWrapper);
        galleryWrapper.appendChild(galleryName);
        galleryWrapper.appendChild(galleryImage);
        galleryWrapper.appendChild(galleryDescription);


    }
}


getData();