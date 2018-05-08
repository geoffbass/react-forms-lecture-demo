import React, {Component} from 'react';
import PostForm from './PostForm';
import PostsList from './PostsList';

const initialPosts = [createPost('I can\'t form today')];

function createPost (postText) {
  return {
    text: postText,
    time: new Date().toString()
  };
}

export default class Posts extends Component {
  
  constructor (props) {
    super(props);
    this.state = {
      posts: [] 
    }; 
    this.handleNewPost = this.handleNewPost.bind(this);
  }

  componentDidMount () {
    this.setState({
      posts: initialPosts 
    }); 
  }

  handleNewPost (postText) {
//     event.preventDefault();
//     const text = event.target.postText.value;
    const newPost = createPost(postText);
    this.setState(prevState => ({
      posts: [...prevState.posts, newPost] 
    })); 
//     event.target.postText.value = '';
  }

  render () {
    return (
      <div>
        <PostForm handleNewPost={this.handleNewPost}/> 
        <PostsList posts={this.state.posts} />
      </div> 
    );
  }

}
