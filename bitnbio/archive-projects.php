<?php get_template_part('./layout/header'); ?>
      <div class="projects lower" data-page="projects">
        <div class="inner">
          <h1 class="projects_title typewriter -projects uppercase N-Medium" data-type-writer-animation="target" data-loop="false">
            <span data-type-writer-animation="copy-text">We Walk With Questions.</span>
          </h1>
          <div class="projects_block">
            <div class="projects_category B">/ ALL</div>
            <div class="projects_count B">(<?php echo $wp_query->found_posts; ?>)</div>
          </div>
          <div class="projects_articles">
            <div class="projectsArticle -header">
              <div class="projectsArticle_link">
                <div class="projectsArticle_overview B">Overview</div>
                <h2 class="projectsArticle_title B">Title</h2>
                <h2 class="projectsArticle_partner B">Partner</h2>
                <p class="projectsArticle_year B">Year</p>
              </div>
            </div>
            <?php
              $args = array(
                'post_type' => 'projects',
                'posts_per_page' => -1,
                'post_status' => 'publish',
                'orderby' => 'date',
                'order' => 'DESC'
              );
              $projects_query = new WP_Query($args);

              if ($projects_query->have_posts()) :
                while ($projects_query->have_posts()) : $projects_query->the_post();
            ?>
                <div class="projectsArticle">
                  <div class="projectsArticle_link">
                    <div class="projectsArticle_overview B">
                      <?php
                        $project_categories = get_the_terms(get_the_ID(), 'project_category');

                        if ($project_categories && !is_wp_error($project_categories)) :
                          $category_names = array();

                          foreach ($project_categories as $category) {
                            $category_names[] = esc_html($category->name);
                          }

                          if (!empty($category_names)) :
                        ?>
                          <?php echo implode(', ', $category_names); ?>
                        <?php
                          endif;
                        endif;
                        ?>
                    </div>
                    <h2 class="projectsArticle_title"><?php the_title(); ?></h2>
                    <div class="projectsArticle_partner">
                      <?php
                        $partner_list = get_field('projects_partner_list');
                        if ($partner_list) {
                          echo wp_kses_post(wrap_english_in_title($partner_list));
                        }
                      ?>
                    </div>
                    <div class="projectsArticle_year B">
                      <?php
                        $project_years = get_the_terms(get_the_ID(), 'project_year');

                        if ($project_years && !is_wp_error($project_years)) :
                          $year_names = array();

                          foreach ($project_years as $year) {
                            $year_names[] = esc_html($year->name);
                          }

                          if (!empty($year_names)) :
                        ?>
                          <?php echo implode(', ', $year_names); ?>
                        <?php
                          endif;
                        endif;
                      ?>
                    </div>
                    <div class="projectsArticle_arrow" aria-hidden="true">
                      <svg viewBox="0 0 17 16">
                        <use href="#SvgArrowLine" class="button_arrowLine"></use>
                        <use href="#SvgArrowPath1" class="button_arrowPath1"></use>
                        <use href="#SvgArrowPath2" class="button_arrowPath2"></use>
                      </svg>
                    </div>
                  </div>
                  <button type="button" class="projectsArticle_trigger" data-modal="trigger" data-modal-trigger-type="open" data-modal-trigger-open-id="modal-<?php echo get_the_ID(); ?>"></button>
                  <div id="modal-<?php echo get_the_ID(); ?>" class="modal" data-lenis-prevent data-modal="target" aria-hidden="true">
                    <div class="modal_overlay" data-modal="overlay" tabindex="-1">
                      <button type="button" class="modal_trigger" data-shuffle-hover="target" data-modal="trigger" data-modal-trigger-type="close" data-modal-trigger-close-id="modal-<?php echo get_the_ID(); ?>" data-modal-trigger-hover="target">
                        <span class="modal_triggerText uppercase B" data-shuffle-hover="text">Close</span>
                        <span class="visuallyHidden">モーダルを閉じる</span>
                        <span class="modal_lines" aria-hidden="true">
                          <span class="modal_line">
                            <span class="modal_lineInner"></span>
                            <span class="modal_lineInner"></span>
                          </span>
                          <span class="modal_line">
                            <span class="modal_lineInner"></span>
                            <span class="modal_lineInner"></span>
                          </span>
                        </span>
                      </button>
                      <div class="modal_container" data-modal="container" data-modal-switch-img-container role="dialog" aria-modal="true">
                        <div class="modal_inner">
                          <header class="modal_header">
                            <h2 class="modal_title"><?php the_title(); ?></h2>
                            <div class="modal_category B">
                              <?php
                                $project_categories = get_the_terms(get_the_ID(), 'project_category');

                                if ($project_categories && !is_wp_error($project_categories)) :
                                  $category_names = array();

                                  foreach ($project_categories as $category) {
                                    $category_names[] = esc_html($category->name);
                                  }

                                  if (!empty($category_names)) :
                                ?>
                                  <?php echo implode(', ', $category_names); ?>
                                <?php
                                  endif;
                                endif;
                              ?>
                            </div>
                            <div class="modal_meta">
                              <div class="modal_block">
                                <p class="modal_head B">Partner:</p>
                                <p class="modal_body">
                                  <?php
                                    $partner_modal = get_field('projects_partner_modal');
                                    if ($partner_modal) {
                                      echo wp_kses_post(wrap_english_in_title($partner_modal));
                                    }
                                  ?>
                                </p>
                              </div>
                              <div class="modal_block">
                                <p class="modal_head B">Point:</p>
                                <p class="modal_body B">
                                  <?php echo wp_kses_post ( get_field('projects_point') ); ?>
                                </p>
                              </div>
                              <div class="modal_block">
                                <p class="modal_head B">Year:</p>
                                <p class="modal_body B">
                                  <?php
                                    $project_years = get_the_terms(get_the_ID(), 'project_year');

                                    if ($project_years && !is_wp_error($project_years)) :
                                      $year_names = array();

                                      foreach ($project_years as $year) {
                                        $year_names[] = esc_html($year->name);
                                      }

                                      if (!empty($year_names)) :
                                    ?>
                                      <?php echo implode(', ', $year_names); ?>
                                    <?php
                                      endif;
                                    endif;
                                  ?>
                                </p>
                              </div>
                              <div class="modal_block">
                                <p class="modal_head B">Media:</p>
                                <p class="modal_body B">
                                  <?php echo wp_kses_post ( get_field('projects_media') ); ?>
                                </p>
                              </div>
                            </div>
                          </header>
                          <div id="modal-<?php echo get_the_ID(); ?>-content" class="modal_content">
                            <div class="modal_overview">
                              <h3 class="modal_subTitle -overview uppercase N-Bold">Overview,</h3>
                              <div class="modal_descriptionJa">
                                <?php the_field('projects_overview_ja'); ?>
                              </div>
                              <div class="modal_descriptionEn B">
                                <?php the_field('projects_overview_en'); ?>
                              </div>
                              <div class="modal_credit B">
                                <h3 class="modal_subTitle uppercase N-Bold">Credit,</h3>
                                <div class="modal_creditDescription">
                                  <?php the_field('projects_credit'); ?>
                                </div>
                              </div>
                              <div class="modal_img"><?php the_content(); ?></div>
                            </div>
                            <?php
                              $projects_publications = get_field('projects_publications');
                              if (!empty($projects_publications)) :
                            ?>
                            <div class="modal_publications">
                              <h3 class="modal_subTitle uppercase N-Bold">Publications,</h3>
                              <div class="modal_publicationsDescription">
                                <?php echo wp_kses_post($projects_publications); ?>
                              </div>
                            </div>
                            <?php endif; ?>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              <?php endwhile; ?>
            <?php else : ?>
              <p>投稿が見つかりませんでした。</p>
            <?php endif; ?>
          </div>
        </div>
      </div>
<?php get_template_part('./layout/footer'); ?>