
    async function loadComponent(id, file) {
      try {
        const res = await fetch(file);
        if (!res.ok) throw new Error(`Failed to fetch ${file}`);
        const html = await res.text();
        document.getElementById(id).innerHTML = html;
      } catch (err) {
        console.error(err);
      }
    }

    // Load Navbar and Footer
    loadComponent("navbar", "../components/header.html");
    loadComponent("footer", "../components/footer.html");



  
  