var link = document.querySelector('.link');
var format = document.querySelector('.format');
var hidden = document.querySelector('.hidden');
var youtubelink= document.querySelector('.videoid');
function iframe() {
  if(link.value!=""){
   if(link.value.indexOf("https://youtu.be/") != -1)
     {
   var url1 = link.value.replace("https://youtu.be/","https://www.youtube.com/embed/");
  
  document.querySelector('.result1').innerHTML = `<iframe width="100%" height="190" src="${url1}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  var url2 = link.value.replace("https://youtu.be/","https://www.youtube.com/watch?v=");
  youtubelink.value = url2;
  }
  else if(link.value.indexOf("https://www.youtube.com/watch?v=") != -1)
      {
  var url1 = link.value.replace("https://www.youtube.com/watch?v=","https://www.youtube.com/embed/");
  
  document.querySelector('.result1').innerHTML = `<iframe width="100%" height="190" src="${url1}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  var url2 = link.value.replace("https://www.youtube.com/watch?v=","https://www.youtube.com/watch?v=");
  youtubelink.value = url2;
      }
      else if (link.value.indexOf("https://youtube.com/shorts/") != -1)
     {
       var url1 = link.value.replace("https://youtube.com/shorts/", "https://www.youtube.com/embed/");
       var u3 = url1.replace("?feature=share", "");
       document.querySelector('.result1').innerHTML = `<iframe width="100%" height="190" src="${u3}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
       var u = link.value.replace("https://youtube.com/shorts/", "https://www.youtube.com/watch?v=");
       var u2 = u.replace("?feature=share", "");
       youtubelink.value = u2;
     }
     else{
       alert('Enter Your YouTube Video Url');
     }
   }
   else {
     alert('Enter Your YouTube Video Url');
   }
}
function Api(){
  iframe();
  if(link.value!=""){
  const encodedParams = new URLSearchParams();
  encodedParams.append("url", youtubelink.value);
  
  const options = {
    method: 'POST',
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      'X-RapidAPI-Key': '2b929025ddmshd3302ab633a818cp1ab4cdjsne14ca95e2a8d',
      'X-RapidAPI-Host': 'all-socials-downloader.p.rapidapi.com'
    },
    body: encodedParams
  };
 fetch('https://all-socials-downloader.p.rapidapi.com/', options).then((response) => {
   return response.json();
 }).then((data) => {
   console.log(data);
   switch (format.value) {
     case "mp3":
       hidden.classList.add('active');
       document.querySelector('.form-control').value = data.links[3].url;
       break;
     case "m4a":
       hidden.classList.add('active');
       document.querySelector('.form-control').value = data.links[2].url;
       break;
       case "144":
       hidden.classList.add('active');
       document.querySelector('.form-control').value = data.links[5].url;
       break;
     case "240":
       hidden.classList.add('active');
       document.querySelector('.form-control').value = data.links[8].url;
       break;
       case "360":
       hidden.classList.add('active');
       document.querySelector('.form-control').value = data.links[11].url;
       break;
       case "480":
       hidden.classList.add('active');
       document.querySelector('.form-control').value = data.links[11].url;
       break;
       case "720":
       hidden.classList.add('active');
       document.querySelector('.form-control').value = data.links[11].url;
       break;
       case "1080":
       hidden.classList.add('active');
       document.querySelector('.form-control').value = data.links[11].url;
       break;
   }
 }).catch(err => console.error(err));
 }
 else {
     alert('Enter Your YouTube Video Url');
   }
}
var url = document.querySelector('.form-control');
function download(){
      const anchor = document.createElement("a");
      anchor.href =  url.value;
      anchor.download = 'MWC.mp4';
  
      document.body.appendChild(anchor);
      anchor.click();
      document.body.removeChild(anchor);
 }