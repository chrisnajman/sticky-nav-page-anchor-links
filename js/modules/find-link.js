export default function findLink(entry) {
  const menuLinks = [...document.querySelectorAll(".primary-navigation a")]
  menuLinks.find((link) => {
    const linkFrag = link.href.split("#")[1]
    if (entry.target.id === linkFrag) {
      return link.classList.add("active")
    } else {
      return link.classList.remove("active")
    }
  })
}
