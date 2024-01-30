import React from "react";
import YouTube from "react-youtube";
class MovieClip extends React.Component {

   render() {
     const options = {
       playerVars: {
         controls: 1,
       },
     };
 
     return <YouTube videoId="1fIVo8l5KVQ" options={options} onReady={this._onReady} id="video"/>;
   }
 
   _onReady(event) {
     event.target.pauseVideo();
   }
 }

 export default MovieClip;