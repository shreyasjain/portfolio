import React from 'react'
import ReactDOM from "react-dom"
import "../Styles/Projects.scss"
import { Container } from 'react-bootstrap'

const PostsData = [
    {
      "category": "News",
      "title": "  Table Tennis WebApp",
      "text": "CNN purchased Casey Neistat's Beme app for $25million.",
      "image": "https://source.unsplash.com/user/erondu/600x400"
    },
    {
      "category": "Travel",
      "title": "Live Weather API",
      "text": "Learn our tips and tricks on living a nomadic lifestyle",
      "image": "https://source.unsplash.com/user/_vickyreyes/600x400"
    },
    {
      "category": "Development",
      "title": "COVID Tracker",
      "text": "The first ever decoupled starter theme for React & the WP-API",
      "image": "https://source.unsplash.com/user/ilyapavlov/600x400"
    },
    {
      "category": "News",
      "title": "BlackJack Game",
      "text": "CNN purchased Casey Neistat's Beme app for $25million.",
      "image": "https://source.unsplash.com/user/erondu/600x400"
    }
    // ,
    // {
    //   "category": "Travel",
    //   "title": "Nomad Lifestyle",
    //   "text": "Learn our tips and tricks on living a nomadic lifestyle",
    //   "image": "https://source.unsplash.com/user/_vickyreyes/600x400"
    // },
    // {
    //   "category": "Development",
    //   "title": "React and the WP-API",
    //   "text": "The first ever decoupled starter theme for React & the WP-API",
    //   "image": "https://source.unsplash.com/user/ilyapavlov/600x400"
    // }
  ]
  
  
  // Start App
  
  class Main extends React.Component { 
    constructor() {
      super();
      
      this.state = {
        posts: {}
      }
    }
    componentWillMount() {
      this.setState({
        posts: PostsData
      });
    }
   
  
    render() {
      return <div className="custom-container projects-container">
          
        <header className="app-header" id="projects"></header>
        <h1 className="page-main-heading">#PROJECTS</h1>
        <Container>
        {/* <div> */}
        <div className="app-card-list" id="app-card-list">
          {
            Object
            .keys(this.state.posts)
            .map(key => <Card key={key} index={key} details={this.state.posts[key]}/>)
          }
      </div>
      {/* </div> */}
      </Container>
      </div>
    }
  }

//   class Button extends React.Component {
//     render() {
//       return (
//         <button className="button button-primary">
//           <i className="fa fa-chevron-right"></i> Find out more
//         </button>
//       )
//     }
//   }
  
  
  class CardHeader extends React.Component {
    render() {
      const { image, category } = this.props;
      var style = { 
          backgroundImage: 'url(' + image + ')',
      };
      return (
        <header style={style} className="card-header">
          {/* <h4 className="card-header--title">{category}</h4> */}
        </header>
      )
    }
  }
  
  
  class CardBody extends React.Component {
    render() {
      return (
        <div className="card-body">
          {/* <p className="date">March 20 2015</p> */}
          
          <h2 className="project-card-title">{this.props.title}</h2>
          
          {/* <p className="body-content">{this.props.text}</p> */}
          
          {/* <Button /> */}
        </div>
      )
    }
  }
  
  
  class Card extends React.Component {
    render() {
      return (
        <article className="card">
          <CardHeader category={this.props.details.category} image={this.props.details.image}/>
          <CardBody title={this.props.details.title} text={this.props.details.text}/>
        </article>
      )
    }
  }
  
export default Main
