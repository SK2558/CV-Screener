const data = [
  {
    name: "Rohan Das",
    age: 18,
    city: "Kolkata",
    language: "Pythons",
    framework: "Django",
    image: "https://randomuser.me/api/portraits/men/51.jpg",
  },
  {
    name: "mahesh solanki",
    age: 22,
    city: "indore",
    language: "javascript",
    framework: "AngularJS",
    image: "https://randomuser.me/api/portraits/men/53.jpg",
  },
  {
    name: "Aishwarya Rai ",
    age: 33,
    city: "Kolkata",
    language: "Python",
    framework: "flask",
    image: "https://randomuser.me/api/portraits/women/55.jpg",
  },
  {
    name: "Rohit Sharma",
    age: 25,
    city: "jharkhand",
    language: "Go",
    framework: "Go framework",
    image: "https://randomuser.me/api/portraits/men/59.jpg",
  },
];

//CV Iterator
function cvIterator(profiles) {
  let nextIndex = 0;
  return {
    next: function () {
      return nextIndex < profiles.length
        ? { value: profiles[nextIndex++], done: false }
        : { done: true };
    },
  };
}

const candidates = cvIterator(data);
nextCV();
//Button listener for next button
const next = document.getElementById('next');
next.addEventListener('click',nextCV);



function nextCV() {
         const currentCandidate = candidates.next().value;
          let image = document.getElementById('image');
          let profile= document.getElementById( 'profile');
          if ( currentCandidate!= undefined){
          image.innerHTML=`<img src ='${currentCandidate.image}'>`;

          profile.innerHTML=`<ul class="list-group">
          <li class="list-group-item"> ${currentCandidate.name}</li>
          <li class="list-group-item"> ${currentCandidate.age} years old </li>
          <li class="list-group-item"> ${currentCandidate.city}</li>
          <li class="list-group-item">primarily works on ${currentCandidate.language}</li>
          <li class="list-group-item">uses  ${currentCandidate.framework} framework </li>           
        
          </ul>`;
          }
          else{
            alert('end of application');
          window.location.reload();
          }

}




