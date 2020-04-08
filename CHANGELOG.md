# Changelog

All notable changes to this project will be documented in this file.
The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added 

- New feature switch to swap collapsible review text accordions for staticly displayed reviews with show more/show less links 

## [1.2.3] - 2020-01-31

### Added

- CSS Handles, including new `writeReviewContainer` handle

## [1.2.2] - 2020-01-30

### Fixed

- Changed Queries to Async

## [1.2.1] - 2019-12-30

### Changed

- Improved date field sorting

## [1.2.0] - 2019-12-30

### Added

- Implemented full internationalization for admin and frontend messages

## [1.1.2] - 2019-12-17

### Changed

- Documentation updated

## [1.1.1] - 2019-12-16

### Fixed

- App will no longer attempt to display reviews containing invalid JSON

## [1.0.8] - 2019-12-04

### Fixed

- Calls to VBASE now use account and workspace from request headers rathen than env variables
- Infra service calls (vbase, apps) now use new `infra.io.vtex.com` domain

## [1.0.7] - 2019-12-04

### Fixed

- Republishing app to fix empty `plugins.json`

## [1.0.6] - 2019-11-27

### Fixed

- Republishing app to fix empty `plugins.json` (failed)

## [1.0.5] - 2019-11-06

### Added

- Admin table now shows product name (and link to product form page) in addition to product ID

### Fixed

- Added "pointer" className to `StarPicker`

## [1.0.4] - 2019-11-05

### Added

- Docs folder and README.md

### Removed

- Removed `review-form` interface and plugin (review form is embedded in `Reviews` component, not displayed on separate page)

## [1.0.3] - 2019-11-04

### Fixed

- `averageRatingByProductId` and `totalReviewsByProductId` queries now take `requireApproval` setting into account

### Added

- New review form now includes a custom `StarPicker` component instead of `NumericStepper`
- "Please log in to write review" message now includes link to login page

## [1.0.2] - 2019-10-29

### Fixed

- If 'approval required' setting is enabled, only count approved reviews in average & totals

## [1.0.1] - 2019-10-28

### Fixed

- Disabled truncation of review text in admin.

## [1.0.0] - 2019-10-25

### Added

- Initial release.