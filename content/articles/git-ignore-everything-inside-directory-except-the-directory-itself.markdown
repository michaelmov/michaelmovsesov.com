---
path: "/articles/git-ignore-all-contents-of-directory-except-directory-itself"
layout: post
title: Git Ignore Everything Inside Directory Except the Directory Itself
description: How to .gitgnore all  inner contents of a directory, but commit the directory
  itself.
hero_image: ''
og_image: ''
date: 2021-06-23T07:00:00Z
categories:
- git
comments: true

---
Sometimes you may want to commit an empty directory into your git repo while ignoring all of its inner contents. For example, you may be creating a project boilerplate, and need to have a `postgres-data` directory that will map to your local docker container's volume and need to make sure that the direcotory is present when the repository is checked out. By default, git will not commit an empty direcotry into the repository. However, you can force git to commit an empty directory by adding a `.gitkeep` file indside that directory and editing your`.gitignore` file like so:

```git
// Header: .gitgnore

postgres-data/*
!postgres-data/.gitkeep
```

First, we tell git to ignore all contents of `/postgres-data`. Then, we tell git to keep the `.gitkeep` file that we added to `/postgres-data` directory. As a result of this, git will commit the directory itself while ignore all of its inner contents with the exception of the `.gitkeep` file.

![](../assets/img/git-keep-2.jpg)