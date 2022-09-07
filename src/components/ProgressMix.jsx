import ProgressBar from "react-bootstrap/ProgressBar";

export default function ProgressMix() {
  return (
    <>
      <ProgressBar>
        <ProgressBar variant="success" now={25} key={1} />
        <ProgressBar variant="warning" now={25} />
        <ProgressBar variant="info" now={25} />
        <ProgressBar variant="danger" now={25} />
      </ProgressBar>
    </>
  );
}
