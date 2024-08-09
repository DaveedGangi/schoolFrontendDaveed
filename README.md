### backend 

git hub repo link : https://github.com/DaveedGangi/SchoolBackendDaveed.git

### login 

Here are the main bullet points for the `index.js`:

### Login and Registration Functionality

- **Component State Management**:
  - The `state` object manages various properties related to user registration and login, such as:
    - `register`: Boolean flag to toggle between login and registration forms.
    - `username`, `password`: Stores input values for user login.
    - `newUserName`, `newUserPassword`, `confirmPassword`: Stores input values for user registration.
    - `role`: Stores the selected user role (Teacher or Student).
    - `errorMessage`, `errorMessageRegister`: Stores error messages for login and registration.

- **Form Handling**:
  - `registerUser` and `loginUser`: Toggle between the registration and login forms.
  - `userName`, `userPassword`, `registerUserName`, `registerPassword`, `registerConfirmPassword`: Handle input changes for login and registration fields.

- **Login Submission (`submitLogin`)**:
  - Validates user input (username and password) before sending a POST request to the login endpoint.
  - Stores JWT token in cookies and user details in local storage upon successful login.
  - Redirects to the homepage after successful login.

- **Registration Submission (`submitNewUserDetails`)**:
  - Validates registration input fields, including checking for empty fields and matching passwords.
  - Sends a POST request to the registration endpoint and handles successful or failed registration.

- **Role Selection**:
  - `changeTheRoles`: Handles the change in the user role selection between "Teacher" and "Student."

- **Conditional Rendering**:
  - The component conditionally renders the login or registration form based on the `register` state.
  - Redirects to the login page if the JWT token is not found in cookies.

### External Libraries

- **Cookies Management**:
  - The component uses the `js-cookie` library to manage the JWT token in cookies.

### Error Handling and Validation

- Displays error messages for both login and registration forms based on the validation of user inputs.

These points summarize the key functionalities and logic implemented in the `index.js` file for handling user authentication and form management.

### HOME PAGE

Here are the main bullet points  for the `index.js` file:

### Home Component Overview

- **State Management**:
  - `show`: Controls the visibility of the Offcanvas menu.
  - `home`: Toggles the main home view.
  - `addTeacher`, `addStudent`: Toggles the views for adding teachers or students.
  - Various state variables handle form inputs for adding teacher and student details.

- **Navigation and Offcanvas Menu**:
  - Uses `GiHamburgerMenu` icon to toggle the Offcanvas sidebar.
  - Offcanvas contains options to add a teacher or a student.
  
- **Form Handling**:
  - **Add Teacher**:
    - Form inputs are managed using state variables (`teacherName`, `teacherAge`, etc.).
    - Form submission triggers an API call to add a teacher to the database.
    - The form is only accessible to users with the "Teacher" role.
  - **Add Student**:
    - Similar form handling as adding a teacher with respective state variables (`studentName`, `studentAge`, etc.).
    - Form submission triggers an API call to add a student to the database.
    - Accessible only to users with the "Teacher" role.

- **API Integration**:
  - **Add Teacher**:
    - Sends a `POST` request to `https://schoolbackenddaveed.onrender.com/teachers` with teacher details.
  - **Add Student**:
    - Sends a `POST` request to `https://schoolbackenddaveed.onrender.com/students` with student details.

- **Authorization**:
  - Checks for a valid JWT token in cookies. If not found, redirects to the login page.
  - Ensures that only users with the "Teacher" role can access forms for adding teachers and students.

- **UI Components**:
  - Uses Bootstrap components (`Button`, `Offcanvas`) for UI elements.
  - Includes search input and profile button in the navigation bar.
  - Provides navigation to "Teachers" and "Students" pages through buttons on the home screen.

- **Error Handling**:
  - Displays appropriate messages if the user is not authorized to add teachers or students.

This outline provides a clear summary of what the `Home` component does and how it interacts with other parts of the application.

### STUDENTS PAGE

Here are the main points `Students` component (`index.js`):

### Students Component Overview

- **State Management**:
  - `students`: Array to store the list of students fetched from the backend.
  - `editStudent`: Boolean to toggle the edit form visibility.
  - `editStudentId`, `editStudentName`, `editStudentAge`, `editStudentGender`, `editStudentStandard`, `editStudentMarks`: State variables to manage the form inputs for editing student details.

- **Lifecycle Method**:
  - `componentDidMount`: Fetches the list of students from the backend when the component is mounted.

- **API Integration**:
  - **Get Students**:
    - `getStudents`: Sends a `GET` request to `https://schoolbackenddaveed.onrender.com/students` to fetch all students and updates the `students` state.
  - **Delete Student**:
    - `deleteStudent`: Sends a `DELETE` request to `https://schoolbackenddaveed.onrender.com/students/{id}` to delete a student and refreshes the student list.
  - **Edit Student**:
    - `updateStudent`: Sends a `PUT` request to `https://schoolbackenddaveed.onrender.com/students/{editStudentId}` to update student details and refreshes the student list.

- **Form Handling**:
  - **Edit Student**:
    - State variables (`editStudentName`, `editStudentAge`, `editStudentGender`, etc.) are bound to input fields for updating student details.
    - The form is only accessible when the `editStudent` state is `true`.
    - Handles form input changes and updates state accordingly.
    - Submits the updated student data to the backend.

- **Authorization**:
  - Only users with the "Teacher" role can edit or delete students.
  - The role is checked against the value stored in `localStorage` under the key `user`.

- **UI Components**:
  - Uses Bootstrap components (`Button`) for UI elements.
  - Displays the total number of students on the page.
  - Provides buttons to delete or edit student details, available only to teachers.

- **Error Handling**:
  - Logs errors to the console if fetching, updating, or deleting students fails.

This outline provides a comprehensive summary of what the `Students` component does, how it interacts with other parts of the application, and its functionality.

### TEACHERS PAGE

Here’s a summary of the `Teachers` component (`index.js`) :

### Teachers Component Overview

- **State Management**:
  - `teachers`: Array to store the list of teachers fetched from the backend.
  - `editShow`: Boolean to toggle the visibility of the edit form.
  - `editName`, `editAge`, `editGender`, `editSubject`, `editExperience`, `editId`: State variables used to manage the form inputs and the selected teacher's details for editing.

- **Lifecycle Method**:
  - `componentDidMount`: Calls the `fetchTeachers` method to fetch the list of teachers when the component is mounted.

- **API Integration**:
  - **Fetch Teachers**:
    - `fetchTeachers`: Sends a `GET` request to `https://schoolbackenddaveed.onrender.com/teachers` to retrieve all teachers and updates the `teachers` state.
  - **Delete Teacher**:
    - `deleteTeacher`: Sends a `DELETE` request to `https://schoolbackenddaveed.onrender.com/teachers/{id}` to remove a teacher by their ID and refreshes the teacher list.
  - **Update Teacher**:
    - `updateTeacher`: Sends a `PUT` request to `https://schoolbackenddaveed.onrender.com/teachers/{editId}` to update the details of a teacher and refreshes the teacher list.

- **Form Handling**:
  - **Edit Teacher**:
    - State variables (`editName`, `editAge`, `editGender`, `editSubject`, `editExperience`) are used to control the form fields for editing a teacher's details.
    - When `editShow` is `true`, the form is displayed allowing the user to modify the teacher's details.
    - The `editTeacher` method populates the form with the selected teacher's details.
    - The `updateTeacher` method sends the updated details to the backend.

- **Event Handlers**:
  - **changeEditName**, **changeEditAge**, **changeEditGender**, **changeEditSubject**, **changeEditExperience**: These methods handle the changes in the respective input fields in the edit form.
  - **cancelEdit**: Resets the form and hides the edit section by setting `editShow` to `false`.

- **Authorization**:
  - Only users with the "Teacher" role can delete or edit teachers.
  - The role is retrieved from the `user` object stored in `localStorage`.

- **UI Components**:
  - Uses Bootstrap components (`Button`) for buttons.
  - Displays the total number of teachers.
  - Provides buttons to delete or edit a teacher’s details, available only to users with the "Teacher" role.

- **Error Handling**:
  - Logs errors to the console if fetching, updating, or deleting teachers fails.

This outline provides a clear and concise overview of what the `Teachers` component does, how it functions, and how it interacts with the backend.

### USERS PAGE

Here’s a summary of the `Profile` component (`index.js`) :

### Profile Component Overview

- **Purpose**:
  - The `Profile` component displays the user's profile information and provides options to navigate to the homepage or log out.

- **State Management**:
  - This component does not maintain any state itself. It relies on `Cookies` and `localStorage` for managing user authentication.

- **Authentication**:
  - **Token Check**:
    - The `jwtToken` is retrieved from cookies using `Cookies.get("jwtToken")`.
    - If the token is not found (`undefined`), the user is redirected to the login page using `<Redirect to="/login" />`.

- **Logout Functionality**:
  - `logoutUser`: This method is triggered when the "Logout" button is clicked.
    - It removes the `jwtToken` from cookies using `Cookies.remove("jwtToken")`.
    - It clears the `user` data from `localStorage`.
    - It redirects the user to the login page using `this.props.history.push("/login")`.

- **UI Components**:
  - The component displays a greeting message to the user with their username, retrieved from `localStorage`.
  - Provides buttons to:
    - **Go to Homepage**: Redirects the user to the home page.
    - **Logout**: Logs the user out and redirects them to the login page.

- **Redirect Handling**:
  - The component ensures that if a user is not authenticated (no `jwtToken`), they are redirected to the login page to prevent unauthorized access.

This summary captures the functionality and purpose of the `Profile` component, explaining how it manages user authentication, handles logout, and renders the user interface.

























































































# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
