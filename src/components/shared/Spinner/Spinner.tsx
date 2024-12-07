import { Oval } from "react-loader-spinner";

const Spinner = (): JSX.Element => {
  return (
    <Oval
      height={150}
      width={150}
      color="#2F5AF4"
      wrapperStyle={{
        position: "absolute",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "15vh",
        zIndex: "998",
      }}
      wrapperClass={`oval-loading`}
      visible={true}
      ariaLabel="oval-loading"
      secondaryColor="#0FA2AB"
      strokeWidth={3}
      strokeWidthSecondary={3}
    />
  );
};

export default Spinner;
