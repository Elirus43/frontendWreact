import Image from "next/image";
import styles from "./page.module.css";
import HelloWorld from "./components/HelloWorld";
import Profile from "./components/Profile";
import ProfileGreet from "./components/ProfileGreet";
import Demo from "./components/Demo";
import Greeting from "./components/Greeting";
import UserProfile from "./components/conditional/UserProfile";
import ListDemo from "./components/list/ListDemo";
import Counter from "@/app/components/Counter";
import Parent from "./components/Parent";
import CounterTwo from "./components/CounterTwo";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>

          {/*<HelloWorld/>    // Being reusable components
              <HelloWorld />
              <HelloWorld />*/}

          {/*<Profile/>
          <Profile/>*/}

          {/* <ProfileGreet /> */}
          {/*<Greeting message={'Hello'}/>
          <Greeting message={'Hi'}/>

          <Demo />
          <Profile
              avatar = 'https://wallpapers.com/images/featured/spiderman-p4ashmgeamn2mvkn.jpg'
              name = {'Leo'}
          />*/}

          {/*<UserProfile role={'user'} /> /!* Best Practice*!/*/}
          {/*<ListDemo />*/}
          {/*<Counter />*/}
          {/*<Parent />*/}
          <CounterTwo />
      </main>
    </div>
  );
}
