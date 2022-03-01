---
title: "How to move a commit from a wrong branch to the right branch with the cherry-pick git command"
date: "2022-03-01"
cover: "move commit to right branch.png"
pageDescription: "When you create a commit on a wrong branch, you can fix it by using the cherr-pick git command to move the commit to the right branch"
pageKeywords: "git, cherry-pick, cherry pick, git cherry-pick, wrong branch, branch, right branch, from wrong branch to right branch, git command, cherry-pick command, git cherry-pick command, move a commit, commit"
tags: ["git"]
---

Cherry-picking is literally the act of picking the best out of many others. Bringing that to git, cherry-picking means picking a "desirable" commit amongst other commits in a branch and attaching it to another branch.

The `cherry-pick` is a helpful command that allows you to pick commits from one branch to another. There are scenarios where you would want to do such, such as:

- picking a commit that has some changes you need, and you don't want to do from scratch
- picking a commit from a wrong branch to the correct branch

However, you should be careful when using it, as this can cause duplicate commits. With that being said, let's see how to use it.

## Syntax

```bash
git cherry-pick [commit-sha]
```

"commit-sha" is the reference to the commit. You can find the reference using `git log` on the branch. For example:

```bash
git log
# commit d6bbccc7c845f4bca8280b272d9db3e5b06262bf (HEAD -> master, origin/master, origin/HEAD)
# Author: Dillion Megida <dillionmegida@gmail.com>
# Date:   Mon Feb 28 09:40:43 2022 +0100

#     feat: update article

# commit f780285eeca4e288b67c921cae679cef69706f1c
# Author: Dillion Megida <dillionmegida@gmail.com>
# Date:   Sat Feb 26 11:12:00 2022 +0100

#     feat: change 'contents' to 'content'

# ...more commits
```

For the last commit, "feat: update article", the commit sha is "d6bbccc7c845f4bca8280b272d9db3e5b06262bf".

## Let's cherry-pick

When you cherry-pick a commit, you pick all the changes attached to that commit. Let's experiment with this.

In any project of your choice, create two branches:

```bash
git branch header
git branch footer
```

Then check out the first branch and make some changes to it:

```bash
git checkout header

# let's say you add a /constant/links.js file
git add .
git commit -m "add application links"

# after creating the header.js file, make some changes in it
git add .
git commit -m "add header.js file"
```

Moving over to the `footer` branch, we know that the footer would need the `links.js` file. Let's assume that this file has many codes that we don't want to repeat; we can cherry-pick it.

```bash
git log
# commit  7f8186ab34555a51ac44415b488e568d1df7e662
# ...

#     add header.js file

# commit e25f4edb02efe5b3a6369f2172f2e633cef66327
# ...

#     add application links
```

From the second commit, _e25f4edb02efe5b3a6369f2172f2e633cef66327_, I can cherry-pick it to the footer branch like so:

```bash
git checkout footer
git cherry-pick e25f4edb02efe5b3a6369f2172f2e633cef66327
```

Logging the commits in this branch, we have:

```bash
git log
# commit 1747673bcb97e24cc06ba7bb84f85a4a507e9cc2
# ...

#    add application links
```

The new commit has a new hash but with the same changes as the cherry-picked one.

## Moving a commit from the wrong branch to the correct branch

Let's say you're working on a branch (branchX), then you go to another branch (branchY) to check something, and you mistakenly make a commit on branchY that was meant for branchX. Cherry-pick solves this:

```bash
git checkout branchY
git log
# get the commit-hash

git checkout branchX
git cherry-pick [commit-hash]

git checkout branchY
git revert [commit-hash]
```

First, we check out the wrong branch, log the commits and get the hash we're interested in. We move to the right branch, cherry-pick the commit, and revert the commit on the wrong branch.

## Wrap up

If you attempt a cherry-pick on a branch that already contains the commit, you'll get an error saying "_nothing to commit, working directory clean_".

The cherry-pick command is very handy for moving commits between branches.

Useful resources:

- [Undoing Commits & Changes](https://www.atlassian.com/git/tutorials/undoing-changes)
- [Git Cherry Pick](https://www.atlassian.com/git/tutorials/cherry-pick)
- [Git Revert](https://www.atlassian.com/git/tutorials/undoing-changes/git-revert)
