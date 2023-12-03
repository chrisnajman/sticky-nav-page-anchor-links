export default function articleHeaderIntersectionObserver() {
  const primaryNavigation = document.querySelector(".primary-navigation")
  const primaryNavigationHeight = primaryNavigation.offsetHeight
  const articleHeader = document.querySelector(".article-header")
  const backToTop = document.querySelector(".back-to-top")

  const articleHeaderOptions = {
    rootMargin: `-${primaryNavigationHeight}px  0px 0px 0px`,
  }

  const articleHeaderObserver = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        primaryNavigation.classList.add("shadow")
        backToTop.classList.add("show")
      } else {
        primaryNavigation.classList.remove("shadow")
        backToTop.classList.remove("show")
      }
    })
  }, articleHeaderOptions)

  articleHeaderObserver.observe(articleHeader)
}
