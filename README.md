 
**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes.


Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

### Deploying to Render

1. Push your code to a GitHub repository
2. Go to [Render](https://render.com) and sign up/login
3. Click "New +" and select "Static Site"
4. Connect your GitHub repository
5. Configure the build settings:
   - **Build Command**: `npm run build`
   - **Publish Directory**: `dist`
   - **Node Version**: 18 (or latest LTS)
6. Click "Create Static Site"
7. Your portfolio will be deployed and you'll get a URL

 
