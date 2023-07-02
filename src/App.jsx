import "./user.css";
import user from "./user.json";
import { UserCardClass } from "./UserCardClass";
import { UserCard } from "./UseCard";
export default function App() {
  return (
    <div>
      <UserCardClass
        name={user.name}
        phoneNumber={user.phoneNumber}
        age={user.age}
        adress={user.address}
      />
      <br />
      <UserCard
        name={user.name}
        phoneNumber={user.phoneNumber}
        age={user.age}
        adress={user.address}
      />
    </div>
  );
}
