<?php get_template_part('./layout/header'); ?>
      <div class="home" data-page="home">
        <div class="homeFv clip">
          <div class="homeFv_copy">
            <span class="homeFv_copyJa" data-type-writer-animation="target">土に根をおろし、風とともに生きよう。 種とともに冬を越え、鳥とともに春を歌おう。 どんなに恐ろしい武器を持っても、たくさんの可哀想なロボットを操っても、 土から離れては生きられないのよ。<br> - シータ 『天空の城ラピュタ』</span>
            <span class="homeFv_copyEn B">
              <span data-type-writer-animation="copy-en-text">"Take root in the ground, live in harmony with the wind, live in harmony with the wind, plant your seeds in the winter, and rejoice with the birds in the coming of spring. No matter how many weapons you have, no matter how great your technology might be, the world cannot live without love."<br>— Sheeta (LAPUTA: Castle in the Sky)</span>
              <span data-type-writer-animation="copy-en-text">“Nature revolves, but man advances; both / Eternal; that a circle, this a line.”​<br>— Edward Young, Night Thoughts, Night VI</span>
              <span data-type-writer-animation="copy-en-text">“Nature does not hurry, yet everything is accomplished.”​<br>— Attributed to Lao Tzu</span>
              <span data-type-writer-animation="copy-en-text">“We live in her midst and know her not. She is incessantly speaking to us, but betrays not her secret. We constantly act upon her, and yet have no power over her.”​<br>— Johann Wolfgang von Goethe, Aphorisms on Nature</span>
              <span data-type-writer-animation="copy-en-text">“The order of nature proves the existence of an architect of the universe.”​<br>— Immanuel Kant</span>
            </span>
          </div>
          <div class="homeFv_video" data-gl-item="home-img-plane">
            <video src="<?= vite_src_video('video02.mp4') ?>" autoplay loop muted playsinline crossOrigin="anonymous" data-video="target"></video>
          </div>
        </div>
        <section class="homeStatement">
          <div class="homeStatement_inner">
            <div class="homeStatement_title">
              <h2 class="title uppercase N-Bold">Statement,</h2>
            </div>
            <p class="homeStatement_descriptionJa">テクノロジーが進むほど、私たちは土や海から離れてしまうのか？ 都市に住まう限り、生産と消費の分断は免れないのか？ 都市と野生。 身体性と仮想性。 進化と回帰。 私たちは、それらに優劣をつけない。 線を引きたくない。 相反するからこそ、支え合い、補い合い互いを迎えいれながら生きるための、在り方を問い続けたい。 たとえこの指先が触れているのがキーボードだったとしても私たちは自然や生物とのつながりを求める、その世界を諦めない。</p>
            <div class="homeStatement_img" data-gl-item="home-img">
              <picture>
                <source srcset="<?= vite_src_images('home_statement_img@2x.webp') ?> 2x, <?= vite_src_images('home_statement_img@1x.webp') ?> 1x" media="(min-width: 768px)" type="image/webp" width="233" height="329">
                <source srcset="<?= vite_src_images('sp_home_statement_img@3x.webp') ?> 3x, <?= vite_src_images('sp_home_statement_img@2x.webp') ?> 2x" type="image/webp" width="136" height="192">
                <img src="<?= vite_src_images('sp_home_statement_img@2x.webp') ?>" alt="" width="136" height="192">
              </picture>
            </div>
            <p class="homeStatement_descriptionEn B">Soil and digital, it is not a choice between the two.We are a biophilic design studio that creates lasting relationships and a sense of being part of nature's cycles by thinking both earthly and digital.What we want to do is to rethink soil and digital as complementary concepts, rather than opposing concepts.</p>
          </div>
        </section>
        <section class="homeAbout">
          <div class="inner">
            <div class="homeAbout_inner">
              <div class="homeAbout_title">
                <h2 class="title uppercase N-Bold">About,</h2>
              </div>
              <p class="homeAbout_descriptionJa">私たちは、自然とテクノロジーや、野生と都市生活など一見相反するものを相互補完性のある概念として捉え直し、その実感と実態を、企業や個人と共に生み出すバイオフィリックスタジオです。</p>
              <p class="homeAbout_descriptionEn B">We are a biophilic studio that reinterprets seemingly contradictory elements—such as nature and technology, or the wild and urban living—as mutually complementary concepts. Through research, design, and creative expression, we collaborate with businesses and individuals to bring forth both the experience and the reality of this vision.</p>
              <!-- <div class="homeAbout_button">
                <a href="<?php echo esc_url( home_url() ); ?>/about/" class="button">
                  <span class="button_arrow" aria-hidden="true">
                    <svg viewBox="0 0 17 16">
                      <use href="#SvgArrowLine" class="button_arrowLine"></use>
                      <use href="#SvgArrowPath1" class="button_arrowPath1"></use>
                      <use href="#SvgArrowPath2" class="button_arrowPath2"></use>
                    </svg>
                  </span>
                  <span class="button_text uppercase N-Bold">View More</span>
                </a>
              </div> -->
            </div>
            <div class="homeAbout_articles">
              <article class="homeAboutArticle">
                <a href="#" class="homeAboutArticle_link">
                  <div class="homeAboutArticle_head">
                    <h3 class="homeAboutArticle_title -primary">
                      <img src="<?= vite_src_images('about_title_text01.svg') ?>" alt="かんがえる" width="113" height="24">
                    </h3>
                    <div class="homeAboutArticle_category uppercase B">/Research</div>
                  </div>
                  <div class="homeAboutArticle_body">
                    <p class="homeAboutArticle_descriptionJa">自然と都市、バイオフィリック分野におけるリサーチ / 企業やシステムと自然の関係性における課題や可能性の探究</p>
                    <p class="homeAboutArticle_descriptionEn B">Research in the fields of nature, urban environments, and biophilic studies / Exploring challenges and possibilities in the relationship between nature, companies, and systems</p>
                  </div>
                </a>
              </article>
              <article class="homeAboutArticle">
                <a href="#" class="homeAboutArticle_link">
                  <div class="homeAboutArticle_head">
                    <h3 class="homeAboutArticle_title -secondary">
                      <img src="<?= vite_src_images('about_title_text02.svg') ?>" alt="つくる" width="60" height="25">
                    </h3>
                    <div class="homeAboutArticle_category uppercase B">/Design</div>
                  </div>
                  <div class="homeAboutArticle_body">
                    <p class="homeAboutArticle_descriptionJa">事業やサービスのコンセプトやナラティブのデザイン / プロジェクトやコンテンツの企画、編集、制作 / ワークショップや研修プログラムの設計、実施</p>
                    <p class="homeAboutArticle_descriptionEn B">Designing concepts and narratives for businesses and services / Planning, editing, and producing projects and content / Designing and facilitating workshops and training programs</p>
                  </div>
                </a>
              </article>
              <article class="homeAboutArticle">
                <a href="#" class="homeAboutArticle_link">
                  <div class="homeAboutArticle_head">
                    <h3 class="homeAboutArticle_title -tertiary">
                      <img src="<?= vite_src_images('about_title_text03.svg') ?>" alt="あらわす" width="92" height="25">
                    </h3>
                    <div class="homeAboutArticle_category uppercase B">/Artwork</div>
                  </div>
                  <div class="homeAboutArticle_body">
                    <p class="homeAboutArticle_descriptionJa">0.1次産業を起点とした表現活動 / バイオフィリックアートの制作</p>
                    <p class="homeAboutArticle_descriptionEn B">Creative expression rooted in the “0.1st” industries (e.g. hunting, foraging, small-scale agriculture) / Creation of biophilic art</p>
                  </div>
                </a>
              </article>
            </div>
          </div>
        </section>
        <section class="homeProjects">
          <div class="inner">
            <div class="homeProjects_block">
              <div class="homeProjects_head">
                <div class="homeProjects_title">
                  <h2 class="title uppercase N-Bold">Projects,</h2>
                </div>
                <!-- <div class="homeProjects_button">
                  <a href="<?php echo esc_url( home_url() ); ?>/projects/" class="button">
                    <span class="button_arrow" aria-hidden="true">
                      <svg viewBox="0 0 17 16">
                        <use href="#SvgArrowLine" class="button_arrowLine"></use>
                        <use href="#SvgArrowPath1" class="button_arrowPath1"></use>
                        <use href="#SvgArrowPath2" class="button_arrowPath2"></use>
                      </svg>
                    </span>
                    <span class="button_text uppercase N-Bold">View All</span>
                  </a>
                </div> -->
              </div>
              <div class="homeProjects_body">
                <div class="homeProjects_articles">
                  <article class="homeProjectsArticle">
                    <a href="#" class="homeProjectsArticle_link">
                      <h3 class="homeProjectsArticle_title">罠ブラザーズ</h3>
                      <div class="homeProjectsArticle_category B">Sharing Economy Service</div>
                      <div class="homeProjectsArticle_thumbnail">
                        <picture>
                          <source srcset="<?= vite_src_images('home_projects_thumbnail01@2x.webp') ?> 2x, <?= vite_src_images('home_projects_thumbnail01@1x.webp') ?> 1x" media="(min-width: 768px)" type="image/webp" width="175" height="247">
                          <source srcset="<?= vite_src_images('sp_home_projects_thumbnail01@3x.webp') ?> 3x, <?= vite_src_images('sp_home_projects_thumbnail01@2x.webp') ?> 2x" type="image/webp" width="113" height="159">
                          <img src="<?= vite_src_images('sp_home_projects_thumbnail01@2x.webp') ?>" alt="" width="113" height="159">
                        </picture>
                        <picture>
                          <source srcset="<?= vite_src_images('home_projects_thumbnail01-02@2x.webp') ?> 2x, <?= vite_src_images('home_projects_thumbnail01-02@1x.webp') ?> 1x" media="(min-width: 768px)" type="image/webp" width="175" height="247">
                          <img src="<?= vite_src_images('home_projects_thumbnail01-02@2x.webp') ?>" alt="" width="113" height="159">
                        </picture>
                      </div>
                    </a>
                  </article>
                  <article class="homeProjectsArticle">
                    <a href="#" class="homeProjectsArticle_link">
                      <h3 class="homeProjectsArticle_title">僕たちはどう食べるかツアー</h3>
                      <div class="homeProjectsArticle_category B">Culinary Tour</div>
                      <div class="homeProjectsArticle_thumbnail">
                        <picture>
                          <source srcset="<?= vite_src_images('home_projects_thumbnail02@2x.webp') ?> 2x, <?= vite_src_images('home_projects_thumbnail02@1x.webp') ?> 1x" media="(min-width: 768px)" type="image/webp" width="175" height="247">
                          <source srcset="<?= vite_src_images('sp_home_projects_thumbnail02@3x.webp') ?> 3x, <?= vite_src_images('sp_home_projects_thumbnail02@2x.webp') ?> 2x" type="image/webp" width="113" height="159">
                          <img src="<?= vite_src_images('sp_home_projects_thumbnail02@2x.webp') ?>" alt="" width="113" height="159">
                        </picture>
                        <picture>
                          <source srcset="<?= vite_src_images('home_projects_thumbnail02-02@2x.webp') ?> 2x, <?= vite_src_images('home_projects_thumbnail02-02@1x.webp') ?> 1x" media="(min-width: 768px)" type="image/webp" width="175" height="247">
                          <img src="<?= vite_src_images('home_projects_thumbnail02-02@2x.webp') ?>" alt="" width="113" height="159">
                        </picture>
                      </div>
                    </a>
                  </article>
                  <article class="homeProjectsArticle">
                    <a href="#" class="homeProjectsArticle_link">
                      <h3 class="homeProjectsArticle_title">HONDA 新価値探索プログラム「MINERVA」</h3>
                      <div class="homeProjectsArticle_category B">Field Workshop Program</div>
                      <div class="homeProjectsArticle_thumbnail">
                        <picture>
                          <source srcset="<?= vite_src_images('home_projects_thumbnail03@2x.webp') ?> 2x, <?= vite_src_images('home_projects_thumbnail03@1x.webp') ?> 1x" media="(min-width: 768px)" type="image/webp" width="175" height="247">
                          <source srcset="<?= vite_src_images('sp_home_projects_thumbnail03@3x.webp') ?> 3x, <?= vite_src_images('sp_home_projects_thumbnail03@2x.webp') ?> 2x" type="image/webp" width="113" height="159">
                          <img src="<?= vite_src_images('sp_home_projects_thumbnail03@2x.webp') ?>" alt="" width="113" height="159">
                        </picture>
                        <picture>
                          <source srcset="<?= vite_src_images('home_projects_thumbnail03-02@2x.webp') ?> 2x, <?= vite_src_images('home_projects_thumbnail03-02@1x.webp') ?> 1x" media="(min-width: 768px)" type="image/webp" width="175" height="247">
                          <img src="<?= vite_src_images('home_projects_thumbnail03-02@2x.webp') ?>" alt="" width="113" height="159">
                        </picture>
                      </div>
                    </a>
                  </article>
                  <article class="homeProjectsArticle">
                    <a href="#" class="homeProjectsArticle_link">
                      <h3 class="homeProjectsArticle_title uppercase">Eat & Meet Sea Vegetable</h3>
                      <div class="homeProjectsArticle_category B">Pop-up Event</div>
                      <div class="homeProjectsArticle_thumbnail">
                        <picture>
                          <source srcset="<?= vite_src_images('home_projects_thumbnail04@2x.webp') ?> 2x, <?= vite_src_images('home_projects_thumbnail04@1x.webp') ?> 1x" media="(min-width: 768px)" type="image/webp" width="175" height="247">
                          <source srcset="<?= vite_src_images('sp_home_projects_thumbnail04@3x.webp') ?> 3x, <?= vite_src_images('sp_home_projects_thumbnail04@2x.webp') ?> 2x" type="image/webp" width="113" height="159">
                          <img src="<?= vite_src_images('sp_home_projects_thumbnail04@2x.webp') ?>" alt="" width="113" height="159">
                        </picture>
                        <picture>
                          <source srcset="<?= vite_src_images('home_projects_thumbnail04-02@2x.webp') ?> 2x, <?= vite_src_images('home_projects_thumbnail04-02@1x.webp') ?> 1x" media="(min-width: 768px)" type="image/webp" width="175" height="247">
                          <img src="<?= vite_src_images('home_projects_thumbnail04-02@2x.webp') ?>" alt="" width="113" height="159">
                        </picture>
                      </div>
                    </a>
                  </article>
                  <article class="homeProjectsArticle">
                    <a href="#" class="homeProjectsArticle_link">
                      <h3 class="homeProjectsArticle_title">Sound & Scape</h3>
                      <div class="homeProjectsArticle_category B">ArtWork</div>
                      <div class="homeProjectsArticle_thumbnail">
                        <picture>
                          <source srcset="<?= vite_src_images('home_projects_thumbnail05@2x.webp') ?> 2x, <?= vite_src_images('home_projects_thumbnail05@1x.webp') ?> 1x" media="(min-width: 768px)" type="image/webp" width="175" height="247">
                          <source srcset="<?= vite_src_images('sp_home_projects_thumbnail05@3x.webp') ?> 3x, <?= vite_src_images('sp_home_projects_thumbnail05@2x.webp') ?> 2x" type="image/webp" width="113" height="159">
                          <img src="<?= vite_src_images('sp_home_projects_thumbnail05@2x.webp') ?>" alt="" width="113" height="159">
                        </picture>
                        <picture>
                          <source srcset="<?= vite_src_images('home_projects_thumbnail05-02@2x.webp') ?> 2x, <?= vite_src_images('home_projects_thumbnail05-02@1x.webp') ?> 1x" media="(min-width: 768px)" type="image/webp" width="175" height="247">
                          <img src="<?= vite_src_images('home_projects_thumbnail05-02@2x.webp') ?>" alt="" width="113" height="159">
                        </picture>
                      </div>
                    </a>
                  </article>
                  <article class="homeProjectsArticle">
                    <a href="#" class="homeProjectsArticle_link">
                      <h3 class="homeProjectsArticle_title">Intentional Eater<br>#01 節度ある食卓 肉食再考</h3>
                      <div class="homeProjectsArticle_category B">Exhibition</div>
                      <div class="homeProjectsArticle_thumbnail">
                        <picture>
                          <source srcset="<?= vite_src_images('home_projects_thumbnail06@2x.webp') ?> 2x, <?= vite_src_images('home_projects_thumbnail06@1x.webp') ?> 1x" media="(min-width: 768px)" type="image/webp" width="175" height="247">
                          <source srcset="<?= vite_src_images('sp_home_projects_thumbnail06@3x.webp') ?> 3x, <?= vite_src_images('sp_home_projects_thumbnail06@2x.webp') ?> 2x" type="image/webp" width="113" height="159">
                          <img src="<?= vite_src_images('sp_home_projects_thumbnail06@2x.webp') ?>" alt="" width="113" height="159">
                        </picture>
                        <picture>
                          <source srcset="<?= vite_src_images('home_projects_thumbnail06-02@2x.webp') ?> 2x, <?= vite_src_images('home_projects_thumbnail06-02@1x.webp') ?> 1x" media="(min-width: 768px)" type="image/webp" width="175" height="247">
                          <img src="<?= vite_src_images('home_projects_thumbnail06-02@2x.webp') ?>" alt="" width="113" height="159">
                        </picture>
                      </div>
                    </a>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div class="homeContact">
          <a href="#" class="button -large">
            <span class="button_arrow" aria-hidden="true">
              <svg viewBox="0 0 17 16">
                <use href="#SvgArrowLine" class="button_arrowLine"></use>
                <use href="#SvgArrowPath1" class="button_arrowPath1"></use>
                <use href="#SvgArrowPath2" class="button_arrowPath2"></use>
              </svg>
            </span>
            <span class="button_text uppercase N-Bold">Contact Us</span>
          </a>
        </div>
      </div>
      <div class="webgl" data-webgl-container="home">
        <canvas class="webgl_canvas" data-webgl="home"></canvas>
      </div>
<?php get_template_part('./layout/footer'); ?>