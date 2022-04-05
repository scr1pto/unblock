

    const request = new XMLHttpRequest();
    const url = "https://cdnmovies.net/ajax/getDomain";
    request.open("GET", url, true);
    request.addEventListener("readystatechange", () => {
      if(request.readyState === 4 && request.status === 200) {

        let iframes = document.getElementsByTagName('iframe');
        let index;
        for(index = 0; index < iframes.length; ++index) {
          iframes[index].src = iframes[index].src.replace(/moonwalk.cam/gi, request.response);
          console.log(iframes[index].src);
        }
      }
    });
    request.send();
