# 新南智慧農場

本作品可於 [https://github.com/junxiangzhan/shinnanfarm](https://github.com/junxiangzhan/shinnanfarm) 下載，不包含 XAMPP 及 Node.js 之安裝執行檔。

本作品使用 React、Express、Axios、MySQL 以及 Remarkable 模組製作。

本作品使用 Webpack、Bable 模組打包。

## 安裝說明

### 1. Node.js 環境設置

1. 開啟 Node.js 安裝執行檔。

2. 在 End-User License Agreement 頁面，在詳細閱讀 **終端使用者授權合約** 後，勾選 **I accept the terms in the License Agreement**。

3. 在 Destination Folder 頁面，指定欲安裝之資料夾位址。

4. 完成 Node.js 之安裝。

### 2. Apache、MySQL 伺服器安裝及資料庫設定

1. 開啟 XAMPP 安裝執行檔。

2. 在 Select Components 頁面中：Server 項選取 Apache（預設）以及 MySQL；Program Languages 項選取 PHP（預設）以及 phpMyAdmin。

3. 在 Installation folder 頁面中，指定欲安裝之資料夾位址。

4. 完成 Xampp 之安裝。

5. 開啟 `XAMPP Control Panal` 應用程式（建議以管理者身份執行）。

6. 點選 Apache、MySQL 模組的 Start 按鈕以啟動 Apache 以及 MySQL 伺服器。

7. 點選 MySQL 模組的 Admin 按鈕或於瀏覽器開啟位置 [http://localhost/phpmyadmin](http://localhost/phpmyadmin)。

8. 在 phpMyAdmin 中切換到匯入頁籤，在 **要匯入的檔案** 項下的 **由電腦上傳** 上傳 [`shinnanfarm.sql`](shinnanfarm.sql)。

### 3. 安裝 Node.js 模組

1. 開啟本作品之目錄，並在此目錄下開啟 `Power Shell` 或 `命令提示字元`。

2. 輸入下列指令以安裝 `yarn`（非必要，`yarn` 為用於代替 `npm` 而使用，速度較 `npm` 更快。）：

```
npm i yarn -g
```

3. 輸入下列指令以安裝應用所使用的模組：

```
npm i
:: 若使用 yarn 模組
yarn
```

\* 註：若無法使用 npm 或 yarn 模組，請檢查系統或使用者環境變數中，PATH 是否含有至 npm 及 yarn 執行檔的目錄路徑；或檢查 Execution Policy 相關設定是否限制腳本執行。

## 啟動說明

* 若欲打包應用，請執行（初次運行前時應打包應用）：

```
npm run build
:: 若使用 yarn 模組
yarn build
```

* 若欲執行應用，請執行：

```
npm run start
:: 若使用 yarn 模組
yarn start
```