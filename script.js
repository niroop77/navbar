var toggle = document.getElementById("navToggle");
var menu = document.getElementById("navMenu");

toggle.onclick = function() {
  menu.classList.toggle("active");
  toggle.innerHTML = menu.classList.contains("active") ? "✖" : "☰";
};








// var navbar = document.createElement("nav");
//   navbar.className = "navbar";

//   navbar.innerHTML = `
//     <div class="nav-brand">MySite</div>
//     <button class="nav-toggle" id="navToggle">☰</button>
//     <ul class="nav-menu" id="navMenu">
//       <li><a href="#">Home</a></li>
//       <li><a href="#">About</a></li>
//       <li><a href="#">Services</a></li>
//       <li><a href="#">Contact</a></li>
//     </ul>
//   `;

//   document.body.prepend(navbar);

//   var toggle = document.getElementById("navToggle");
//   var menu = document.getElementById("navMenu");

//   var openIcon = "☰";
//   var closeIcon = "✖";

//   toggle.onclick = function() {
//   menu.classList.toggle("active");

//   if(menu.classList.contains("active")) {
//     toggle.innerHTML = "✖";  // Close icon
//   } else {
//     toggle.innerHTML = "☰";  // Hamburger icon
//   }
// };
// // Create header container
// var header = document.createElement("header");
// header.id = "headerImage";

// // Add an image inside header
// header.innerHTML =`
//   <img src="D:\Frontend Training\Javascript\DOM\Navbar\images\header.jpg" alt="Header Image">
// `;

// // Add header below navbar
// document.body.appendChild(header);
