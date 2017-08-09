const container = document.querySelector(".container");
// let data;
//   fetch("https://api.github.com/users")
//     .then(
//       function(response) {
//         if(response.status !==200) {
//           console.log(response.status);
//       return;
//     }
//     response.json().then(function(data) {
//       console.log("Here is the data:", data);
//       requestListener(data);
// });
//   }
// )
// .catch(function(err) {
//   console.log("Fetch Error :-S", err);
// });

function requestListener (data) {
let searchItem = document.createElement("div");
searchItem.innerHTML = `
<h3> ${data.name}</h3>
<img width=200px src= "${data.avatar_url}"> </img>
`;
container.appendChild(searchItem);
}

function textReplace () {
let inputValue = document.getElementById("search_bar").value;

let baseURL = "https://api.github.com/users/";


fetch(baseURL+ inputValue)
  .then(
    function(response) {
      if(response.status !==200) {
        console.log(response.status);
    return;
  }
  response.json().then(function(data) {
    console.log("Here is the data:", data);
    requestListener(data);
});
}
)
.catch(function(err) {
console.log("Fetch Error :-S", err);
});
}
//
// function createItems () {
//
//   }}
//
// let searchContent = document.querySelector(".search1");
// let thumbnail = data.
//
// }
