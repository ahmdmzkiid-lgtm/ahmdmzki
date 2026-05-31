# Requirements Document

## Introduction

This document specifies the requirements for updating the portfolio projects section by replacing four existing projects with two new projects (Iuran Warga and Eduzet) and optimizing the grid layout to accommodate the reduced number of projects. The update involves modifying the Projects.tsx component to display the new project information, images, links, and technology stacks while maintaining the existing visual design patterns and responsive behavior.

## Glossary

- **Projects_Component**: The React component located at `c:\portofolio\src\components\Projects.tsx` that renders the portfolio projects section
- **Project_Card**: An individual project display element within the Projects_Component that shows project information, image, technology stack, and links
- **Grid_Layout**: The CSS grid system used to arrange Project_Cards in responsive columns
- **Iuran_Warga**: A payment tracking and community management system for RT 03
- **Eduzet**: An educational technology platform for UTBK, SNBT, and university entrance exam preparation
- **Tech_Stack**: The list of technologies used in a project (React.js, Node.js, Tailwind CSS, PostgreSQL)
- **Project_Image**: The visual preview image displayed for each project
- **GitHub_Link**: The repository URL linking to the project's source code on GitHub
- **Live_URL**: The deployed application URL where the project can be accessed
- **Tilt_Effect**: The 3D rotation animation applied to Project_Cards on desktop hover interactions
- **Mobile_Expandable_Card**: The tap-to-expand card variant used on touch devices

## Requirements

### Requirement 1: Remove Existing Projects

**User Story:** As a portfolio owner, I want to remove the four old projects from the display, so that I can showcase only my most recent and relevant work.

#### Acceptance Criteria

1. THE Projects_Component SHALL remove the project entry titled "SNBT Tracker (jugijagijug0)" from the projects array
2. THE Projects_Component SHALL remove the project entry titled "Prediksi Skor aman SNBT/UTBK" from the projects array
3. THE Projects_Component SHALL remove the project entry titled "Presensi Kantor Berbasis Foto GPS" from the projects array
4. THE Projects_Component SHALL remove the project entry titled "Wedding Invitation" from the projects array
5. WHEN the Projects_Component renders, THE Projects_Component SHALL display exactly two Project_Cards

### Requirement 2: Add Iuran Warga Project

**User Story:** As a portfolio owner, I want to add the Iuran Warga project with complete information, so that visitors can learn about my payment tracking and community management system.

#### Acceptance Criteria

1. THE Projects_Component SHALL add a project entry with title "Iuran Warga"
2. THE Projects_Component SHALL set the category to "Web Application" for the Iuran Warga project
3. THE Projects_Component SHALL set the description to "Sistem pembayaran dan pelacakan iuran warga RT 03 dengan fitur manajemen komunitas untuk meningkatkan transparansi dan efisiensi pengelolaan keuangan lingkungan" for the Iuran Warga project
4. THE Projects_Component SHALL set the image path to "/image/iuranwarga.png" for the Iuran Warga project
5. THE Projects_Component SHALL set the tech array to ["React", "Node.js", "Tailwind", "PostgreSQL"] for the Iuran Warga project
6. THE Projects_Component SHALL set the github URL to "https://github.com/ahmdmzkiid-lgtm/iuranmakamrt03" for the Iuran Warga project
7. THE Projects_Component SHALL set the live URL to "https://iuranrto3-limo.vercel.app" for the Iuran Warga project
8. THE Projects_Component SHALL set isCompleted to true for the Iuran Warga project

### Requirement 3: Add Eduzet Project

**User Story:** As a portfolio owner, I want to add the Eduzet project with complete information, so that visitors can learn about my comprehensive educational technology platform.

#### Acceptance Criteria

1. THE Projects_Component SHALL add a project entry with title "Eduzet"
2. THE Projects_Component SHALL set the category to "Web Application" for the Eduzet project
3. THE Projects_Component SHALL set the description to "Platform edutech lengkap untuk persiapan UTBK, SNBT, dan ujian masuk perguruan tinggi dengan fitur pembelajaran interaktif, bank soal, try-out, dan analisis hasil belajar" for the Eduzet project
4. THE Projects_Component SHALL set the image path to "/image/eduzet.png" for the Eduzet project
5. THE Projects_Component SHALL set the tech array to ["React", "Node.js", "Tailwind", "PostgreSQL"] for the Eduzet project
6. THE Projects_Component SHALL set the github URL to "https://github.com/ahmdmzkiid-lgtm/eduzet" for the Eduzet project
7. THE Projects_Component SHALL set the live URL to "https://eduzet.my.id" for the Eduzet project
8. THE Projects_Component SHALL set isCompleted to true for the Eduzet project

### Requirement 4: Optimize Grid Layout for Two Projects

**User Story:** As a portfolio owner, I want the grid layout optimized for two projects, so that the projects are displayed prominently and aesthetically on all screen sizes.

#### Acceptance Criteria

1. WHEN the viewport width is less than 768px (mobile), THE Grid_Layout SHALL display Project_Cards in a single column
2. WHEN the viewport width is 768px or greater (tablet and desktop), THE Grid_Layout SHALL display Project_Cards in two columns
3. THE Grid_Layout SHALL maintain equal spacing between Project_Cards
4. THE Grid_Layout SHALL center the Project_Cards within the container
5. WHEN only two Project_Cards are rendered, THE Grid_Layout SHALL NOT display empty grid cells

### Requirement 5: Preserve Existing Functionality

**User Story:** As a portfolio owner, I want all existing interactive features to continue working, so that the user experience remains consistent and polished.

#### Acceptance Criteria

1. THE Projects_Component SHALL maintain the Tilt_Effect on desktop devices for Project_Cards
2. THE Projects_Component SHALL maintain the Mobile_Expandable_Card behavior on touch devices
3. THE Projects_Component SHALL maintain the loading skeleton animation during initial render
4. THE Projects_Component SHALL maintain the hover overlay with GitHub_Link and Live_URL buttons on desktop
5. THE Projects_Component SHALL maintain the animation timing and easing functions for all transitions
6. WHEN a user clicks a GitHub_Link, THE Projects_Component SHALL open the link in a new browser tab
7. WHEN a user clicks a Live_URL, THE Projects_Component SHALL open the link in a new browser tab
8. THE Projects_Component SHALL maintain accessibility attributes including aria-labels and focus states

### Requirement 6: Display Project Images

**User Story:** As a portfolio visitor, I want to see preview images for both new projects, so that I can quickly understand what each project looks like.

#### Acceptance Criteria

1. WHEN the Iuran Warga Project_Card renders, THE Projects_Component SHALL display the image located at "/image/iuranwarga.png"
2. WHEN the Eduzet Project_Card renders, THE Projects_Component SHALL display the image located at "/image/eduzet.png"
3. THE Projects_Component SHALL apply lazy loading to Project_Image elements
4. THE Projects_Component SHALL maintain the aspect ratio of 16:10 for all Project_Image elements
5. WHEN a Project_Image fails to load, THE Projects_Component SHALL display the fallback background color

### Requirement 7: Maintain Responsive Behavior

**User Story:** As a portfolio visitor on any device, I want the projects section to display correctly, so that I can view the portfolio on mobile, tablet, or desktop.

#### Acceptance Criteria

1. WHEN the viewport width is less than 768px, THE Projects_Component SHALL render Mobile_Expandable_Card components
2. WHEN the viewport width is 768px or greater, THE Projects_Component SHALL render TiltCard components
3. THE Projects_Component SHALL detect touch capability using the useIsTouchDevice hook
4. WHEN a touch device is detected, THE Projects_Component SHALL disable the Tilt_Effect
5. THE Projects_Component SHALL maintain readable text sizes across all viewport widths
