/*This is for the starting window.The JSON that is returned is mentioning a country's neighboring
countries by their 3 letter code. Which in fact can be confusing.So what i'm doing in here
is that i'm getting the names and alpa3codes of EVERY country there is, and im storing thme into the sessionStorage.
Then every time i want to look for AFG, i will just get the "AFG" item from the sessionStorage, which will
return Afghanistan.*/
window.addEventListener('DOMContentLoaded', function () {
    initializeCheckboxes();//we use this because every time i submited a query, the selected user input would get refreshed and 
    //the user's preferences would get lost, we don't want that.
    //Please note that checkbox status is ONLY saved after the query is submited.
    if(sessionStorage.getItem("GRC")==null)//if GRC = null then it means that this request was never done.
    //if it is not null then it means that it's been done, so no need to stress the connection by another HTTP query
    {
        var xhttp=new XMLHttpRequest();
        xhttp.onreadystatechange= function(){
            if(this.readyState==4 && this.status==200)
            {
                var x = JSON.parse(this.responseText);
                for(i=0;i<x.length;i++)
                {
                    sessionStorage.setItem(x[i]["alpha3Code"],x[i]["name"]);
                }
            }
        };
        xhttp.open("GET","https://restcountries.eu/rest/v2/all?fields=alpha3Code;name",true);
        xhttp.send();
    }

});


function initializeCheckboxes()
{    
    var temp=sessionStorage.getItem("population");
    var temp2 = document.getElementById("population");
    if(temp==null) temp2.checked=true;//default button behavior
    if(temp=="true") temp2.checked=true;//behavior if the user has changed it
    else if(temp=="false") temp2.checked=false;//behavior if the user has changed it

    temp=sessionStorage.getItem("demonym");
    temp2 = document.getElementById("demonym");
    if(temp==null) temp2.checked=false;//default button behavior
    if(temp=="true") temp2.checked=true;//behavior if the user has changed it
    else if(temp=="false") temp2.checked=false;//behavior if the user has changed it

    temp=sessionStorage.getItem("capital");
    temp2 = document.getElementById("capital");
    if(temp==null) temp2.checked=true;//default button behavior
    if(temp=="true") temp2.checked=true;//behavior if the user has changed it
    else if(temp=="false") temp2.checked=false;//behavior if the user has changed it

    temp=sessionStorage.getItem("languages");
    temp2 = document.getElementById("languages");
    if(temp==null) temp2.checked=true;//default button behavior
    if(temp=="true") temp2.checked=true;//behavior if the user has changed it
    else if(temp=="false") temp2.checked=false;//behavior if the user has changed it

    temp=sessionStorage.getItem("borders");
    temp2 = document.getElementById("borders");
    if(temp==null) temp2.checked=false;//default button behavior
    if(temp=="true") temp2.checked=true;//behavior if the user has changed it
    else if(temp=="false") temp2.checked=false;//behavior if the user has changed it

    temp=sessionStorage.getItem("currencies");
    temp2 = document.getElementById("currencies");
    if(temp==null) temp2.checked=true;//default button behavior
    if(temp=="true") temp2.checked=true;//behavior if the user has changed it
    else if(temp=="false") temp2.checked=false;//behavior if the user has changed it

    temp=sessionStorage.getItem("latlng");
    temp2 = document.getElementById("latlng");
    if(temp==null) temp2.checked=false;//default button behavior
    if(temp=="true") temp2.checked=true;//behavior if the user has changed it
    else if(temp=="false") temp2.checked=false;//behavior if the user has changed it

    temp=sessionStorage.getItem("area");
    temp2 = document.getElementById("area");
    if(temp==null) temp2.checked=false;//default button behavior
    if(temp=="true") temp2.checked=true;//behavior if the user has changed it
    else if(temp=="false") temp2.checked=false;//behavior if the user has changed it

    temp=sessionStorage.getItem("regionalBlocs");
    temp2 = document.getElementById("regionalBlocs");
    if(temp==null) temp2.checked=false;//default button behavior
    if(temp=="true") temp2.checked=true;//behavior if the user has changed it
    else if(temp=="false") temp2.checked=false;//behavior if the user has changed it

    temp=sessionStorage.getItem("flag");
    temp2 = document.getElementById("flag");
    if(temp==null) temp2.checked=true;//default button behavior
    if(temp=="true") temp2.checked=true;//behavior if the user has changed it
    else if(temp=="false") temp2.checked=false;//behavior if the user has changed it

    temp=sessionStorage.getItem("gini");
    temp2 = document.getElementById("gini");
    if(temp==null) temp2.checked=false;//default button behavior
    if(temp=="true") temp2.checked=true;//behavior if the user has changed it
    else if(temp=="false") temp2.checked=false;//behavior if the user has changed it
    
    temp=sessionStorage.getItem("numericCode");
    temp2 = document.getElementById("numericCode");
    if(temp==null) temp2.checked=false;//default button behavior
    if(temp=="true") temp2.checked=true;//behavior if the user has changed it
    else if(temp=="false") temp2.checked=false;//behavior if the user has changed it

    temp=sessionStorage.getItem("topLevelDomain");
    temp2 = document.getElementById("topLevelDomain");
    if(temp==null) temp2.checked=false;//default button behavior
    if(temp=="true") temp2.checked=true;//behavior if the user has changed it
    else if(temp=="false") temp2.checked=false;//behavior if the user has changed it

    temp=sessionStorage.getItem("region");
    temp2 = document.getElementById("region");
    if(temp==null) temp2.checked=true;//default button behavior
    if(temp=="true") temp2.checked=true;//behavior if the user has changed it
    else if(temp=="false") temp2.checked=false;//behavior if the user has changed it
}