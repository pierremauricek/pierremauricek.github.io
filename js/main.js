    document.addEventListener('DOMContentLoaded', () => {
      const feature = document.getElementById('feature');
      const computedStyle = getComputedStyle(feature);
      const backgroundSize = parseFloat(computedStyle.backgroundSize.split(' ')[0]) || 100;
      const zoom = backgroundSize / 100;
      const initialWidth = feature.offsetWidth;
      const baseSize = zoom * initialWidth;

      function onScroll() {
        const fromTop = window.scrollY;
        const newSize = baseSize - (fromTop / 3);

        if (newSize > initialWidth) {
          feature.style.backgroundSize = `${newSize}px`;
          feature.style.webkitFilter = `blur(${fromTop / 100}px)`;
          feature.style.opacity = 1 - ((fromTop / document.documentElement.scrollHeight) * 1.3);
        }
      }

      // Browser detection
      const ua = navigator.userAgent;
      const isChrome = /Chrome/.test(ua) && /Google Inc/.test(navigator.vendor);
      const isSafari = /Safari/.test(ua) && /Apple Computer/.test(navigator.vendor);

      if (!(isChrome || isSafari)) {
        const opaque = document.createElement('div');
        opaque.classList.add('opaque');
        feature.appendChild(opaque);

        window.addEventListener('scroll', () => {
          opaque.style.opacity = window.scrollY / 5000;
        });
      }

      window.addEventListener('scroll', onScroll);
    });
