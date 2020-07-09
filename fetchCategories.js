const db = firebase.firestore();

const ImageRow = document.querySelector('.Categories');

var category= document.querySelector('.firebase');

var categoryName=category.innerText;

db.collection('SubCategories').where('tag', '==', categoryName).orderBy('Product').get().then(snapshot => {
    snapshot.docs.forEach((doc) => {
        Display(doc.data());
    });
}).catch(err => {
    console.log(err);
});

const Display = (details) => {
    let dataTitle=details.name;
    let html = `
                <div class="col-lg-4 col-md-6 col-sm-6" >
                    <div class="single-grid-product mb-40 ">
                        <div class="product-image">
                            <a href=${details.tag+details.Product}.html>
                                <img src=${details.image} alt=${details.Product} class="img-fluid fireImage">
                            </a>
                        </div>
                        <div class="product-content">
                            <h3 class="title"> 
                            <a href=${details.tag+details.Product}.html>${details.Product}</a></h3>
                        </div>
                    </div>
                </div>
                
            `;
    //addImages(details.name);
    ImageRow.innerHTML += html;
}
