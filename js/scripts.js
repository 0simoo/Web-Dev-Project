function validate(){
    var zip = $("#zip").val();
    if(isNaN(zip)) {
        alert("Zip code is not a valid format: must be 5 digits")
        return false;
    }
    if(zip.length == 0 || zip.length == 5) return true; 
      else {
          alert("Zip code is not a valid format: must be 5 digits long")
          return false
      } 
}