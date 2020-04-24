let images = ["https://images.pexels.com/photos/259915/pexels-photo-259915.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  "https://images.pexels.com/photos/707915/pexels-photo-707915.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  "https://images.pexels.com/photos/719609/pexels-photo-719609.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"];

  let counter = 0;
  let imgTag = document.getElementsByTagName("img")[0];
  let prevBtn = document.getElementsByTagName("button")[0];
  let nextBtn = document.getElementsByTagName("button")[1];

  imgTag.src = images[counter];

 prevBtn.addEventListener("click",slideToPrev);
 nextBtn.addEventListener("click",slideToNext);


 function slideToPrev(){
     counter--; 
     if(counter < 0){
        counter = images.length-1;
    }
    if(counter >= 0){
        let prevSlide = images[counter];
        imgTag.src = prevSlide;
    }
 }
 function slideToNext(){
    counter++;
    if(counter === images.length){
        counter = 0;
    }
    if(counter < images.length){
        let nextSlide = images[counter];
        imgTag.src = nextSlide;
        
    }
 }
  function slide(){
      /*direction: next or previous slide */
      /* current slide: which images (index of the images array is visible) */
      /**container for that image: mg-tag to replace the src attribute */

      let currentSlide= images[counter];

  }

