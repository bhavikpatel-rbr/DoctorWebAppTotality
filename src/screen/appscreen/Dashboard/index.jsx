import React from "react";
import ReactApexChart from "react-apexcharts";
import { ChevronRight } from "react-feather";
import calendar from "../../../img/icons/calendar.svg";
import depicon01 from "../../../img/icons/dep-icon-01.svg";
import depicon02 from "../../../img/icons/dep-icon-02.svg";
import depicon03 from "../../../img/icons/dep-icon-03.svg";
import depicon04 from "../../../img/icons/dep-icon-04.svg";
import depicon05 from "../../../img/icons/dep-icon-05.svg";
import profile from "../../../img/icons/profile-add.svg";
import morningimg01 from "../../../img/morning-img-01.png";
import user from "../../../img/user1.jpg";
import usericon from "../../../img/icons/user-icon.svg";

export let femalePatientData = [
  { x: "January", y: 150, toolTipMappingName: "Female - January" },
  { x: "February", y: 130, toolTipMappingName: "Female - February" },
  { x: "March", y: 160, toolTipMappingName: "Female - March" },
  { x: "April", y: 170, toolTipMappingName: "Female - April" },
  { x: "May", y: 140, toolTipMappingName: "Female - May" },
  { x: "June", y: 150, toolTipMappingName: "Female - June" },
  { x: "July", y: 180, toolTipMappingName: "Female - July" },
  { x: "August", y: 200, toolTipMappingName: "Female - August" },
  { x: "September", y: 170, toolTipMappingName: "Female - September" },
  { x: "October", y: 190, toolTipMappingName: "Female - October" },
  { x: "November", y: 160, toolTipMappingName: "Female - November" },
  { x: "December", y: 210, toolTipMappingName: "Female - December" },
];
export let data1 = [
  { x: "GBR", y: 27, toolTipMappingName: "Great Britain" },
  { x: "CHN", y: 26, toolTipMappingName: "China" },
  { x: "AUS", y: 8, toolTipMappingName: "Australia" },
  { x: "RUS", y: 19, toolTipMappingName: "Russia" },
  { x: "GER", y: 17, toolTipMappingName: "Germany" },
  { x: "UA", y: 2, toolTipMappingName: "Ukraine" },
  { x: "ES", y: 7, toolTipMappingName: "Spain" },
  { x: "UZB", y: 4, toolTipMappingName: "Uzbekistan" },
  { x: "JPN", y: 12, toolTipMappingName: "Japan" },
  { x: "NL", y: 8, toolTipMappingName: "NetherLand" },
  { x: "USA", y: 46, toolTipMappingName: "United States" },
];
export let data2 = [
  { x: "GBR", y: 23, toolTipMappingName: "Great Britain" },
  { x: "CHN", y: 18, toolTipMappingName: "China" },
  { x: "AUS", y: 11, toolTipMappingName: "Australia" },
  { x: "RUS", y: 17, toolTipMappingName: "Russia" },
  { x: "GER", y: 10, toolTipMappingName: "Germany" },
  { x: "UA", y: 5, toolTipMappingName: "Ukraine" },
  { x: "ES", y: 4, toolTipMappingName: "Spain" },
  { x: "UZB", y: 2, toolTipMappingName: "Uzbekistan" },
  { x: "JPN", y: 8, toolTipMappingName: "Japan" },
  { x: "NL", y: 7, toolTipMappingName: "NetherLand" },
  { x: "USA", y: 37, toolTipMappingName: "United States" },
];
export let data3 = [
  { x: "GBR", y: 17, toolTipMappingName: "Great Britain" },
  { x: "CHN", y: 26, toolTipMappingName: "China" },
  { x: "AUS", y: 10, toolTipMappingName: "Australia" },
  { x: "RUS", y: 20, toolTipMappingName: "Russia" },
  { x: "GER", y: 15, toolTipMappingName: "Germany" },
  { x: "UA", y: 24, toolTipMappingName: "Ukraine" },
  { x: "ES", y: 6, toolTipMappingName: "Spain" },
  { x: "UZB", y: 7, toolTipMappingName: "Uzbekistan" },
  { x: "JPN", y: 8, toolTipMappingName: "Japan" },
  { x: "NL", y: 4, toolTipMappingName: "NetherLand" },
  { x: "USA", y: 38, toolTipMappingName: "United States" },
];
const SAMPLE_CSS = `
    .control-fluid {
        padding: 0px !important;
    }`;
const Dashboard = () => {
  const [malePatientData, setmalePatientData] = React.useState({
    series: [
      {
        name: "Male",
        color: "#2E37A4",
        data: [20, 30, 41, 67, 22, 43, 40, 10, 30, 20, 40],
      },
      {
        name: "Female",
        color: "#00D3C7",
        data: [13, 23, 20, 8, 13, 27, 30, 25, 10, 15, 20],
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 230,
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "30%",
          endingShape: "rounded",
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return "₹" + val + " thousands";
          },
        },
      },
    },
  });

  const [departmentData, setdepartmentData] = React.useState({
    series: [44, 55, 41, 17],
    options: {
      chart: {
        // height: 290,
        type: "donut",
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "50%",
        },
      },
      dataLabels: {
        enabled: false,
      },
      labels: ["Neurology", "Dental Care", "Gynecology", "Orthopedic"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
      legend: {
        position: "bottom",
      },
    },
  });

  return (
    <div>
      <div className="page-header">
        <div className="row">
          <div className="col-sm-12">
            <ul className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="index.html">Dashboard </a>
              </li>
              <li className="breadcrumb-item">
                <ChevronRight
                  size={16}
                  style={{ color: "blue", fontSize: "20px", margin: "0 8px" }}
                />
              </li>
              <li className="breadcrumb-item active">Admin Dashboard</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="good-morning-blk">
        <div className="row">
          <div className="col-md-6">
            <div className="morning-user">
              <h2>
                Good Morning, <span>Tushar Joshi</span>
              </h2>
              <p>Have a nice day at work</p>
            </div>
          </div>
          <div className="col-md-6 position-blk">
            <div className="morning-img">
              <img src={morningimg01} alt />
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
          <div className="dash-widget">
            <div className="dash-boxs comman-flex-center">
              <img src={calendar} alt />
            </div>
            <div className="dash-content dash-count">
              <h4>Appointments</h4>
              <h2>
                <span className="counter-up">250</span>
              </h2>
              <p>
                <span className="passive-view">
                  <i className="feather-arrow-up-right me-1"></i>40%
                </span>{" "}
                vs last month
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
          <div className="dash-widget">
            <div className="dash-boxs comman-flex-center">
              <img src={profile} alt />
            </div>
            <div className="dash-content dash-count">
              <h4>New Patients</h4>
              <h2>
                <span className="counter-up">140</span>
              </h2>
              <p>
                <span className="passive-view">
                  <i className="feather-arrow-up-right me-1"></i>20%
                </span>{" "}
                vs last month
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
          <div className="dash-widget">
            <div className="dash-boxs comman-flex-center">
              <img src={profile} alt />
            </div>
            <div className="dash-content dash-count">
              <h4>Old Patients</h4>
              <h2>
                <span className="counter-up">56</span>
              </h2>
              <p>
                <span className="negative-view">
                  <i className="feather-arrow-down-right me-1"></i>15%
                </span>{" "}
                vs last month
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
          <div className="dash-widget">
            <div className="dash-boxs comman-flex-center">
              <img src={profile} alt />
            </div>
            <div className="dash-content dash-count">
              <h4>Total Case Record</h4>
              <h2>
                <span className="counter-up"> 20</span>
              </h2>
              <p>
                <span className="passive-view">
                  <i className="feather-arrow-up-right me-1"></i>30%
                </span>{" "}
                vs last month
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-12 col-md-12 col-lg-6 col-xl-9">
          <div className="card">
            <div className="card-body">
              <div className="chart-title patient-visit">
                <h4>Patient Visit by Gender</h4>
                <div>
                  <ul className="nav chat-user-total">
                    <li>
                      <i
                        className="fa fa-circle current-users"
                        aria-hidden="true"
                      ></i>
                      Male 75%
                    </li>
                    <li>
                      <i
                        className="fa fa-circle old-users"
                        aria-hidden="true"
                      ></i>{" "}
                      Female 25%
                    </li>
                  </ul>
                </div>
                <div className="input-block mb-0">
                  <select className="form-control select">
                    <option>2022</option>
                    <option>2021</option>
                    <option>2020</option>
                    <option>2019</option>
                  </select>
                </div>
              </div>
              <div>
                <div id="chart">
                  <ReactApexChart
                    options={malePatientData.options}
                    series={malePatientData.series}
                    type="bar"
                    height={350}
                  />
                </div>
                <div id="html-dist"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-12 col-lg-6 col-xl-3 d-flex">
          <div className="card">
            <div className="card-body">
              <div className="chart-title">
                <h4>Patient by Department</h4>
              </div>
              {/* <div id="donut-chart-dash" className="chart-user-icon">
                <div className="control-pane">
                  <div className="control-section">
                    <AccumulationChartComponent
                      id="department-pie-chart"
                      legendSettings={{ visible: true }}
                      tooltip={{
                        enable: true,
                        format: "${point.x} : <b>${point.y}%</b>",
                      }}
                      title="Patient Distribution by Department"
                    >
                      <Inject
                        services={[
                          AccumulationLegend,
                          PieSeries,
                          AccumulationDataLabel,
                          AccumulationTooltip,
                        ]}
                      />
                      <AccumulationSeriesCollectionDirective>
                        <AccumulationSeriesDirective
                          dataSource={departmentData}
                          xName="x"
                          yName="y"
                          dataLabel={{
                            visible: true,
                            name: "text",
                            position: "Outside",
                            font: { fontWeight: "600" },
                          }}
                          radius="70%"
                          explode={true}
                          explodeOffset="10%"
                          explodeIndex={0}
                        />
                      </AccumulationSeriesCollectionDirective>
                    </AccumulationChartComponent>
                  </div>
                </div>
              </div> */}
              <div
                id="donut-chart-dash"
                className="chart-user-icon"
                style={{ width: "100%", maxWidth: "600px", margin: "0 auto" }}
              >
                <img src={usericon} alt="User Icon" />
                <ReactApexChart
                  options={departmentData.options}
                  series={departmentData.series}
                  type="donut"
                  height={400} // Directly set the height here as well
                />
                {/* <div id="html-dist"></div> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-12 col-md-12 col-xl-3">
          <div className="card top-departments">
            <div className="card-header">
              <h4 className="card-title mb-0">Top Departments</h4>
            </div>
            <div className="card-body mt-3">
              <div className="activity-top">
                <div className="activity-boxs comman-flex-center">
                  <img src={depicon01} />
                </div>
                <div className="departments-list">
                  <h4>General Physician</h4>
                  <p>35%</p>
                </div>
              </div>
              <div className="activity-top">
                <div className="activity-boxs comman-flex-center">
                  <img src={depicon02} alt />
                </div>
                <div className="departments-list">
                  <h4>Dentist</h4>
                  <p>24%</p>
                </div>
              </div>
              <div className="activity-top">
                <div className="activity-boxs comman-flex-center">
                  <img src={depicon03} alt />
                </div>
                <div className="departments-list">
                  <h4>ENT</h4>
                  <p>10%</p>
                </div>
              </div>
              <div className="activity-top">
                <div className="activity-boxs comman-flex-center">
                  <img src={depicon04} alt />
                </div>
                <div className="departments-list">
                  <h4>Cardiologist</h4>
                  <p>15%</p>
                </div>
              </div>
              <div className="activity-top mb-0">
                <div className="activity-boxs comman-flex-center">
                  <img src={depicon05} alt />
                </div>
                <div className="departments-list">
                  <h4>Opthomology</h4>
                  <p>20%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-12 col-xl-9">
          <div className="card top-departments">
            <div className="card-header">
              <h4 className="card-title d-inline-block">
                Upcoming Appointments
              </h4>
              <a href="appointments.html" className="patient-views float-end">
                Show all
              </a>
            </div>
            <div className="card-body p-0 table-dash mt-0">
              <div className="table-responsive">
                <table className="table mb-0 border-0 datatable custom-table">
                  <thead>
                    <tr>
                     
                      <th>No</th>
                      <th>Patient name</th>
                      <th>Doctor</th>
                      <th>Time</th>
                      <th>Disease</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                     
                      <td>R00001</td>
                      <td>Bhavik Rupapara</td>
                      <td className="table-image appoint-doctor">
                        <img
                          width="28"
                          height="28"
                          className="rounded-circle"
                          src={user}
                          alt
                        />
                        <h2>Dr.Tushar Joshi</h2>
                      </td>
                      <td className="appoint-time">
                        <span>12.05.2022 at </span>7.00 PM
                      </td>
                      <td>Ear Pain</td>
                      <td className="text-end">
                        <a href="#" className="btn btn-outline-primary btn-sm">
                           View
                        </a>
                      </td>
                    </tr>
                    <tr>
                     
                     <td>R00001</td>
                     <td>Bhavik Rupapara</td>
                     <td className="table-image appoint-doctor">
                       <img
                         width="28"
                         height="28"
                         className="rounded-circle"
                         src={user}
                         alt
                       />
                       <h2>Dr.Tushar Joshi</h2>
                     </td>
                     <td className="appoint-time">
                       <span>12.05.2022 at </span>7.00 PM
                     </td>
                     <td>Ear Pain</td>
                     <td className="text-end">
                       <a href="#" className="btn btn-outline-primary btn-sm">
                          View
                       </a>
                     </td>
                   </tr>
                    <tr>
                     
                      <td>R00001</td>
                      <td>Bhavik Rupapara</td>
                      <td className="table-image appoint-doctor">
                        <img
                          width="28"
                          height="28"
                          className="rounded-circle"
                          src={user}
                          alt
                        />
                        <h2>Dr.Tushar Joshi</h2>
                      </td>
                      <td className="appoint-time">
                        <span>12.05.2022 at </span>7.00 PM
                      </td>
                      <td>Ear Pain</td>
                      <td className="text-end">
                        <a href="#" className="btn btn-outline-primary btn-sm">
                           View
                        </a>
                      </td>
                    </tr>
                    <tr>
                     
                      <td>R00001</td>
                      <td>Bhavik Rupapara</td>
                      <td className="table-image appoint-doctor">
                        <img
                          width="28"
                          height="28"
                          className="rounded-circle"
                          src={user}
                          alt
                        />
                        <h2>Dr.Tushar Joshi</h2>
                      </td>
                      <td className="appoint-time">
                        <span>12.05.2022 at </span>7.00 PM
                      </td>
                      <td>Ear Pain</td>
                      <td className="text-end">
                        <a href="#" className="btn btn-outline-primary btn-sm">
                           View
                        </a>
                      </td>
                    </tr>
                    <tr>
                      
                      <td>R00001</td>
                      <td>Bhavik Rupapara</td>
                      <td className="table-image appoint-doctor">
                        <img
                          width="28"
                          height="28"
                          className="rounded-circle"
                          src={user}
                          alt
                        />
                        <h2>Dr.Tushar Joshi</h2>
                      </td>
                      <td className="appoint-time">
                        <span>12.05.2022 at </span>7.00 PM
                      </td>
                      <td>Ear Pain</td>
                      <td className="text-end">
                        <a href="#" className="btn btn-outline-primary btn-sm">
                           View
                        </a>
                      </td>
                    </tr>
                    <tr>
                     
                      <td>R00001</td>
                      <td>Bhavik Rupapara</td>
                      <td className="table-image appoint-doctor">
                        <img
                          width="28"
                          height="28"
                          className="rounded-circle"
                          src={user}
                          alt
                        />
                        <h2>Dr.Tushar Joshi</h2>
                      </td>
                      <td className="appoint-time">
                        <span>12.05.2022 at </span>7.00 PM
                      </td>
                      <td>Ear Pain</td>
                      <td className="text-end">
                        <a href="#" className="btn btn-outline-primary btn-sm">
                           View
                        </a>
                      </td>
                    </tr>
                 
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-12 col-md-12 col-xl-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title mb-0">Recent Patients</h4>
            </div>
            <div className="card-body p-0 table-dash">
              <div className="table-responsive">
                <table className="table mb-0 border-0 datatable custom-table">
                  <thead>
                    <tr>
                      <th>No</th>
                      <th>Patient name</th>
                      <th>Age</th>
                      <th>Date of Birth</th>
                      <th>Diagnosis</th>
                      <th>Triage Status</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>R00001</td>
                      <td>Bhavik Rupapara</td>
                      <td>45</td>
                      <td>02.07.1977</td>
                      <td>Flu</td>
                      <td>
                        <span className="badge rounded-pill bg-danger">
                          Critical
                        </span>
                      </td>
                      <td className="text-end">
                        <a href="#" className="btn btn-outline-primary btn-sm">
                           View
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>R00001</td>
                      <td>Bhavik Rupapara</td>
                      <td>45</td>
                      <td>02.07.1977</td>
                      <td>Flu</td>
                      <td>
                        <span className="badge rounded-pill bg-danger">
                          Critical
                        </span>
                      </td>
                      <td className="text-end">
                        <a href="#" className="btn btn-outline-primary btn-sm">
                           View
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>R00001</td>
                      <td>Bhavik Rupapara</td>
                      <td>45</td>
                      <td>02.07.1977</td>
                      <td>Flu</td>
                      <td>
                        <span className="badge rounded-pill bg-danger">
                          Critical
                        </span>
                      </td>
                      <td className="text-end">
                        <a href="#" className="btn btn-outline-primary btn-sm">
                           View
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>R00001</td>
                      <td>Bhavik Rupapara</td>
                      <td>45</td>
                      <td>02.07.1977</td>
                      <td>Flu</td>
                      <td>
                        <span className="badge rounded-pill bg-danger">
                          Critical
                        </span>
                      </td>
                      <td className="text-end">
                        <a href="#" className="btn btn-outline-primary btn-sm">
                           View
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
