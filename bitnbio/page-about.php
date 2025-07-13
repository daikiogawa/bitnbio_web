<?php get_template_part('./layout/header'); ?>
      <div class="about lower" data-page="about">
        <div class="inner">
          <h1 class="about_title typewriter -about uppercase N-Medium" data-type-writer-animation="target" data-loop="false">
            <span data-type-writer-animation="copy-text">We Are A BIOPHILIC STUDIO.</span>
          </h1>
          <p class="about_description B">reinterpreting seemingly contradictory elements—such as nature and technology</p>
          <div
            class="about_img"
            data-webgl-item="ascii-img-target"
            data-img-2x="<?= vite_src_images('about_img01@2x.webp') ?>"
            data-img-1x="<?= vite_src_images('about_img01@1x.webp') ?>"
            data-img-sp-3x="<?= vite_src_images('sp_about_img01@3x.webp') ?>"
            data-img-sp-2x="<?= vite_src_images('sp_about_img01@2x.webp') ?>"
          >
            <picture>
              <source srcset="<?= vite_src_images('about_img01@2x.webp') ?> 2x, <?= vite_src_images('about_img01@1x.webp') ?> 1x" media="(min-width: 768px)" type="image/webp" width="175" height="247">
              <source srcset="<?= vite_src_images('sp_about_img01@3x.webp') ?> 3x, <?= vite_src_images('sp_about_img01@2x.webp') ?> 2x" type="image/webp" width="181" height="257">
              <img src="<?= vite_src_images('sp_about_img01@2x.webp') ?>" alt="" width="181" height="257">
            </picture>
          </div>
          <section class="aboutWhoWeAre">
            <h2 class="title uppercase N-Bold">Who We Are,</h2>
            <p class="aboutWhoWeAre_descriptionJa">私たちは、自然とテクノロジーや、野生と都市生活など、一見相反するものを、相互補完性のある概念として捉え直し、その実感と実態を、企業や個人と共に生み出すバイオフィリックスタジオです。 自然にまつわる様々な危機が迫りくる一方で、2050年までに世界人口の約68%が都市部に居住すると予測されています。 都市のふるまいこそ、これからの世界のありようを決めるのだとしたら、そこに生きる人々の生活と仕事の中には、自然への敬意と地域との繋がり、倫理と節度が必要です。 想いを共有できる人々と共に、私たちは様々な手法を通じて、都市の中に自然との新たな関係性を見出します。</p>
            <p class="aboutWhoWeAre_descriptionEn B">We are a biophilic studio that reinterprets seemingly opposing elements—such as nature and technology, or the wild and urban life—as complementary forces. Together with individuals and organizations, we create both the tangible and experiential realities of this reimagined connection.While various crises related to nature are becoming more pressing, it is estimated that by 2050, approximately 68% of the world’s population will live in urban areas.If the behavior of cities will shape the future of our world, then the lives and work of those who inhabit them must be grounded in respect for nature, connection to local communities, and a sense of ethics and moderation.In collaboration with like-minded individuals, we explore new relationships between nature and the city through a variety of creative approaches.</p>
          </section>
          <section class="aboutWhatWeDo">
            <div class="aboutWhatWeDo_title">
              <h2 class="title uppercase N-Bold">What We Do,</h2>
            </div>
            <div class="aboutWhatWeDo_sections">
              <section class="aboutWhatWeDoSection -research">
                <div class="aboutWhatWeDoSection_img">
                  <picture>
                    <source srcset="<?= vite_src_images('about_what-we-do_img01@2x.webp') ?> 2x, <?= vite_src_images('about_what-we-do_img01@1x.webp') ?> 1x" media="(min-width: 768px)" type="image/webp" width="90" height="90">
                    <source srcset="<?= vite_src_images('sp_about_what-we-do_img01@3x.webp') ?> 3x, <?= vite_src_images('sp_about_what-we-do_img01@2x.webp') ?> 2x" type="image/webp" width="60" height="60">
                    <img src="<?= vite_src_images('sp_about_what-we-do_img01@2x.webp') ?>" alt="か" width="60" height="60">
                  </picture>
                </div>
                <h3 class="aboutWhatWeDoSection_title">
                  <span class="aboutWhatWeDoSection_titleJa">
                    <img src="<?= vite_src_images('about_title_text01.svg') ?>" alt="かんがえる" width="113" height="24">
                  </span>
                  <span class="aboutWhatWeDoSection_titleEn uppercase B">Research</span>
                </h3>
                <ol class="aboutWhatWeDoSection_jaList">
                  <li class="aboutWhatWeDoSection_jaItem">
                    <div class="aboutWhatWeDoSection_jaText">自然と都市、バイオフィリック分野におけるリサーチ</div>
                  </li>
                  <li class="aboutWhatWeDoSection_jaItem">
                    <div class="aboutWhatWeDoSection_jaText">企業やシステムと自然の関係性における課題や可能性の探究</div>
                  </li>
                </ol>
                <ol class="aboutWhatWeDoSection_enList">
                  <li class="aboutWhatWeDoSection_enItem">
                    <span class="aboutWhatWeDoSection_enText B">Research in the fields of nature, urban environments, and biophilic studies</span>
                  </li>
                  <li class="aboutWhatWeDoSection_enItem">
                    <span class="aboutWhatWeDoSection_enText B">Exploring challenges and possibilities in the relationship between nature, companies, and systems</span>
                  </li>
                </ol>
              </section>
              <section class="aboutWhatWeDoSection -artwork">
                <div class="aboutWhatWeDoSection_img">
                  <picture>
                    <source srcset="<?= vite_src_images('about_what-we-do_img02@2x.webp') ?> 2x, <?= vite_src_images('about_what-we-do_img02@1x.webp') ?> 1x" media="(min-width: 768px)" type="image/webp" width="90" height="90">
                    <source srcset="<?= vite_src_images('sp_about_what-we-do_img02@3x.webp') ?> 3x, <?= vite_src_images('sp_about_what-we-do_img02@2x.webp') ?> 2x" type="image/webp" width="60" height="60">
                    <img src="<?= vite_src_images('sp_about_what-we-do_img02@2x.webp') ?>" alt="つ" width="60" height="60">
                  </picture>
                </div>
                <h3 class="aboutWhatWeDoSection_title">
                  <span class="aboutWhatWeDoSection_titleJa">
                    <img src="<?= vite_src_images('about_title_text02.svg') ?>" alt="つくる" width="60" height="25">
                  </span>
                  <span class="aboutWhatWeDoSection_titleEn uppercase B">Artwork</span>
                </h3>
                <ol class="aboutWhatWeDoSection_jaList">
                  <li class="aboutWhatWeDoSection_jaItem">
                    <div class="aboutWhatWeDoSection_jaText">0.1次産業を起点とした表現活動</div>
                  </li>
                  <li class="aboutWhatWeDoSection_jaItem">
                    <div class="aboutWhatWeDoSection_jaText">バイオフィリックアートの制作</div>
                  </li>
                </ol>
                <ol class="aboutWhatWeDoSection_enList">
                  <li class="aboutWhatWeDoSection_enItem">
                    <span class="aboutWhatWeDoSection_enText B">Creative expression rooted in the “0.1st” industries (e.g. hunting, foraging, small-scale agriculture)</span>
                  </li>
                  <li class="aboutWhatWeDoSection_enItem">
                    <span class="aboutWhatWeDoSection_enText B">Creation of biophilic art</span>
                  </li>
                </ol>
              </section>
              <section class="aboutWhatWeDoSection -design">
                <div class="aboutWhatWeDoSection_img">
                  <picture>
                    <source srcset="<?= vite_src_images('about_what-we-do_img03@2x.webp') ?> 2x, <?= vite_src_images('about_what-we-do_img03@1x.webp') ?> 1x" media="(min-width: 768px)" type="image/webp" width="90" height="90">
                    <source srcset="<?= vite_src_images('sp_about_what-we-do_img03@3x.webp') ?> 3x, <?= vite_src_images('sp_about_what-we-do_img03@2x.webp') ?> 2x" type="image/webp" width="60" height="60">
                    <img src="<?= vite_src_images('sp_about_what-we-do_img03@2x.webp') ?>" alt="あ" width="60" height="60">
                  </picture>
                </div>
                <h3 class="aboutWhatWeDoSection_title">
                  <span class="aboutWhatWeDoSection_titleJa">
                    <img src="<?= vite_src_images('about_title_text03.svg') ?>" alt="あらわす" width="92" height="25">
                  </span>
                  <span class="aboutWhatWeDoSection_titleEn uppercase B">Design</span>
                </h3>
                <ol class="aboutWhatWeDoSection_jaList">
                  <li class="aboutWhatWeDoSection_jaItem">
                    <div class="aboutWhatWeDoSection_jaText">事業やサービスのコンセプトやナラティブのデザイン</div>
                  </li>
                  <li class="aboutWhatWeDoSection_jaItem">
                    <div class="aboutWhatWeDoSection_jaText">プロジェクトやコンテンツの企画、編集、制作</div>
                  </li>
                  <li class="aboutWhatWeDoSection_jaItem">
                    <div class="aboutWhatWeDoSection_jaText">ワークショップや研修プログラムの設計、実施</div>
                  </li>
                </ol>
                <ol class="aboutWhatWeDoSection_enList">
                  <li class="aboutWhatWeDoSection_enItem">
                    <span class="aboutWhatWeDoSection_enText B">Designing concepts and narratives for businesses and services</span>
                  </li>
                  <li class="aboutWhatWeDoSection_enItem">
                    <span class="aboutWhatWeDoSection_enText B">Planning, editing, and producing projects and content</span>
                  </li>
                  <li class="aboutWhatWeDoSection_enItem">
                    <span class="aboutWhatWeDoSection_enText B">Designing and facilitating workshops and training programs</span>
                  </li>
                </ol>
              </section>
            </div>
          </section>
          <section class="aboutOurTeam">
            <div class="aboutOurTeam_title">
              <h2 class="title uppercase N-Bold">Our Team,</h2>
            </div>
            <div class="aboutOurTeam_block">
              <div class="aboutOurTeam_head">
                <div class="aboutOurTeam_label uppercase B">/ Member</div>
                <div class="aboutOurTeam_count B">(3)</div>
              </div>
              <div class="aboutOurTeam_body">
                <div class="aboutOurTeam_sections">
                  <section class="aboutOurTeamSection">
                    <div class="aboutOurTeamSection_head">
                      <h3 class="aboutOurTeamSection_name N-Medium">Daiki Ogawa</h3>
                      <ul class="aboutOurTeamSection_list">
                        <li class="aboutOurTeamSection_item">
                          <a href="https://www.instagram.com/ogawadaiki/" target="_blank" rel="noreferrer" class="aboutOurTeamSection_link B">IG</a>
                        </li>
                      </ul>
                    </div>
                    <div class="aboutOurTeamSection_body">
                      <p class="aboutOurTeamSection_description">三重県出身。大学在学中にシステム開発に携わり、以降エンジニアとしてのキャリアをスタート。その後 IoTデバイス や Webシステムの開発プロジェクトにおいて、ディレクションやプロジェクトマネジメントを担当し、技術的な知見を活かしながら全体を統括している。一方で、罠シェアリングコミュニティ「罠ブラザース」の運営を機に、2022年より狩猟免許を取得。・個人として有害鳥獣の捕獲にも従事。ジビエの地域内活用や、狩猟を通じた人と自然・地域との関係性のあり方を模索している。</p>
                    </div>
                  </section>
                  <section class="aboutOurTeamSection">
                    <div class="aboutOurTeamSection_head">
                      <h3 class="aboutOurTeamSection_name N-Medium">Kayoko Hashi</h3>
                      <ul class="aboutOurTeamSection_list">
                        <li class="aboutOurTeamSection_item">
                          <a href="https://x.com/kayoko_coco" target="_blank" rel="noreferrer" class="aboutOurTeamSection_link B">X</a>
                        </li>
                        <li class="aboutOurTeamSection_item">
                          <a href="https://www.instagram.com/kayoko_coco/" target="_blank" rel="noreferrer" class="aboutOurTeamSection_link B">IG</a>
                        </li>
                        <li class="aboutOurTeamSection_item">
                          <a href="https://www.threads.com/@kayoko_coco" target="_blank" rel="noreferrer" class="aboutOurTeamSection_link B">TH</a>
                        </li>
                        <li class="aboutOurTeamSection_item">
                          <a href="https://note.com/kayoko_coco" target="_blank" rel="noreferrer" class="aboutOurTeamSection_link B">NT</a>
                        </li>
                      </ul>
                    </div>
                    <div class="aboutOurTeamSection_body">
                      <p class="aboutOurTeamSection_description">東京都出身。IT業界にて WEBエンジニア / コミュニティマネージャー を経て、2018年に独立。2019年から2020年にかけて世界一周を経験。帰国後、生活共同体「TSUMUGI」を立ち上げ、田んぼ・都市養蜂・都市菜園など、消費者が生産地を共同管理するプロジェクトの企画・運営に従事。同社団法人の共同代表理事を務める。自身の経験を綴った『生活をサボるな。とインド人に叱られて二年経ってから分かったこと』が、note ｢創作大賞2024｣ に入選。寄稿実績「嫌いな教科を好きになる方法、教えてください！（河出書房）」など。</p>
                    </div>
                  </section>
                  <section class="aboutOurTeamSection">
                    <div class="aboutOurTeamSection_head">
                      <h3 class="aboutOurTeamSection_name N-Medium">Wataru Kiruta</h3>
                      <ul class="aboutOurTeamSection_list">
                        <li class="aboutOurTeamSection_item">
                          <a href="https://x.com/kiruta_wataru" target="_blank" rel="noreferrer" class="aboutOurTeamSection_link B">X</a>
                        </li>
                        <li class="aboutOurTeamSection_item">
                          <a href="https://www.instagram.com/kiruta_wataru/" target="_blank" rel="noreferrer" class="aboutOurTeamSection_link B">IG</a>
                        </li>
                      </ul>
                    </div>
                    <div class="aboutOurTeamSection_body">
                      <p class="aboutOurTeamSection_description">群馬県出身。外資系戦略PR会社、外資系広告代理店を経る中で、TVCMや広告プロモーション、ブランドキャンペーンなどのクリエイティブに従事。2021年に独立。企業やブランドの伴走者として言語化を担う「ナラティブデザイン」を提唱。2022年より、京都を拠点にアートコレクティブ「Ochill」を主宰し、自身のものづくりやアート活動を展開。日本らしい well-being を “well-down” と捉え探究。嗜好の再構築・祈りの再発見を軸に、運営する瞑想室「落散 京都」での実験的経験や各地でのインスタレーションを展開。</p>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </section>
          <section class="aboutRelations">
            <div class="aboutRelations_title">
              <h2 class="title uppercase N-Bold">Relations,</h2>
            </div>
            <div class="aboutRelations_sections">
              <section class="aboutRelationsSection">
                <h3 class="aboutRelationsSection_title uppercase B">/ Partner</h3>
                <div class="aboutRelationsSection_grid">
                  <div class="aboutRelationsSection_item">
                    <picture>
                      <source srcset="<?= vite_src_images('about_relations_partner-img01@2x.webp') ?> 2x, <?= vite_src_images('about_relations_partner-img01@1x.webp') ?> 1x" media="(min-width: 768px)" type="image/webp" width="129" height="129">
                      <source srcset="<?= vite_src_images('sp_about_relations_partner-img01@3x.webp') ?> 3x, <?= vite_src_images('sp_about_relations_partner-img01@2x.webp') ?> 2x" type="image/webp" width="69" height="69">
                      <img src="<?= vite_src_images('sp_about_relations_partner-img01@2x.webp') ?>" alt="罠ブラザーズ" width="69" height="69">
                    </picture>
                  </div>
                  <div class="aboutRelationsSection_item">
                    <picture>
                      <source srcset="<?= vite_src_images('about_relations_partner-img02@2x.webp') ?> 2x, <?= vite_src_images('about_relations_partner-img02@1x.webp') ?> 1x" media="(min-width: 768px)" type="image/webp" width="129" height="129">
                      <source srcset="<?= vite_src_images('sp_about_relations_partner-img02@3x.webp') ?> 3x, <?= vite_src_images('sp_about_relations_partner-img02@2x.webp') ?> 2x" type="image/webp" width="69" height="69">
                      <img src="<?= vite_src_images('sp_about_relations_partner-img02@2x.webp') ?>" alt="SEA VEGETABLE COMPANY" width="69" height="69">
                    </picture>
                  </div>
                  <div class="aboutRelationsSection_item">
                    <picture>
                      <source srcset="<?= vite_src_images('about_relations_partner-img03@2x.webp') ?> 2x, <?= vite_src_images('about_relations_partner-img03@1x.webp') ?> 1x" media="(min-width: 768px)" type="image/webp" width="129" height="129">
                      <source srcset="<?= vite_src_images('sp_about_relations_partner-img03@3x.webp') ?> 3x, <?= vite_src_images('sp_about_relations_partner-img03@2x.webp') ?> 2x" type="image/webp" width="69" height="69">
                      <img src="<?= vite_src_images('sp_about_relations_partner-img03@2x.webp') ?>" alt="Deep Care Lab" width="69" height="69">
                    </picture>
                  </div>
                  <div class="aboutRelationsSection_item">
                    <picture>
                      <source srcset="<?= vite_src_images('about_relations_partner-img04@2x.webp') ?> 2x, <?= vite_src_images('about_relations_partner-img04@1x.webp') ?> 1x" media="(min-width: 768px)" type="image/webp" width="129" height="129">
                      <source srcset="<?= vite_src_images('sp_about_relations_partner-img04@3x.webp') ?> 3x, <?= vite_src_images('sp_about_relations_partner-img04@2x.webp') ?> 2x" type="image/webp" width="69" height="69">
                      <img src="<?= vite_src_images('sp_about_relations_partner-img04@2x.webp') ?>" alt="HONDA" width="69" height="69">
                    </picture>
                  </div>
                  <div class="aboutRelationsSection_item">
                    <picture>
                      <source srcset="<?= vite_src_images('about_relations_partner-img05@2x.webp') ?> 2x, <?= vite_src_images('about_relations_partner-img05@1x.webp') ?> 1x" media="(min-width: 768px)" type="image/webp" width="129" height="129">
                      <source srcset="<?= vite_src_images('sp_about_relations_partner-img05@3x.webp') ?> 3x, <?= vite_src_images('sp_about_relations_partner-img05@2x.webp') ?> 2x" type="image/webp" width="69" height="69">
                      <img src="<?= vite_src_images('sp_about_relations_partner-img05@2x.webp') ?>" alt="MIMIGURI" width="69" height="69">
                    </picture>
                  </div>
                  <div class="aboutRelationsSection_item">
                    <picture>
                      <source srcset="<?= vite_src_images('about_relations_partner-img06@2x.webp') ?> 2x, <?= vite_src_images('about_relations_partner-img06@1x.webp') ?> 1x" media="(min-width: 768px)" type="image/webp" width="129" height="129">
                      <source srcset="<?= vite_src_images('sp_about_relations_partner-img06@3x.webp') ?> 3x, <?= vite_src_images('sp_about_relations_partner-img06@2x.webp') ?> 2x" type="image/webp" width="69" height="69">
                      <img src="<?= vite_src_images('sp_about_relations_partner-img06@2x.webp') ?>" alt="MIDORI.so" width="69" height="69">
                    </picture>
                  </div>
                </div>
              </section>
              <section class="aboutRelationsSection">
                <h3 class="aboutRelationsSection_title uppercase B">/ Award</h3>
                <div class="aboutRelationsSection_grid">
                  <div class="aboutRelationsSection_item">
                    <picture>
                      <source srcset="<?= vite_src_images('about_relations_award-img01@2x.webp') ?> 2x, <?= vite_src_images('about_relations_award-img01@1x.webp') ?> 1x" media="(min-width: 768px)" type="image/webp" width="129" height="129">
                      <source srcset="<?= vite_src_images('sp_about_relations_award-img01@3x.webp') ?> 3x, <?= vite_src_images('sp_about_relations_award-img01@2x.webp') ?> 2x" type="image/webp" width="69" height="69">
                      <img src="<?= vite_src_images('sp_about_relations_award-img01@2x.webp') ?>" alt="GOOD DESIGN" width="69" height="69">
                    </picture>
                  </div>
                  <div class="aboutRelationsSection_item">
                    <picture>
                      <source srcset="<?= vite_src_images('about_relations_award-img02@2x.webp') ?> 2x, <?= vite_src_images('about_relations_award-img02@1x.webp') ?> 1x" media="(min-width: 768px)" type="image/webp" width="129" height="129">
                      <source srcset="<?= vite_src_images('sp_about_relations_award-img02@3x.webp') ?> 3x, <?= vite_src_images('sp_about_relations_award-img02@2x.webp') ?> 2x" type="image/webp" width="69" height="69">
                      <img src="<?= vite_src_images('sp_about_relations_award-img02@2x.webp') ?>" alt="PARIS DESIGN AWARDS 2024" width="69" height="69">
                    </picture>
                  </div>
                </div>
              </section>
            </div>
          </section>
          <section class="aboutProfile">
            <div class="aboutProfile_title">
              <h2 class="title uppercase N-Bold">Profile,</h2>
            </div>
            <div class="aboutProfile_block">
              <p class="aboutProfile_name">
                <span class="aboutProfile_nameJa">合同会社 土とデジタル</span>
                <span class="aboutProfile_nameEn B">Tsuchi to Digital LLC</span>
              </p>
              <dl class="aboutProfile_list">
                <div class="aboutProfile_item">
                  <div class="aboutProfile_head">設立</div>
                  <div class="aboutProfile_body">2024.3.21</div>
                </div>
                <div class="aboutProfile_item">
                  <div class="aboutProfile_head">資本金</div>
                  <div class="aboutProfile_body">100万円</div>
                </div>
                <div class="aboutProfile_item">
                  <div class="aboutProfile_head">所在地</div>
                  <div class="aboutProfile_body">
                    <div class="aboutProfile_addressJa">東京都渋谷区道玄坂１丁目１０番８号渋谷道玄坂東急ビル２Ｆ―Ｃ</div>
                    <div class="aboutProfile_addressEn B">2F-C, Shibuya Dogenzaka Tokyu Building, 1-10-8 Dogenzaka, Shibuya-ku, Tokyo, Japan</div>
                  </div>
                </div>
              </dl>
              <div
                class="aboutProfile_img"
                data-webgl-item="ascii-img-target"
                data-img-2x="<?= vite_src_images('about_img02@2x.webp') ?>"
                data-img-1x="<?= vite_src_images('about_img02@1x.webp') ?>"
                data-img-sp-3x="<?= vite_src_images('sp_about_img02@3x.webp') ?>"
                data-img-sp-2x="<?= vite_src_images('sp_about_img02@2x.webp') ?>"
              >
                <picture>
                  <source srcset="<?= vite_src_images('about_img02@2x.webp') ?> 2x, <?= vite_src_images('about_img02@1x.webp') ?> 1x" media="(min-width: 768px)" type="image/webp" width="175" height="117">
                  <source srcset="<?= vite_src_images('sp_about_img02@3x.webp') ?> 3x, <?= vite_src_images('sp_about_img02@2x.webp') ?> 2x" type="image/webp" width="137" height="97">
                  <img src="<?= vite_src_images('sp_about_img02@2x.webp') ?>" alt="" width="137" height="97">
                </picture>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div class="webgl" data-webgl-container="common">
        <canvas class="webgl_canvas" data-webgl="common"></canvas>
      </div>
<?php get_template_part('./layout/footer'); ?>