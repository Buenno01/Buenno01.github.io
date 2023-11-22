export function smoothScroll(event: any): void {
  event.preventDefault();
  const hashItem = event.target.hash;
  const section = document.querySelector(hashItem);

  window.scrollTo({
    top: section.offsetTop,
    behavior: 'smooth',
  });
}
