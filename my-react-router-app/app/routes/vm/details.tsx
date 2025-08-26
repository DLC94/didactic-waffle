import { useParams } from "react-router";

export default function VmDetail() {
  const { id } = useParams();
  return (
    <div>
      <h2>VM Detail</h2>
      <p>You selected VM: <b>{id}</b></p>
    </div>
  );
}