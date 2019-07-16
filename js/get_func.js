/*
This is the function that actually draws the results in the web browser window.
it gets whether the user has asked for the certain property from the sessionManager,
if he did then it just creates an element that depicts this property
if he didn't then it just skips it and goes to the next one.
*/
function get(xml)
{
    var x = JSON.parse(xml.responseText);//parses the xml file
    var y=document.getElementById("announcement");
    y.innerHTML="<h1>Click on a country in order to see more info!</h1>";//a span which we use in order to write a header
    y=document.getElementById("results");//the div in which we'll make a grid, to depict our results
    for(i=0;i<x.length;i++) //for every country that's returned
    {   
        try
        {
            var collapsible_but = document.createElement("button"); //this is the button that will be expanded once clicked
            collapsible_but.classList.add("collapsible");//that's the class that makes it expandable
            collapsible_but.innerHTML =x[i]['name']+'  /  '+x[i]['nativeName']+' ( '+x[i]['alpha3Code']+' )';//button text= country's name,lkocal name,3letter code

            var outer_div = document.createElement("div");//In this div our collapsible's data will be contained
            outer_div.classList.add("content");//we add the class content

            if(sessionStorage.getItem('flag')=="true")//flag
            {
                let temp = document.createElement("img");
                temp.classList.add("flag");
                temp.setAttribute("src",x[i]['flag']);
                outer_div.appendChild(temp);
            }

            if(sessionStorage.getItem('population')=="true")//population
            {
              let temp = document.createElement("span");
              temp.innerHTML= '<b>Population</b> : '+x[i]['population']+'<br>';
              outer_div.appendChild(temp);
            }
            if(sessionStorage.getItem('capital')=="true")//capital
            {
                let temp = document.createElement("span");
                temp.innerHTML = '<b>Capital</b> : '+x[i]['capital'] +'<br>';
                outer_div.appendChild(temp);
            }
            if(sessionStorage.getItem('demonym')=="true")//demonym
            {
                let temp = document.createElement("span");
                temp.innerHTML = '<b>Demonym</b> : '+x[i]['demonym'] +'<br>';
                outer_div.appendChild(temp);
            }
            if(sessionStorage.getItem('languages')=="true")//languages
            {
                let temp = document.createElement("span");
                temp.innerHTML = '<b>Languages</b> : ';
                //since there may be >=1 languages a country speak, we need to parse all of them
                for(j=0;j<x[i]['languages'].length;j++)
                {
                    if(j!=x[i]['languages'].length-1) temp.innerHTML=temp.innerHTML+x[i]['languages'][j]['name']+', ';
                    else temp.innerHTML=temp.innerHTML+x[i]['languages'][j]['name'] +'<br>';
                }
                outer_div.appendChild(temp);
            }
            /*Same thing with borders, in here we make use of the sessionStorage alpa3Code that we stored before,
            in order to make the whole output easier for the user to understand.It's easier to read Albania instead of ALB*/
            if(sessionStorage.getItem('borders')=="true")//borders
            {
                let temp = document.createElement("span");
                temp.innerHTML = '<b>Bordering Countries</b> : ';
                if(x[i]['borders'].length==0) temp.innerHTML=temp.innerHTML+'None<br>';
                for(j=0;j<x[i]['borders'].length;j++)
                {
                    if(j!=x[i]['borders'].length-1) temp.innerHTML = temp.innerHTML+sessionStorage.getItem(x[i]['borders'][j]) +', ';
                    else temp.innerHTML=temp.innerHTML+sessionStorage.getItem(x[i]['borders'][j]) +'<br>';
                }
                outer_div.appendChild(temp);
            }
            if(sessionStorage.getItem('currencies')=="true")//currencies
            {
                let temp = document.createElement("span");
                //each currency has it's own line in the text, in oder for it to not get confusing
                for(j=0;j<x[i]['currencies'].length;j++)
                {
                    temp.innerHTML=temp.innerHTML+'<b>Currency</b> '+(j+1)+' : ' +x[i]['currencies'][j]['name'] +' '+x[i]['currencies'][j]['symbol']+'<br>';
                }
                outer_div.appendChild(temp);
            }
            if(sessionStorage.getItem('area')=="true")//area in square meters
            {
                let temp = document.createElement("span");
                temp.innerHTML = "<b>Area in m²</b> : " +x[i]['area'] +'<br>';
                outer_div.appendChild(temp);
            }
            if(sessionStorage.getItem('latlng')=="true")//lat/lng
            {
                let temp = document.createElement("span");
                temp.innerHTML = "<b>Latitude / Longitude</b> : "
                temp.innerHTML = temp.innerHTML + ' [' + x[i]['latlng'][0]+' , ' +x[i]['latlng'][1]+']<br>';
                outer_div.appendChild(temp);
            }
            if(sessionStorage.getItem('region')=="true")//region
            {   
                let temp = document.createElement("span");
                temp.innerHTML = "<b>Region</b> : ";
                temp.innerHTML = temp.innerHTML +x[i]['region'] +' ( ' +x[i]['subregion'] +" )<br>";  
                outer_div.appendChild(temp);
            }            
            if(sessionStorage.getItem('regionalBlocs')=="true")//regionalBlocks
            {
                let temp = document.createElement("span");
                temp.innerHTML = "<b>Regional Blocks</b> : ";
                if(x[i]['regionalBlocs'].length==0) temp.innerHTML = temp.innerHTML + 'None<br>';
                //there may be >=0 regional blocs, so we act accordingly
                for(j=0;j<x[i]['regionalBlocs'].length;j++)
                {
                    if(x[i]['regionalBlocs'].length-1!=j) temp.innerHTML= temp.innerHTML + x[i]['regionalBlocs'][j]['name'] +', ';
                    else temp.innerHTML= temp.innerHTML + x[i]['regionalBlocs'][j]['name'] +'<br>';
                }
                outer_div.appendChild(temp);
            }
            if(sessionStorage.getItem('gini')=="true")//gini
            {
                let temp = document.createElement("span");
                temp.innerHTML = "<b>Gini index</b> : ";
                if(x[i]['gini']!=null)temp.innerHTML = temp.innerHTML + x[i]['gini']+'<br>';
                else temp.innerHTML = temp.innerHTML + 'Not calculated<br>';
                outer_div.appendChild(temp);
            }
            if(sessionStorage.getItem('numericCode')=="true")//numeric code
            {
                let temp = document.createElement("span");
                temp.innerHTML = "<b>Numeric Code</b> : ";
                temp.innerHTML = temp.innerHTML + x[i]['numericCode'] +'<br>';
                outer_div.appendChild(temp);
            }
            if(sessionStorage.getItem('topLevelDomain')=="true")//topLevelDomain
            {
                let temp= document.createElement("span");
                temp.innerHTML="<b>Top level domain</b> : ";
                temp.innerHTML = temp.innerHTML + x[i]['topLevelDomain'] +'<br>';
                outer_div.appendChild(temp);
            
            }

            /*Since we'll put the results in a grid container,we'll have the elements we've created
            placed inside a div, so that 1 country and it's element's expansion will only take up 1 block
            of the grid.*/
            var sd=document.createElement("div");
            sd.appendChild(collapsible_but);
            sd.appendChild(outer_div);
            y.appendChild(sd);
        }
        catch(err)
        {
            continue;
        }
    }
    var coll = document.getElementsByClassName("collapsible");
    var i; 
    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
            });
    }
}

/*Makes some text appear in case we get a 400 or 404 error. also makes a close window button appear*/
function error(){
    var y=document.getElementById("results");
    y.classList.remove("grid-container");
    y.innerHTML='<h1 class="danger">!!! 404 ERROR !!!</h1>';
    y.innerHTML= y.innerHTML+'<h1 class="under">What you have requested can not be found!!</h1>';
    y.innerHTML= y.innerHTML+"<h2>Please check your spelling or for any other mistakes</h2>";
    switch(sessionStorage.getItem("mode")){
        case "all":
            y.innerHTML= y.innerHTML+"<h3>You tried to look for all countries</h3>";
            break;
        case "byCall":
            y.innerHTML= y.innerHTML+"<h3>You tried to look for a country by call number</h3>";
            break;
        case "byCapital":
            y.innerHTML= y.innerHTML+"<h3>You tried to look for a country by it's capital</h3>";
            break;
        case "byCode":
            y.innerHTML= y.innerHTML+"<h3>You tried to look for a country by it's 2-3 Letter CODE</h3>";
            break;
        case "byCurrency":
            y.innerHTML= y.innerHTML+"<h3>You tried to look for a country by it's currency</h3>";
            break;
        case "byLanguage":
            y.innerHTML= y.innerHTML+"<h3>You tried to look for a country by it's language</h3>";
            break;
        case "byName":
            y.innerHTML= y.innerHTML+"<h3>You tried to look for a country by it's name</h3>";
            break;
        case "byRegion":
            y.innerHTML= y.innerHTML+"<h3>You tried to look for countries by their region</h3>";
            break;
        case "byRegblock":
            y.innerHTML= y.innerHTML+"<h3>You tried to look for countries by their regional block</h3>";
            break;
    }
    y.innerHTML= y.innerHTML+'<h3><br>Your input was : <p class="temp">' +sessionStorage.getItem(sessionStorage.getItem("mode")) +"</p></h3>";
    y.innerHTML= y.innerHTML+"<h2>Please <u>close</u> this tab in order to go back to the search menu</h2>";
}

function closeWindow(){window.close();}