import React from 'react';
import './Style.css';

export default class GetData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      dataIsLoaded: false
    };
  }

  componentDidMount() {
    fetch("https://api.github.com/users/chris8one/repos")
    .then((res) => res.json())
    .then((json) => {
      this.setState({
        items: json,
        dataIsLoaded: true
      });
    })
  }

  render() {
    const { items, dataIsLoaded } = this.state;
    if (!dataIsLoaded) return <div className="loading-indication"><h3>Loading...</h3></div>;
    return (
      <div className="repos-container">
        { items.map((item) => (<div className="repos-div">
          <h3 key={item.id}>{item.name}</h3>
          <p key={item.id}>{item.description}</p>
          <button className="button" key={item.id}><a href={item.html_url} target="blank">Github Repo</a></button><br/>
          { item.homepage === null ? "" : <button className="button" key={item.id}><a href={item.homepage} target="blank">Live Site</a></button> }
          <hr className="hr-grad-repo" />
        </div>
        )) }
      </div>
    );
  }
}