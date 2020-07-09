const db = firebase.firestore();

const ImageRow = document.querySelector('.row-img');


var category= document.querySelector('.firebase');

var SubCategory= document.querySelector('.sub');

var categoryName=category.innerText;

var SubCategoryName=SubCategory.innerText;

db.collection('Furniture').where('Category', '==', categoryName).where('SubCategory', '==',SubCategoryName).orderBy('ProductName').get().then(snapshot => {
    snapshot.docs.forEach((doc) => {
        Display(doc.data());
    });
}).catch(err => {
    console.log(err);
});

//lighthouse- lokesh
// <a href="assets/images/image1.jpg" data-lightbox="image-1" data-title="My caption"><img src="assets/thumbnails/thumb1.jpg" alt="Surfing"/>
// </a>

//<div>Name: ${location.name || location.FORMATTED} </div>
const Display = (details) => {
    let dataTitle=details.name;
    let html = `
                <div class="col-lg-4 col-md-6 col-sm-6" >
                    <div class="single-grid-product mb-40 ">
                        <div class="product-image zoom">
                            <a href=${details.url} data-lightbox="collection">
                                <img src=${details.url} alt=${details.name} class="img-fluid fireImage">
                            </a>
                        </div>
                        <div class="product-content">
                            <h3 class="title"> 
                            <a href="single-product.html">${details.ProductName}</a></h3>
                            <p class="product-price"><span
                                class="discounted-price">${details.ProductCode}</span>
                            </p>
                        </div>
                    </div>
                </div>
                
            `;
    //addImages(details.name);
    ImageRow.innerHTML += html;
}

/*
let divByname = document.querySelector('.' + refName[0] + refName[1])
var aTag = document.createElement('a');

aTag.innerHTML = `<img src=${url} alt"">`;
aTag.target = '_blank';
aTag.href = url;
aTag.title = 'Image'
console.log(aTag)
divByname.appendChild(aTag);
*/