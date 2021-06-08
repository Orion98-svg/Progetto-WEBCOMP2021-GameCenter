const menu = document.querySelector('#menu_button')
const menulinks = document.querySelector('.nav_menu')
menu.addEventListener('click', function(){
    menu.classList.toggle('is-active')
    menulinks.classList.toggle('active')
})

const Posizione = document.getElementById("Page_btn")
var Button_Render = 0;
const GameContainer= document.getElementById('games')
var PageNumber=1
var PageSize=40
document.onload=fetchGames(PageNumber,PageSize)


async function fetchGames(page,size){
    $.ajax({
        type:'GET',
        url:"https://api.rawg.io/api/games?key=2d150e2f5c964e6992d048af8ef065f7&page="+page+"&page_size="+size,
        success:function (result){
            for(var i=0;i<result.results.length;i++)
            {
                creatGame(result.results[i].name,result.results[i].background_image);
            }
            createButton();
        }
    });
}

function creatGame(name,image) {
    var Reference= document.createElement("a")
    Reference.setAttribute("href","GamePage.html")
    var Space = document.createElement('div');
    Space.classList.add("GameSpace");
    Space.className = "GameSpace"
    Space.setAttribute("href","GamePage.html")
    var Img = document.createElement('div')
    Img.classList.add("GameImage")
    Img.style.backgroundImage = "url(" + image + ")"
    var Name = document.createElement('div');
    Name.classList.add("GameName");
    Name.textContent = name
    Space.append(Img);
    Space.append(Name);
    Reference.append(Space)
    GameContainer.append(Reference);
}
function  createButton()
{
    
    var BackwardButton=document.createElement('button')
    BackwardButton.classList.add("page_button")
    BackwardButton.textContent="<<"
    Posizione.append(BackwardButton)
    var CurrentPage=document.createElement("button")
    CurrentPage.classList.add("page_button")
    CurrentPage.textContent=PageNumber.toString()
    Posizione.append(CurrentPage)
    var FarwardButton=document.createElement('button')
    FarwardButton.classList.add("page_button")
    FarwardButton.setAttribute("id","bottone")
    FarwardButton.textContent=">>"
    Posizione.append(FarwardButton)
    FarwardButton.addEventListener("click",changePageForward)
    BackwardButton.addEventListener("click",changePageBackward)
    Button_Render = 0;
}
function cleanGameContainer()
{
    while (GameContainer.firstChild) {
        GameContainer.removeChild(GameContainer.firstChild);
    }
}

function cleanPosizione()
{
    while (Posizione.firstChild) {
        Posizione.removeChild(Posizione.firstChild)
    }
}


function changePageForward()
{
    cleanGameContainer()
    cleanPosizione()
    PageNumber++
    fetchGames(PageNumber,PageSize)
}
function changePageBackward()
{
    if(PageNumber!=1)
    {
        cleanGameContainer()
        cleanPosizione()
        PageNumber--
        fetchGames(PageNumber,PageSize)
    }
}
