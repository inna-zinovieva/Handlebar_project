var ourRequest = new XMLHttpRequest();
ourRequest.open("GET", 'http://localhost:3000/json/test.json');
ourRequest.onload = function (){
    if(ourRequest.status >= 200 && ourRequest.status < 400){
         var data = JSON.parse(ourRequest.responseText);
         createHTML(data);
    } else {
        console.log("we connected to server, but it returned an error.");
    }
};
ourRequest.onerror = function () {
    console.log("connection error");
};
 ourRequest.send();

 function createHTML (catsData){
        var fullTemplate= document.getElementById("catsTemplate").innerHTML;
        var compiledTemplate = Handlebars.compile(fullTemplate);
        var ourGeneratedHTML = compiledTemplate(catsData);

        var catsContainer = document.getElementById("cats-container");
        catsContainer.innerHTML = ourGeneratedHTML;
 }

 Handlebars.registerHelper("calculateAge", function(birthYear){
     var age = new Date().getFullYear() - birthYear;

     if(age>0) {
         return age + ' years old';
     } else{
         return "Less then a year old";
     }
     
 });