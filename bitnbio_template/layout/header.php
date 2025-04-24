<?php
  $namespace = '';

  if (is_home()) {
    // home
    $namespace = 'home';
  } elseif (is_front_page()) {
    $namespace = 'home';
  } elseif (is_page()) {
    // 固定ページの場合
    $namespace = get_post_field('post_name', get_post());
  } elseif (is_post_type_archive()) {
    // 投稿の一覧ページの場合
    $namespace = get_query_var('post_type');
  } elseif (is_single()) {
    // 投稿の詳細ページの場合
    $namespace = get_post_type();
  } elseif (is_tax() || is_category() || is_tag()) {
    // タクソノミーのページの場合
    $term = get_queried_object();
    $namespace = 'news';
  } elseif (is_404()) {
    // 404ページの場合
    $namespace = 'not-found';
  }

  get_template_part('template-parts/common/head')
?>
    <div class="wrapper">
      <?php get_template_part('layout/loader') ?>
      <header class="header" data-header>
        <div class="header_inner">
          <div class="header_block">
            <div class="header_left">
              <a href="<?php echo esc_url( home_url() ); ?>/" class="header_logo">
                <img src="<?= vite_src_images('logo.svg') ?>" alt="土とデジタル" width="160" height="52">
              </a>
              <div class="header_info B" data-header-info="target">
                <span class="header_location">TOKYO, JAPAN<br><span data-header-info="clock"></span>AM <span data-header-info="hours"></span>:<span data-header-info="minutes"></span></span>
                <span class="header_temperature" data-header-info="temperature">10℃</span>
                <span class="header_environment"><span data-header-info="width"></span>×<span data-header-info="height"></span><br><span data-header-info="os"></span></span>
              </div>
            </div>
            <!-- <div class="header_right">
              <div class="header_mode B">
                <div class="header_label uppercase">Bit Mode :</div>
                <button type="button" class="header_button uppercase">[OFF]</button>
              </div>
              <nav class="header_nav">
                <ul class="header_list">
                  <li class="header_item">
                    <a href="<?php echo esc_url( home_url() ); ?>/about/" class="header_link" data-shuffle-hover="target">
                      <span class="header_linkText clip uppercase B" data-shuffle-hover="element">About</span>
                    </a>
                  </li>
                  <li class="header_item">
                    <a href="<?php echo esc_url( home_url() ); ?>/projects/" class="header_link" data-shuffle-hover="target">
                      <span class="header_linkText clip uppercase B" data-shuffle-hover="element">Projects</span>
                    </a>
                  </li>
                  <li class="header_item">
                    <a href="<?php echo esc_url( home_url() ); ?>/Contact/" class="header_link" data-shuffle-hover="target">
                      <span class="header_linkText clip uppercase B" data-shuffle-hover="element">Contact</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div> -->
          </div>
        </div>
      </header>
      <nav id="nav" class="nav" data-nav data-lenis-prevent>
      </nav>
      <main class="main" data-barba="container" data-barba-namespace="<?php echo esc_attr($namespace); ?>">
