<?php get_template_part('./layout/header'); ?>
      <div class="contact -en lower" data-page="contact" data-page-modifier="thanks">
        <div class="inner">
          <h1 class="contact_title typewriter -contactThanks uppercase N-Medium" data-type-writer-animation="target" data-loop="false">
            <span data-type-writer-animation="copy-text">Thank You For Your Message!</span>
          </h1>
          <p class="contact_description B">Your inquiry has been successfully submitted.<br>A representative will contact you shortly.</p>
          <div class="contact_button">
            <a href="<?php echo esc_url( home_url() ); ?>/" class="button -large">
              <span class="button_arrow" aria-hidden="true">
                <svg viewBox="0 0 17 16">
                  <use href="#SvgArrowLine" class="button_arrowLine"></use>
                  <use href="#SvgArrowPath1" class="button_arrowPath1"></use>
                  <use href="#SvgArrowPath2" class="button_arrowPath2"></use>
                </svg>
              </span>
              <span class="button_text uppercase N-Bold">Go Home</span>
            </a>
          </div>
        </div>
      </div>
<?php get_template_part('./layout/footer'); ?>