        </main>
        <footer class="footer" data-footer data-global-element="target">
          <div class="footer_ctaContact">
            <?php get_template_part('./layout/cta-contact'); ?>
          </div>
          <div class="inner">
            <div class="footer_top">
              <div class="footer_left">
                <nav class="footer_nav">
                  <ul class="footer_list">
                    <li class="footer_item">
                      <a href="<?php echo esc_url( home_url() ); ?>/" class="footer_link" data-shuffle-hover="target">
                        <span class="footer_linkText uppercase B" data-shuffle-hover="text">Home</span>
                      </a>
                    </li>
                    <li class="footer_item">
                      <a href="<?php echo esc_url( home_url() ); ?>/about/" class="footer_link" data-shuffle-hover="target">
                        <span class="footer_linkText uppercase B" data-shuffle-hover="text">About</span>
                      </a>
                    </li>
                    <li class="footer_item">
                      <a href="<?php echo esc_url( home_url() ); ?>/projects/" class="footer_link" data-shuffle-hover="target">
                        <span class="footer_linkText uppercase B" data-shuffle-hover="text">Projects</span>
                      </a>
                    </li>
                    <li class="footer_item">
                      <a href="<?php echo esc_url( home_url() ); ?>/contact-en/" class="footer_link" data-shuffle-hover="target">
                        <span class="footer_linkText uppercase B" data-shuffle-hover="text">Contact</span>
                      </a>
                    </li>
                  </ul>
                  <ul class="footer_list">
                    <li class="footer_item -presskit">
                      <a href="https://drive.google.com/drive/folders/1yejkgXKNvHAGn1LBklPVDy5Srh7No5V7?usp=sharing" target="_blank" rel="noreferrer" class="footer_link" data-shuffle-hover="target">
                        <span class="footer_linkText uppercase B" data-shuffle-hover="text">Presskit</span>
                        <span class="footer_linkArrow" aria-hidden="true">
                          <svg viewBox="0 0 17 16">
                            <use href="#SvgBlankArrow"></use>
                          </svg>
                        </span>
                      </a>
                    </li>
                    <li class="footer_item -instagram">
                      <a href="https://www.instagram.com/bitnbio/" target="_blank" rel="noreferrer" class="footer_link" data-shuffle-hover="target">
                        <span class="footer_linkText uppercase B" data-shuffle-hover="text">Instagram</span>
                        <span class="footer_linkArrow" aria-hidden="true">
                          <svg viewBox="0 0 17 16">
                            <use href="#SvgBlankArrow"></use>
                          </svg>
                        </span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div class="footer_right">
                <p class="footer_description B">We are a biophilic studio based Tokyo<br aria-hidden="true">since 2022.</p>
                <div class="footer_services uppercase B">
                  Services<br>
                  / Research<br>
                  / Design<br>
                  / Artwork
                </div>
              </div>
            </div>
            <div class="footer_middle">
              <div class="footer_video layer" data-webgl-item="ascii-video-target">
                <video src="<?= vite_src_video('footer.mp4') ?>" autoplay loop muted playsinline crossOrigin="anonymous" data-video="target" data-video-type="footer"></video>
              </div>
              <div class="footer_webgl">
                <div class="webgl" data-webgl-container="footer">
                  <canvas class="webgl_canvas" data-webgl="footer"></canvas>
                </div>
              </div>
            </div>
          </div>
          <div class="footer_bottom inner" data-fixed-header="trigger">
            <a href="<?php echo esc_url( home_url() ); ?>/" class="footer_link B">
              <span class="footer_linksLinkText">https://bitnb.io</span>
            </a>
            <a href="#" class="footer_link" data-shuffle-hover="target">
              <span class="footer_linksLinkText uppercase B" data-shuffle-hover="text">Privacy Policy</span>
              <span class="footer_linkArrow" aria-hidden="true">
                <svg viewBox="0 0 17 16">
                  <use href="#SvgBlankArrow"></use>
                </svg>
              </span>
            </a>
            <p class="footer_copyright B">
              <span class="footer_linksLinkText">
                <small>Tsuchi to Digital ©︎2025</small>
              </span>
            </p>
          </div>
        </footer>
        <?php get_template_part('layout/transition') ?>
      </div>
    </div>
    <script type="module" crossorigin src="<?= vite_src_js('index.js') ?>"></script>
    <?php wp_footer(); ?>
  </body>
</html>