<?php get_template_part('./layout/header'); ?>
      <div class="home" data-page="home">
        <div class="homeFv clip">
          <div class="homeFv_inner inner">
            <div class="homeFv_quote">
              <div class="homeFv_quoteMarker" aria-hidden="true"></div>
              <div class="homeFv_quoteLine" aria-hidden="true"></div>
              <div class="homeFv_quoteText">
                <span class="homeFv_quoteJa typewriter -homeFv" data-type-writer-animation="target" data-loop="true">
                  <span class="homeFv_quoteJaText" data-type-writer-animation="copy-text">土に根をおろし、風とともに生きよう。種とともに冬を越え、鳥とともに春を歌おう。どんなに恐ろしい武器を持っても、たくさんの可哀想なロボットを操っても、土から離れては生きられないのよ。 — シータ 『天空の城ラピュタ』</span>
                  <span class="homeFv_quoteJaText" data-type-writer-animation="copy-text">自然は回転するが、人間は前進する。 ー エドワード・ヤング 『夜の瞑想』</span>
                  <span class="homeFv_quoteJaText" data-type-writer-animation="copy-text">自然は急がない。それでもすべては成し遂げられる。 ー 老子</span>
                  <span class="homeFv_quoteJaText" data-type-writer-animation="copy-text">自然は絶えずわれわれと語るが、その秘密を打ち明けはしない。われわれはつねに自然に働きかけ、しかも、それを支配するなんらの力もない。 ー ゲーテ 『自然に関する断片』</span>
                  <span class="homeFv_quoteJaText" data-type-writer-animation="copy-text">大自然の秩序は宇宙の建築家の存在を立証する。 ー カント 『断片』</span>
                </span>
                <span class="homeFv_quoteEn B">
                  <span data-type-writer-animation="copy-sub-text">"Take root in the ground, live in harmony with the wind, live in harmony with the wind, plant your seeds in the winter, and rejoice with the birds in the coming of spring. No matter how many weapons you have, no matter how great your technology might be, the world cannot live without love."<br>— Sheeta (LAPUTA: Castle in the Sky)</span>
                  <span data-type-writer-animation="copy-sub-text">“Nature revolves, but man advances; both / Eternal; that a circle, this a line.”​<br>— Edward Young, Night Thoughts, Night VI</span>
                  <span data-type-writer-animation="copy-sub-text">“Nature does not hurry, yet everything is accomplished.”​<br>— Attributed to Lao Tzu</span>
                  <span data-type-writer-animation="copy-sub-text">“We live in her midst and know her not. She is incessantly speaking to us, but betrays not her secret. We constantly act upon her, and yet have no power over her.”​<br>— Johann Wolfgang von Goethe, Aphorisms on Nature</span>
                  <span data-type-writer-animation="copy-sub-text">“The order of nature proves the existence of an architect of the universe.”​<br>— Immanuel Kant</span>
                </span>
              </div>
            </div>
            <div class="homeFv_video" data-webgl-item="ascii-video-target">
              <video src="<?= vite_src_video('home_fv.mp4') ?>" autoplay loop muted playsinline crossOrigin="anonymous" data-video="target" data-video-type="home-fv"></video>
            </div>
          </div>
        </div>
        <section class="homeStatement">
          <div class="homeStatement_inner">
            <div class="homeStatement_title">
              <h2 class="title uppercase N-Bold">Statement,</h2>
            </div>
            <p class="homeStatement_descriptionJa">テクノロジーが進むほど、私たちは土や海から離れてしまうのか？ 都市に住まう限り、生産と消費の分断は免れないのか？ 都市と野生。 身体性と仮想性。 進化と回帰。 私たちは、それらに優劣をつけない。 線を引きたくない。 相反するからこそ、支え合い、補い合い互いを迎えいれながら生きるための、在り方を問い続けたい。 たとえこの指先が触れているのがキーボードだったとしても私たちは自然や生物とのつながりを求める、その世界を諦めない。</p>
            <p class="homeStatement_descriptionEn B">Soil and digital, it is not a choice between the two.We are a biophilic design studio that creates lasting relationships and a sense of being part of nature's cycles by thinking both earthly and digital.What we want to do is to rethink soil and digital as complementary concepts, rather than opposing concepts.</p>
          </div>
        </section>
        <section class="homeAbout">
          <div class="inner">
            <div class="homeAbout_inner">
              <div class="homeAbout_title">
                <h2 class="title uppercase N-Bold">About,</h2>
              </div>
              <p class="homeAbout_descriptionJa">私たちは、自然とテクノロジーや、野生と都市生活など一見相反するものを相互補完性のある概念として捉え直し、その実感と実態を、企業や個人と共に生み出す<br aria-hidden="true"><span>バイオフィリックスタジオ</span>です。</p>
              <p class="homeAbout_descriptionEn B">We are a biophilic studio that reinterprets seemingly contradictory elements—such as nature and technology, or the wild and urban living—as mutually complementary concepts. Through research, design, and creative expression, we collaborate with businesses and individuals to bring forth both the experience and the reality of this vision.</p>
              <div
                class="homeAbout_img"
                data-webgl-item="ascii-img-target"
                data-img-2x="<?= vite_src_images('home_about_img@2x.webp') ?>"
                data-img-1x="<?= vite_src_images('home_about_img@1x.webp') ?>"
                data-img-sp-3x="<?= vite_src_images('sp_home_about_img@3x.webp') ?>"
                data-img-sp-2x="<?= vite_src_images('sp_home_about_img@2x.webp') ?>"
              >
                <picture>
                  <source srcset="<?= vite_src_images('home_about_img@2x.webp') ?> 2x, <?= vite_src_images('home_about_img@1x.webp') ?> 1x" media="(min-width: 768px)" type="image/webp" width="233" height="329">
                  <source srcset="<?= vite_src_images('sp_home_about_img@3x.webp') ?> 3x, <?= vite_src_images('sp_home_about_img@2x.webp') ?> 2x" type="image/webp" width="136" height="192">
                  <img src="<?= vite_src_images('sp_home_about_img@2x.webp') ?>" alt="" width="136" height="192">
                </picture>
              </div>
            </div>
            <div class="homeAbout_block">
              <div class="homeAbout_section">
                <section class="homeAboutSection">
                  <div class="homeAboutSection_block">
                    <div class="homeAboutSection_head">
                      <div class="homeAboutSection_img">
                        <picture>
                          <source srcset="<?= vite_src_images('home_about_img01@2x.webp') ?> 2x, <?= vite_src_images('home_about_img01@1x.webp') ?> 1x" media="(min-width: 768px)" type="image/webp" width="55" height="55">
                          <source srcset="<?= vite_src_images('sp_home_about_img01@3x.webp') ?> 3x, <?= vite_src_images('sp_home_about_img01@2x.webp') ?> 2x" type="image/webp" width="40" height="40">
                          <img src="<?= vite_src_images('sp_home_about_img01@2x.webp') ?>" alt="" width="40" height="40">
                        </picture>
                      </div>
                      <h3 class="homeAboutSection_title -primary">
                        <span><img src="<?= vite_src_images('about_title_text01.svg') ?>" alt="かんがえる" width="113" height="24"></span>
                      </h3>
                      <span class="homeAboutSection_titleEn uppercase B">/ Research</span>
                    </div>
                    <div class="homeAboutSection_body">
                      <ol class="homeAboutSection_list">
                        <li class="homeAboutSection_item">
                          <div class="homeAboutSection_text">
                            <div class="homeAboutSection_textJa">自然と都市、バイオフィリック分野におけるリサーチ</div>
                            <div class="homeAboutSection_textEn B">Research in the fields of nature, urban environments, and biophilic studies</div>
                          </div>
                        </li>
                        <li class="homeAboutSection_item">
                          <div class="homeAboutSection_text">
                            <div class="homeAboutSection_textJa">企業やシステムと自然の関係性における課題や可能性の探究</div>
                            <div class="homeAboutSection_textEn B">Exploring challenges and possibilities in the relationship between nature, companies, and systems</div>
                          </div>
                        </li>
                      </ol>
                      <div class="homeAboutSection_number B">[bit.01]</div>
                    </div>
                  </div>
                </section>
                <section class="homeAboutSection">
                  <div class="homeAboutSection_block">
                    <div class="homeAboutSection_head">
                      <div class="homeAboutSection_img">
                        <picture>
                          <source srcset="<?= vite_src_images('home_about_img02@2x.webp') ?> 2x, <?= vite_src_images('home_about_img02@1x.webp') ?> 1x" media="(min-width: 768px)" type="image/webp" width="55" height="55">
                          <source srcset="<?= vite_src_images('sp_home_about_img02@3x.webp') ?> 3x, <?= vite_src_images('sp_home_about_img02@2x.webp') ?> 2x" type="image/webp" width="40" height="40">
                          <img src="<?= vite_src_images('sp_home_about_img02@2x.webp') ?>" alt="" width="40" height="40">
                        </picture>
                      </div>
                      <h3 class="homeAboutSection_title -secondary">
                        <span><img src="<?= vite_src_images('about_title_text02.svg') ?>" alt="つくる" width="60" height="25"></span>
                      </h3>
                      <span class="homeAboutSection_titleEn uppercase B">/ Design</span>
                    </div>
                    <div class="homeAboutSection_body">
                      <ol class="homeAboutSection_list">
                        <li class="homeAboutSection_item">
                          <div class="homeAboutSection_text">
                            <div class="homeAboutSection_textJa">事業やサービスのコンセプトやナラティブのデザイン</div>
                            <div class="homeAboutSection_textEn B">Designing concepts and narratives for businesses and services</div>
                          </div>
                        </li>
                        <li class="homeAboutSection_item">
                          <div class="homeAboutSection_text">
                            <div class="homeAboutSection_textJa">プロジェクトやコンテンツの企画、編集、制作</div>
                            <div class="homeAboutSection_textEn B">Planning, editing, and producing projects and content</div>
                          </div>
                        </li>
                        <li class="homeAboutSection_item">
                          <div class="homeAboutSection_text">
                            <div class="homeAboutSection_textJa">ワークショップや研修プログラムの設計、実施</div>
                            <div class="homeAboutSection_textEn B">Designing and facilitating workshops and training programs</div>
                          </div>
                        </li>
                      </ol>
                      <div class="homeAboutSection_number B">[bit.02]</div>
                    </div>
                  </div>
                </section>
                <section class="homeAboutSection">
                  <div class="homeAboutSection_block">
                    <div class="homeAboutSection_head">
                      <div class="homeAboutSection_img">
                        <picture>
                          <source srcset="<?= vite_src_images('home_about_img03@2x.webp') ?> 2x, <?= vite_src_images('home_about_img03@1x.webp') ?> 1x" media="(min-width: 768px)" type="image/webp" width="55" height="55">
                          <source srcset="<?= vite_src_images('sp_home_about_img03@3x.webp') ?> 3x, <?= vite_src_images('sp_home_about_img03@2x.webp') ?> 2x" type="image/webp" width="40" height="40">
                          <img src="<?= vite_src_images('sp_home_about_img03@2x.webp') ?>" alt="" width="40" height="40">
                        </picture>
                      </div>
                      <h3 class="homeAboutSection_title -tertiary">
                        <span><img src="<?= vite_src_images('about_title_text03.svg') ?>" alt="あらわす" width="92" height="25"></span>
                      </h3>
                      <span class="homeAboutSection_titleEn uppercase B">/ Artwork</span>
                    </div>
                    <div class="homeAboutSection_body">
                      <ol class="homeAboutSection_list">
                        <li class="homeAboutSection_item">
                          <div class="homeAboutSection_text">
                            <div class="homeAboutSection_textJa">0.1次産業を起点とした表現活動</div>
                            <div class="homeAboutSection_textEn B">Creative expression rooted in the “0.1st” industries (e.g. hunting, foraging, small-scale agriculture)</div>
                          </div>
                        </li>
                        <li class="homeAboutSection_item">
                          <div class="homeAboutSection_text">
                            <div class="homeAboutSection_textJa">バイオフィリックアートの制作</div>
                            <div class="homeAboutSection_textEn B">Creation of biophilic art</div>
                          </div>
                        </li>
                      </ol>
                      <div class="homeAboutSection_number B">[bit.03]</div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
            <div class="homeAbout_button">
              <a href="<?php echo esc_url( home_url() ); ?>/about/" class="button" data-shuffle-hover="target">
                <span class="button_arrow" aria-hidden="true">
                  <svg viewBox="0 0 17 16">
                    <use href="#SvgArrowLine" class="button_arrowLine"></use>
                    <use href="#SvgArrowPath1" class="button_arrowPath1"></use>
                    <use href="#SvgArrowPath2" class="button_arrowPath2"></use>
                  </svg>
                </span>
                <span class="button_text uppercase N-Bold" data-shuffle-hover="text">View More</span>
              </a>
            </div>
          </div>
        </section>
        <section class="homeProjects">
          <div class="inner">
            <div class="homeProjects_block">
              <div class="homeProjects_head">
                <h2 class="title uppercase N-Bold">Projects,</h2>
              </div>
              <div class="homeProjects_body">
                <div class="projectsArticle -header">
                  <div class="projectsArticle_link">
                    <div class="projectsArticle_number B">Overview</div>
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
              <div class="homeProjects_foot">
                <div class="homeProjects_button">
                  <a href="<?php echo esc_url( home_url() ); ?>/projects/" class="button" data-shuffle-hover="target">
                    <span class="button_arrow" aria-hidden="true">
                      <svg viewBox="0 0 17 16">
                        <use href="#SvgArrowLine" class="button_arrowLine"></use>
                        <use href="#SvgArrowPath1" class="button_arrowPath1"></use>
                        <use href="#SvgArrowPath2" class="button_arrowPath2"></use>
                      </svg>
                    </span>
                    <span class="button_text uppercase N-Bold" data-shuffle-hover="text">View All</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div class="webgl" data-webgl-container="common">
        <canvas class="webgl_canvas" data-webgl="common"></canvas>
      </div>
<?php get_template_part('./layout/footer'); ?>