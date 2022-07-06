import { BetaAnalyticsDataClient } from "@google-analytics/data";
import format from "date-fns/format";
import subDays from "date-fns/subDays";

// console.log(process.env.PRIVATE_KEY_ID);

// const config = {
//   type: "service_account",
//   project_id: "quickstart-1657098924428",
//   private_key_id: process.env.PRIVATE_KEY_ID,
//   private_key: process.env.PRIVATE_KEY,
//   client_email:
//     "starting-account-lke0a2z6kskw@quickstart-1657098924428.iam.gserviceaccount.com",
//   client_id: "103377493363032533210",
//   auth_uri: "https://accounts.google.com/o/oauth2/auth",
//   token_uri: "https://oauth2.googleapis.com/token",
//   auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
//   client_x509_cert_url:
//     "https://www.googleapis.com/robot/v1/metadata/x509/starting-account-lke0a2z6kskw%40quickstart-1657098924428.iam.gserviceaccount.com",
// };

const getMostRead = async () => {
  try {
    // const analyticsDataClient = new BetaAnalyticsDataClient({ config });
    // console.log(BetaAnalyticsDataClient);
  } catch (error) {
    console.log(error);
  }
  const metrics = [
    {
      // Page views
      name: "Event count",
    },
  ];

  // last 7 days
  // const startDate = format(subDays(new Date(), 7), "yyyy-MM-dd");

  // const options = {
  //   property: "properties/314887836",
  //   // Date range is x days ago (set by user) until today
  //   dateRanges: [
  //     {
  //       startDate,
  //       endDate: "today",
  //     },
  //   ],
  //   /**
  //    * Default dimension: Article ID (customEvent:mst_resource_id)
  //    */

  //   dimensions: [
  //     { name: "teaser_clicked_author_dim" },
  //     { name: "teaser_clicked_title_dim" },
  //   ],
  //   metrics,
  //   OrderBy: {
  //     desc: true,
  //     metric: {
  //       metricName: metrics[0].name,
  //     },
  //   },

  //   limit: 3,
  // };

  // try {
  //   // GA docu: // https://developers.google.com/analytics/devguides/reporting/data/v1/rest/v1beta/properties/runReport?hl=en
  //   const [response] = await analyticsDataClient.runReport(options);
  //   const { rows } = response;

  //   console.log(rows);

  //   // return rows && rows.map((row) => row?.dimensionValues[0]?.value);
  // } catch (err) {
  //   console.log(err, "Error running Google Analytics report");
  // }
};

export { getMostRead };
