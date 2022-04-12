//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM

    document.querySelector('button').addEventListener('click',getActivity)
    function getActivity (){
      //  let getAddress =document.querySelector('input').value
     fetch("https://www.boredapi.com/api/activity")
        .then(res => res.json()) // parse response as JSON
        .then(data => {
          console.log(data)
        document.querySelector ('h2').innerText =data.activity
       document.querySelector ('p').innerText =data.participants
        document.querySelector ('h4').innerText =data.price
        })
        .catch(err => {
            console.log(`error ${err}`)
        });   
    
    } 