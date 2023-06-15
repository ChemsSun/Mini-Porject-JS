/* "The 'quote' function is associated with a click event.
It retrieves quotes from the 'quoteDB' array, which contains each quote along with its author,
 and then displays the result to the user. I have used a random to ensure that the result is randomized."*/
function quote(){
    var content = document.getElementsByClassName("answer");
    answer.innerHTML = ""; //clear the content
  
   
    var randomIndex = Math.floor(Math.random() * quoteDB.length);
    var quoteData = quoteDB[randomIndex];

    var phrase = document.createElement("h3"); //create element h3 fore quote 
    var q=document.createElement("h2");//Title
    q.innerText="Quote :";
    q.id="quot";

    var auth = document.createElement("h3");//create element h3 for name of authore
    var a=document.createElement("h2");//Title
    a.innerText="Author :";
    a.id="aut";

    phrase.innerText =quoteData.quote;//bring quote from DB
    auth.innerText = quoteData.Auteur;//bring authore from DB
    auth.id="auth"
    
    var plus=document.createElement("div");
    plus.classList.add("plus");

    var but=document.createElement("button")
    var like=document.createElement("img");
    like.setAttribute("src","/img/like.svg")
    var favorite=document.getElementById("fav");
    but.addEventListener("click",function(){      //favorite function such that when the user likes the quote he puts it in the list of favorites
        var addFivorite=document.createElement("li");
        addFivorite.textContent=phrase.innerText;
        favorite.appendChild(addFivorite);
        
    })
    
    var more=document.createElement("a");
    more.innerText="more";
    more.addEventListener("click",function(){ //Read more quotes by clicking in the button "more"
        quote();
    })
    
    but.appendChild(like);

    answer.appendChild(q);
    answer.appendChild(phrase);
    answer.appendChild(a);
    answer.appendChild(auth);

    plus.appendChild(but);
    plus.appendChild(more);
    
    answer.appendChild(plus);
}



