import React from 'react';
import { connect } from 'react-redux';
import { getAlbums } from '../actions/albums';
import { getSongs } from '../actions/songs';
import Album from './Album';

class AlbumContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getAlbums();
    this.props.getSongs();
  }

  renderAlbum() {
    const { isLoading, error, albums, songs, albumId } = this.props;

    if (isLoading) {
      return <p>Loading...</p>
    } else if (error) {
      return <p>Something goes wrong trying to fetch the album.</p>
    } else {
      return <Album albums={albums} type={albumId} songs={songs} />
    }
  }

  render() {
    return <>
      { this.renderAlbum() }
    </>
  }
}

const mapStateToProps = (state) => ({
  ...state
});

const mapDispatchToProps = (dispatch) => ({
  getAlbums: () => dispatch(getAlbums()),
  getSongs: () => dispatch(getSongs()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AlbumContainer);
