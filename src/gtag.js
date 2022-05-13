const gtag = (...args) => {
  if (typeof window !== "undefined") {
    if (typeof window.gtag === "undefined") {
      window.dataLayerGtag = window.dataLayerGtag || [];
      window.gtag = function gtag() {
        window.dataLayerGtag.push(arguments);
      };
    }

    window.gtag(...args);
  }
};

export default gtag;
