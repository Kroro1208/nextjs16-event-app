import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // React19の新しいコンパイラを有効にする
  reactCompiler: true,
  // 変更があった場合でも再ビルドがより速くなるように、開発環境でのTurbopackファイルシステムキャッシュを有効にする
  experimental: {
    turbopackFileSystemCacheForDev: true,
  },
};

export default nextConfig;
