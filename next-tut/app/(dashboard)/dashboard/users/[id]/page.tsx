export default async function page({params}:{params:{id:string}}) {
    const {id}= await params;
  return (
    <div>
        <h1>USER Profile: {id}</h1>
    </div>
  )
}
