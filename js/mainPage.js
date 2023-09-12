membersInfo = [
  {
    major: "소프트웨어",
    id: 201704107,
    name: "조건우",
    profileImages: "../memberImg/joGunwoo201704107.jpg"
  },

  {
    major: "가상현실",
    id: 201804127,
    name: "홍성현",
    profileImages: "../memberImg/hongSeonghyeon201804127.jpg"
  },

  {
    major: "소프트웨어",
    id: 202204123,
    name: "정나영",
    profileImages: "../memberImg/jeongNayeong202204123 .jpg"
  }
]

document.querySelector("#title").innerHTML = "리액트로 노후대비"
document.querySelector("#image").src = membersInfo[0].profileImages

href = document.querySelectorAll("#grid td a")	
span = document.querySelectorAll("#grid tr span")	
img =  document.querySelectorAll("#grid tr img")	
infos = document.querySelectorAll("#grid tr")

//멤버 정보 출력
for(let i = 0; i < membersInfo.length; i++) {
  span[i].innerHTML = membersInfo[i].major + ' ' + membersInfo[i].id + ' ' + membersInfo[i].name
  img[i].src = membersInfo[i].profileImages
}

//멤버 정보에 마우스를 올릴 때 프로필 사진 바꾸기
for(let i = 0; i < membersInfo.length; i++) {
  infos[i].addEventListener('mouseover', function() {
    document.querySelector("#image").src = membersInfo[i].profileImages
  })
}