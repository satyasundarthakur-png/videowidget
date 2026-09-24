# Videowidget cinematic workspace update

## Overview
Refresh the existing browser editor without changing its FFmpeg processing behavior. The workspace will become denser, easier to navigate, keyboard-accessible, and consistently cinematic across desktop and mobile.

## What will change

### 1. Tighter workspace layout
- Replace the loose two-column flow with a compact studio workspace: sticky top bar, quick-operation rail, aligned input/timeline and operation/output columns.
- Reduce oversized gaps and panel padding while preserving clear grouping and touch-friendly controls.
- Keep the layout responsive: the operation rail becomes a horizontal, scrollable toolbar on smaller screens.

### 2. Unified cinematic styling
- Apply one consistent midnight, projector-gold, cool-blue visual language to panels, buttons, toolbars, form controls, status messages, and dialog-like states.
- Standardize corner radii, borders, focus rings, typography, pressed/disabled states, and motion.
- Add restrained scene-tile lift, light sweep, icon movement, and active-state transitions, disabled under reduced-motion preferences.

### 3. Interactive waveform trimming
- Add visible start/end handles directly on the waveform.
- Support pointer dragging and keyboard adjustment with Arrow keys; Shift+Arrow makes larger changes.
- Show a hover/focus tooltip with the exact timeline time and keep the existing sliders synchronized as accessible fallback controls.

### 4. Clearer processing progress
- Show percentage, elapsed time, and estimated time remaining in a stable progress header.
- Add accessible progress semantics and live status announcements.
- Reuse one progress update path for single, stacked, caption, and batch processing so the display remains consistent.

### 5. Navigation and shortcuts
- Add a compact top navigation/toolbar for Import, Trim, Operations, Output, and Log, using in-page focus/scroll behavior.
- Add discoverable shortcuts for opening a file, focusing trim, starting processing, and jumping between workspace sections.
- Avoid triggering shortcuts while typing in form fields.

### 6. Accessibility pass
- Add landmarks, labels, tab semantics, keyboard-operable upload and timeline controls, visible focus states, and status announcements.
- Improve muted-text and disabled-state contrast while preserving the cinematic palette.
- Ensure icon-only controls have accessible names and tooltips.

### 7. Branded assets
- Replace the existing generic play-button favicon/app icons with a distinct Videowidget film-frame mark.
- Replace the social share artwork with a matching 1200×630 branded cinematic image and keep page metadata pointed at it.
- Update the install manifest branding to match the new assets.

## Validation
- Check the editor at desktop and mobile widths for alignment, overflow, visible focus, and non-overlapping text.
- Exercise timeline dragging and keyboard controls, navigation shortcuts, progress updates, and existing processing controls.
- Confirm the favicon, install icons, social image, metadata, and preview build all load without errors.
