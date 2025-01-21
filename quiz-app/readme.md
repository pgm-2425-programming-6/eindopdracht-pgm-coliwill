# Quiz App

## Overview

The Quiz App is a mobile application built with React Native and Expo. It allows users to take quizzes, view their achievements, and see their scores on a leaderboard. The app uses Supabase for backend services, including authentication, database, and storage.

## Features

- User Authentication (Login, Register)
- Profile Management
- Quizzes with Multiple Choice and Input Questions
- Leaderboard
- Achievements
- Friends List
- Categories

## Installation

1. **Clone the repository:**

```sh
git https://github.com/pgm-2425-programming-6/eindopdracht-pgm-coliwill
cd quiz-app


```

Authentication
Login: Users can log in using their email and password.
Register: New users can create an account.
Profile
View Profile: Users can view their profile, including their avatar and username.
Update Profile: Users can update their username and avatar.
Quizzes
Take Quiz: Users can take quizzes with multiple choice and input questions.
Submit Answers: Users can submit their answers and see their scores.
Leaderboard
View Leaderboard: Users can view the leaderboard to see the top scores.
Achievements
View Achievements: Users can view their achievements.
Categories
View Categories: Users can view quiz categories.
Custom Hooks
useProfileFetcher: Fetches the profile of the logged-in user.
useCombinedQuestions: Fetches combined questions (multiple choice and input) for a quiz.
API
The app uses Supabase for backend services. The following modules are used to interact with the Supabase database:

auth: Handles user authentication.
profile: Manages user profiles.
quizzes: Manages quizzes and questions.
achievements: Manages achievements.
categories: Manages quiz categories.
choices: Manages multiple choice options.
quiz_attempt: Manages quiz attempts.
storage: Manages file storage (avatars, quiz images, etc.).