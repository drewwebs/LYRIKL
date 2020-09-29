import React from 'react';
import Song from '../songs/show';

// export default class AnnotationShow extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//                         song: ""
//                     };
//     }

//     componentDidMount() {
//         this.props.fetchAnnotation()
//         .then((data) => this.props.fetchSong(data.annotation.song_id))
//         .then((data) => this.setState( {song: data.song }));
//     }

//     render() {
//         return this.state.song ? (
//           <Song fetchSong={() => this.props.fetchSong(this.props.annotation.song_id)} song={this.state.song} annotation={this.props.annotation} />
//         ) : (
//             <div>Loading Annotation...</div>
//         )
//     }
// }

export default ({annotation}) => (
    <div>{annotation.body}</div>
)