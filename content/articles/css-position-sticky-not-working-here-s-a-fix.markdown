---
path: "/articles/fix-css-position-sticky-not-working"
layout: post
categories:
- css
title: CSS position:sticky Not Working? Try This Fix
description: How to troubleshoot and fix CSS position:sticky when it's not working
  as expected.
date: 2021-07-24T07:00:00Z
hero_image: ''
og_image: ''
is_external: false
external_url: ''
comments: true
icon_class: ''
published: true

---
Anytime you are having an issue with CSS `position:sticky`, the solution is usually  one of the following:

### `position: sticky`  Is Not Compatible with Your Browser

Before you begin troubleshooting, confirm that `position: sticky` is compatible with your target browser. Check [here](https://caniuse.com/css-sticky).

### Sticky Element's Placement Property Is Not Set

In order for the sticky element to function correctly, it needs to have at least one of it's `top`, `right`, `left`, or `bottom` placement properties set.

```css
.sticky-element {
  position: sticky;
  top: 0;
}
```

### Sticky Element Has Parent(s) with `overflow` Property

If the sticky element has a parent or ancestor with `overflow: hidden`, `overflow: auto`, or `overflow: scroll`, then `position: sticky` will not work properly. 

#### How to Find Parents/Ancestors with `overflow`

Here's an awesome JavaScript snippet I found to quickly find parents or ancestors with a set `overflow` property. Just copy and paste into your browser's console ([source](https://www.designcise.com/web/tutorial/how-to-fix-issues-with-css-position-sticky-not-working)).

```javascript
let parent = document.querySelector('.sticky-element').parentElement;

while (parent) {
    const hasOverflow = getComputedStyle(parent).overflow;
    if (hasOverflow !== 'visible') {
        console.log(hasOverflow, parent);
    }
    parent = parent.parentElement;
}
```

### Parent Element's Height Property Is Not Set

The sticky element will not have a place to stick if the parent's `height` property is not set.