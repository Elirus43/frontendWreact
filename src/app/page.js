'use client';
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
import ImmutableDemo from "./components/ImmutableDemo";
import TodoItems from "./components/TodoItems";
import ItemsEntry from "./components/ItemsEntry";
import TabDemo from "./components/tab/TabDemo";
import TodoList from "./components/TodoList";
import DifferentRoot from "./components/reconciliation/DifferentRoot";
import DifferentPosition from "./components/reconciliation/DifferentPosition";
import DifferentProp from "@/app/components/reconciliation/DifferentProp";
import SamePosition from "./components/reconciliation/SamePosition";

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
          {/*<CounterTwo />*/}
          {/*<ImmutableDemo />*/}
          {/*<TodoItems />*/}
          {/*<ItemsEntry />*/}
          {/*<TabDemo />*/}
          {/*<TodoList />*/}
          {/*<DifferentRoot/>*/}
          {/*<DifferentPosition />*/}
          {/*<DifferentProp />*/}
          <SamePosition />
      </main>
    </div>
  );
}
