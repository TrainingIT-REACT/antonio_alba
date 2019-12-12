import React, { PureComponent } from "react";
import AlbumsList from "../components/AlbumsList";

class Search extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      keywords: '',
    };
    this.inputSearchRef = React.createRef();
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }


  componentDidMount() {
    this.inputSearchRef.current.focus();
  }

  render() {
    return (
    <div className="section search">
      <input
        name="keywords"
        className="input-search"
        placeholder="Type your artist, album, song,..."
        ref={this.inputSearchRef}
        onChange={this.onChange}
        type="text" />

      <AlbumsList
        type="search"
        keywords={this.state.keywords}
        layout="horizontal" />
    </div>
    );
  }
}

export default Search;
