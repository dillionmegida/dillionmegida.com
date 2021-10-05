---
title: The minus (-) option in Git, an alias for the previous branch
category: git
date: 2021-10-05
pageDescription: >-
  The minus (-) option in Git, is an alias for the previous checked-out branch. In this article, I explain how this option works and what it's an alias for.
pageKeywords: "git, git branches, branches, previous branch, git alias"
tags: ["git"]
---

Have you ever checked out a branch and forgot the name of the previous branch you were on? Or do you just find the previous branch too long to type? If yes to either or both, this article is for you.

In this article, I'll explain how the minus (-) option in Git works as an alias for the previous branch.

## `@{-N}`

When you checkout branches, git keeps track of the previous branches you've checked out. Think of it as a stack. When you check out a new branch, it is pushed onto the stack.

Now how do you refer to a branch in the stack? Well, you can use the `@{-N}` syntax. This would refer to the Nth last checked-out branch in the stack.

For example:

```shell
git checkout master
git checkout develop
git checkout staging
```

With this flow, as you're currently on the `staging` branch, `@{-1}` would refer to `develop`, and `@{-2}` would refer to `master`.

Therefore, on that `staging` branch:

- if you run `git checkout @{-1}`, you'll be on the `develop` branch.
- if you run `git merge @{-2}`, the `master` branch will be merged to the current branch.

## The minus sign for the immediate previous branch

As we have seen, `@{-1}` refers to the previous branch in the stack. Typing the @, {, - and } characters can be a bit confusing or tiring. And there you have the minus (`-`) sign.

The minus sign is an alias for `@{-1}`. So when you do `git checkout -`, you're executing `git checkout @{-1}`, which will check out the previous branch.

You can use this alias wherever existing branch names are expected. From rebase, to merge, to checkout, and lots more.

According to my experiment, the minus sign did not work for deleting branches. `git branch -d -` returned an *"error: branch '-' not found"* error. However, `git branch -d @{-1}` worked as expected.

## Conclusion

There you have it. The minus option in Git is an alias for the previous branch.

Want to learn more about git hacks? You can check out [Deleting outdated branches in git](/p/delete-outdated-branches).
