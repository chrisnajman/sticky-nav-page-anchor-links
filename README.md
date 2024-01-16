# Sticky Nav, Page Anchor Links

## Description

Page navigation via anchor links, i.e. when you click a menu link in the `nav`, you're taken to the corresponding section in the page. The `nav` has `position: sticky`, so the page content moves under it on page scroll. A shadow at the base of the `nav` appears on scroll, as well as a 'Back to top' link.

Clicking a link or scrolling to a section will highlight the corresponding menu link, and briefly underline the associated `section` heading.

The JavaScript achieves 3 things:

1. It adds the shadow on the base of the `nav` and the 'Back to top' link to the bottom of the page, on scroll. The shadow and link are removed if you scroll back to the top of the page.
2. It adds a highlight to menu links and an underline on the `section` heading, (on click or on scroll) .
3. It dynamically calculates the height of the `nav` as the viewport narrows or expands. This means you don't have to set a fixed height on the `nav`. The resulting value provides the offset of the main content. Without this offset the page anchor target content would be hidden under the `nav`.

## JavaScript

- ES6 Modules (no transpilation to ES5)

1. `js/modules/observers/article-header-intersection-observer` adds / removes the `nav` shadow and the 'Back to top' link on scroll.
2. `js/modules/observers/article-section-headings-intersection-observer.js` adds the highlight to the menu links and the underline to the `section` headings.
   - The `js/modules/find-link.js` function is imported.
3. `js/modules/observers/primary-navigation-resize-observer.js` dynamically calculates the height of the `nav`. The resulting value is printed as a `style` declaration on the `html` element using `scroll-padding-top`.

- Additionally, `js/modules/theme-switcher.js` provides dark mode toggle functionality. The selected mode is saved to local storage.

## CSS

- `grid` used for page layout.
- `flexbox` used for page elements.
- Files are organised using `@import` to pull modules into `index.css`.
- Files are organised internally using CSS nesting.
- Dark theme option.

## WAVE Web Accessibility Evaluation Tools Report

- [Automated accessibility analysis results](https://wave.webaim.org/report#/https://chrisnajman.github.io/sticky-nav-page-anchor-links/)

## Testing

Windows 10:

- Chrome
- Firefox
- Microsoft Edge

The page has been tested in both browser and device views.

## Related

- [Fixed Header Anchor Navigation](https://github.com/chrisnajman/fixed-header-anchor-navigation). An earlier version. I consider the current version using `position: sticky` instead of `position: fixed` to be superior. The earlier version also lacks menu link and section header highlighting.

## Sources

- [CSS Tricks: Fixed Headers, On-Page Links, and Overlapping Content, Oh My!](https://css-tricks.com/fixed-headers-on-page-links-and-overlapping-content-oh-my/)
  - [Associated CodePen](https://codepen.io/chriscoyier/pen/NJJERg)
- [MDN Web Docs: Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)
- [YouTube, Kevin Powell: Introduction to the Intersection Observer JavaScript API](https://youtu.be/T8EYosX4NOo?si=5Sf1OgomHr4d-5wA)
