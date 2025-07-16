function toggleAccordion(accordionItem) {
        const conteudo = accordionItem.querySelector(".accordion-conteudo");        
        const image = accordionItem.querySelector(".mais");
        const isConteudoVisible =
          window.getComputedStyle(conteudo).display !== "none";
        if (!isConteudoVisible) {
          conteudo.style.display = "block";
          image.src = "assets/images/icon-minus.svg";
        } else {
          conteudo.style.display = "none";
          image.src = "assets/images/icon-plus.svg";
        }
    }