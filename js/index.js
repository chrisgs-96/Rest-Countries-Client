/*Starts the procedure to return all countries, the item "mode" is setted in the sessionStorage,
so that it can inform the window that we open that it has to look for certain mode in the API*/
function getAllCountries()
{
    sessionStorage.setItem("mode","all");
    setCheckboxValues();
    window.open("html/result.html");
}

/*Starts the procedure to return countries, the item "mode" is setted in the sessionStorage,
so that it can inform the window that we open that it has to look for certain mode in the API*/
function getByName(){
    var x= document.getElementById("by_name_argument").value;
    sessionStorage.setItem("byName",x);
    sessionStorage.setItem("mode","byName");
    setCheckboxValues();
    window.open("html/result.html");
}

/*Starts the procedure to return countries, the item "mode" is setted in the sessionStorage,
so that it can inform the window that we open that it has to look for certain mode in the API*/
function getByCode(){
    var x= document.getElementById("by_code_argument").value;
    var y = x.replace(/\s\s+/g," ");
    y = y.replace(/\s/g,";");
    sessionStorage.setItem("byCode",y);
    sessionStorage.setItem("mode","byCode");
    setCheckboxValues();
    window.open("html/result.html");
}

/*Starts the procedure to return countries, the item "mode" is setted in the sessionStorage,
so that it can inform the window that we open that it has to look for certain mode in the API*/
function getByCurrency(){
    var x = document.getElementById("by_currency_argument").value;
    sessionStorage.setItem("byCurrency",x);
    sessionStorage.setItem("mode","byCurrency");
    setCheckboxValues();
    window.open("html/result.html");
}

/*Starts the procedure to return countries, the item "mode" is setted in the sessionStorage,
so that it can inform the window that we open that it has to look for certain mode in the API*/
function getByLanguage(){
    var x = document.getElementById("by_language_argument").value;
    sessionStorage.setItem("byLanguage",x);
    sessionStorage.setItem("mode","byLanguage");
    setCheckboxValues();
    window.open("html/result.html");
}

/*Starts the procedure to return countries, the item "mode" is setted in the sessionStorage,
so that it can inform the window that we open that it has to look for certain mode in the API*/
function getByCapital(){
    var x = document.getElementById("by_capital_argument").value;
    sessionStorage.setItem("byCapital",x);
    sessionStorage.setItem("mode","byCapital");
    setCheckboxValues();
    window.open("html/result.html");
}

/*Starts the procedure to return countries, the item "mode" is setted in the sessionStorage,
so that it can inform the window that we open that it has to look for certain mode in the API*/
function getByRegion(){
    var x = document.getElementById("by_region_argument").value;
    sessionStorage.setItem("byRegion",x);
    sessionStorage.setItem("mode","byRegion");
    setCheckboxValues();
    window.open("html/result.html");
}

/*Starts the procedure to return countries, the item "mode" is setted in the sessionStorage,
so that it can inform the window that we open that it has to look for certain mode in the API*/
function getByCallcode(){
    var x = document.getElementById("by_callcode_argument").value;
    sessionStorage.setItem("byCall",x);
    sessionStorage.setItem("mode","byCall");
    setCheckboxValues();
    window.open("html/result.html");
}

/*Starts the procedure to return countries, the item "mode" is setted in the sessionStorage,
so that it can inform the window that we open that it has to look for certain mode in the API*/
function getByRegionalBlock(){
    var x = document.getElementById("by_regblock_argument").value;
    sessionStorage.setItem("byRegblock",x);
    sessionStorage.setItem("mode","byRegblock");
    setCheckboxValues();
    window.open("html/result.html");
}

/*Checks the checkboxes to see whether they're checked or not. If they're checked we store True in the sessionStorage, if they're not we 
store false. This is used in order for the query to know which parameters to return, which will help in making the whole json download 
much faster, since usually most fields aren't needed.*/
function setCheckboxValues()
{
    if(document.getElementById("population").checked) sessionStorage.setItem("population",true); else sessionStorage.setItem("population",false);
    if(document.getElementById("capital").checked) sessionStorage.setItem("capital",true); else sessionStorage.setItem("capital",false);
    if(document.getElementById("demonym").checked) sessionStorage.setItem("demonym",true); else sessionStorage.setItem("demonym",false);
    if(document.getElementById("languages").checked) sessionStorage.setItem("languages",true); else sessionStorage.setItem("languages",false);
    if(document.getElementById("borders").checked) sessionStorage.setItem("borders",true); else sessionStorage.setItem("borders",false);
    if(document.getElementById("currencies").checked) sessionStorage.setItem("currencies",true); else sessionStorage.setItem("currencies",false);
    if(document.getElementById("latlng").checked) sessionStorage.setItem("latlng",true); else sessionStorage.setItem("latlng",false);
    if(document.getElementById("area").checked) sessionStorage.setItem("area",true); else sessionStorage.setItem("area",false);
    if(document.getElementById("flag").checked) sessionStorage.setItem("flag",true); else sessionStorage.setItem("flag",false);
    if(document.getElementById("regionalBlocs").checked) sessionStorage.setItem("regionalBlocs",true); else sessionStorage.setItem("regionalBlocs",false);
    if(document.getElementById("gini").checked) sessionStorage.setItem("gini",true); else sessionStorage.setItem("gini",false);
    if(document.getElementById("numericCode").checked) sessionStorage.setItem("numericCode",true); else sessionStorage.setItem("numericCode",false);
    if(document.getElementById("region").checked) sessionStorage.setItem("region",true); else sessionStorage.setItem("region",false);
    if(document.getElementById("topLevelDomain").checked) sessionStorage.setItem("topLevelDomain",true); else sessionStorage.setItem("topLevelDomain",false);
}
