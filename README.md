

# Redux Chat UI

This project is a frontend implementation of a chat application using React and Redux. It provides a user interface for viewing and sending messages in conversations.

## Table of Contents

- [Description](#description)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Description

The Redux Chat UI project is built using React and Redux, allowing users to view and send messages in chat conversations. It provides a left sidebar with a list of conversations, a right panel to display the messages of the selected conversation, and a form to send new messages.

## Features

- View conversations in the left sidebar
- Search conversations by contact name
- Start new conversations or open existing conversations
- View and send messages in the selected conversation
- Handle errors and display appropriate alerts/notifications

## Installation

1. Clone the repository:

   ```shell
   git clone https://github.com/champ18ion/Redux-chat-UI.git
   ```

2. Navigate to the project directory:

   ```shell
   cd Redux-chat-UI
   ```

3. Install the dependencies:

   ```shell
   npm install
   ```

## Usage

1. Start the development server:

   ```shell
   npm start
   ```

2. Open your web browser and navigate to `http://localhost:3000` to access the application.

## Folder Structure

The project's folder structure is as follows:

```
src
├───components
│   ├───LeftPanel
│   │       LeftPanel.jsx
│   │       NewConversation.jsx
│   │       Search.jsx
│   │
│   └───RightPanel
│           ChatBox.jsx
│           ChatForm.jsx
│           LeftChatBubble.jsx
│           RightChatBubble.jsx
│           RightPanel.jsx
│
├───images
│
└───Store
        index.js
        INITIAL_STATE.js
```

## Technologies Used

- React
- Redux
- React Router
- MDB React UI Kit

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
```

Please note that the code snippets in the README are formatted as shell commands. You may need to adjust the formatting based on the requirements of your markdown renderer or editor.
