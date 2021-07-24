---
path: "/articles/css-position-sticky-not-working-overflow-parent"
layout: post
categories:
- css
title: CSS position:sticky not working? Here's a fix
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
Anytime you are having an issue with CSS `position:sticky`, the issue is usuallyu one of the following:

## Element's placement property is not set

In order for the sticky element to function correctly, it needs to have at least one of it's `top`, `right`, `left`, or `bottom` placement properties set. 

