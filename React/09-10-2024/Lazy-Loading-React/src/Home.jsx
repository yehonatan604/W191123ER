// import { sayHello } from './sayHello.ts';
export default function Home() {
  return (
    <>
      <h1>Home Page</h1>
      {/* <button onClick={sayHello}>Click</button> */}
      <button
        onClick={() =>
          import('./sayHello.ts').then((module) => {
            module.sayHello();
          })
        }
      >
        Click
      </button>
    </>
  );
}
