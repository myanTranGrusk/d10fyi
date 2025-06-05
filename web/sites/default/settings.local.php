<?php

// Disable CSS and JS aggregation for easier debugging.
$config['system.performance']['css']['preprocess'] = FALSE;
$config['system.performance']['js']['preprocess'] = FALSE;

// Enable verbose error messages.
$config['system.logging']['error_level'] = 'verbose';

// Load development services file (this is where Twig debug is enabled).
$settings['container_yamls'][] = DRUPAL_ROOT . '/sites/development.services.yml';

// Allow access to rebuild.php (for rebuilding the cache via URL).
$settings['rebuild_access'] = TRUE;

// Disable render cache and dynamic page cache.
$settings['cache']['bins']['render'] = 'cache.backend.null';
$settings['cache']['bins']['dynamic_page_cache'] = 'cache.backend.null';

// Skip permissions hardening for local dev.
$settings['skip_permissions_hardening'] = TRUE;

// Trusted host patterns (relaxed for local).
$settings['trusted_host_patterns'] = [
  '^localhost$',
  '^127\.0\.0\.1$',
];
