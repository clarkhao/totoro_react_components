import { useRive, useStateMachineInput } from "@rive-app/react-canvas";

type TCheck = {
  /**
   * bingo
   */
  bingo: boolean;
};

function Check({ bingo = false, ...props }: TCheck) {
  const { rive, RiveComponent } = useRive({
    src: "./small.riv",
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
