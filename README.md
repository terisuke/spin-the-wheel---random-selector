# 🎯 Spin the Wheel - ランダムセレクター

インタラクティブなルーレットホイールアプリケーション。ユーザー定義のリストから項目をランダムに選択します。

## 📋 概要

このアプリケーションは、決断を下すのが難しい時や、ランダムに何かを選びたい時に最適なツールです。昼食のメニュー選び、ゲームの順番決め、プレゼントの当選者選びなど、様々な場面で活用できます。

## ✨ 機能

- **カスタマイズ可能なリスト**: 項目を自由に追加・削除
- **スムーズなアニメーション**: 本物のルーレットのような回転アニメーション
- **レスポンシブデザイン**: モバイル・デスクトップ両対応
- **ビジュアルフィードバック**: 選ばれた項目をモーダルで大きく表示
- **カラフルなデザイン**: 各セグメントが自動的に異なる色で表示
- **重複防止**: 同じ項目の追加を自動的にブロック

## 🛠️ 技術スタック

- **フロントエンド**: React 19.1.1 + TypeScript 5.8.2
- **ビルドツール**: Vite 6.2.0
- **スタイリング**: Tailwind CSS (CDN版)
- **開発環境**: Node.js

## 🚀 セットアップ

### 前提条件

- Node.js (v14以上推奨)
- npm または yarn

### インストール手順

1. リポジトリをクローン

```bash
git clone https://github.com/yourusername/spin-the-wheel---random-selector.git
cd spin-the-wheel---random-selector
```

2. 依存関係をインストール

```bash
npm install
```

3. 開発サーバーを起動

```bash
npm run dev
```

4. ブラウザで `http://localhost:5173` を開く

## 📱 使い方

### 基本的な使い方

1. **項目を追加**: テキストフィールドに項目を入力し、「Add」ボタンをクリック
2. **項目を削除**: 各項目の右側にある赤い✕ボタンをクリック
3. **ルーレットを回す**: 中央の「SPIN!」ボタンをクリック
4. **結果を確認**: アニメーション終了後、選ばれた項目がモーダルで表示される
5. **再度回す**: モーダルの「Spin Again!」ボタンをクリック

### 注意事項

- 最低2つ以上の項目が必要です
- 項目名は15文字を超えると省略表示されます
- 同じ名前の項目は追加できません

## 📁 プロジェクト構造

```text
spin-the-wheel---random-selector/
├── src/
│   ├── App.tsx                 # メインアプリケーションコンポーネント
│   ├── index.tsx              # Reactエントリーポイント
│   └── components/            # Reactコンポーネント
│       ├── Wheel.tsx          # ルーレットホイールコンポーネント
│       ├── ResultModal.tsx    # 結果表示モーダル
│       └── icons.tsx          # アイコンコンポーネント
├── public/
│   └── index.html             # HTMLテンプレート
├── package.json               # プロジェクト設定
├── tsconfig.json              # TypeScript設定
├── vite.config.ts             # Vite設定
├── metadata.json              # アプリメタデータ
├── LICENSE                    # MITライセンス
└── README.md                  # このファイル
```

## 🎨 カスタマイズ

### 色の変更

`components/Wheel.tsx`の`COLORS`配列を編集して、ホイールのセグメントカラーを変更できます：

```typescript
const COLORS = [
  '#4f46e5', '#db2777', '#f97316', // ... カスタムカラー
];
```

### アニメーション速度の調整

`components/Wheel.tsx`の`transition`プロパティを変更：

```typescript
transition: 'transform 6000ms cubic-bezier(0.2, 0.8, 0.2, 1)'
// 6000ms を変更してスピードを調整
```

### ホイールサイズの変更

`components/Wheel.tsx`のクラス名を編集：

```typescript
className="relative w-[350px] h-[350px] md:w-[450px] md:h-[450px]"
// サイズ値を変更
```

## 🔧 開発コマンド

```bash
# 開発サーバー起動
npm run dev

# プロダクションビルド
npm run build

# ビルドプレビュー
npm run preview
```

## 💡 今後の改善案

- [ ] 項目の重み付け機能
- [ ] 履歴機能（過去の結果を保存）
- [ ] サウンドエフェクトの追加
- [ ] テーマカスタマイズ機能
- [ ] データの永続化（LocalStorage/Database）
- [ ] 共有機能（結果をSNSでシェア）
- [ ] アニメーションパターンの追加
- [ ] キーボードショートカット対応

## 🤝 貢献

プルリクエストは歓迎します。大きな変更を行う場合は、まずissueを作成して変更内容について議論してください。

## 📄 ライセンス

このプロジェクトはMITライセンスの下で公開されています。

## 🙏 謝辞

- Google AI Studioでのデプロイメントをサポート
- React、Vite、Tailwind CSSの素晴らしいツールに感謝

---

Made with ❤️ by Terisuke
