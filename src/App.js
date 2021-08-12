import { Suspense } from "react";
import "./App.css";
import resource from "./Api";

const UserProfile = ({ userId }) => {
  const data = resource(userId);
  return (
    <>
      <ul>
        <li>{data.name}</li>
        <li>{data.email}</li>
      </ul>
    </>
  );
};

const UserProfileList = ({ userIds }) => (
  <>
    {userIds.map((userId) => (
      <Suspense key={userId} fallback={<h1>Loading user profile...</h1>}>
        <UserProfile userId={userId} />
      </Suspense>
    ))}
  </>
);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <UserProfileList userIds={[1, 2, 3, 4, 5]} />
      </header>
    </div>
  );
}

export default App;
