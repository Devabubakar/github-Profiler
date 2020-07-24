$(document).ready(()=>{
  $("button").click(()=>{

  

  
    const username = $("#txt").val()
    const githubAPI = 'https://api.github.com/users/'+username ;



    function callback(data){ 



      
      
console.log(data)
      
      
    const repoAPI = 'https://api.github.com/users/'+username + `/repos`
    function getRepo(repo){
        var htmlCode = '<div class="container-fluid ">'
        var htmlCode = '<div class="row">'
        $.each(repo,function(index,repo){
          htmlCode+="<div class=' col-md-4  mt-3 text-center'>"
          htmlCode += '<div class="card bg-transparent" >'
          htmlCode += '<div class="card-body text-center">'
          htmlCode += '<h5 class="card-title mb-2"><strong>'
          htmlCode+= repo.name
          htmlCode += "</strong></h5>"
          htmlCode += "<h6 class='card-subtitle mb-2 text-muted'>"
          htmlCode += "<span class='badge badge-primary'>"
          htmlCode += "Stars :" + repo.stargazers_count + "</span>"
          htmlCode += "<span class='badge badge-secondary'>"
          htmlCode += "Stars :" + repo.watchers_count + "</span>"
          htmlCode += "<span class='badge badge-success'>"
          htmlCode += "Stars :" + repo.forks_count + "</span>" + "<h6>"
          htmlCode += '<p class="card-text">' + repo.description + "</p>"
          htmlCode += '<a href= " '+ repo.html_url+' " target="_blank" class="btn btn-primary" >' + "View Repo" + '</a>'
          htmlCode += "</div>" + "</div>" + "</div>"

          
        })
        htmlCode += "</div>" + "</div>"
        $(".repo").append(htmlCode)
       

    }

    $.getJSON(repoAPI,getRepo)

   

    
     $(".profile").html(`
        <div class="container-fluid text-center  mt-5 ">
            <div class="panel panel-default">
            <div class="panel-heading ">
            </div>
            <div class="panel-body">
                <div class="row">
                  <div class="col-md-3 text-center">
                      <img src="${data.avatar_url}" class="thumbnail img-fluid text-center mb-3" id="avatar"></img>
                      <h3 class="panel-title">${data.name}</h3>
                      <a href="${data.html_url}" class="btn btn-primary btn-block mt-5" target="_blank">View profile</a>
                      <p  class="mt-3">${data.bio}</p>
                  </div>
                  <div class="col-md-8 mt-3">
                            <span class="badge badge-primary  ">Public Repo : ${data.public_repos}</span>
                            <span class="badge badge-secondary ">Followers: ${data.followers}</span>
                            <span class="badge badge-success">Public_gists: ${data.public_gists}</span>
                        <span class="badge badge-danger">Following: ${data.following}</span>
                        <span class="badge badge-success">Location: ${data.location}</span>

                        <br><br>

                        

                          </ul>
                          <div class="list-group ">
                                <div class="list-group-item bg-transparent">Company : ${data.company}</div>
                                <div class="list-group-item bg-secondary">Date Created  :${data.created_at}</div>
                            </div>
                  
                  <div>
                </div>
                
            </div>
          </div>
        </div>
        <div class="repo">
                <h3>Repositories</h3>
                </div>

     `)
      
    
    
  

}

    $.getJSON(githubAPI,callback)




  })
})
