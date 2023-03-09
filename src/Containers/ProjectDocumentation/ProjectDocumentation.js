import React from "react";
import Layout from "../../Components/Layout/Layout";
import classes from "./ProjectDocumentation.module.css";

const ProjectDocumentation = () => {
  return (
    <Layout>
      <section className={classes.container}>
        <div className={classes.header}>Project Documentation</div>
        <div className={classes.paragraph}>
          <div className={classes.subHeading}>Project Summary:</div>
          <div className={classes.content}>
            <p>
              This is Ezimorah Tobenna's project solution for a role in the
              Alvative Talent Application. As stated in the role assessment
              email, the project makes use of Paystack's API to run a seamless
              transfer to a dummy account.
            </p>
          </div>
        </div>

        <div className={classes.paragraph}>
          <div className={classes.subHeading}>
            Project Build and Initialization:
          </div>
          <div className={classes.content}>
            <p>
              This solution was built with ReactJs and initialized with
              create-react-app. The project makes use of components completely
              built from scratch by me.
            </p>
            <p>
              These components are small units of the application that sum up
              the entirety of the application, from components as small as text
              inputs to components as large as the transfer form, which is made
              up of smaller blocks of components.
            </p>
          </div>
        </div>

        <div className={classes.paragraph}>
          <div className={classes.subHeading}>
            Project Folder Structure and Hierarchy:
          </div>
          <div className={classes.content}>
            <p>
              The focal points of the implementation of this project can be
              found in the "src" folder, which houses the "Components",
              "Containers", "Context", "App.js," and more.
            </p>
            <p>
              The "Components" folder houses components that are re-usable
              throughout the application, such as buttons, cards, the custom
              dropdown, input, and layout components.
            </p>
            <p>
              The "Containers" folder, as its name implies, houses the
              containers for different pages in the web application and their
              necessary frontend implementation.
            </p>
            <p>
              The "Context" folder houses React Context API, which helps
              facilitate the communication of the frontend to an API and
              backend, as well as global state management throughout the
              application and HTTP fetch requests.
            </p>

            <p>
              "App.js" is the entry point of the React application and is where
              the routing of the app to different pages exists since React is a
              Single Page Application (SPA) Javascript Library.
            </p>
            <p>
              Other files like "index.js" and "index.css" are crucial to the
              app's functionality but not necessary if access to code is needed.
            </p>
          </div>
        </div>

        <div className={classes.paragraph}>
          <div className={classes.subHeading}>
            Paystack's API Endpoints Integration:
          </div>
          <div className={classes.content}>
            <p>
              The Paystack API was used to facilitate events such as fetching
              available banks, confirming user details from their bank after
              they have provided their account details, creating or generating
              recipients, and initiating the transfer.
            </p>
            <p>
              The "Fetch available banks" API was used to fetch all banks
              available in the user's region from Paystack, and the function
              that triggers this API call was initialized on load of the
              application.
            </p>
            <p>
              After the user inputs their account number and has chosen a bank,
              they are prompted to resolve the bank details to confirm the owner
              of the account details they have just input. The click event on
              the "Resolve account details" triggers the function that calls the
              Paystack "resolve account details" API.
            </p>
            <p>
              Upon resolution, the user's details are now visible and can be
              confirmed. The user is now permitted to input an amount in Naira
              and a description. It is worth noting that when the user has
              resolved the account details, we are automatically triggering the
              Paystack API that generates a recipient, where that recipient code
              is what is later used to actualize the transfer, aside from the
              account holder's name and account number.
            </p>
            <p>
              Upon completion of all entries and given all parameters are
              present and available, we can now initialize a transfer with the
              credentials available. Please note that this will not complete
              because Paystack made me understand that I have to be a registered
              business to be able to complete a transfer on their platform.
              Therefore, there is an error after the "Make Transfer" button is
              clicked. Nonetheless, it is still very easy to integrate when the
              conditions are met.
            </p>
          </div>
        </div>

        <div className={classes.paragraph}>
          <div className={classes.subHeading}>Paystack APIs Used:</div>
          <div className={classes.content}>
            <ul>
              <li>List Banks API.</li>
              <li>Verify Account Number API.</li>
              <li>Create Transfer Recepient API (with Bank account).</li>
              <li>Initiate transfer API.</li>
            </ul>
          </div>
        </div>

        <div className={classes.paragraph}>
          <div className={classes.subHeading}>Project Dependencies:</div>
          <div className={classes.content}>
            <ul>
              <li>React router dom (for routing)</li>
              <li>
                Fontawesome icons for an icon like the responsive hamburger menu
              </li>
              <li>Material UI for circular progress for loading states</li>
              <li>
                UUID for generating a unique ID for each transfer and
                transaction.
              </li>
            </ul>
          </div>
        </div>

        <div className={classes.paragraph}>
          <div className={classes.subHeading}>Styling:</div>
          <div className={classes.content}>
            <p>
              Styling was done with raw CSS through the use of React module CSS
              where each component has its own specifyc CSS file.
            </p>
          </div>
        </div>

        <div className={classes.paragraph}>
          <div className={classes.subHeading}>
            Side Functionalities for Great User Experience:
          </div>
          <div className={classes.content}>
            <ul>
              <li>Retry button for bank detail verification</li>
              <li> Bank first-letter filter for dropdown</li>
              <li>
                Dissappearing call-to-actions to prevent dummy or redundant API
                calls.
              </li>
            </ul>
          </div>
        </div>

        <div className={classes.paragraph}>
          <div className={classes.subHeading}>Conclusion</div>
          <p>
            Better familiarity with the app exposes a user to more features.
          </p>
          <p>
            I hope you had a great time on this demo. I look forward to an
            interview and working with your team!
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default ProjectDocumentation;
