<?php
defined('IN_LR') != true && die();
?>
<div id="cookie-consent-banner" class="card cookie-consent-hidden">
    <div class="cookie-consent-header">
        <span class="cookie-consent-icon">
            <svg><use href="/resources/img/sprite.svg#heart"></use></svg>
        </span>
        <span class="cookie-consent-title"><?= $Translate->get_translate_module_phrase('module_block_cookie', '_CookieTitle') ?></span>
    </div>
    <div class="cookie-consent-body">
        <?= $Translate->get_translate_module_phrase('module_block_cookie', '_CookieBody') ?>
    </div>
    <div class="cookie-consent-buttons">
        <button id="cookie-cancel-btn"><?= $Translate->get_translate_module_phrase('module_block_cookie', '_CookieCancel') ?></button>
        <button id="cookie-accept-btn" class="active"><?= $Translate->get_translate_module_phrase('module_block_cookie', '_CookieAccept') ?></button>
    </div>
</div>