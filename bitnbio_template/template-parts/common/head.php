<!DOCTYPE html>
<html <?php language_attributes(); ?>>
  <head>
    <!-- Google tag (gtag.js) -->
    <title>土とデジタル</title>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="google" content="notranslate">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <meta name="format-detection" content="telephone=no, email=no, address=no">
    <meta name="description" content="『土とデジタル』は自然の循環の一部を担っている実感と、持続する関係性を生み出すクリエイティブレーベルです。">
    <meta property="og:locale" content="ja_JP">
    <meta property="og:type" content="website">
    <meta property="og:title" content="土とデジタル">
    <meta property="og:description" content="『土とデジタル』は自然の循環の一部を担っている実感と、持続する関係性を生み出すクリエイティブレーベルです。">
    <meta property="og:url" content="https://xn--uds.digital/">
    <meta property="og:site_name" content="土とデジタル">
    <meta property="og:image" content="<?php echo esc_url( get_theme_file_uri() ); ?>/assets/images/ogp.png">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">
    <meta property="og:image:type" content="image/jpeg">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:image" content="<?php echo esc_url( get_theme_file_uri() ); ?>/assets/images/ogp.png">
    <link href="/favicon.ico" rel="icon">
    <link rel="icon" type="image/png" sizes="16x16" href="<?php echo esc_url( get_theme_file_uri() ); ?>/assets/images/favicon-16x16.png">
    <link rel="icon" type="image/png" sizes="32x32" href="<?php echo esc_url( get_theme_file_uri() ); ?>/assets/images/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="192x192" href="<?php echo esc_url( get_theme_file_uri() ); ?>/assets/images/android-chrome-192x192.png">
    <link rel="icon" type="image/png" sizes="256x256" href="<?php echo esc_url( get_theme_file_uri() ); ?>/assets/images/android-chrome-512x512.png">
    <link rel="apple-touch-icon" href="<?php echo esc_url( get_theme_file_uri() ); ?>/assets/images/apple-touch-icon.png">
    <link rel="stylesheet" href="<?= vite_src_css('index.scss') ?>">
    <?php wp_head(); ?>
    <link rel="stylesheet" href="https://use.typekit.net/rbw7bom.css">
  </head>
  <body data-barba="wrapper">
    <?php get_template_part('template-parts/common/svg') ?>