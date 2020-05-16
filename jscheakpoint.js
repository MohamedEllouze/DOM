function Bold() 
{
    console.log(document.querySelectorAll("div, p"))
   var  ban =document.getElementById("texto").style.fontWeight ;
 if(ban == 'normal')
    {
        document.getElementById("texto").style.fontWeight = 'bold';
    }
 else
    {
        document.getElementById("texto").style.fontWeight = 'normal';
     }
}

function italic() 
{
   var  ban =document.getElementById("texto").style.fontWeight ;
 if(ban == 'normal')
    {
        document.getElementById("texto").style.fontWeight = 'italic';
    }
 else
    {
        document.getElementById("texto").style.fontWeight = 'normal';
    }
}

// function italic()
// {
//     var i = document.getElementById("texto");
//     if( i.style.fontStyle == "italic" ) 
//     {
//         i.style.fontStyle = "normal";
//     } 
//     else 
//     {
//         i.style.fontStyle = "italic";
//     }
// }
 function underline(){
    var under = document.getElementById("texto");
    if( under.style.textDecoration == "underline" ) 
    {

        under.style.textDecoration = "none";
    } else {
        under.style.textDecoration = "underline";
    }
}
function Lien() {
    var teststyle =document.getElementById('styloo').selectedOptions[0].text;
    var span = document.getElementById('texto') // L'élément du DOM
    if(teststyle=="TimesNewRoman")
    span.style.fontFamily = 'TimesNewRoman' // Changement de police
    if(teststyle=="cursive")
    span.style.fontFamily = 'cursive' // Changement de police
    if(teststyle=="Georgia")
    span.style.fontFamily = 'Georgia' // Changement de police
    }
    
function gras() {
    document.getElementById("texto").style.fontWeight = "bold";
}
