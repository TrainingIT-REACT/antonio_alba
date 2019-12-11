import React from 'react';
import { connect } from 'react-redux';
import { getAlbums } from '../actions/albums';
import Albums from './Albums';


class AlbumsList extends React.Component {
  componentDidMount() {
    this.props.getAlbums();
  }

  renderAlbums() {
    const { isLoading, error, albums } = this.props;

    console.log('albums', isLoading, error, albums, this.props);

    if (isLoading) {
      return <p>Loading...</p>
    } else if (error) {
      return <p>Something goes wrong trying to fetch the albums.</p>
    } else {
      return <Albums albums={albums}/>
    }
  }

  render() {
    return <>
      { this.renderAlbums() }
    </>
  }
}

const mapStateToProps = (state) => ({
  ...state
});

const mapDispatchToProps = (dispatch) => ({
  getAlbums: () => dispatch(getAlbums()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AlbumsList);
