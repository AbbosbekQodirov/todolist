const container = document.querySelector(".container");
const container3 = document.querySelector(".container3");
const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const box = document.querySelector(".box");
const sign_in = document.querySelector(".sign-in");
const sign_up = document.querySelector(".sign-up");
const btn4 = document.querySelector(".btn4");

btn1.addEventListener("click", () => {
  container.classList.add("container2");
  box.style.left = "0px";
  sign_in.classList.add("in");
  sign_up.classList.add("up");
});

btn2.addEventListener("click", () => {
  container.classList.remove("container2");
  box.style.left = "400px";
  sign_up.classList.remove("up");
  sign_in.classList.remove("in");
});

btn4.addEventListener("click", () => {
  var userName1 = document.querySelector("#userName1").value;
  var password1 = document.querySelector("#password1").value;
  if (userName1 == "abbosbek" && password1 == "2501") {
    container.style.margin = "-100vh 0 0 0";
    container3.style.display = "block";
    document.querySelector("#userName1").style.border = "1px solid black";
    document.querySelector("#password1").style.border = "1px solid black";
  } else {
    alert("Login yoki parol xato tekshirib qayta urunib ko'ring");
    document.querySelector("#userName1").style.border = "2px dashed red";
    document.querySelector("#password1").style.border = "2px dashed red";
    document.querySelector("#userName1").value = "";
    document.querySelector("#password1").value = "";
  }
});

/////////////////////////////TODO LIST////////////////////

const add = document.querySelector(".add");
const blocknot = document.querySelector(".blocknot");
const blocknot1 = document.querySelector(".blocknot1");

const university = document.querySelector(".university");
const show1 = document.querySelector(".show1");
const codial = document.querySelector(".codial");
const show2 = document.querySelector(".show2");
const iTeach = document.querySelector(".iTeach");
const show3 = document.querySelector(".show3");

show1.addEventListener("click", () => {
  university.classList.toggle("university2");
  show1.classList.toggle("show");
});

show2.addEventListener("click", () => {
  codial.classList.toggle("university2");
  show2.classList.toggle("show");
});

show3.addEventListener("click", () => {
  iTeach.classList.toggle("university2");
  show3.classList.toggle("show");
});

document.addEventListener("click", (e) => {
  const input1 = e.target.parentElement.querySelector("#input1");
  if (e.target.classList.value == "add") {
    if (!input1.value == "") {
      e.target.parentElement.parentElement.querySelector(
        ".blocknot1"
      ).innerHTML += `<li>${input1.value}<input type="checkbox" class="checkbox"><i class="fa-solid fa-trash"></i></li>`;
      input1.value = "";
      input1.style.border = "1px solid black";
    } else {
      confirm("Ma'lumot kiritilganligini tekshiring");
      input1.style.border = "2px dotted red";
      input1.focus();
    }
  }
});

document.addEventListener("click", (e) => {
  if (e.target.classList.value == "fa-solid fa-trash") {
    e.target.parentElement.remove();
  }
});

document.addEventListener("click", (e) => {
  if (e.target.classList.value == "checkbox") {
    e.target.parentElement.classList.toggle("checked");
  }
});

document.addEventListener("click", (e) => {
  const web1 = document.querySelector(".web1");
  const algoritm1 = document.querySelector(".algoritm1");
  const extimollik1 = document.querySelector(".extimollik1");
  const kte1 = document.querySelector(".kte1");
  const front_3 = document.querySelector(".front_3");
  const front_4 = document.querySelector(".front_4");
  const react1 = document.querySelector(".react1");
  const project1 = document.querySelector(".project1");

   if (e.target.classList.value == "task web") {
     web1.classList.add("active");
     algoritm1.classList.remove("active");
     extimollik1.classList.remove("active");
     kte1.classList.remove("active");
     front_3.classList.remove("active");
     front_4.classList.remove("active");
     react1.classList.remove("active");
     project1.classList.remove("active");
   }

  if (e.target.classList.value == "task algoritm") {
    web1.classList.remove("active");
    algoritm1.classList.add("active");
    extimollik1.classList.remove("active");
    kte1.classList.remove("active");
    front_3.classList.remove("active");
    front_4.classList.remove("active");
    react1.classList.remove("active");
    project1.classList.remove("active");
  }
  if (e.target.classList.value == "task extimollik") {
    web1.classList.remove("active");
    algoritm1.classList.remove("active");
    extimollik1.classList.add("active");
    kte1.classList.remove("active");
    front_3.classList.remove("active");
    front_4.classList.remove("active");
    react1.classList.remove("active");
    project1.classList.remove("active");
  }
  if (e.target.classList.value == "task kte") {
    web1.classList.remove("active");
    algoritm1.classList.remove("active");
    extimollik1.classList.remove("active");
    kte1.classList.add("active");
    front_3.classList.remove("active");
    front_4.classList.remove("active");
    react1.classList.remove("active");
    project1.classList.remove("active");
  }
  if (e.target.classList.value == "task front3") {
    web1.classList.remove("active");
    algoritm1.classList.remove("active");
    extimollik1.classList.remove("active");
    kte1.classList.remove("active");
    front_3.classList.add("active");
    front_4.classList.remove("active");
    react1.classList.remove("active");
    project1.classList.remove("active");
  }
  if (e.target.classList.value == "task front4") {
    web1.classList.remove("active");
    algoritm1.classList.remove("active");
    extimollik1.classList.remove("active");
    kte1.classList.remove("active");
    front_3.classList.remove("active");
    front_4.classList.add("active");
    react1.classList.remove("active");
    project1.classList.remove("active");
  }
  if (e.target.classList.value == "task react") {
    web1.classList.remove("active");
    algoritm1.classList.remove("active");
    extimollik1.classList.remove("active");
    kte1.classList.remove("active");
    front_3.classList.remove("active");
    front_4.classList.remove("active");
    react1.classList.add("active");
    project1.classList.remove("active");
  }
  if (e.target.classList.value == "task project") {
    web1.classList.remove("active");
    algoritm1.classList.remove("active");
    extimollik1.classList.remove("active");
    kte1.classList.remove("active");
    front_3.classList.remove("active");
    front_4.classList.remove("active");
    react1.classList.remove("active");
    project1.classList.add("active");
  }
});
