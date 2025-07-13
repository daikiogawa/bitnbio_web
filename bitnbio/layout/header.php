<?php get_template_part('template-parts/common/head') ?>
    <div class="wrapper">
      <div class="content" data-content>
        <?php get_template_part('layout/loader') ?>
        <header class="header" data-header>
          <div class="header_inner">
            <div class="header_block">
              <div class="header_left">
                <a href="<?php echo esc_url( home_url() ); ?>/" class="header_logo">
                  <div class="header_svg">
                    <svg viewBox="0 0 175 56">
                      <use href="#SvgLogo"></use>
                    </svg>
                  </div>
                  <div class="header_svg">
                    <svg viewBox="0 0 175 56">
                      <use href="#SvgLogo2"></use>
                    </svg>
                  </div>
                </a>
              </div>
              <div class="header_right" data-fixed-header="target">
                <nav class="header_nav">
                  <ul class="header_list">
                    <li class="header_item">
                      <a href="<?php echo esc_url( home_url() ); ?>/about/" class="header_link">
                        <span class="header_linkText uppercase B" data-shuffle-animation="target">About</span>
                      </a>
                    </li>
                    <li class="header_item">
                      <a href="<?php echo esc_url( home_url() ); ?>/projects/" class="header_link">
                        <span class="header_linkText uppercase B" data-shuffle-animation="target">Projects</span>
                      </a>
                    </li>
                    <li class="header_item">
                      <a href="<?php echo esc_url( home_url() ); ?>/contact-en/" class="header_link">
                        <span class="header_linkText uppercase B" data-shuffle-animation="target">Contact</span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </header>
        <div class="differenceHeader">
          <div class="differenceHeader_inner">
            <div class="differenceHeader_block">
              <div class="differenceHeader_info B" data-header-info="target">
                <span class="differenceHeader_location">
                  <span data-shuffle-animation="target">TOKYO, JAPAN</span><br>
                  <span data-header-info="clock">
                    <span data-header-info="period">AM</span>
                    <span data-header-info="hours"></span>:<span data-header-info="minutes"></span>
                  </span>
                </span>
                <span class="differenceHeader_temperature" data-header-info="temperature"></span>
                <span class="differenceHeader_environment">
                  <span><span data-header-info="width"></span>×<span data-header-info="height"></span></span><br>
                  <span data-header-info="os" data-shuffle-animation="target"></span>
                </span>
              </div>
              <!-- <div class="differenceHeader_mode B" data-fixed-header="target">
                <div class="differenceHeader_label uppercase" data-shuffle-animation="target">Bit Mode :</div>
                <button type="button" class="differenceHeader_button uppercase" data-shuffle-animation="target" data-webgl-item="trigger">[OFF]</button>
              </div> -->
            </div>
          </div>
        </div>
        <main id="swup" class="main" data-main data-webgl-wrapper="common">