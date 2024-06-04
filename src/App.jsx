import { useState } from "react";
import "./App.css";
import React from "react";
import axios from "axios";

function App() {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const signedUrl =
    "https://storage.googleapis.com/66573b88259691a23f9eb6dd/acc31ecc-e540-4cb4-aea9-a0ab0f3b0973?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=storage%40backend-test-aladia.iam.gserviceaccount.com%2F20240604%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20240604T141438Z&X-Goog-Expires=300&X-Goog-SignedHeaders=host&X-Goog-Signature=241a108b8478f5ea3e7e336f9b2ac1cd81b942586338eaa50e654104983b26c336028769fd53f7ee5dfb5cd756013778b14b8039b9482cca8a8715676126bb1e857b0f7e7df37b4f5164669240ba3b82e3deb55160e0434ba26512f1ab1f91eab02ddd9b66b73bcb247764727cc61deeec20f85962af09a9154f2435402553bd936799164d9ad5de4c09459061ec1119a952a71cf6302dce23c8ced865103b940c2a40b58b2a75a00dc2287489b1333ed7379bb8358cb7c7036bc6384531179f267a21dbb87b98a04a69c81039cb792bde6bc30b22764b52753e1a3541752dae4ea588cfbeb19e832ac86c482668b8e078ce438e78aa3423e4b7241f12222b1f";

  const uploadFile = async () => {
    if (!file) {
      alert("Please select a file first.");
      return;
    }

    try {
      const config = {
        headers: {
          "Content-Type": "image/png",
        },
      };

      console.log("The file");
      console.log(config);

      await axios.put(signedUrl, file, config);

      alert("File uploaded successfully!");
    } catch (error) {
      console.log("The error");
      console.log("Error uploading file:", error);
      console.error("Error uploading file:", error);
      alert("Error uploading file", error);
    }
  };

  return (
    <div>
      <input type="file" accept="image/png" onChange={handleFileChange} />
      <button onClick={uploadFile}>Upload</button>
    </div>
  );
}

export default App;
