import { useParams } from "react-router";

export default function FunctionDetail() {
  const { id } = useParams();
  return (
    <div>
      <h2>Function Detail</h2>
      <p>You selected Function: <b>{id}</b></p>
    </div>
  );
}