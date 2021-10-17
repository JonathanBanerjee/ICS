import './Css/Upload.css';
import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

class Upload extends Component {

  componentDidMount(){
    const inputElement = document.getElementById("contained-button-file");
    inputElement.addEventListener("change", this.handleFiles, false);
  }

  handleFiles() {
    const fileList = this.files; /* now you can work with the file list */
    console.log("filelist");
    console.log(fileList);
    document.getElementById("tempImage").file = fileList[0];
    const reader = new FileReader();
    reader.onload = (function(aImg) { return function(e) { aImg.src = e.target.result; }; })(document.getElementById("tempImage"));
    reader.readAsDataURL(fileList[0]);
  }

  // storeFile(e){
  //   console.log(e);
  //   var img = document.getElementById("tempImage");
  //   var selectedFile = document.getElementById("contained-button-file").files;
  //   console.log(selectedFile[0]);
  //   // if(selectedFile.length > 0){
  //   //   img.src = selectedFile[0].name;
  //   // }
  //   if (e.files && e.files[0]) {
  //          var reader = new FileReader();
  //          reader.onload = function (e) {
  //              img
  //                  .attr('src', e.target.result)
  //                  .width(150)
  //                  .height(200);
  //          };
  //
  //          reader.readAsDataURL(e.files[0]);
  //      }
  // }

  render(){

    return (
    <div className = "upload">

        <h3>Please upload some code or Huw's logo here</h3> <br />

        <input
          type="file"
          accept="image/*"
          style={{ display: 'none' }}
          id="contained-button-file"
        />
        <label htmlFor="contained-button-file">
          <Button variant="contained" color="primary" component="span">
            Upload
          </Button>
        </label><br />
        <img src="" id="tempImage" />
      </div>
    );
  }
}

export default Upload;
