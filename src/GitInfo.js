import React from 'react';

const reposName = [];
const reposDesc = [];

export default class GetData extends React.Component {
  state = {
    loading: true,
    name: null,
    desc: null
  }

  async fetchData() {
    const gitUrl = "https://api.github.com/users/Chris8one/repos";
    const response = await fetch(gitUrl);
    const data = await response.json();

    for (let i = 0; i < data.length; i++) {
      this.setState({name: data[i].name, desc: data[i].description, loading: false})
      reposName.push(this.state.name);
      reposDesc.push(this.state.desc);
    }
  }
  
  render() {
    function gitReposName(repo) {
      return <p>{repo}</p>;
    }
    function gitReposDesc(repo) {
      return <p>{repo}</p>;
    }
    return <div>{ this.state.loading ? 
      <div>Loading..</div> : <div>
        <div>
          <h3>Github Repositories</h3>
          <h3>{this.reposName.map(gitReposName)}</h3>
          <h3>{this.reposDesc.map(gitReposDesc)}</h3>
        </div>
      </div> }
    </div>;
  }
}

// import React from 'react'
// import "./css/Portfolio.css"

// const repos = [];
// const reposDesc = [];
// let displayRepos = [];
// export default class FetchData extends React.Component{
    
//     state ={
//         loading:true,
//         name: null,
//         desc: null
//     }

//     async componentDidMount(){
//         const url = `https://api.github.com/users/OliviaLeonieWalter/repos`;
//         const response = await fetch(url);
//         const data = await response.json();

//         for(let i  = 0; i < data.length; i++){
//             this.setState({name: data[i].name, desc: data[i].description, loading: false})
//             repos.push(this.state.name);
//             reposDesc.push(this.state.desc);
//         }
    
//     }

//     render() {
        
//         function displayGitRepo(repo){
//             return <p key={repo}>{repo}</p>;
//         }
//         function displayGitRepoDesc(repo){
//             return <p key={repo}>{repo}</p>
//         }
//         return <div>{this.state.loading ? 
//         <div className='github-data'>loading...</div> : 
//             <div className='github-data'>
//                 <div>
//                     <h1 className='github-title'>Github Repositories</h1>
//                     <h1 className='githubrepo-title'>{repos.map(displayGitRepo)}</h1>
//                     <h2 className='githubrepo-desc'>{reposDesc.map(displayGitRepoDesc)}</h2>
//                 </div>
//             </div>}
//         </div>;
//     }
// }