var changeDevourBtn = document.querySelectorAll(".change-devour")


for (let i = 0; i < changeDevourBtn.length; i++) {
    
    changeDevourBtn[i].addEventListener("click", function( ){
         var id= this.getAttribute("data-id")

         var data= {
             devoured: 1
         }
         console.log(data, id)
         fetch('/api/burger/'+id, {
            method: 'PUT', // or 'PUT'
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          })
          .then(function(response) {response.json()})
          .then(data => {
             location.reload()
          })
          .catch((error) => {
            console.error('Error:', error);
          });

    })
}