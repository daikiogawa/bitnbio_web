<?php

/**
 *  Contact Form 7 に日付付き連番を追加（フォームIDごとに接頭語を変える例）
 */

add_filter('wpcf7_posted_data', function ($posted_data) {
  $form_id = isset($_POST['_wpcf7']) ? intval($_POST['_wpcf7']) : 0;

  // フォームID別の接頭語設定
  switch ($form_id) {
    case 18:
      $prefix = 'EN';
      break;
    case 7:
      $prefix = 'JA';
      break;
    default:
      $prefix = '';
  }

  $option_key = 'cf7_serial_' . $form_id;
  $count = intval(get_option($option_key, 0)) + 1;
  update_option($option_key, $count);

  // 接頭語がある場合とない場合で出力フォーマットを変える。
  if ($prefix !== '') {
    $serial_number = sprintf('%s-%03d', $prefix, $count);
  } else {
    $serial_number = sprintf('%03d', $count);
  }

  $posted_data['serial_number'] = $serial_number;

  return $posted_data;
});