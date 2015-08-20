<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8" />

    <title><?php echo $site->title()->html() ?> &mdash; <?php echo $page->title()->html() ?></title>
    <meta name="description" content="<?php echo $site->description()->html() ?>">
    <!-- !! @todo humans.txt -->
    <!-- <link type="text/plain" rel="author" href="http://domain/humans.txt" />-->
    <meta name="author" content="Andreas Klein">

    <link href="https://twitter.com/ixisio" rel="me">
    <link href="https://github.com/ixisio" rel="me">
    <link href="sms:+491738888987" rel="me">
    <link href="mailto:andy@ixis.io" rel="me">

    <meta name="viewport" content="width=device-width, initial-scale=1">
    <?php echo css('assets/css/main.css') ?>

    <!-- Typekit -->
    <script>
      (function(d) {
        var config = {
          kitId: 'zjy0yrv',
          scriptTimeout: 1000,
          async: true
        },
        h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='//use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
      })(document);
    </script>

    <script>document.documentElement.className += ' js';</script>
</head>
<body>
    <?php snippet('menu') ?>
