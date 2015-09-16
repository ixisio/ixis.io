<?php if(!r::ajax()): ?>
<?php snippet('header') ?>
<?php endif ?>

<main>
    <section>
        <div class="hero" hill-layout="clearfix">
            <div class="hero__col">
                <div class="layout__section__background">
                    <img srcset="assets/images/home/ixis.io__background-video__gestaltanahme__01.png 1x, assets/images/home/ixis.io__background-video__gestaltanahme__01.png 2x" alt="…">
                </div>
                <div class="layout__section hero__text">
                    <h1 class="typography--type-2">
                        <i>ixis.io</i> - Andreas Klein, Cologne/Germany.<span class="color--grey"> I create accessible User Interfaces, help Teams to improve their Workflows and build large scale Frontend Architectures.</span>
                    </h1>
                </div>
            </div>
        </div>
    </section>
    <section class="layout__section">
        <?php echo $page->text()->kirbytext() ?>
    </section>
</main>

<?php if(!r::ajax()): ?>
<?php snippet('footer') ?>
<?php endif ?>
