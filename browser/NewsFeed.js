import React from 'react';

const newsFeedArr = [
  'Check out my stuff',
  'You won\'t believe this thing',
  'Ten things you are doing wrong',
  '742 reasons listicles are the worst'
];

class NewsFeed extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      newsFeedArr: []
    };
  }

  componentDidMount () {
    Promise.resolve()
      .then(() => {
        this.setState({
          newsFeedArr: newsFeedArr
        });
      });
  }

  render () {
    return (
      <div>
        <h3>News Feed</h3>
        <ul>
          {
            this.state.newsFeedArr.map((newsStory, idx) => {
              return <li key={idx}>{ newsStory }</li>;
            })
          }
        </ul>
        { this.props.children }
      </div>
    );
  }
}

export default NewsFeed;
