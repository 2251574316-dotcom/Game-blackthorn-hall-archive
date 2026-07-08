# Publish Blackthorn Hall To GitHub Pages

本地环境限制导致我不能直接修改 `.git` 元数据或替你执行 `push`，所以把最短发布步骤整理好了。

## 一键方式

直接在终端运行：

```bash
zsh "/Users/fengxilei/Documents/New project/publish_blackthorn_github.sh"
```

这个脚本会自动：

- 把远程仓库设为 `https://github.com/2251574316-dotcom/Game-blackthorn-hall-archive.git`
- 只提交 `.github` 和 `corridor-217`
- 创建提交
- 推送到 `main`

## 推送后

打开：

`https://github.com/2251574316-dotcom/Game-blackthorn-hall-archive/settings/pages`

把 `Source` 设为：

`GitHub Actions`

等工作流跑完后，你会得到一个可以发给别人的链接，通常格式是：

`https://2251574316-dotcom.github.io/Game-blackthorn-hall-archive/`
