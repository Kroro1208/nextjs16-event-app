import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // 変更があった場合でも再ビルドがより速くなるように、開発環境でのTurbopackファイルシステムキャッシュを有効にする
    turbopackFileSystemCacheForDev: true,
  },
};

export default nextConfig;
