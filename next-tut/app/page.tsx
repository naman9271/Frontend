import Hello from "./components/hello"

export default function Home() {
  console.log('what am i ?.. server or client')
  return (
    <>
    <h1>Welcome to next js</h1>
    <Hello/>
    </>
  );
}
