<?php

/**
 * ローカル環境ではVITEの開発サーバーを参照して、本番環境ではビルドしたファイルを参照する
 */

/**
 * @return ローカル環境or本番環境のJSのパスを返す
 */
function vite_src_js($name)
{
  if (IS_TYPE === 'local') {
    // develop mode
    return VITE_SERVER . '/src/assets/js/' . $name;
  } else if (IS_TYPE === 'production') {
    // production mode
    return URL_JS . $name . '?ver=' . date("His");
  }
}

/**
 * @return ローカル環境or本番環境のCSSのパスを返す
 */
function vite_src_css($name)
{
  if (IS_TYPE === 'local') {
    // develop mode
    return VITE_SERVER . '/src/assets/css/' . $name;
  } else if (IS_TYPE === 'production') {
    // production mode
    // .scssを.cssに置換
    $name = str_replace('.scss', '.css', $name);
    return URL_CSS . $name . '?ver=' . date("His");
  }
}

/**
 * @return ローカル環境or本番環境のSTATICのパスを返す
 */
function vite_src_static($name)
{
  if (IS_TYPE === 'local') {
    // develop mode
    return VITE_SERVER . '/src/assets/static/' . $name;
  } else if (IS_TYPE === 'production') {
    // production mode
    return URL_STATIC . $name . '?ver=' . date("His");
  }
}

/**
 * @return ローカル環境or本番環境のIMAGESのパスを返す
 */
function vite_src_images($name)
{
  if (IS_TYPE === 'local') {
    // develop mode
    return VITE_SERVER . '/src/assets/images/' . $name;
  } else if (IS_TYPE === 'production') {
    // production mode
    // 拡張子が.jpg/.jpeg/.pngだった場合は.webpに置換
    $name = preg_replace('/\.(jpg|jpeg|png)/', '.webp', $name);
    return URL_IMAGES . $name . '?ver=' . date("His");
  }
}

/**
 * @return ローカル環境or本番環境のVIDEOのパスを返す
 */
function vite_src_video($name) {
  if (IS_TYPE === 'local') {
    // develop mode
    return VITE_SERVER . '/src/assets/video/' . $name;
  } else if (IS_TYPE === 'production') {
    // production mode
    return URL_VIDEO . $name;
  }
}
