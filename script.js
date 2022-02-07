// pegar elementos do html
const header = document.querySelector(".wrapper")
const projects = document.querySelector(".repositorios")

// link da api do github
const api = 'https://api.github.com/users/IsaiasSPinto/repos'


// efeito header com scroll
document.addEventListener('scroll', function() {
    let scrollPosition = window.scrollY
    if (scrollPosition > 50 ) {
        header.classList.add("active")
    }else {
        header.classList.remove("active")
    }
    
})

async function dados() {

    const data = await fetch(api).then(response => response.json())
  
    data.map((repo) => {

        // criando as tag para o card
        var repos = document.createElement("article")
        var wrapper = document.createElement("div")
        var link = document.createElement("a")
        var img = document.createElement("img")
        var language = document.createElement("p")

        // adicionando classes 
        repos.classList.add("repos")
        link.classList.add("link")
        img.classList.add("img")
        language.classList.add("tecnologia")
        wrapper.classList.add("project-wrapper")


        // 
        var titulo = document.createTextNode(repo.name)
        link.appendChild(titulo)
        link.setAttribute("href" , repo.html_url)
        link.setAttribute("target" , "_blank")

        img.setAttribute("src" , "./assets/images/repo.png")
        img.setAttribute("alt" , "Repository icon")

        var tech = document.createTextNode(repo.language == null ? " " : repo.language)
        language.appendChild(tech)


        
        repos.insertAdjacentElement("afterbegin" , language)
        repos.insertAdjacentElement("afterbegin" , wrapper)
        wrapper.insertAdjacentElement("afterbegin" , link)
        wrapper.insertAdjacentElement("afterbegin" , img)
        projects.insertAdjacentElement("afterbegin" , repos)
    })
}


dados()











