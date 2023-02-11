const loadData = () => {
    const xhr = new XMLHttpRequest()
    xhr.open("GET", "https://api.github.com/users/JoaoClemer")
    xhr.send(null)
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
            const userObj = JSON.parse(xhr.responseText)
            const name = userObj.name
            const avatarUrl = userObj.avatar_url
            const repositores = userObj.public_repos
            const followers = userObj.followers
            const blogUrl = userObj.blog

            const avatarEl = document.createElement("img")
            avatarEl.setAttribute("width", "128")
            avatarEl.setAttribute("src", avatarUrl)
            document.body.append(avatarEl)

            const nameEl = document.createElement("h2")
            nameEl.innerText = name
            document.body.append(nameEl)

            const repFollEl = document.createElement("p")
            repFollEl.innerText = `${followers} seguidores | ${repositores} repositórios. `
            document.body.append(repFollEl)

            const blogEl = document.createElement("a")
            blogEl.setAttribute("href", blogUrl)
            document.body.append(blogEl)
            blogEl.innerText = blogUrl
        }

    }

}
