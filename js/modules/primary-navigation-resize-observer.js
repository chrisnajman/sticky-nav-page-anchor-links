export default function primaryNavigationResizeObserver() {
  const root = document.querySelector("html")
  const primaryNavigation = document.querySelector(".primary-navigation")

  const primaryNavigationObserver = new ResizeObserver((entries) => {
    for (const entry of entries) {
      // entry.contentRect.height does NOT include entry's padding!
      // Gets entry's top and bottom padding (assuming they're the same)
      const entryTopBotPadding = entry.contentRect.top * 2

      // Adjust the magic number to suit the project. Try a value of zero first.
      const magicNumber = 64
      const customAdjustment = entryTopBotPadding + magicNumber

      // Convert entry.contentRect.height + customAdjustment to rems (base.css sets root font size to 10px):
      const primaryNavigationHeightRems =
        (entry.contentRect.height + customAdjustment) / 10

      // Apply to html element:
      root.style = `scroll-padding-top: ${primaryNavigationHeightRems}rem`
    }
  })

  primaryNavigationObserver.observe(primaryNavigation)
}
