import React, { PureComponent } from "react";
import { NavLink } from "react-router-dom";

class Search extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      keywords: '',
    };
    this.inputSearchRef = React.createRef();
    this.searchInterval = null;
    this.searchTimeout = 200;
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });

    if (this.searchInterval) {
      clearTimeout(this.searchInterval);
    }

    // Avoid intempestive request to server while typing.
    this.searchInterval = setTimeout(
      this.searchRequest,
      this.searchTimeout
    );
  }

  searchRequest = () => {
    // ToDo: Perform search request.
    console.log('Searching...');
  }

  componentDidMount() {
    this.inputSearchRef.current.focus();
  }

  componentWillUnmount() {
    clearInterval(this.searchInterval);
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

      <ul className="albums-list albums-list-horizontal">
        <li>
          <NavLink className="album-link" to="/library/album/sample">
            <span className="ply-btn ply-play">Play</span>
            <img src="/img/icons/photo-camera.svg" alt="" />
            <span className="album-title">Lorem ipsum</span>
          </NavLink>
        </li>
        <li>
          <NavLink className="album-link" to="/library/album/sample">
            <span className="ply-btn ply-play">Play</span>
            <img src="/img/icons/photo-camera.svg" alt="" />
            <span className="album-title">Lorem ipsum</span>
          </NavLink>
        </li>
        <li>
          <NavLink className="album-link" to="/library/album/sample">
            <span className="ply-btn ply-play">Play</span>
            <img src="/img/icons/photo-camera.svg" alt="" />
            <span className="album-title">Lorem ipsum</span>
          </NavLink>
        </li>
        <li>
          <NavLink className="album-link" to="/library/album/sample">
            <span className="ply-btn ply-play">Play</span>
            <img src="/img/icons/photo-camera.svg" alt="" />
            <span className="album-title">Lorem ipsum</span>
          </NavLink>
        </li>
        <li>
          <NavLink className="album-link" to="/library/album/sample">
            <span className="ply-btn ply-play">Play</span>
            <img src="/img/icons/photo-camera.svg" alt="" />
            <span className="album-title">Lorem ipsum</span>
          </NavLink>
        </li>
      </ul>
    </div>
    );
  }
}

export default Search;
