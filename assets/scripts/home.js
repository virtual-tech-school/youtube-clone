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

        var len = data.items.length;
        var channelIcon = data.items[len - 1].snippet.thumbnails.high.url;

        for (var i = 0; i < len - 1; i++) {

            data.items[i].channelIcon = channelIcon;

            videoSection.innerHTML +=

                `<div class="col-sm-12 col-md-6 col-lg-3">

                <div class="card video" onclick = "location.href = 'https://youtube.com/watch?v=${data.items[i].id.videoId}' ">
                    <img src="${data.items[i].snippet.thumbnails.high.url}" class="card-img-top thumbnail" alt="">
                    <div class="card-body d-flex">
                        <img class="card-title video-user" src="${data.items[i].channelIcon}" alt="">
                        <p class="card-text title">${data.items[i].snippet.title}</p>
                    </div>
                    <p class="channel-name">${data.items[i].snippet.channelTitle}</p>
                </div>
            </div> `;
        }

    });

