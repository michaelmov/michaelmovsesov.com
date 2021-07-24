---
path: "/articles/fix-css-position-sticky-not-working"
layout: post
categories:
- css
title: CSS position:sticky not working? Try this fix
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
Anytime you are having an issue with CSS `position:sticky`, the issue is usually  one of the following:

## `position: sticky` is not compatible with your browser

Before you begin troubleshooting, confirm that `position: sticky` is compatible with your target browser. Check [here](https://caniuse.com/css-sticky).

## Sticky Element's placement property is not set

In order for the sticky element to function correctly, it needs to have at least one of it's `top`, `right`, `left`, or `bottom` placement properties set.

```css
// Header: style.css
.sticky-element {
  position: sticky;
  top: 0;
}
```

## Sticky element's has parent(s) with `overflow` property

If the sticky element has a parent or ancestory with `overflow: hidden`, `overflow: auto`, or `overflow: scroll`, then `position: sticky` will not work properly.

### How to find parents/ancestors with `overflow`

Here's an awesome JavaScript snippet I found for qickly finding parents or ancestors with set `overflow` property. Just copy and paste into your browser's console.

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