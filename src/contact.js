document.querySelectorAll('.email-link').forEach((link) => {
  const address = `${link.dataset.user}@${link.dataset.domain}.${link.dataset.tld}`;

  link.addEventListener('click', (event) => {
    event.preventDefault();
    window.location.href = `mailto:${address}`;
  });

  link.addEventListener('copy', (event) => {
    event.preventDefault();
    event.clipboardData.setData('text/plain', address);
  });
});
