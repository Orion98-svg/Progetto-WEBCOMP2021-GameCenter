const menu = document.querySelector('#menu_button')
const menulinks = document.querySelector('.nav_menu')
menu.addEventListener('click', function(){
    menu.classList.toggle('is-active')
    menulinks.classList.toggle('active')
})

const Posizione = document.getElementById("Page_btn")
var Button_Render = 0;
const GameContainer= document.getElementById('games')
const PlatformContainer=document.getElementById("Platforms")
var PageNumber=1
var PageSize=40
var Store
var Filtred=false
document.onload=fetchGames(PageNumber,PageSize,Store),createStoreBadge()


async function fetchGames(page,size,store){
    if(!Filtred)
    { $.ajax({
        type:'GET',
        url:"https://api.rawg.io/api/games?key=2d150e2f5c964e6992d048af8ef065f7&page="+page+"&page_size="+size,
        success:function (result){
            for(var i=0;i<result.results.length;i++)
            {
                creatGame(result.results[i].name,result.results[i].background_image);
            }
            createButton();
        }
    });}
    else
    {
        $.ajax({
            type:'GET',
            url:"https://api.rawg.io/api/games?key=2d150e2f5c964e6992d048af8ef065f7&page="+page+"&page_size="+size+"&stores="+store,
            success:function (result){
                for(var i=0;i<result.results.length;i++)
                {
                    creatGame(result.results[i].name,result.results[i].background_image);
                }
                createButton();
            }
        });
    }
}

function createStoreBadge()
{
    var steam=document.createElement("button")
    steam.classList.add("badge")
    steam.setAttribute("id","steam")
    PlatformContainer.append(steam)
    steam.setAttribute("style",  "background-image: url('../images/steam-logo-transparent.png')")
    steam.addEventListener('click',function () {
        if (Store != 1) {
            Filtred = true
            Store = 1
            cleanGameContainer()
            cleanPosizione()
            fetchGames(PageNumber, PageSize, Store)
        }
    })
    var epic=document.createElement("button")
    epic.classList.add("badge")
    epic.setAttribute("id","epic")
    PlatformContainer.append(epic)
    epic.setAttribute("style",  "background-image: url('../images/epic.png')")
    epic.addEventListener('click',function () {
        if (Store != 11) {
            Filtred = true
            Store = 11
            cleanGameContainer()
            cleanPosizione()
            fetchGames(PageNumber, PageSize, Store)
        }
    })
    var xbox=document.createElement("button")
    xbox.classList.add("badge")
    xbox.setAttribute("id","xbox")
    PlatformContainer.append(xbox)
    xbox.setAttribute("style",  "background-image: url('../images/xbox.png')")
    xbox.addEventListener('click',function () {
        if (Store != 7) {
            Filtred = true
            Store = 7
            cleanGameContainer()
            cleanPosizione()
            fetchGames(PageNumber, PageSize, Store)
        }
    })
    var gog=document.createElement("button")
    gog.classList.add("badge")
    gog.setAttribute("id","gog")
    PlatformContainer.append(gog)
    gog.setAttribute("style",  "background-image: url('../images/gog.png')")
    gog.addEventListener('click',function () {
        if (Store != 5) {
            Filtred = true
            Store = 5
            cleanGameContainer()
            cleanPosizione()
            fetchGames(PageNumber, PageSize, Store)
        }
    })
    var playstation=document.createElement("button")
    playstation.classList.add("badge")
    playstation.setAttribute("id","playstation")
    PlatformContainer.append(playstation)
    playstation.setAttribute("style",  "background-image: url('../images/playstation.jpg')")
    playstation.addEventListener('click',function () {
        if (Store != 3) {
            Filtred = true
            Store = 3
            cleanGameContainer()
            cleanPosizione()
            fetchGames(PageNumber, PageSize, Store)
        }
    })
        var nintendo = document.createElement("button")
        nintendo.classList.add("badge")
        nintendo.setAttribute("id", "nintendo")
        PlatformContainer.append(nintendo)
        nintendo.setAttribute("style", "background-image: url('../images/nintendo.png')")
        nintendo.addEventListener('click', function () {
            if (Store != 6) {
                Filtred = true
                Store = 6
                cleanGameContainer()
                cleanPosizione()
                fetchGames(PageNumber, PageSize, Store)
            }
        })
        var reset = document.createElement("button")
        reset.textContent="Tutti i giochi"
        reset.setAttribute("id", "reset")
        PlatformContainer.append(reset)
        reset.addEventListener('click', function () {
           if(Store!=null){
            Filtred = false
            Store=null
            cleanGameContainer()
            cleanPosizione()
            fetchGames(PageNumber, PageSize, Store)}
        })
        /* var microsoftstore
         var playstore
         var applestore
         var ithci*/
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
    fetchGames(PageNumber,PageSize,Store)
}
function changePageBackward()
{
    if(PageNumber!=1)
    {
        cleanGameContainer()
        cleanPosizione()
        PageNumber--
        fetchGames(PageNumber,PageSize,Store)
    }
}
