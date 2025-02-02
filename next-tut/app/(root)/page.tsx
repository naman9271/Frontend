import Hello from "../components/hello"

export default async function Home() {
  console.log('what am i ?.. server or client')
  return (
    <>
    <h1 className="text-3xl">Welcome to next js</h1>
    <Hello/>
    </>
  );
}
