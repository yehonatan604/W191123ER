import { FlexAlign } from "../enums/FlexAligns";
import { FlexDirections } from "../enums/FlexDirections";

type FlexProps = {
  children: React.ReactNode;
  justify: FlexAlign;
  dir: FlexDirections;
};

const Flex = (props: FlexProps) => {
  const { children, dir, justify } = props;
  return (
    <div className={`flex flex-${dir} justify-${justify} items-${justify}`}>
      {children}
    </div>
  );
};

export default Flex;
