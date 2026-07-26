window.addEventListener("load", () => {
     const yearEl = document.getElementById("year");
     if (yearEl) {
          yearEl.textContent = new Date().getFullYear();
     }

     const roles = ["Web developer", "Aspiring Data Engineer", "AI & DS Student"];
     const roleLine = document.getElementById("roleLine");
     const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

     if (roleLine) {
          if (prefersReduced) {
               roleLine.textContent = roles[0];
          } else {
               let roleIdx = 0;
               let charIdx = 0;
               let deleting = false;

               const tick = () => {
                    const current = roles[roleIdx];

                    if (!deleting) {
                         charIdx++;
                         roleLine.innerHTML = `${current.slice(0, charIdx)}<span class="cursor"></span>`;
                         if (charIdx === current.length) {
                              deleting = true;
                              setTimeout(tick, 1400);
                              return;
                         }
                    } else {
                         charIdx--;
                         roleLine.innerHTML = `${current.slice(0, charIdx)}<span class="cursor"></span>`;
                         if (charIdx === 0) {
                              deleting = false;
                              roleIdx = (roleIdx + 1) % roles.length;
                         }
                    }

                    setTimeout(tick, deleting ? 45 : 85);
               };

               tick();
          }
     }

     const githubLink = document.getElementById("githubLink");
     if (githubLink) {
          githubLink.addEventListener("click", (event) => {
               event.preventDefault();
               alert("Add your GitHub profile URL here.");
          });
     }
});
