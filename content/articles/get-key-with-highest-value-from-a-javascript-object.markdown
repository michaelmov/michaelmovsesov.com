---
path: "/articles/get-key-with-highest-value-from-javascript-object"
layout: post
categories:
- javascript
title: Get Key with Highest Value from a JavaScript Object
description: A snippet of JavaScript to return the key of the highest value in an
  object
date: 2021-09-03T07:00:00Z
hero_image: ''
og_image: ''
is_external: false
external_url: ''
comments: false
icon_class: ''
published: true

---
Supposed you have the follwing JavaScript object and you need to find the key with the highest value - which is `b` in this case.

```javascript
const numberObj = {
  a: 1,
  b: 50,
  c: 12
}
```

Here's a quick function to help you do that. The solution is written in TypeScript, so if you are looking for a pure JS solution, just remove the types 😊. 

```typescript
function getMaxValueKey(obj: {[key: string]: number}): string {
  return Object.keys(obj).reduce(function(a, b){ return obj[a] > obj[b] ? a : b });
}

getMaxValueKey(numberObj) // 'b'
```