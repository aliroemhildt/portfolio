export function fixPdfPageScroll() {
  document.body.classList.add('no-scroll');
}

export function clearPdfPageScroll() {
  document.body.classList.remove('no-scroll');
}

export function scrollTo(ref) {
  window.scrollTo({ top: ref.current?.offsetTop, behavior: 'smooth' })
}