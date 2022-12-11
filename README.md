# Flashcards

In this project, i’ll build a flashcards program where a user can create topics and additionally create quizzes for each topic, each quiz will have flashcards that the user can define.

The live site can be accessed here: https://codecademy-flashcards.netlify.app

---

## Project Goals

In this project, you will practice using Redux and Redux Toolkit to manage the complex state of a flashcard-style quiz app. Users will be able to create their own topics, quizzes for those topics, and flashcards for those quizzes. Users will also be able to interact with their quizzes by flipping flashcards over.

---

This app uses uuidv4() function from the uuid package to create unique identifiers for topics/quizzes/cards. Below, you can see an example of how this function is used:

```js
import { v4 as uuidv4 } from "uuid";

let uniqueId = uuidv4();

console.log(uniqueId); // Prints '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'
```

---

At a high level, your application will be able to handle the following URL routes, each with their own functionality:

On the '/topics/new' page:

- Users can create topics

On the '/topics' page:

- Users can view all topics
- Users can click on an individual topic and be redirected to the page for that topic

On the /topics/:topicId page:

- Users can view an individual topic and all quizzes for that topic
- Users can click on a quiz associated with a topic and be redirected to that quiz’s page

On the 'quizzes/new' page:

- Users can create quizzes that are associated with topics and contain lists of flashcards
- Users can add and remove card fields in the new quiz form

On the '/quizzes' page:

- Users can view all quizzes
- Users can click on an individual quiz and be redirected to that quiz’s page

On the '/quizzes/:quizId' page:

- Users can view an individual quiz and flip cards over

---

Before you start writing code, take a moment to review our recommended state structure:

- Your app will include three slices: one for topics, one for quizzes, and one for cards.

- Each slice’s state should include an object storing all the topics/quizzes/cards keyed by their id. This will allow you to quickly retrieve an object’s information whenever you need to look it up.

- Each individual quiz will have a topicId value corresponding to an individual topic in state.

- Similarly, each topic which will have a quizIds array corresponding to the associated quizzes in state.

All together, your app state will look like this:

```js
{
  topics: {
    topics: {
      '123': {
        id: '123',
        name: 'example topic',
        icon: 'icon url',
        quizIds: ['456']
      }
    }
  },
  quizzes: {
    quizzes: {
      '456': {
        id: '456',
        topicId: '123',
        name: 'quiz for example topic',
        cardIds: ['789', '101', '102']
      }
    }
  },
  cards: {
    cards: {
      '789': {
        id: '789',
        front: 'front text',
        back: 'back text'
      },
      '101': {
        id: '101',
        front: 'front text',
        back: 'back text'
      },
      '102': {
        id: '102',
        front: 'front text',
        back: 'back text'
      },
    }
  }
}
```

---
