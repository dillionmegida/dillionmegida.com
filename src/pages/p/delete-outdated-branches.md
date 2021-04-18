---
title: "Delete outdated branches with the prune git option"
date: "2021-04-18"
pageDescription: "When the display of a container is set as flex, it renders it's elements flexible. This aids in responsiveness in several media screens as long as the associating properties such as flex-direction, flex-wrap, etc are used appropriately"
pageKeywords: "css layouts, layouts, layouts in css, css, css stylesheet, css properties, layout property, css display, css flex, css flex-wrap, css flex-direction, css justify-content, css align-items, align-items, justify-content, css styles."
tags: ["css", "flex"]
---

The idea of branches in git is a nice feature as it allows to work on separate parts of a project at the same time. But, the more the branches, the more difficult they are to manage.

When you create a local branch, most of the time you would push the changes in that branch to a branch of the same name in the remote repository. And when you're done with all the necessary changes for that branch, you would merge the branch to your production branch (like `master`).

On merging that branch, the branch becomes irrelevant, and GitHub, for example, give you the option to delete the branch afterwards. When you do this, you may forget to delete the local branch. Repeating this for many other branches leaves you with many outdated local branches.

## The `prune` git option

An effective solution to the problem above is the `prune` git option. But **note that**, the `prune` command can be used in different ways. Here's some of them:

```shell
git prune
git remote prune
git fetch --prune
## e.t.c
```

`git prune` is a different command beyond the scope of this article. For this article, we're only concerned with `git remote prune` and `git fetch --prune`. These two commands have similarities, and little differences. Let's see that.

## `git remote prune`

This command deletes branches that you have locally and do not exist on remote. 
