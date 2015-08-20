<nav class="navigation">
    <a class="navigation__button">
        <span class="navigation__button__line"></span>
        <span class="navigation__button__line"></span>
        <span class="navigation__button__line"></span>
    </a>

    <ul class="navigation__list">
        <?php foreach($pages->visible() as $p): ?>
            <li class="navigation__item">
                <a <?php e($p->isOpen(), ' class="active"') ?> href="<?php echo $p->url() ?>" class="navigation__link"><?php echo $p->title()->html() ?></a>
                <?php if($p->hasVisibleChildren()): ?>
                <ul class="submenu" hill-layout="hide">
                  <?php foreach($p->children()->visible() as $p): ?>
                  <li>
                    <a href="<?php echo $p->url() ?>"><?php echo $p->title()->html() ?></a>
                  </li>
                  <?php endforeach ?>
                </ul>
                <?php endif ?>
            </li>
        <?php endforeach ?>
    </ul>
</nav>
