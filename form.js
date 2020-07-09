
const form= document.querySelector('.btn-submit');
form.addEventListener('click', function (e) {
    e.preventDefault();
    let Name = $('#name').val();
    let Email = $('#email').val();

    let Address = $('#address').val();

    let Phone= $('#phone').val();

    let Code= $('#code').val();

    let Company=$('#company').val();

    let Message=$('#message').val();
    //let Category = $('#category').val();
    
    console.log({Name,Email,Address,Phone,Code,Company,Message});

    const db= firebase.firestore();
    let obj={Name,Email,Address,Phone,Code,Company,Message};
    
    db.collection('ContactForm').doc().set(obj).then(() => {
         console.log("Uploaded to firestore") 
    })
    .catch((e) => {
        console.log(e);
        alert('Something went wrong from your side.')
    });
 })

