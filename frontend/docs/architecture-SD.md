# Sprint 3 Architecture Document - Game Collection

## Overview

For Sprint 3, we refactored the Game Collection feature to use a hook-service-repository architecture. This separates presentation logic, business logic, and data access logic into different layers for better maintainability and scalability.


## 1. Repository - gameRepository

### What does this repository do?

The gameRepository is responsible for managing access to game data. It defines basic CRUD operations:

- getAll()
- create()
- update()
- delete()

It uses test data from `gameTestData.ts` to simulate external data access.

### Why is this logic here?

The repository layer handles data access concerns only. It does not contain business rules or UI logic. This separation ensures that when we replace test data with a real back-end API in the next module, only the repository needs modification.

### Where is it used?

The repository is used inside the `gameService.ts` file. Components never directly access the repository.


## 2. Service - gameService

### What does this service do?

The gameService contains business logic for the Game resource. It handles:

- Creating new games with unique IDs
- Validating completion percentage (0-100)
- Coordinating repository calls

### Why is this logic here?

Business rules (like validating completion values) do not belong in components or repositories. The service layer centralizes application rules to ensure consistent behavior across the app.

### Where is it used?

The service is invoked inside the `useGames` custom hook.


## 3. Hook - useGames

### What does this hook do?

The `useGames` hook manages presentation logic for the Game resource. It:

- Stores game state using useState
- Fetches data using the service
- Provides handler functions (addGame, removeGame, updateCompletion)
- Refreshes UI after changes

### Why is this logic here?

The hook manages UI-related state and lifecycle logic. It allows multiple components to reuse the same presentation logic without duplicating code.

### Where is it used?

The hook is used in:

- GameCollectionPage
- GameProgressPage

## 4. Component - GameCollectionPage

### How does it use the architecture?

GameCollectionPage uses the `useGames` hook to:

- Retrieve the list of games
- Add new games
- Remove games

It does not directly modify data or call the repository. All interactions go through the hook -> service -> repository chain.
