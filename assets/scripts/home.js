let menu = document.getElementById('menu');

let sideBar = document.querySelector(".sidebar");

let catagoryBar = document.querySelector(".catagory");

let videoSection = document.getElementById('videos');

let videoDiv = document.querySelector(".video-div")

menu.onclick = function () {

    catagoryBar.classList.toggle("large-catagory-bar");
    sideBar.classList.toggle("small-sidebar");
    videoDiv.classList.toggle("large-video-div");

}

fetch("./assets/videos.json")
    .then(res => res.json())

    .then(data => {

        console.log(data);

        var channelIcon = data.channeldetails.snippet.thumbnails.high.url;
        
        data.items.forEach(item => {

            videoSection.innerHTML +=

            `<div class="col-sm-12 col-md-6 col-lg-3">

                <div class="card video" onclick = "location.href = 'https://youtube.com/watch?v=${item.id.videoId}' ">
                    <img src="${item.snippet.thumbnails.high.url}" class="card-img-top thumbnail" alt="">
                    <div class="card-body d-flex">
                        <img class="card-title video-user" src="${channelIcon}" alt="">
                        <p class="card-text title">${item.snippet.title}</p>
                    </div>
                    <p class="channel-name">${item.snippet.channelTitle}</p>
                </div>
            </div> `;

        });
    });

