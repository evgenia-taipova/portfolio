document.addEventListener("DOMContentLoaded", () => {
  const animateOnScroll = () => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.3,
      }
    );

    const targets = document.querySelectorAll(
      ".animate-left, .animate-right, .animate-up"
    );
    targets.forEach((target) => observer.observe(target));
  };

  if (window.location.hash) {
    setTimeout(() => {
      animateOnScroll();
    }, 300);
  } else {
    animateOnScroll();
  }
});