import { useState } from "react";
import { useLocation } from "react-router-dom";

function Home() {
    const { state } = useLocation();
    console.log(state);

    const handleFileUpload = (event) => {
        console.log(event.target.files[0]);
        const fd = new FormData();
        fd.append('file', event.target.files[0]);

        try {
            fetch("/upload", {
                method: "POST",
                headers: new Headers({
                'Authorization': 'Bearer ' + state
                }),
                body: fd
            }).then((res) => res.text()
            ).then((data) => {
                console.log(data);
                // navigate(HOME, {state: data});
            }
            )
        } catch (err) {
            alert(err)
        }
    }

    return (
        <div>
            <h3>Upload any video that you would like to convert to MP3 format</h3>
            <input type="file" onChange={handleFileUpload} />
        </div>
    );
}

export default Home;