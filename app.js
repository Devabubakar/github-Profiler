$(document).ready(()=>{
  $("button").click((e)=>{
    e.preventDefault
    const username = $("#txt").val()
    const githubAPI = 'https://api.github.com/users/'+username ;
    console.log(githubAPI)
    function callback(data){ 
      
    const repoAPI = 'https://api.github.com/users/'+username + `/repos`
    function getRepo(repo){
        $.each(repo,function(index,repo){
          $(".repo").append(`
          <div class="container text-center">
          <div class="row">
              <div class="col-md-4">
                  <div class="card bg-transparent" style="width: 18rem;">
                      <div class="card-body text-center">
                        <h5 class="card-title"><strong> ${repo.name}</strong></h5>
                        <h6 class="card-subtitle mb-2 text-muted">
                              <span class="badge badge-primary  ">Stars : ${repo.stargazers_count}</span>
                              <span class="badge badge-secondary ">Followers: ${repo.forks_count}</span>
                              <span class="badge badge-success">Public_gists: ${repo.watchers_count}</span>

                        </h6>
                        <p class="card-text">${repo.description}</p>
                        <a href="+${repo.html_url}+" class="btn btn-primary card-link">View Repo</a>
                      </div>
                    </div>
              </div>
              <div class="col-md-4">
                  <div class="card bg-transparent" style="width: 18rem;">
                      <div class="card-body text-center">
                        <h5 class="card-title">${repo.name}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">
                            <span class="badge badge-primary  ">Stars : ${repo.stargazers_count}</span>
                            <span class="badge badge-secondary ">Followers: ${repo.forks_count}</span>
                            <span class="badge badge-success">Public_gists: ${repo.watchers_count}</span>
                        </h6>
                        <p class="card-text">${repo.description}</p>
                        <a href=" '+${repo.html_url}+ '" class="btn btn-primary card-link">View Repo</a>
    
                      </div>
                    </div>
              </div>
              <div class="col-md-4">
                  <div class="card bg-transparent" style="width: 18rem;">
                      <div class="card-body text-center">
                        <h5 class="card-title">${repo.name}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">
                              <span class="badge badge-primary  ">Stars : ${repo.stargazers_count}</span>
                              <span class="badge badge-secondary ">Followers: ${repo.forks_count}</span>
                              <span class="badge badge-success">Public_gists: ${repo.watchers_count}</span>
                        </h6>
                        <p class="card-text">${repo.description}</p>
                        <a href=" '+${repo.html_url}+' " class="btn btn-primary card-link">View Repo</a>
                        
                      </div>
                    </div>
              </div>
  
         

            
  

          `)
        })
       

    }

    $.getJSON(repoAPI,getRepo)


     $(".container").html(`
        <div class="container-fluid text-center  mt-5 ">
            <div class="panel panel-default">
            <div class="panel-heading ">
            </div>
            <div class="panel-body">
                <div class="row">
                  <div class="col-md-3">
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