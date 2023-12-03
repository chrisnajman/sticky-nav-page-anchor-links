import findLink from "../find-link.js"

export default function articleSectionHeadingsIntersectionObserver() {
  const primaryNavigationHeight = document.querySelector(
    ".primary-navigation"
  ).offsetHeight
  const articleHeadings = document.querySelectorAll("section h3")

  const articleHeadingsOptions = {
    rootMargin: `-${primaryNavigationHeight}px  0px 0px 0px`,
  }

  const articleHeadingsObserver = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("highlight")
        findLink(entry)
      } else {
        entry.target.classList.remove("highlight")
      }
    })
  }, articleHeadingsOptions)

  articleHeadings.forEach((heading) => {
    articleHeadingsObserver.observe(heading)
  })
}
