<?php

/**
 * タイトルに英語を含む場合、spanタグで囲む
 */

function wrap_english_in_title($title) {
  if (is_admin()) return $title;

  $title = html_entity_decode($title, ENT_QUOTES, 'UTF-8');

  $pattern = '/(?<!<)(?![^<]*>)([a-zA-Z0-9#][a-zA-Z0-9\s&.,\-()#]*[a-zA-Z0-9]|[a-zA-Z0-9#])(?![^<]*>)(?!>)/u';
  $replacement = '<span lang="en">$1</span>';
  $title = preg_replace($pattern, $replacement, $title);

  return $title;
}

add_filter('the_title', 'wrap_english_in_title');
