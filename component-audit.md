Use selected component frames only.

Audit and apply fixes to make the component production-ready and consistent with the current design system.

Tasks:
- audit component structure
- audit variants and states
- audit naming consistency
- audit token usage
- audit typography, spacing, radius, colors, elevation
- audit Principles / Usage / documentation consistency
- detect deprecated or duplicated patterns
- detect missing or inconsistent states

Apply safe fixes directly in Figma.

Allowed fixes:
- documentation updates
- naming cleanup
- token alignment
- typography consistency
- spacing/radius consistency
- component descriptions
- variant/property naming normalization
- text and metadata fixes

Allowed minimal layout fixes:
- text container width adjustments
- overflow prevention
- alignment corrections without restructuring

Do not:
- redesign components
- change component architecture
- remove variants
- detach instances
- modify unrelated frames
- restructure auto-layout
- create duplicate components

Rules:
- tokens are source of truth
- preserve visual consistency
- preserve existing component behavior
- reuse existing DS assets/components whenever possible

After applying:
- verify visually
- report applied fixes
- report skipped/risky issues separately
- provide screenshot verification

Keep workflow:
audit → safe apply → verify
