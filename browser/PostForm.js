import React, {Component} from 'react';

export default class PostForm extends Component {

  constructor (props) {
    super(props);
    this.state = {
      postText: '' 
    }; 
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange (event) {
    const postText = event.target.value;
    //const postText = 'LOL NOPE';
    this.setState({ postText });
  }

  handleSubmit (event) {
    event.preventDefault(); 
    this.props.handleNewPost(this.state.postText); 
    this.setState({ postText: '' });
  }

  render () {
    return (
      <div>
        <h4>New Post</h4>
        <form onSubmit={this.handleSubmit}>
          <input name="postText" onChange={this.handleChange} className="form-control" type="text" value={this.state.postText}/>
          <input
            className="btn btn-submit"
            type="submit" 
            value="Post your post"
          />
        </form> 
      </div>
    ); 
  }

}
