import React, { useState } from "react";
import { useEffect } from "react";

const UploadImage = () => {
  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    if (file) {
      uploadToGoogleDrive(file);
    }
  };

  const [imageData, setImageData] = useState({
    categoryId: 3,
    imageName: "",
    imageUrl: "",
  });

  useEffect(() => {
    // This will be called whenever imageData changes
    if (imageData.imageName !== "" && imageData.imageUrl !== "") {
      addImageToDatabase();
    }
  }, [imageData]);

  const uploadToGoogleDrive = (file) => {
    const metadata = {
      name: file.name,
      mimeType: file.type,
      parents: ["1reyXNH365TgTiSxc9lZp1ZTNJwFdp93T"],
    };

    const accessToken =
      "ya29.a0AbVbY6OvFNX7u96IJzL-W9x5e75B4EMztbt1EOim0YSiLIlqtZD4XCLnt1UM0I40TSQNK6HaKuw0dlcQ-H23QZsR9HcmJVd6_HStmx_GMXOo9uIiZqQ0gzR1NIzVVQx8SbXlWCmfqC6PoFFiIWOM4mtzx4ByQNVsaCgYKAUMSARMSFQFWKvPl0wFl-Ovv5RFKvs723vN0kQ0167";

    const form = new FormData();
    form.append(
      "metadata",
      new Blob([JSON.stringify(metadata)], { type: "application/json" })
    );
    form.append("file", file);

    fetch(
      "https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart",
      {
        method: "POST",
        headers: {
        //   Authorization: `Bearer ${accessToken}`,
        },
        body: form,
      }
    )
      .then(async (response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        var myData = await response.json();
        console.log(myData);
        setImageData({
          ...imageData,
          imageName: myData.name,
          imageUrl: "https://drive.google.com/uc?export=view&id=" + myData.id,
        });
        // addImageToDatabase();
      })
      .catch((error) => {
        console.error("Error uploading file:", error);
      });
  };

  const addImageToDatabase = () => {
    console.log(imageData);
    fetch("http://localhost:5007/api/TripImage", {
      method: "POST",
      headers: {
        accept: "text/plain",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...imageData, imageData: {} }),
    })
      .then(async (data) => {
        var myData = await data.json();
        console.log(myData);
      })
      .catch((err) => {
        console.log("Error:", err);
      });
  };

  return (
    <div className="uploadform">
      {/*  */}
      <div>
        <div class="mb-4 d-flex justify-content-center">
          <img
            src="https://img.freepik.com/free-vector/image-folder-concept-illustration_114360-114.jpg?t=st=1690899307~exp=1690899907~hmac=45429e0900f781183964138c40d47bc7a9f459fae200cf613015091c6d51c2a3"
            alt="example placeholder"
            style={{ width: 350 }}
          />
        </div>
        <div class="d-flex justify-content-center">
          <div class="btn btn-primary btn-rounded">
            <label class="form-label text-white m-1" for="customFile1">
              Choose file
            </label>
            <input
              type="file"
              class="form-control d-none"
              id="customFile1"
              onChange={handleFileSelect}
            />
          </div>
        </div>
      </div>
      {/*  */}
    </div>
  );
};

export default UploadImage;