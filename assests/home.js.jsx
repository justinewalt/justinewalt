class Home extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
     return(
      <div>
        <h1>Justin Ewalt</h1>
        <button class="topic-buttons" name="button" title="Experience">Experience</button>
        <button class="topic-buttons" name="button" title="Tools">Tools</button>
        <button class="topic-buttons" name="button" title="Contact">Contact</button>
        <button class="topic-buttons" name="button" title="About">About</button>
      </div>
    );
  }
}