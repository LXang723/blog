---
title: Git 命令备忘单
date: 2019-04-09
tags:
 - Git
categories:
 - Tools
---

git-cheatsheet

[progit2-zh](https://github.com/progit/progit2-zh/releases)

https://git-scm.com/book/zh/v2

https://training.github.com/downloads/zh_CN/github-git-cheat-sheet/

https://ndpsoftware.com/git-cheatsheet.html#loc=stash;

## 初始化设置
### 配置用户名、邮箱
``` bash
git config --global user.name "name"
git config --global user.email "email"
```
### 存储配置
``` bash
git config --global credential.helper store
```
## 创建仓库
### 创建一个新的本地仓库
``` bash
git init <project-name>
```
省略 project-name 则在当前目录创建。
### 克隆一个远程仓库
``` bash
git clone <url>
```
## 四个区域
**工作区（Working Directory）**：就是你在电脑里能实际看到的目录。  
**暂存区（Stage/Index）**：暂存区也叫索引， 用来临时存放未提交的内容， 一般在.git目录下的index中。  
**本地仓库（Repository）**：Git在本地的版本库， 仓库信息存储在.git这个隐藏目录中。  
**远程仓库（Remote Repository）**：托管在远程服务器上的仓库。 常用的有GitHub、 GitLab、 Gitee。  
## 文件状态
**已修改（Modified）**：修改了但是没有保存到暂存区的文件。  
**已暂存（Staged）**：修改后已经保存到暂存区的文件。  
**已提交（Committed）**：把暂存区的文件提交到本地仓库后的状态。  
## 基本概念
**main/master**：默认主分支  
**origin**：默认远程仓库  
**HEAD**：指向当前分支的指针  
**HEAD^**：上一个版本  
**HEAD~4**：上四个版本  
## 特殊文件
**.git** Git仓库的元数据和对象数据库  
**.gitignore** 忽略文件，不需要提交到仓库的文件  
**.gitattributes** 指向当前分支的指针  
**.gitkeep** 使空目录被提交到仓库  
**.gitmodules** 记录子模块的信息  
**.gitconfig** 记录仓库的配置信息  

修改 Git 远程仓库地址：

``` bash
git remote set-url origin <新的仓库地址>
```

例如：

``` bash
git remote set-url origin https://github.com/username/repository.git
```

这样就更新了远程仓库地址。如果你想查看修改后的地址，可以运行：

``` bash
git remote -v
```

"Git Commands Overview" — Git 命令概述  
"Common Git Commands" — 常见的 Git 命令  
"Git Command Cheatsheet" — Git 命令备忘单  
"Git Command Reference" — Git 命令参考
