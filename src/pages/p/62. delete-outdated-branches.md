---
title: "Delete outdated branches with the prune git option"
date: "2021-04-18"
pageDescription: "The prune option in git allows you to delete local branches with deleted remote references. In this article, we'll learn how to use it."
pageKeywords: "prune, git, branches, outdated branches, git fetch --prune, git prune origin"
tags: ["git"]
---

The idea of branches in git is a nice feature as it allows to work on separate parts of a project at the same time. But, the more branches you have, the more difficult they are to manage.

When you create a local branch, most of the time you would push the changes in that branch to a branch of the same name in the remote repository. And when you're done with all the necessary changes for that branch, you would merge the branch to your production branch (like `master`).

On merging that branch, the branch becomes irrelevant, and GitHub, for example, gives you the option to delete the branch afterward. When you do this, you may forget to delete the local branch. Repeating this for many other branches leaves you with many outdated local branches.

## The `prune` git option

An effective solution to the problem above is the `prune` git option. But **note that**, the `prune` command can be used in different ways. Here's some of them:

```shell
git prune
git remote prune
git fetch --prune
## e.t.c
```

`git prune` is a different command beyond the scope of this article. For this article, we're only concerned with `git remote prune origin` and `git fetch --prune`. These two commands have similarities and few differences. Let's look at them.

## `git remote prune origin`

This command deletes local branches with references to remote branches that do not exist. Deleted remote branch references can be a result of a delete-branch-after merge-operation.

## `git fetch --prune`

This does the same above, but before `prune`ing, the latest remote data is first fetched. This is recommended over the command above, as the latest remote data may contain recovered remote branch refs.

## Deleting outdated branches on every fetch request

Instead of passing the `--prune` option to every `git fetch` operation you do, you can configure git to automatically perform a prune when you fetch. Here's how:

```shell
git config --global fetch.prune true
```

The command above configures your global git configuration to perform a prune on every fetch. Here's what your local `.gitconfig` now looks like:

```ini
[user]
    name = ...
    email = ...
[fetch]
    prune = true
```

Now when you do a `git fetch`, outdated local branches will be deleted automatically.
