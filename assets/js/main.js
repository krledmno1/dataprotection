(function () {
  // DropCap.js
  if (window.Dropcap) {
    var dropcaps = document.querySelectorAll(".dropcap");
    window.Dropcap.layout(dropcaps, 2);
  }

  // Responsive-Nav
  if (window.responsiveNav) {
    window.responsiveNav(".nav-collapse");
  }
})();
