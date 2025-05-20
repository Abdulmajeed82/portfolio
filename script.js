// Tab functionality
const tablinks = document.getElementsByClassName("tab-links");
const tabcontents = document.getElementsByClassName("tab-content");

function openTab(tabname, event) {
  // Remove active class from all tab links and tab contents
  for (let tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (let tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }

  // Add active class to the clicked tab and its corresponding content
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

// Responsive Menu
const sidemenu = document.getElementById("sidemenu");

function openMenu() {
  sidemenu.style.right = "0";
}

function closeMenu() {
  sidemenu.style.right = "-200px"; // or whatever width your menu is
}
