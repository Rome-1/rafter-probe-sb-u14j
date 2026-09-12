# rafter-probe-sb-u14j

Throwaway public fixture repo used to black-box test whether the Rafter
hosted scanner honors `.rafter.yml` (camelCase keys, R-XXXXX rule selectors,
suppressed.json artifact) per securable-backend PR #53 (sb-u14j / e158bb7).

Two deliberately weak, non-secret code patterns, each meant to trip one
opengrep rule (`rafter.crypto.insecure-random-for-security`, WARNING
severity) so they are suppressible under the "never hide must-fix" invariant.

Safe to delete; not part of any production system.
