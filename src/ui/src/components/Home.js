import { useState } from "react";
import { useLocation } from "react-router-dom";
// import fs from 'fs';
// import ytdl from 'ytdl-core';

function Home() {
    const { state } = useLocation();
    console.log(state);
    const [videoLink, setVideoLink] = useState("");

    const handleVideoLink = (event) => {
        setVideoLink(event.target.value);
        // ytdl('http://www.youtube.com/watch?v=aqz-KE-bpKQ')
        //     .pipe(fs.createWriteStream('video.mp4'));
        //     console.log("DJKFBNJNFENEENDENENDI");
    }

    // curl -X POST -F 'file=@./test_video.mp4' 

    const handleFormSubmit = (event) => {

        // ytdl('http://www.youtube.com/watch?v=aqz-KE-bpKQ')
        //     .pipe(fs.createWriteStream('video.mp4'));
        //     console.log("DJKFBNJNFENEENDENENDI");
        // try {
        //     fetch("/upload", {
        //         method: "POST",
        //         headers: new Headers({
        //         'Authorization': 'Bearer ' + state,
        //         'Content-Type': 'text/html; charset=utf-8'
        //         })
        //     }).then((res) => res.text()
        //     ).then((data) => {
        //         console.log(data);
        //         // navigate(HOME, {state: data});
        //     }
        //     )
        // } catch (err) {
        //     console.log(err)
        // }
    }

    return (
        <div>
            <h3>Enter the url link for any video that you would like to convert to MP3 format</h3>
            <form onSubmit={handleFormSubmit}>
                <input type="text" placeholder='Video link' value={videoLink} onChange={handleVideoLink}/>
                <input type="submit" />
            </form>
        </div>
    );
}

export default Home;