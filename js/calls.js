/*The window that's loading is a new window which contains the results of our query.
We've passed the research arguments by using the sessionManager, so the first thing to do
is extract the search parameters from the session manager, and regarding to what we extract
we'll make the according query*/
window.addEventListener('DOMContentLoaded', function () {
    
    var x=createFilterString();
    switch(sessionStorage.getItem("mode")){
        case "all":
            http_all();
            break;
        case "byCall":
            http_by_call();
            break;
        case "byCapital":
            http_by_capital();
            break;
        case "byCode":
            http_by_code();
            break;
        case "byCurrency":
            http_by_currency();
            break;
        case "byLanguage":
            http_by_language();
            break;
        case "byName":
            http_by_name();
            break;
        case "byRegion":
            http_by_region();
            break;
        case "byRegblock":
            http_by_regblock();
            break;
    }
});

/*This is the http request to get all the countries,in case we get a 404,400,200 status,every
possible response is predicted.Then we call get in order to actually print the data that 
the GET request returns on the website.*/
function http_all(){
    var xhttp=new XMLHttpRequest();
    xhttp.onreadystatechange= function(){
        if(this.readyState==4 && this.status==200)
        {
            get(this);
        }
        else if(this.readyState==4 && (this.status==404 || this.status==400))
        {
            error();
        }
    };
    xhttp.open("GET","https://restcountries.eu/rest/v2/all"+createFilterString(),true);
    xhttp.send();
}

/*This is the http request to get all the countries that have a certain call code,in case we get a 404,400,200 status,every
possible response is predicted.Then we call get in order to actually print the data that 
the GET request returns on the website.*/
function http_by_call(){
    var xhttp=new XMLHttpRequest();
    xhttp.onreadystatechange= function(){
        if(this.readyState==4 && this.status==200)
        {  
            get(this);
            sessionStorage.removeItem("byCall");
        }
        else if(this.readyState==4 && (this.status==404 || this.status==400))
        {
            error();
        }
    };
    xhttp.open("GET","https://restcountries.eu/rest/v2/callingcode/"+sessionStorage.getItem("byCall"),true);
    xhttp.send();
}

/*This is the http request to get the country with a certain capital,in case we get a 404,400,200 status,every
possible response is predicted.Then we call get in order to actually print the data that 
the GET request returns on the website.*/
function http_by_capital(){
    var xhttp=new XMLHttpRequest();
    xhttp.onreadystatechange= function(){
        if(this.readyState==4 && this.status==200)
        {
            get(this);
            sessionStorage.removeItem("byCapital");
        }
        else if(this.readyState==4 && (this.status==404 || this.status==400))
        {
            error();
        }
    };
    xhttp.open("GET","https://restcountries.eu/rest/v2/capital/"+sessionStorage.getItem("byCapital"),true);
    xhttp.send();
}

/*This is the http request to get the country with a specific country code,in case we get a 404,400,200 status,every
possible response is predicted.Then we call get in order to actually print the data that 
the GET request returns on the website.*/
function http_by_code(){
    var xhttp=new XMLHttpRequest();
    xhttp.onreadystatechange= function(){
        if(this.readyState==4 && this.status==200)
        {          
            get(this);
            sessionStorage.removeItem("byCode");
        }
        else if(this.readyState==4 && (this.status==404 || this.status==400))
        {
            error();
        }
    };
    xhttp.open("GET","https://restcountries.eu/rest/v2/alpha?codes="+sessionStorage.getItem("byCode"),true);
    xhttp.send();
}

/*This is the http request to get all the countries that have a specific currency,in case we get a 404,400,200 status,every
possible response is predicted.Then we call get in order to actually print the data that 
the GET request returns on the website.*/
function http_by_currency(){
    var xhttp=new XMLHttpRequest();
    xhttp.onreadystatechange= function(){
        if(this.readyState==4 && this.status==200)
        {
            get(this);
            sessionStorage.removeItem("byCurrency");
        }
        else if(this.readyState==4 && (this.status==404 || this.status==400))
        {
            error();
        }
    };
    xhttp.open("GET","https://restcountries.eu/rest/v2/currency/"+sessionStorage.getItem("byCurrency"),true);
    xhttp.send();
}

/*This is the http request to get all the countries that have a specific language,in case we get a 404,400,200 status,every
possible response is predicted.Then we call get in order to actually print the data that 
the GET request returns on the website.*/
function http_by_language(){
    var xhttp=new XMLHttpRequest();
    xhttp.onreadystatechange= function(){
        if(this.readyState==4 && this.status==200)
        {
            get(this);
            sessionStorage.removeItem("byLanguage");
        }
        else if(this.readyState==4 && (this.status==404 || this.status==400))
        {
            error();
        }
    };
    xhttp.open("GET","https://restcountries.eu/rest/v2/lang/"+sessionStorage.getItem("byLanguage"),true);
    xhttp.send();
}

/*This is the http request to get the countries that contain or have a certain name,in case we get a 404,400,200 status,every
possible response is predicted.Then we call get in order to actually print the data that 
the GET request returns on the website.*/
function http_by_name(){
    var xhttp=new XMLHttpRequest();
    xhttp.onreadystatechange= function(){
        if(this.readyState==4 && this.status==200)
        {
            get(this);
            sessionStorage.removeItem("byName");
        }
        else if(this.readyState==4 && (this.status==404 || this.status==400))
        {
            error();
        }
    };
    xhttp.open("GET","https://restcountries.eu/rest/v2/name/"+sessionStorage.getItem("byName"),true);
    xhttp.send();
}

/*This is the http request to get all the countries that belong to a region,in case we get a 404,400,200 status,every
possible response is predicted.Then we call get in order to actually print the data that 
the GET request returns on the website.*/
function http_by_region(){
    var xhttp=new XMLHttpRequest();
    xhttp.onreadystatechange= function(){
        if(this.readyState==4 && this.status==200)
        {
            get(this);
            sessionStorage.removeItem("byRegion");
        }
        else if(this.readyState==4 && (this.status==404 || this.status==400))
        {
            error();
        }
    };
    xhttp.open("GET","https://restcountries.eu/rest/v2/region/"+sessionStorage.getItem("byRegion"),true);
    xhttp.send();
}

/*This is the http request to get all the countries that belong to a regional bloc,in case we get a 404,400,200 status,every
possible response is predicted.Then we call get in order to actually print the data that 
the GET request returns on the website.*/
function http_by_regblock(){
    var xhttp=new XMLHttpRequest();
    xhttp.onreadystatechange= function(){
        if(this.readyState==4 && this.status==200)
        {
            get(this);
            sessionStorage.removeItem("byRegblock");
        }
        else if(this.readyState==4 && (this.status==404 || this.status==400))
        {
            error();
        }
    };
    xhttp.open("GET","https://restcountries.eu/rest/v2/regionalbloc/"+sessionStorage.getItem("byRegblock"),true);
    xhttp.send();
}

/*This function affects which parameters will be returned from the http request we make.
I could've not implemented this, and the json result file would contain all fields, which is SLOW.
In case you haven't noticed, in the search page i have some checkboxes, if the box is checked then that
means that we want this parameter to be returned.So what this function does, is check the sessionStorage
to see if the checkboxes are checked/unchecked. If they're checked,we use them to make a string out of
these parameters so that the API can know what to return.Also, the check/uncheck condition of the box
is stored in the sessionStorage the moment we try to open this new tab, by using a function in anoher js file.
NOTE: sessionStorage saves things in a string format, so instead of comparing 2 booleans, i compare 2 strings */
function createFilterString()
{
    var filter_string="?fields=name;alpha3Code;nativeName;";
    if(sessionStorage.getItem("population")=="true") filter_string=filter_string + "population;";
    if(sessionStorage.getItem("capital")=="true") filter_string=filter_string + "capital;";
    if(sessionStorage.getItem("demonym")=="true") filter_string=filter_string + "demonym;";
    if(sessionStorage.getItem("languages")=="true") filter_string=filter_string + "languages;";
    if(sessionStorage.getItem("borders")=="true") filter_string=filter_string + "borders;";
    if(sessionStorage.getItem("currencies")=="true") filter_string=filter_string + "currencies;";
    if(sessionStorage.getItem("latlng")=="true") filter_string=filter_string + "latlng;";
    if(sessionStorage.getItem("area")=="true") filter_string=filter_string + "area;";
    if(sessionStorage.getItem("flag")=="true") filter_string=filter_string + "flag;";
    if(sessionStorage.getItem("regionalBlocs")=="true") filter_string=filter_string + "regionalBlocs;";
    if(sessionStorage.getItem("gini")=="true") filter_string=filter_string + "gini;";
    if(sessionStorage.getItem("numericCode")=="true") filter_string=filter_string + "numericCode;";
    if(sessionStorage.getItem("region")=="true") filter_string=filter_string + "region;";
    if(sessionStorage.getItem("topLevelDomain")=="true") filter_string=filter_string + "topLevelDomain;";

    return filter_string;
}

