# FVG
![FVG photo](https://github.com/dunyanong/GoatVote/assets/97597966/ea6a4ac5-f16a-474c-9a5f-0afd1c189088)

FVG is a web application built using Next.js, React (with TypeScript), Firebase, and Tailwind CSS. It allows users to vote for their favorite football players (GOAT) and provides a platform for the audience to participate in the voting process. Each user can vote for two players: one as the GOAT and the other as an honorable mention.

The project includes additional features such as a chat functionality and a music feature. The chat feature enables users to communicate with each other, while the music feature enhances the overall user experience by providing a curated playlist.

## Installation

To run FVG locally, follow these steps:

1. Clone the repository: `git clone https://github.com/your-username/FVG.git`
2. Navigate to the project directory: `cd FVG`
3. Install dependencies: `npm install`
4. Create a Firebase project and set up the necessary configuration files (refer to the Firebase documentation for more details).
5. Start the development server: `npm run dev`

## Configuration

Before running the application, you need to configure the Firebase credentials. Follow these steps:

1. Create a new Firebase project at [https://console.firebase.google.com](https://console.firebase.google.com).
2. Obtain the Firebase configuration object (containing API keys and other credentials).
3. Create a file named `.env.local` in the root directory of the project.

Add the following environment variables to the `.env.local` file:

1. NEXT_PUBLIC_FIREBASE_API_KEY=your-firebase-api-key
2. NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-firebase-auth-domain
3. NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-firebase-project-id
4. NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-firebase-storage-bucket
5. NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-firebase-messaging-sender-id
6. NEXT_PUBLIC_FIREBASE_APP_ID=your-firebase-app-id


Make sure to replace `your-firebase-api-key`, `your-firebase-auth-domain`, and other placeholders with your actual Firebase project credentials.

## Usage

Once the installation and configuration steps are completed, you can access FVG by visiting [http://localhost:3000](http://localhost:3000) in your web browser.

### Voting

1. Sign up for an account or log in if you already have one.
2. Browse the list of football players displayed on the voting page.
3. Select your GOAT player by clicking the "Vote as GOAT" button below the player's information.
4. Select your honorable mention player by clicking the "Vote as Honorable Mention" button below the player's information.
5. Submit your votes.

### Chat

1. On the sidebar, click on the "Chat" icon to access the chat feature.
2. Join or create a chat room.
3. Start chatting with other users in real-time.

### Music

1. On the sidebar, click on the "Music" icon to access the music feature.
2. Enjoy the curated playlist while using the application.

## Contributing

Contributions to FVG are welcome! If you encounter any bugs, issues, or have suggestions for improvements, please open an issue on the project's GitHub repository.

## License

FVG is released under the [MIT License](https://opensource.org/licenses/MIT). Feel free to modify and distribute the codebase as per the terms of the license.

## Acknowledgements

FVG utilizes the following technologies and libraries:

- Next.js: [https://nextjs.org/](https://nextjs.org/)
- React: [https://reactjs.org/](https://reactjs.org/)
- TypeScript