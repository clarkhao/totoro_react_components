import { useRive } from "@rive-app/react-canvas";

type TCheck = {
  /**
   * bingo
   */
  bingo: boolean;
};

function Check({ bingo = false }: TCheck) {
  const { rive, RiveComponent } = useRive({
    src: "https://doggycatty.s3.amazonaws.com/app/small.riv",
    stateMachines: "bingo",
    artboard: "Check",
  });
  if (bingo) rive?.play();
  return (
    <>
      <RiveComponent style={{ width: "150px", height: "150px" }} />
    </>
  );
}

export default Check;
