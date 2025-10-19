const hamburger = document.getElementById("Hamburger");
const navLinks = document.getElementById("nav-links");
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

const trigger = document.getElementById("email-Button");
const modal = document.getElementById("emailModal");
const closeBtn = document.querySelector(".close");

trigger.onclick = () => (modal.style.display = "block");
closeBtn.onclick = () => (modal.style.display = "none");
window.onclick = (e) => {
  if (e.target === modal) modal.style.display = "none";
};

/*
Creates Lines (<div></div> that will fade with each new line created)
const container = document.querySelector(".HomePage-bckgrd");
const lineCount = 10;
for (let i = 0; i < lineCount; i++) {
  const line = document.createElement("div");
  line.className = "line";
  line.style.bottom = `${i * 30}px`;
  line.style.opacity = `${1 - i / lineCount}`;
  container.appendChild(line);
}
  /////////////////////////HTML/////////////////////////
  <div class="HomePage-bckgrd">
        <!-- Lines will be injected by JavaScript -->
      </div>
/////////////////////////CSS/////////////////////////
      //////////////////////HomePage Background Lines///////////////////////////////
.HomePage-bckgrd {
  position: static;
  bottom: 0px;
  left: 0;
  width: 100%;
  height: 600px;
  pointer-events: none; /* ensures it doesn't block interaction 
  z-index: -1; /*sits behind everything 
}

.HomePage-bckgrd .line {
  position: absolute;
  width: 100%;
  height: 50px; /* adjust thickness 
  background-color: #00bcd4; /* base color 
}
  */
