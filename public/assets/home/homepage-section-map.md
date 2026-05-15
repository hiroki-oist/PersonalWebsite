# Hiroki Sawada homepage redesign asset map

## Intended direction

The top page should become a researcher's landing page rather than only a short profile page.

Suggested first-view structure:

1. Header
   - HS logo
   - Hiroki Sawada
   - Top / Research & Profile / Skills / Activities / Contact
   - JP | EN

2. Hero
   - Eyebrow: AI × Robotics × Embodied Intelligence
   - Main title: Hiroki Sawada
   - Subtitle: Artificial Intelligence and Robotics
   - Short research statement:
     - JP: 人工知能とロボティクスの研究者です。Free Energy Principle、Human-Robot Interaction、Predictive Coding、Embodied AIを中心に研究を行っています。
     - EN: I am a researcher in AI and robotics, focusing on Free Energy Principle, Human-Robot Interaction, Predictive Coding, and Embodied AI.
   - Buttons:
     - View Research
     - Download CV

3. Hero visual
   - Existing Hiroki portrait from the website
   - Use a rounded portrait panel
   - Add hero-orbit-lines.svg and robot-silhouettes.svg as decorative layers

4. Research highlights
   - IROS 2024
   - ICRA 2026
   - T-SMC
   - France Gov. Scholarship

5. Preview cards
   - Publications
   - Projects
   - Activities

## Asset usage

- logo-hs.svg
  Use in the header.

- hero-orbit-lines.svg
  Absolute-positioned decorative background in the hero section.

- robot-silhouettes.svg
  Low-opacity absolute-positioned background near the bottom of the hero.

- soft-wave-footer.svg
  Use at the bottom of the top page or before footer.

- icon-publications.svg
  Publications card.

- icon-projects.svg
  Projects card.

- icon-activities.svg
  Activities card.

- icon-award.svg
  IROS 2024 or award/highlight chip.

- icon-calendar.svg
  ICRA 2026 highlight chip.

- icon-wave.svg
  T-SMC / signal / HRI highlight chip.

- icon-scholarship.svg
  France Gov. Scholarship highlight chip.

## Implementation note

These SVGs are intentionally simple. They should be placed in something like:

public/assets/home/
  logo-hs.svg
  hero-orbit-lines.svg
  robot-silhouettes.svg
  soft-wave-footer.svg
  icon-*.svg

Then reference them with normal image paths, for example:
`/assets/home/logo-hs.svg`.
