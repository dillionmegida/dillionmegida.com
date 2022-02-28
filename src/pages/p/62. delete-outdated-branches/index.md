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

How do you solve this? First, we need to understand how local and remote branches work together.

## Local and Remote Branches

When you create a local branch, say "header", a new file in the project `.git` directory will be created with the following path: `refs/heads/header`. This file will contain all the commits you make on that branch.

When you create the same "header" branch on the remote repository, the local repository will not have any information about that branch until you tell the local branch to track it. You can track a remote branch with the following command:

```bash
git checkout header
git branch --set-upstream-to=origin/header
```

When you track a remote branch, you get a new file in the `.git` directory with the following path: `refs/remotes/header` which contains the commits for that branch and helps the local branch to watch the state of the remote branch.

In total, we have two files for the new branch.

When you delete a remote branch, nothing happens to the local branch automatically. The local branch and the remote reference are not affected. That brings us to the `prune` option.

## The `prune` git option

To remove local references, we need the `prune` option. But **note that**, `prune` can be used in different ways. Here's some of them:

```shell
git prune
git remote prune
git fetch --prune
## e.t.c
```

`git prune` is a different command beyond the scope of this article. For this article, we're only concerned with `git remote prune origin` and `git fetch --prune`. These two commands have similarities and few differences. Let's look at them.

### `git remote prune origin`

This command deletes branch references to remote branches that do not exist. Remote branch can be deleted as a result of a delete-branch-after merge-operation.

### `git fetch --prune`

This does the same above, but before `prune`ing, the latest remote data is first fetched. This is recommended over the command above, as the latest remote data may contain recovered remote branch refs.

## Does this delete the local branches?

No, it doesn't. Pruning only deletes the references in `refs/remotes/` that don't point to an active branch on the remote. It works like this so you that you do not delete your local changes. For example, if you've made many local branches that you haven't pushed to remote yet, you won't lose any of them.

However, if you do not want to delete merged-branches manually, here are some commands you can try.

```bash

```

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
