const createAnalytics = (): object => {
  let counter = 0;
  let isDestroyed = false;

  const listener = (): number => counter++;
  document.addEventListener('click', listener);

  return {
    destroy() {
      counter = 0;
      document.removeEventListener('click', listener);
      isDestroyed = true;
    },
    getClicks() {
      if (isDestroyed) return 'Analitics is destroyed!';
      console.log(counter);
    },
  };
};

window['analytics'] = createAnalytics();
