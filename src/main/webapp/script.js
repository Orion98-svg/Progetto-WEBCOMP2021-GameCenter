const menu = document.querySelector('#menu_button')
const menulinks = document.querySelector('.nav_menu')

menu.addEventListener('click', function(){
    menu.classList.toggle('is-active')
    menulinks.classList.toggle('active')
})

async function fetchGames(page){
    $.ajax({
        type:'GET',
        url:"https://api.rawg.io/api/games?key=2d150e2f5c964e6992d048af8ef065f7&page="+page+"&page_size=40",
        success:function (result){
            for(var i=0;i<result.results.length;i++)
            {
                creatGame(result.results[i].name,result.results[i].background_image);
            }
        }

    });
}

function creatGame(name,image) {
    var Space = document.createElement('div');
    Space.classList.add("GameSpace");
    Space.className = "GameSpace"
    var Img = document.createElement('div')
    Img.classList.add("GameImage")
    Img.style.backgroundImage = "url(" + image + ")"
    var Name = document.createElement('div');
    Name.classList.add("GameName");
    Name.textContent = name
    Space.append(Img);
    Space.append(Name);
    var element = document.getElementById("games");
    element.appendChild(Space);

}

fetchGames(1);


