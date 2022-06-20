import { MouseEventHandler, useEffect, useState, MouseEvent } from "react";
import { getHistoricWeather } from "../../apis/fetch-weather";
import { GMap } from "../../components/charts/map/g-map";
import UiButton from "@confrontend/ui-components/src/components/button/ui-button";
import Section from "../../components/UI/section/ui-section";
import { weatherColorRange } from "../../styles/colors";
import * as S from "./weather.styled";

const buttons = [
  {
    text: "Jan 15",
    date: "2021-01-15",
    season: "Winter",
  },
  {
    text: "Apr 15",
    date: "2021-04-15",
    season: "Spring",
  },
  {
    text: "July 15",
    date: "2021-07-15",
    season: "Summer",
  },
  {
    text: "Nov 15",
    date: "2021-10-15",
    season: "Autumn",
  },
];

const i = 0;
export default function Weather() {
  const [historicData, setHistoricData] = useState([
    {
      address: "string",
      days: {} as any,
      latitude: 0,
      longitude: 0,
      resolvedAddress: "string",
    },
  ]);

  const [seasonData, setSeasonData] = useState({
    listData: [""],
    mapData: [["City", "Temp"]].concat([["address", "0"]]),
  });

  const [dateInfo, setDateInfo] = useState("");

  const options = {
    region: "US",
    colorAxis: { colors: weatherColorRange },
    datalessRegionColor: "#ccc",
    defaultColor: "#f5f5f5",
    displayMode: "regions",
    resolution: "provinces",
  };

  useEffect(() => {
    getHistoricWeather().then((data) => setHistoricData(data));

    // getCurrentWeather()
    //   .then((data) => {
    //     const updateTime = data[0].current.last_updated;
    //     const cities = data.map(
    //       (d: any, i: number) => `${d.location?.name}, ${d.location?.region} | `
    //     );

    //     const mapData = [["City", "Temp"]].concat(
    //       data.map((d: any) => [d.location.region, d.current.temp_c])
    //     );

    //     setWeatherData(mapData);
    //     setWeatherTitle({ updateTime, cities });
    //   })
    //   .catch((err: any) => console.log("weather component none ideal state"));
  }, []);

  const getSeasonWeather: MouseEventHandler<HTMLButtonElement> = (
    event: MouseEvent<HTMLButtonElement>
  ) => {
    const season = event.currentTarget.textContent;

    const date = buttons.find((button) => button.season === season)?.date;
    const locations: string[] = [];
    const seasonData = historicData.filter((hd) => hd.days.datetime === date);
    const mapped = seasonData.map((sd) => {
      const location = sd.address.substring(sd.address.indexOf(",") + 1);
      locations.push(`${sd.address}: ${sd.days.feelslike} ℃ `);
      return [location, sd.days.feelslike];
    });
    const dateOptions = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
    } as const;
    const dateTime = new Date(seasonData[0].days.datetimeEpoch * 1000);
    setDateInfo(dateTime.toLocaleDateString("en-US", dateOptions) || "");

    setSeasonData({
      listData: locations,
      mapData: [["City", "Temp"]].concat(mapped),
    });
  };

  return (
    <>
      <S.MapWrapper>
        <GMap data={seasonData.mapData} options={options} />
        <Section>
          <S.ButtonsWrapper>
            {buttons.map((button) => (
              <UiButton onClick={getSeasonWeather} key={button.text.toString()}>
                {button.season}
              </UiButton>
            ))}
          </S.ButtonsWrapper>
        </Section>
      </S.MapWrapper>
      {seasonData.listData.length > 1 && (
        <Section>
          <pre>
            {dateInfo ? (
              <>
                Data collected on: {dateInfo} <wbr />
                for the following locations:
              </>
            ) : (
              `Select a season first.`
            )}
          </pre>

          <S.CityWrapper>
            {seasonData?.listData.map((ld) => (
              <span key={ld}>{ld}</span>
            ))}
          </S.CityWrapper>
        </Section>
      )}
    </>
  );
}
