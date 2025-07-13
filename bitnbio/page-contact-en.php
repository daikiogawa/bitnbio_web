<?php get_template_part('./layout/header'); ?>
      <div class="contact -en lower" data-page="contact">
        <div class="inner">
          <h1 class="contact_title typewriter -contact uppercase N-Medium" data-type-writer-animation="target" data-loop="false">
            <span data-type-writer-animation="copy-text">CONNECT With US.</span>
          </h1>
          <div class="contact_inner">
            <div class="contact_lang">
              <a href="<?php echo esc_url( home_url() ); ?>/contact-ja/" class="contact_langLink B">JP</a>
              <a href="<?php echo esc_url( home_url() ); ?>/contact-en/" class="contact_langLink -current B">EN</a>
            </div>
            <?php the_content(); ?>
          </div>
        </div>
      </div>
<?php get_template_part('./layout/footer'); ?>