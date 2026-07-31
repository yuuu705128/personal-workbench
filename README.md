# 我的行动工作台

安卓可安装的个人行动 PWA：兼职群、新媒体、健身、英语和周日存钱结算统一在一个本机工作台里。

## 本地运行

```powershell
npm.cmd install
npm.cmd run dev
```

构建：`npm.cmd run build`；测试：`npm.cmd test`。

## 部署到 GitHub Pages

1. 将 `personal-workbench` 作为独立 GitHub 仓库推送到 `main` 分支。
2. 在仓库 **Settings → Pages → Build and deployment** 选择 **GitHub Actions**。
3. 等待 Actions 的 `Deploy PWA to GitHub Pages` 工作流完成。
4. 用安卓手机打开生成的网址，在浏览器菜单选择“添加到主屏幕”。

视频仅保存 B 站公开链接；本机数据请在周日通过“周复盘 → 导出 JSON 备份”保存。
