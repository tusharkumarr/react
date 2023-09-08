import ReactPlayer from 'react-player';
import TopBar from '../TopBar/topBar';


function VideoPlayer(){
    return(
        <>
       
        <div className="App">
           
           
            {/* <video class="video" width="100%" height="400px" autoPlay controls className='MuiCardMedia-root MuiCardMedia-media MuiCardMedia-img'>
                        <source src="https://res.cloudinary.com/codelife/video/upload/v1637805738/intro_l5ul1k.mp4" type="video/mp4"></source>
                    </video> */}
                    <div className="video-player-container">
      
      <ReactPlayer
        url="https://player.vimeo.com/external/451837035.sd.mp4?s=f19a6fc69b401f181c88e1e30a4ab8b380b60704&profile_id=164&oauth2_token_id=57447761"
        controls
        width="auto"
        height="auto"
        className="react-player"
      />
    </div>
      
                    

                    
                    
        </div>
        </>
    )
}
export default VideoPlayer;