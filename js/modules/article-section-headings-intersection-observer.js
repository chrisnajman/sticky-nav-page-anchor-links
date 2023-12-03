export default function articleSectionHeadingsIntersectionObserver() {
  const primaryNavigation = document.querySelector(".primary-navigation")
  const primaryNavigationHeight = primaryNavigation.offsetHeight
  const articleHeadings = document.querySelectorAll("section h3")
  const menuLinks = [...document.querySelectorAll(".primary-navigation a")]

  const articleHeadingsOptions = {
    rootMargin: `-${primaryNavigationHeight}px  0px 0px 0px`,
  }

  const articleHeadingsObserver = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("highlight")
        findLink(menuLinks, entry)
      } else {
        entry.target.classList.remove("highlight")
      }
    })
  }, articleHeadingsOptions)

  articleHeadings.forEach((heading) => {
    articleHeadingsObserver.observe(heading)
  })
}

function findLink(menuLinks, entry) {
  menuLinks.find((link) => {
    const linkFrag = link.href.split("#")[1]
    if (entry.target.id === linkFrag) {
      return link.classList.add("active")
    } else {
      return link.classList.remove("active")
    }
  })
}
