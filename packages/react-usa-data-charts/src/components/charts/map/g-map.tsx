import { Chart } from "react-google-charts";
import * as S from "./g-map.styled";

type GMapProps = {
  data: (string | number)[][];
  headers?: string[];
  options: any;
};
/**
 * Google GeoChart 
 */
export function GMap({ data, options }: GMapProps) {
  // const [ready, setReady] = useState(false);
  return (
    <S.MapWrapper>
      {/* {!ready && <div>MAP PLACE HOLDER</div>} */}
      <Chart
        options={options}
        chartType="GeoChart"
        data={data}
        height="100%"
        width="900px"
        // chartEvents={[
        //   {
        //     eventName: "ready",
        //     callback: () => {
        //       setReady(true);
        //     },
        //   },
        // ]}
      />
    </S.MapWrapper>
  );
}
