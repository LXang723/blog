---
title: 修改 Git 远程仓库地址
date: 2019/04/09
tags:
 - Git
categories:
 - 版本控制
---

你可以使用以下命令修改 Git 远程仓库地址：

```bash
git remote set-url origin <新的仓库地址>
```

例如：

```bash
git remote set-url origin https://github.com/username/repository.git

```

这样就更新了远程仓库地址。如果你想查看修改后的地址，可以运行：

```bash
git remote -v
```

"Git Commands Overview" — Git 命令概述
"Common Git Commands" — 常见的 Git 命令
"Git Command Cheatsheet" — Git 命令备忘单
"Git Command Reference" — Git 命令参考
