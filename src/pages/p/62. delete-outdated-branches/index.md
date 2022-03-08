---
title: "Delete outdated local branches with the prune git option and the branch delete command"
date: "2021-04-18"
pageDescription: "The prune option in git allows you to delete remote branch references in your local repository that do not exist. In this article, we'll learn how to use it, and how to delete local branches."
pageKeywords: "prune, git, branches, outdated branches, branch delete, git branch -d, git fetch --prune, git prune origin"
tags: ["git"]
cover: 'delete outdated local branches.png'
---

The idea of branches in git is a nice feature as it allows to work on separate parts of a project simultaneously. But, the more branches you have, the more difficult they are to manage.

When you create a local branch, most of the time, you would push the changes in that branch to a branch of the same name in the remote repository. And when you're done with all the necessary changes for that branch, you would merge the branch to your production branch (like `master`).

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

When you delete a remote branch, nothing automatically happens to the local branch. The local branch and the remote reference are not affected. That brings us to the `prune` option.

## The `prune` git option

To remove local references, we need the `prune` option. But **note that**, `prune` can be used in different ways. Here are some of them:

```shell
git prune
git remote prune
git fetch --prune
## e.t.c
```

`git prune` is a different command beyond the scope of this article. We're only concerned with `git remote prune origin` and `git fetch --prune` for this article. These two commands have similarities and few differences. Let's look at them.

### `git remote prune origin`

This command deletes branch references to remote branches that do not exist. A remote branch can be deleted as a result of a delete-branch-after merge-operation.

### `git fetch --prune`

This command does the same above, but before `prune`ing, the latest remote data is first fetched. This method is recommended over the command above, as the latest remote data may contain recovered remote branch refs.

You can also automate this command on every fetch request. Instead of passing the `--prune` option to every `git fetch` operation you do, you can configure git to automatically perform a prune when you fetch. Here's how:

```shell
git config --global fetch.prune true
```

The command above configures your global git configuration to perform a prune on every fetch. Here's what your global `.gitconfig` now looks like:

```ini
[user]
    name = ...
    email = ...
[fetch]
    prune = true
```

When you do a `git fetch` now, outdated remote references will be deleted automatically.

## Does pruning delete the local branches?

No, it doesn't. Pruning only deletes the references in `refs/remotes/` that do not point to an active branch on the remote. It works like this so that you do not delete your local changes. For example, if you've made many local branches that you haven't pushed to remote yet, you won't lose any of them.

However, if you do not want to delete merged branches manually, here are some commands you can use.

```bash
git checkout master # or "main" if that's what you use
git branch --merged
```

This command lists all branches that have been merged into master. But we need to skip some branches like "dev", "main", "staging", and so on. The `--merged` option also lists the `master` branch because logically, the master branch is merged to master too. So, you want to skip this too. We do this using the [`egrep` command](https://www.geeksforgeeks.org/egrep-command-in-linux-with-examples/):

```bash
git branch --merged | egrep -v "master|dev|main|staging|[any-other-branch-you-want-to-skip]"
```

The branch command lists the merged branches and outputs them to the `egrep` command, which filters the result. Now, let's delete the branches:

```bash
git branch --merged | egrep -v "master|dev|main|staging" | xargs git branch -d
```

The `xargs` command converts the output of `egrep` to the arguments of `git branch -d`. i.e., this will be interpreted as `git branch -d [egrep output]`. And `git branch -d` does a soft delete on the branches. Soft deletes ensure that the branch has been fully merged.

You can also set up a git alias for this. In your global git config global file, `~/.gitconfig`, which should be at the root directory in your system, you can add [git aliases](https://www.atlassian.com/git/tutorials/git-alias) like this:

```txt
[alias]
    delete-local-merged = "!git fetch && git branch --merged | egrep -v 'master|dev|main|staging'  | xargs git branch -d"
```

And execute like so:

```bash
git delete-local-merged
```

`git fetch` would prune remote references that do not exist (if you added that to your config file), and the rest of the command deletes local branches that have been merged.
