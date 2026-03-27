# Sprint 3 Architecture Document - Game Progress (Person 2)

## Overview

For Sprint 3, the Game Progress feature was refactored to use the hook-service-repository architecture. This ensures consistent data management and removes shared state from the router.


## 1. Service - updateCompletion Logic

### What does this service logic do?

The updateCompletion function inside gameService:

- Validates that completion is between 0 and 100
- Finds the correct game by ID
- Updates the game through the repository

### Why is this logic here?

Validation and data rules belong in the service layer. This prevents duplication of business rules across components and ensures consistent updates.

### Where is it used?

The updateCompletion method is used inside the `useGames` hook.


## 2. Hook - useGames

### What does this hook do?

The `useGames` hook:

- Retrieves games from the service
- Manages local UI state
- Provides updateCompletion and removeGame methods
- Refreshes state after updates

### Why is this logic here?

The hook centralizes presentation logic. It ensures that both GameCollectionPage and GameProgressPage share the same state and behavior without prop drilling.

### Where is it used?

The hook is used in:

- GameCollectionPage
- GameProgressPage


## 3. Component - GameProgressPage

### How does it use the architecture?

GameProgressPage:

- Calls useGames()
- Displays completion percentage
- Updates completion using updateCompletion()
- Removes games using removeGame()

It does not contain business rules or data access logic.


## Shared State Refactor (T4)

Previously, shared state was stored in App.tsx and passed as props. This caused prop drilling and tight coupling.

In Sprint 3:

- Shared state is now handled by the hook.
- Components independently retrieve data via the architecture.
- App.tsx only manages routing.
