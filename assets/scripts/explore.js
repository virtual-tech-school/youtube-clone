const showMore = document.querySelector(".show-more");
const maxHeight = document.querySelector(".max-height");
const content = document.querySelector("#container-content");
const videoCardContainer1 = document.querySelector(".video-card-container-1");
const videoCardContainer2 = document.querySelector(".video-card-container-2");
const shortsCardContainer = document.querySelector(".shorts-card-container");

fetch("/assets/videos.json")
  .then((response) => response.json())
  .then((data) => {
    // console.log(data);
    // console.log(data.items);

    const arrayOfVideos = [...data.items];

    for (let i = 0; i < 2; i++) {
      createVideoCard(arrayOfVideos[i],videoCardContainer1);
    }
    for (let i = 2; i < arrayOfVideos.length - 1; i++) {
      createVideoCard(arrayOfVideos[i],videoCardContainer2);
    }
    createShortsCard(arrayOfVideos);

  });

showMore.addEventListener("click", () => {
  maxHeight.style.maxHeight = "max-content";
  showMore.style.display = "none";
  content.classList.remove("bg");
});

const createVideoCard = (data,videoCardContainer) => {
  videoCardContainer.innerHTML += `
  <div class="video-card" ">
  
                    <div class="video-container">
                    <a href="https://www.youtube.com/watch?v=${
                      data.id.videoId
                    }">
                        <img src="${data.snippet.thumbnails.high.url}">
                        <div class="video-hover">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clock " viewBox="0 0 16 16">
                            <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
                            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
                        </svg>
                    </div>
                    </a>
                    </div>

                    <div class="video-card-data">

                        <div class="video-info">
                        <a href="https://www.youtube.com/watch?v=${
                          data.id.videoId
                        }">

                            <div class="video-title-container">


                                <div class="video-title line-clamp" title="${
                                  data.snippet.title
                                }">
                                    <p>${data.snippet.title}</p>
                                </div>
                                <div class="more-options">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                                        <path
                                            d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />

                                    </svg>
                                </div>
                            </div>
                            <a href="https://www.youtube.com/channel/UCbKRTD-bqh0F2XM2raMO7kw">

                            <div class="video-channel" title="${
                              data.snippet.channelTitle
                            }">${data.snippet.channelTitle}</div>
                            </a>
                            <div class="statistic-info">
                                <div class="video-views">2.3K views</div>
                                <i class="fa fa-circle"></i>
                                <div class="video-time">${createDates(
                                  data.snippet.publishedAt
                                )}</div>
                            </div>
                            <div class="video-desc line-clamp">
                                <p>${data.snippet.description}</p>
                            </div>
                            </a>
                        </div>
                    </div>
                    
                </div>
                `;
};
const createShortsCard = (data) => {
  for (let j = 0; j < data.length - 1; j++) {
    shortsCardContainer.innerHTML += `
  <div class="shorts-card">
        <div class="shorts-video-container">
        <a href="https://www.youtube.com/watch?v=${data[j].id.videoId}">
            <img src="${data[j].snippet.thumbnails.high.url}">
            <div class="video-hover">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clock " viewBox="0 0 16 16">
                <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
            </svg>
        </div>
        </a>
        </div>

    <div class="shorts-card-data">

      <div class="shorts-video-info">
      <a href="https://www.youtube.com/watch?v=${data[j].id.videoId}">

          <div class="shorts-video-title-container">


              <div class="shorts-video-title line-clamp" title="${data[j].snippet.title}">
                  <p>${data[j].snippet.title}</p>
              </div>
              <div class="shorts-more-options">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                      class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                      <path
                          d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />

                  </svg>
              </div>
          </div>

          <a href="https://www.youtube.com/channel/UCbKRTD-bqh0F2XM2raMO7kw">

          <div class="shorts-video-channel" title="${data[j].snippet.channelTitle}">${data[j].snippet.channelTitle}</div>
          
          </a>
          <div class="shorts-statistic-info">
              <div class="video-views">2.3K views</div>
              <i class="fa fa-circle"></i>
              <div class="video-time">${createDates(
                data[j].snippet.publishedAt
              )}</div>
          </div>
          </a>
         
      </div>
  </div>
</div>`;
  }

  $(".owl-carousel").owlCarousel({
    margin: 25,
    nav: true,
    items: 5,
    slideBy: 5,
    smartSpeed: 50,
    responsive: {
      0: {
        items: 2,
      },
      650: {
        items: 3,
      },
      856: {
        items: 4,
      },
      1070: {
        items: 5,
      },
    },
  });
};

const createDates = (data) => {
  let publishDate = data;

  let [date, time] = publishDate.split("T");
  let [year, month, day] = date.split("-");
  let [hour, minute, second] = time.split(":");
  second = second.slice(0, -1);

  const today = new Date();
  const currYear = today.getFullYear();
  const currMonth = today.getMonth() + 1;
  const currDay = today.getDate();
  const currHour = today.getHours();
  const currMinute = today.getMinutes();
  const currSeconds = today.getSeconds();

  let numOfX;
  let X;
  //String format : numOfX + " " + X + " " + "ago"
  let timeLapsed;

  const date1 = new Date(`${year}/${month}/${day} ${hour}:${minute}:${second}`);
  const date2 = new Date(`${currYear}/${currMonth}/${currDay} ${currHour}:${currMinute}:${currSeconds}`
  );
  
  let oldTime;
  let diffInMilliSeconds = date2 - date1;
  let newTime = diffInMilliSeconds / 1000;


  let index = 0;
  let divFac = [60, 60, 24, 7, 4, 12];
  let XFac = ["minutes", "hours", "days", "weeks", "months", "years"];

  while (Math.floor(newTime / divFac[index]) != 0 && index < divFac.length) {
    oldTime = newTime;
    newTime = Math.floor(newTime / divFac[index]);

    numOfX = newTime;
    X = XFac[index];
    index++;
  }

  if (numOfX < 2 && X == "weeks") {
    numOfX = oldTime;
    X = "days";
  }

  if (numOfX == 1) {
    X = X.slice(0, -1);
  }

  timeLapsed = `${numOfX} ${X} ago`;

  return timeLapsed;
};
