<!DOCTYPE html>
<html <?php language_attributes(); ?>>
  <head>
    <!-- Google tag (gtag.js) -->
    <title>土とデジタル</title>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="google" content="notranslate">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <meta name="format-detection" content="telephone=no, email=no, address=no">
    <meta name="description" content="私たちは、自然とテクノロジーや、野生と都市生活など、一見相反するものを、相互補完性のある概念として捉え直し、その実感と実態を、企業や個人と共に生み出すバイオフィリック・スタジオです。">
    <meta property="og:locale" content="ja_JP">
    <meta property="og:type" content="<?php echo is_front_page() ? 'website' : 'article'; ?>">
    <meta property="og:title" content="土とデジタル | Tsuchi to Digital">
    <meta property="og:description" content="私たちは、自然とテクノロジーや、野生と都市生活など、一見相反するものを、相互補完性のある概念として捉え直し、その実感と実態を、企業や個人と共に生み出すバイオフィリック・スタジオです。">
    <meta property="og:url" content="http://bitnb.io/">
    <meta property="og:site_name" content="土とデジタル | Tsuchi to Digital">
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
    <script>  (function(d) {    var config = {      kitId: 'iqs4vqj',      scriptTimeout: 3000,      async: true    },    h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)  })(document);</script>
  </head>
  <body>
    <?php get_template_part('template-parts/common/svg') ?>