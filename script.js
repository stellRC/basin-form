
const form = document.getElementById("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  fetch("https://usebasin.com/f/07226c21739b", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: formData,
    })
    .then((response) => {
      if (response.status === 200) {
        console.log("success");
      } else {
        console.log("fail");
      }
    })
    .catch((error) => console.log(error));
});




// function configureAhoy() {
//     ahoy.configure({
//       visitsUrl: "https://usebasin.com/ahoy/visits",
//       eventsUrl: "https://usebasin.com/ahoy/events",
//       page: "cc928449f4aa" /* Use your form id here */
//     });
//     ahoy.trackView();
//     ahoy.trackSubmits();
//   }


//   configureAhoy()