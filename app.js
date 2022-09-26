var getImgTags = document.querySelectorAll(".img"),  // NodeList
      getModal =  document.querySelector(".modal"),
      getBtnClose = document.querySelector(".btn-close"),
      getViews = document.getElementsByClassName("view"),   // HTML Collection
      getCounter = document.querySelector(".counter"),
      getCaption = document.querySelector(".caption"),
      getPrevBtn = document.querySelector(".prev"),
      getNextBtn = document.querySelector(".next"),
      getNoActives = document.getElementsByClassName("no-active");


      var currentIdx = 1;


      for(var i = 0; i < getImgTags.length; i++){
        // console.log(getImgTags[i]);

        // getImgTags[i].addEventListener("click",showModal);
        getImgTags[i].addEventListener("click",function(e){
          showModal();

          // console.log(e.target.alt);
          // console.log(this.alt);

          const findIds = this.alt.split('').filter(removeSpacing => removeSpacing.trim() !== '');

          // console.log(findIds);
          // console.log(findIds[findIds.length-1]);

          currentIdx = Number(findIds[findIds.length-1]);
          // console.log(currentIdx);
          // console.log(typeof currentIdx);

          slideShow(currentIdx);
        });
      }


      function showModal() {
        getModal.style.display = "block";
      }


//       method 1
     /*  getBtnClose.addEventListener("click",function(){
        getModal.style.display = "none";
      }) */


      // Method 2
        getBtnClose.onclick = function(){
        getModal.style.display = "none";
      }


      document.addEventListener("click", function(e){
        if(e.target === getModal){
                getModal.style.display = "none";
        }
      });










      function currentView(num){
        slideShow(num);
      }



      getNextBtn.addEventListener('click',function(){
        // console.log('next')
        slideShow(currentIdx += 1);

        /* if(currentIdx > getViews.length){
           currentIdx = 1;
        }*/

      });


      getPrevBtn.addEventListener('click',function(){
        // console.log("pre");
        slideShow(currentIdx -= 1);

    /* if(currentIdx < 1){
          currentIdx = getViews.length;
        }*/
      });




      // slideShow(currentIdx);

      function slideShow(num){
        // console.log(num);

        var x;
        for(x = 0; x < getViews.length; x++){
          getViews[x].style.display = "none";
        }
        for(x = 0; x < getNoActives.length; x++){
          // getNoActivesx].classList.remove("active");
          getNoActives[x].className = getNoActives[x].className.replace(" active","");
        }

        if(num > getViews.length){
          num = 1;
          currentIdx = 1;
        }

        if(num < 1){
          num = getViews.length;
          currentIdx =getViews.length;
        }


        console.log("This is current IDX = ", currentIdx);
        console.log("This is num = ", num);

        getCounter.textContent = `${num} / ${getViews.length}`;

        // 1 - -1 = 0
        getViews[num-1].style.display = "block";
        getNoActives[num-1].className += " active";
        getCaption.innerText = getNoActives[num-1].alt;
      }