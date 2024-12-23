import React from 'react';
import { ChevronRight } from 'react-feather';
import morningimg01 from '../../../img/morning-img-01.png'
import user from '../../../img/user1.jpg'
import calendar from '../../../img/icons/calendar.svg'
import profile from '../../../img/icons/profile-add.svg'
import timer from '../../../img/icons/timer.svg'
import sort from '../../../img/icons/sort-icon-01.svg'
import sort1 from '../../../img/icons/sort-icon-02.svg'
import { FaCheckSquare } from "react-icons/fa";
import { MdOutlineCancel } from "react-icons/md";
import ReactApexChart from 'react-apexcharts';
import usericon from "../../../img/icons/user-icon.svg";

const doctorActivityData = [
  { month: 'Jan', high: 30, low: 10 },
  { month: 'Feb', high: 40, low: 20 },
  { month: 'Mar', high: 35, low: 15 },
  { month: 'Apr', high: 50, low: 25 },
  { month: 'May', high: 60, low: 30 },
  { month: 'Jun', high: 70, low: 35 },
  { month: 'Jul', high: 80, low: 40 },
  { month: 'Aug', high: 90, low: 45 },
  { month: 'Sep', high: 100, low: 50 },
  { month: 'Oct', high: 110, low: 55 },
  { month: 'Nov', high: 120, low: 60 },
  { month: 'Dec', high: 130, low: 65 }
];

const chartOptions1 = {
  chart: {
    type: 'line',
    height: 350,
    toolbar: {
      show: false
    }
  },
  title: {
    text: 'Doctor High and Low Activities per Month',
    align: 'center'
  },
  xaxis: {
    categories: doctorActivityData.map(data => data.month),
    title: {
      text: 'Month'
    },
    labels: {
      rotate: -45
    }
  },
  yaxis: {
    title: {
      text: 'Number of Activities'
    },
    labels: {
      formatter: (val) => val.toFixed(0)
    }
  },
  tooltip: {
    enabled: true
  },
  markers: {
    size: 5
  },
  legend: {
    position: 'top'
  }
};

const chartSeries1 = [
  {
    name: 'High Activity',
    data: doctorActivityData.map(data => data.high)
  },
  {
    name: 'Low Activity',
    data: doctorActivityData.map(data => data.low)
  }
];
const data = [
  { x: 'New Patients', y: 40, color: '#FF6347' }, // Red
  { x: 'Old Patients', y: 60, color: '#4682B4' }  // Blue
];

const chartOptions = {
  chart: {
    type: 'pie',
  },
  labels: data.map(item => item.x),
  colors: data.map(item => item.color),
  legend: {
    show: true,
    position: 'bottom'
  },
  tooltip: {
    enabled: true,
    y: {
      formatter: (val) => `${val}%`
    }
  },
  dataLabels: {
    enabled: true,
    style: {
      fontWeight: '600'
    },
    formatter: (val, opts) => `${opts.w.globals.labels[opts.seriesIndex]}: ${val.toFixed(1)}%`
  }
};

const chartSeries = data.map(item => item.y);

export let departmentData = [
    { x: 'Cardiology', y: 35, text: 'Cardiology - 35%' },
    { x: 'Neurology', y: 25, text: 'Neurology - 25%' },
    { x: 'Orthopedics', y: 15, text: 'Orthopedics - 15%' },
    { x: 'Pediatrics', y: 10, text: 'Pediatrics - 10%' },
    { x: 'Radiology', y: 8, text: 'Radiology - 8%' },
    { x: 'Oncology', y: 7, text: 'Oncology - 7%' }
];
export let femalePatientData = [
    { x: 'January', y: 150, toolTipMappingName: 'Female - January' },
    { x: 'February', y: 130, toolTipMappingName: 'Female - February' },
    { x: 'March', y: 160, toolTipMappingName: 'Female - March' },
    { x: 'April', y: 170, toolTipMappingName: 'Female - April' },
    { x: 'May', y: 140, toolTipMappingName: 'Female - May' },
    { x: 'June', y: 150, toolTipMappingName: 'Female - June' },
    { x: 'July', y: 180, toolTipMappingName: 'Female - July' },
    { x: 'August', y: 200, toolTipMappingName: 'Female - August' },
    { x: 'September', y: 170, toolTipMappingName: 'Female - September' },
    { x: 'October', y: 190, toolTipMappingName: 'Female - October' },
    { x: 'November', y: 160, toolTipMappingName: 'Female - November' },
    { x: 'December', y: 210, toolTipMappingName: 'Female - December' }
];
export let data1 = [{ x: 'GBR', y: 27, toolTipMappingName: 'Great Britain' }, { x: 'CHN', y: 26, toolTipMappingName: 'China' }, { x: 'AUS', y: 8, toolTipMappingName: 'Australia' }, { x: 'RUS', y: 19, toolTipMappingName: 'Russia' }, { x: 'GER', y: 17, toolTipMappingName: 'Germany' }, { x: 'UA', y: 2, toolTipMappingName: 'Ukraine' }, { x: 'ES', y: 7, toolTipMappingName: 'Spain' }, { x: 'UZB', y: 4, toolTipMappingName: 'Uzbekistan' }, { x: 'JPN', y: 12, toolTipMappingName: 'Japan' }, { x: 'NL', y: 8, toolTipMappingName: 'NetherLand' }, { x: 'USA', y: 46, toolTipMappingName: 'United States' }];
export let data2 = [{ x: 'GBR', y: 23, toolTipMappingName: 'Great Britain' }, { x: 'CHN', y: 18, toolTipMappingName: 'China' }, { x: 'AUS', y: 11, toolTipMappingName: 'Australia' }, { x: 'RUS', y: 17, toolTipMappingName: 'Russia' }, { x: 'GER', y: 10, toolTipMappingName: 'Germany' }, { x: 'UA', y: 5, toolTipMappingName: 'Ukraine' }, { x: 'ES', y: 4, toolTipMappingName: 'Spain' }, { x: 'UZB', y: 2, toolTipMappingName: 'Uzbekistan' }, { x: 'JPN', y: 8, toolTipMappingName: 'Japan' }, { x: 'NL', y: 7, toolTipMappingName: 'NetherLand' }, { x: 'USA', y: 37, toolTipMappingName: 'United States' }];
export let data3 = [{ x: 'GBR', y: 17, toolTipMappingName: 'Great Britain' }, { x: 'CHN', y: 26, toolTipMappingName: 'China' }, { x: 'AUS', y: 10, toolTipMappingName: 'Australia' }, { x: 'RUS', y: 20, toolTipMappingName: 'Russia' }, { x: 'GER', y: 15, toolTipMappingName: 'Germany' }, { x: 'UA', y: 24, toolTipMappingName: 'Ukraine' }, { x: 'ES', y: 6, toolTipMappingName: 'Spain' }, { x: 'UZB', y: 7, toolTipMappingName: 'Uzbekistan' }, { x: 'JPN', y: 8, toolTipMappingName: 'Japan' }, { x: 'NL', y: 4, toolTipMappingName: 'NetherLand' }, { x: 'USA', y: 38, toolTipMappingName: 'United States' }];
const SAMPLE_CSS = `
    .control-fluid {
        padding: 0px !important;
    }`;
const DoctorDashboard = () => {
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
      const [selectedTimeframe, setSelectedTimeframe] = React.useState('This Week');

  const options = {
    chart: {
      id: 'activity-chart',
      toolbar: {
        show: false,
      },
    },
    xaxis: {
      categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    colors: ['#00E396', '#FF4560'],
    legend: {
      show: true,
      markers: {
        width: 10,
        height: 10,
      },
    },
  };

  const series = [
    {
      name: 'Low',
      data: [10, 41, 35, 51, 49, 62, 69],
    },
    {
      name: 'High',
      data: [23, 42, 45, 32, 34, 52, 53],
    },
  ];
    return (
        <div>
    <div className="page-header">
        <div className="row">
            <div className="col-sm-12">
                <ul className="breadcrumb">
                    <li className="breadcrumb-item"><div href="index.html">Dashboard </div ></li>
                    <li className="breadcrumb-item">
      <ChevronRight size={16} style={{ color: 'blue', fontSize: '20px', margin: '0 8px' }}/>
    </li>
                    <li className="breadcrumb-item active">Doctor Dashboard</li>
                </ul>
            </div>
        </div>
    </div>

    <div className="good-morning-blk">
        <div className="row">
            <div className="col-md-6">
                <div className="morning-user">
                    <h2>Good Morning, <span>Tushar Joshi</span></h2>
                    <p>Have a nice day at work</p>
                </div>
            </div>
            <div className="col-md-6 position-blk">
                <div className="morning-img">
                <img src={morningimg01} alt/>
                </div>
            </div>
        </div>
    </div>

    <div className="row">
        <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
            <div className="dash-widget">
                <div className="dash-boxs comman-flex-center">
                    <img src={calendar} alt/>
                </div>
                <div className="dash-content dash-count">
                    <h4>Appointments</h4>
                    <h2><span className="counter-up">250</span></h2>
                    <p><span className="passive-view"><i className="feather-arrow-up-right me-1"></i>40%</span> vs last month</p>
                </div>
            </div>
        </div>
        <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
            <div className="dash-widget">
                <div className="dash-boxs comman-flex-center">
                    <img src={profile} alt/>
                </div>
                <div className="dash-content dash-count">
                    <h4>New Patients</h4>
                    <h2><span className="counter-up">140</span></h2>
                    <p><span className="passive-view"><i className="feather-arrow-up-right me-1"></i>20%</span> vs last month</p>
                </div>
            </div>
        </div>
        <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
            <div className="dash-widget">
                <div className="dash-boxs comman-flex-center">
                <img src={profile} alt/>
                </div>
                <div className="dash-content dash-count">
                    <h4>Old Patients</h4>
                    <h2><span className="counter-up">56</span></h2>
                    <p><span className="negative-view"><i className="feather-arrow-down-right me-1"></i>15%</span> vs last month</p>
                </div>
            </div>
        </div>
        <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
            <div className="dash-widget">
                <div className="dash-boxs comman-flex-center">
                <img src={profile} alt/>
                </div>
                <div className="dash-content dash-count">
                    <h4>Total Case Record</h4>
                    <h2><span className="counter-up"> 20</span></h2>
                    <p><span className="passive-view"><i className="feather-arrow-up-right me-1"></i>30%</span> vs last month</p>
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
                                <li><i className="fa fa-circle current-users" aria-hidden="true"></i>Male 75%</li>
                                <li><i className="fa fa-circle old-users" aria-hidden="true"></i> Female 25%</li>
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
                    <div id="patient-chart">
                    <div className='control-pane'>
            <div className='control-section'>
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
            </div>
        </div>
        <div className="col-12 col-md-12 col-lg-6 col-xl-3 d-flex">
            <div className="card">
                <div className="card-body">
                    <div className="chart-title">
                        <h4>Patient by Department</h4>
                    </div>
                    {/* <div id="donut-chart-dash" className="chart-user-icon">
                    <div className='control-pane'>
            <div className='control-section'>
                <AccumulationChartComponent 
                    id='department-pie-chart' 
                    legendSettings={{ visible: true }} 
                    tooltip={{ enable: true, format: "${point.x} : <b>${point.y}%</b>" }} 
                    title='Patient Distribution by Department'>
                    <Inject services={[AccumulationLegend, PieSeries, AccumulationDataLabel, AccumulationTooltip]} />
                    <AccumulationSeriesCollectionDirective>
                        <AccumulationSeriesDirective 
                            dataSource={departmentData} 
                            xName='x' 
                            yName='y' 
                            dataLabel={{ visible: true, name: 'text', position: 'Outside', font: { fontWeight: '600' } }} 
                            radius='70%' 
                            explode={true} 
                            explodeOffset='10%' 
                            explodeIndex={0}
                        />
                    </div ccumulationSeriesCollectionDirective>
                </div ccumulationChartComponent>
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
                                    <td>Ben Nevis</td>
                                    <td>45</td>
                                    <td>02.07.1977</td>
                                    <td>Flu</td>
                                    <td>
                                        <span className="badge rounded-pill bg-danger">Critical</span>
                                    </td>
                                    <td className="text-end">
                                        <div href="#" className="btn btn-outline-primary btn-sm"><i className="feather-eye me-1"></i> View</div >
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
    <div className="col-12 col-md-12 col-lg-12 col-xl-7">
      <div className="card">
      <div className="card-body">
          <div className="chart-title patient-visit">
            <h4>Activity Chart</h4>
            <div>
              <ul className="nav chat-user-total">
                <li><i className="fa fa-circle low-users" aria-hidden="true"></i>Low</li>
                <li><i className="fa fa-circle current-users" aria-hidden="true"></i> High</li>
              </ul>
            </div>
            <div className="input-block mb-0">
              <select className="form-control select">
                <option>This Week</option>
                <option>Last Week</option>
                <option>This Month</option>
                <option>Last Month</option>
              </select>
            </div>
          </div>
          <div id="activity-chart">
      <ReactApexChart 
        options={chartOptions1}
        series={chartSeries1}
        type="line"
        height={350}
      />
    </div>
        </div>
      </div>
    </div>
    <div className="col-12 col-md-12 col-lg-6 col-xl-3 d-flex">
      <div className="card">
        <div className="card-body d-flex justify-content-center align-items-center">
          <div id="department-pie-chart1">
            <ReactApexChart 
              options={chartOptions}
              series={chartSeries}
              type="pie"
              height={290}
            />
          </div>
        </div>
      </div>
    </div>
    <div className="col-12 col-md-12 col-lg-6 col-xl-2 ">
      <div className="struct-point">
        <div className="card patient-structure">
          <div className="card-body">
            <h5>New Patients</h5>
            <h3>56<span className="status-green">
                <img src={sort} alt="Increase Icon" className="me-1"/>
                60%</span></h3>
          </div>
        </div>
        <div className="card patient-structure mt-5">
          <div className="card-body">
            <h5>Old Patients</h5>
            <h3>35<span className="status-pink">
            <img src={sort1} alt="Increase Icon" className="me-1"/>
                -20%</span></h3>
          </div>
        </div>
        {/* <div className="card patient-structure">
          <div className="card-body">
            <h5>Total Patients</h5>
            <h3>70<span className="status-pink">
            <img src={sort1} alt="Increase Icon" className="me-1"/>
                -20%</span></h3>
          </div>
        </div> */}
      </div>  
      <div className="col-12 col-md-12 col-xl-12 flex mt-5">
      <div className="card">
                <div className="circle-bar circle-bar2">
                    <div className="circle-graph2 mt-2 d-flex justify-content-center align-items-center" data-percent="66">
                        
                            <img src={timer} alt="Timer Icon" />
                       
                    </div>
                </div>
                <div className="main-limit text-center mt-2" style={{padding:"18px"}}>
                    <p>Next Appointment in</p>
                    <h4>02h:12m</h4>
                </div>
            </div>
        </div>
    </div>
  </div>

  <div className="row">
   
   
      <div className="col-12 col-md-12 col-xl-6 flex">
        <div className="card">
          <div className="card-header">
            <h4 className="card-title d-inline-block">Recent Appointments</h4>
            <div href="appointments.html" className="patient-views float-end">Show all</div >
          </div>
          <div className="card-body p-0 table-dash">
            <div className="table-responsive">
              <table className="table mb-0 border-0 custom-table">
                <tbody>
                  <tr>
                    <td className="table-image appoint-doctor">
                      <img width="28" height="28" className="rounded-circle" src={user} alt="Doctor Image"/>
                      <h2>Tushar Joshi</h2>
                    </td>
                    <td className="appoint-time text-center">
                      <h6>Today 5:40 PM</h6>
                      <span>Typoid Fever</span>
                    </td>
                    <td>
                    <button className="check-point status-green me-1"><FaCheckSquare  size={24}/></button>
                    <button className="check-point status-pink"><MdOutlineCancel size={24} /></button>
                    </td>
                  </tr>
                  <tr>
                    <td className="table-image appoint-doctor">
                    <img width="28" height="28" className="rounded-circle" src={user} alt="Doctor Image"/>
                    <h2>Tushar Joshi</h2>
                    </td>
                    <td className="appoint-time text-center">
                      <h6>Today 5:40 PM</h6>
                      <span>Typoid Fever</span>
                    </td>
                    <td>
                    <button className="check-point status-green me-1"><FaCheckSquare  size={24}/></button>
                    <button className="check-point status-pink"><MdOutlineCancel size={24} /></button>
                    </td>
                  </tr>
                  <tr>
                    <td className="table-image appoint-doctor">
                    <img width="28" height="28" className="rounded-circle" src={user} alt="Doctor Image"/>
                    <h2>Tushar Joshi</h2>
                    </td>
                    <td className="appoint-time text-center">
                      <h6>Today 5:40 PM</h6>
                      <span>Typoid Fever</span>
                    </td>
                    <td>
                    <button className="check-point status-green me-1"><FaCheckSquare  size={24}/></button>
                    <button className="check-point status-pink"><MdOutlineCancel size={24} /></button>
                    </td>
                  </tr>
                  <tr>
                    <td className="table-image appoint-doctor">
                    <img width="28" height="28" className="rounded-circle" src={user} alt="Doctor Image"/>
                    <h2>Tushar Joshi</h2>
                    </td>
                    <td className="appoint-time text-center">
                      <h6>Today 5:40 PM</h6>
                      <span>Typoid Fever</span>
                    </td>
                    <td>
                      <button className="check-point status-green me-1"><FaCheckSquare  size={24}/></button>
                      <button className="check-point status-pink"><MdOutlineCancel size={24} /></button>
                    </td>
                  </tr>
                  <tr>
                    <td className="table-image appoint-doctor">
                      <img width="28" height="28" className="rounded-circle" src={user} alt="Doctor Image"/>
                      <h2>Tushar Joshi</h2>
                    </td>
                    <td className="appoint-time text-center">
                      <h6>Today 5:40 PM</h6>
                      <span>Typoid Fever</span>
                    </td>
                    <td>
                    <button className="check-point status-green me-1"><FaCheckSquare  size={24}/></button>
                    <button className="check-point status-pink"><MdOutlineCancel size={24} /></button>
                    </td>
                  </tr>
                  <tr>
                    <td className="table-image appoint-doctor">
                      <img width="28" height="28" className="rounded-circle" src={user} alt="Doctor Image"/>
                      <h2>Tushar Joshi</h2>
                    </td>
                    <td className="appoint-time text-center">
                      <h6>Today 5:40 PM</h6>
                      <span>Typoid Fever</span>
                    </td>
                    <td>
                    <button className="check-point status-green me-1"><FaCheckSquare  size={24}/></button>
                    <button className="check-point status-pink"><MdOutlineCancel size={24} /></button>
                    </td>
                  </tr>
                  <tr>
                    <td className="table-image appoint-doctor">
                      <img width="28" height="28" className="rounded-circle" src={user} alt="Doctor Image"/>
                      <h2>Tushar Joshi</h2>
                    </td>
                    <td className="appoint-time text-center">
                      <h6>Today 5:40 PM</h6>
                      <span>Typoid Fever</span>
                    </td>
                    <td>
                    <button className="check-point status-green me-1"><FaCheckSquare  size={24}/></button>
                    <button className="check-point status-pink"><MdOutlineCancel size={24} /></button>
                    </td>
                  </tr>
                  <tr>
                    <td className="table-image appoint-doctor">
                      <img width="28" height="28" className="rounded-circle" src={user} alt="Doctor Image"/>
                      <h2>Tushar Joshi</h2>
                    </td>
                    <td className="appoint-time text-center">
                      <h6>Today 5:40 PM</h6>
                      <span>Typoid Fever</span>
                    </td>
                    <td>
                    <button className="check-point status-green me-1"><FaCheckSquare  size={24}/></button>
                    <button className="check-point status-pink"><MdOutlineCancel size={24} /></button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        
      </div>
    
        <div className="col-12 col-lg-12 col-xl-6 d-flex" >
            <div className="card flex-fill comman-shadow">
                <div className="card-header">
                    <h4 className="card-title d-inline-block">Recent Appointments</h4>
                    <div href="appointments.html" className="patient-views float-end">Show all</div >
                </div>
                <div className="card-body">
                    {/* Appointment Time: 08:00 */}
                    <div className="teaching-card">
                        <ul className="steps-history">
                            <li>08:00</li>
                        </ul>
                        <ul className="activity-feed">
                            <li className="feed-item d-flex align-items-center">
                                <div className="dolor-activity hide-activity">
                                    <ul className="doctor-date-list mb-2">
                                        <li className="stick-line">
                                            <i className="fas fa-circle me-2"></i>08:00 <span>Parth Joshi</span>
                                        </li>
                                        <li className="stick-line">
                                            <i className="fas fa-circle me-2"></i>08:00 <span>bhavik patel</span>
                                        </li>
                                        <li className="dropdown ongoing-blk">
                                            <div href="#" className="dropdown-toggle active-doctor" data-bs-toggle="dropdown">
                                                <i className="fas fa-circle me-2 active-circles"></i>08:00 <span>bhavik patel</span>
                                                <span className="ongoing-drapt">Ongoing <i className="feather-chevron-down ms-2"></i></span>
                                            </div >
                                            <ul className="doctor-sub-list dropdown-menu">
                                                <li className="patient-new-list dropdown-item">
                                                    Patient<span>parth</span>
                                                    <div href="javascript:;" className="new-dot status-green">
                                                        <i className="fas fa-circle me-1 fa-2xs"></i>New
                                                    </div >
                                                </li>
                                                <li className="dropdown-item">
                                                    Time<span>8:30 - 9:00 (30min)</span>
                                                </li>
                                                <li className="schedule-blk mb-0 pt-2 dropdown-item">
                                                    <ul className="nav schedule-time">
                                                        <li><div href="javascript:;"><img src="assets/img/icons/trash.svg" alt="Trash Icon" /></div ></li>
                                                        <li><div href="javascript:;"><img src="assets/img/icons/profile.svg" alt="Profile Icon" /></div ></li>
                                                        <li><div href="javascript:;"><img src="assets/img/icons/edit.svg" alt="Edit Icon" /></div ></li>
                                                    </ul>
                                                    <div className="btn btn-primary appoint-start">Start Appointment</div >
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                    
                    {/* Appointment Time: 09:00 */}
                    <div className="teaching-card">
                        <ul className="steps-history">
                            <li>09:00</li>
                        </ul>
                        <ul className="activity-feed">
                            <li className="feed-item d-flex align-items-center">
                                <div className="dolor-activity">
                                    <ul className="doctor-date-list mb-2">
                                        <li>
                                            <i className="fas fa-circle me-2"></i>09:00 <span>mayur patel</span>
                                        </li>
                                        <li>
                                            <i className="fas fa-circle me-2"></i>09:20 <span>Bhavik Rupapara</span>
                                        </li>
                                        <li>
                                            <i className="fas fa-circle me-2"></i>09:40 <span>Jenny Smith</span>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                    
                    {/* Appointment Time: 10:00 */}
                    <div className="teaching-card">
                        <ul className="steps-history">
                            <li>10:00</li>
                        </ul>
                        <ul className="activity-feed">
                            <li className="feed-item d-flex align-items-center">
                                <div className="dolor-activity">
                                    <ul className="doctor-date-list mb-2">
                                        <li>
                                            <i className="fas fa-circle me-2"></i>10:00 <span>mayur patel</span>
                                        </li>
                                        <li>
                                            <i className="fas fa-circle me-2"></i>10:30 <span>Bhavik Rupapara</span>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                    
                    {/* Appointment Time: 11:00 */}
                    <div className="teaching-card">
                        <ul className="steps-history">
                            <li>11:00</li>
                        </ul>
                        <ul className="activity-feed">
                            <li className="feed-item d-flex align-items-center">
                                <div className="dolor-activity">
                                    <ul className="doctor-date-list mb-2">
                                        <li>
                                            <i className="fas fa-circle me-2"></i>11:00 <span>mayur patel</span>
                                        </li>
                                        <li>
                                            <i className="fas fa-circle me-2"></i>11:30 <span>Bhavik Rupapara</span>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    
  </div>



</div>

    );
}

export default DoctorDashboard;