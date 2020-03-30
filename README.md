# Time Budgetting App Prototype

> The time tracking app for people who hate scheduling

The goal of this app is to help me spend my time more intentionally.

It's easy to go through the day doing things that you want to do, but finding the time to do what you need to do _and_ what you want to do can be difficult.

This app aims to solve that problem.

## Overall Timeline

**This is an ideal timeline that will likely change.**

- **Week 1**:
  - Create a POC Web app to test feasability
- **Week 2**:
  - User testing and tweaking or scrapping the idea
- **Week 3**:
  - Build coming soon page with email notification sign-ups
  - Start work on mobile app
- **Week 4-8**:
  - Keep users updated on app progress (email & Twitter)
  - Convert coming soon into app landing page
  - Finish mobile app

## Target Audience

**Me.**

Currently making this app as useful for _myself_ as possible. Since I'm scratching my own itch, I will continually get user feedback that I can use to either scrap the idea or tweak it until it does work.

## Thoughts & Considerations

### Budgeting Cadence

The initial budgetting cadence is weekly, but this should be customizable.

### UX

This app should make it as easy as possible to track time for an activity. This will likely be the make or break feature for the app. A major complaint with YNAB is that it is confusing especially when it comes to recording transactions. Activities are similar, so I need to make sure they aren't as confusing.

I'm going to research a few different types of apps to see what a good timing UX could be:

- Exercise tracker
  - Timed exercises should be easy to start and stop
  - Should help get a few perspectives on how they handle tracking exercises that can be generalized to any activity
- Time trackers
- Stopwatches
  - May have different ways of starting and stopping time

Overall flow:

1. Create a time budget based on how you want to spend your time each week
   1. Create category group or use defaults
   2. Create categories
   3. Set budget for each category
2. Start a timer before you do an activity
   1. Choose activity
   2. Start time
3. Stop it when you're done

## Data Types

Types wrapped in `()` are computed and wouldn't need to be saved

- Category
  - Name
  - Time Budgeted
  - Time Used
  - (Time Left): budgeted - used
- Category Group
  - Category[]
  - (Total time budgeted): sum of budgeted for each category
  - (Total time used): sum of used for each category
- Activity
  - Category
  - Start time
  - End time
  - (Elapsed time): end time - start time

## TODO for POC

- [ ] Budget page
- [ ] Timer page
- [ ] Categories
  - Create new categories
  - Update
    - name
    - time budgeted
    - time used
  - Delete category
- [ ] Category Groups
  - Create new group
  - Update
    - Group name
    - Categories included
  - Delete category group
- [ ] Activities
  - Select category
  - Set start time
  - Set stop time

## Potential Features

- Log of activity
- Manual adding new activies
- Add note to activity

## Set up

After cloning the repo, run:

```bash
npm install
npm run dev
# or
yarn
yarn dev
```
