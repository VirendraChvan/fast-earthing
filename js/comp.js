
async function loadComponent(id, file) {
  try {
    const res = await fetch(file);
    if (!res.ok) throw new Error(`Failed to fetch ${file}`);
    const html = await res.text();
    document.getElementById(id).innerHTML = html;
    
    // Only run active navbar logic if we just loaded the navbar
    if (id === "navbar") {
      setActiveNav();
    }
   } catch (err) {
    console.error(err);
  }
}

// Function to set active nav link
function setActiveNav() {
  let path = window.location.pathname;
   let filename = path.split("/").pop().split(".")[0];

  // Get all <a> inside #pbmit-top-menu
  let navLinks = document.querySelectorAll("#pbmit-top-menu li a");

  navLinks.forEach(link => {
 let linkFile = link.getAttribute("href").split("/").pop().split(".")[0];
    let parentLi = link.closest("li");

    // Remove existing active class
    parentLi.classList.remove("active");

    // Match exact filename OR handle product special case
    if (
      linkFile.toLowerCase() === filename.toLowerCase() ||
      (filename.toLowerCase().includes("product") &&
        linkFile.toLowerCase().includes("product"))
    ) {
      parentLi.classList.add("active");
    }

    
  });
}


    // Load Navbar and Footer
    loadComponent("navbar", "../components/header.html");
    loadComponent("footer", "../components/footer.html");