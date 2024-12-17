import React, { useState } from 'react';
import { ChevronRight } from 'react-feather';
import morningimg01 from '../../../img/morning-img-01.png'
import user from '../../../img/user1.jpg'
import ReactApexChart from 'react-apexcharts';
import health from '../../../img/icons/health-img.svg'

import { EmitType } from '@syncfusion/ej2-base';
import { Browser } from '@syncfusion/ej2-base';
import { FaCheckSquare } from "react-icons/fa";
import { MdOutlineCancel } from "react-icons/md";
import Slider from 'react-slick';
const data = [
  { x: 'Healthy', y: 55, text: '55%', color: '#00E396' },
  { x: 'Sick', y: 30, text: '30%', color: '#FF4560' },
  { x: 'Recovering', y: 15, text: '15%', color: '#FEB019' }
];

const chartOptions = {
  chart: {
    type: 'donut',
    height: 350
  },
  title: {
    text: 'Health Status',
    align: 'center'
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
    formatter: (val, opts) => `${opts.w.globals.labels[opts.seriesIndex]}: ${val.toFixed(1)}%`,
    dropShadow: {
      enabled: false
    }
  },
  plotOptions: {
    pie: {
      donut: {
        size: '40%',
        labels: {
          show: true,
          name: {
            show: true
          },
          value: {
            show: true,
            fontWeight: '600'
          },
          total: {
            show: true,
            showAlways: false,
            label: 'Total',
            formatter: (w) => w.globals.seriesTotals.reduce((a, b) => a + b, 0) + '%'
          }
        }
      },
      expandOnClick: true
    }
  }
};

const chartSeries = data.map(item => item.y);

export const appointments = [
  {
    imgSrc: "assets/img/profiles/avatar-05.jpg",
    title: "General Health Check up",
    time: "Dr. Bhavik Rupapara at 10:00-11:00 AM",
    status: "status-green"
  },
  {
    imgSrc: "assets/img/profiles/avatar-03.jpg",
    title: "Temporary Headache",
    time: "Dr. Tushar Joshi at 05:00-06:00 PM",
    status: "status-orange"
  },
  {
    imgSrc: "assets/img/profiles/avatar-03.jpg",
    title: "Temporary Headache",
    time: "Dr. Tushar Joshi at 05:00-06:00 PM",
    status: "status-orange"
  },
  
  {
    imgSrc: "assets/img/profiles/avatar-03.jpg",
    title: "Temporary Headache",
    time: "Dr. Tushar Joshi at 05:00-06:00 PM",
    status: "status-orange"
  },
  
  
];

const appointments1 = [
  {
    id: 1,
    imgSrc: "assets/img/profiles/avatar-02.jpg",
    doctorName: "Dr. Bhavik Rupapara",
    diagnosis: "Dermotology",
    date: "12.05.2022"
  },
  {
    id: 2,
    imgSrc: "assets/img/profiles/avatar-04.jpg",
    doctorName: "Tushar Joshi",
    diagnosis: "Dermotology",
    date: "10.05.2022"
  },
  {
    id: 3,
    imgSrc: "assets/img/profiles/avatar-05.jpg",
    doctorName: "Dr. Tushar Joshi",
    diagnosis: "Dermotology",
    date: "12.05.2022"
  },
  {
    id: 4,
    imgSrc: "assets/img/profiles/avatar-05.jpg",
    doctorName: "Dr. Tushar Joshi",
    diagnosis: "Dermotology",
    date: "12.05.2022"
  }
];

const data1 = [
  { category: 'Underweight', bmi: 18.4 },
  { category: 'Normal', bmi: 22.0 },
  { category: 'Overweight', bmi: 27.0 },
  { category: 'Obesity', bmi: 32.0 },
];
const PatientDashboard = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
};
const radius = 50; // Radius of the circle
const percentage = 75; // Radius of the circle
const strokeWidth = 10; // Stroke width of the circle
const circumference = 2 * Math.PI * radius;
const offset = circumference - (percentage / 100) * circumference;
const weightValues = [60, 65, 68, 70, 75, 80, 85];
const heightValues = [150, 155, 160, 165, 170, 175, 180];
const [date, setDate] = useState(new Date()); // Initialize with current date

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };
  const AppointmentItem = ({ imgSrc, title, time, status }) => {
    return (
      <div className="treat-box mb-2">
        <div className="user-imgs-blk">
          <img src={user} alt="User" />
          <div className="active-user-detail flex-grow-1">
            <h4>{title}</h4>
            <p>{time}</p>
          </div>
        </div>
        <a href="javascript:;" className={`custom-badge ${status}`}>
          {status === 'status-green' ? 'Active' : 'Pending'}
        </a>
      </div>
    );
  };
  return (
    <div >

      {/* Page Header */}
      <div className="page-header">
        <div className="row">
          <div className="col-sm-12">
            <ul className="breadcrumb">
              <li className="breadcrumb-item"><a href="index.html">Dashboard </a></li>
              <li className="breadcrumb-item"><ChevronRight size={16} style={{ color: 'blue', fontSize: '20px', margin: '0 8px' }}/></li>
              <li className="breadcrumb-item active">Patient Dashboard</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Good Morning Block */}
      <div className="good-morning-blk">
        <div className="row">
          <div className="col-md-6">
            <div className="morning-user">
              <h2>Good Morning, <span>Bhavik Rupapara</span></h2>
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
        {/* Health Statistics */}
        <div className="col-12 col-md-12 col-lg-12 col-xl-7">
          <div className="card">
            <div className="card-body">
              <div className="chart-title patient-visit mb-0">
                <h4>Static of your Health</h4>
                <div className="income-value">
                  <p><span className="passive-view"><i className="feather-arrow-up-right me-1"></i>40%</span> vs last month</p>
                </div>
                <div className="average-health">
                  <h5>72bmp <span>Average</span></h5>
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
              <div id="health-chart">
      <ReactApexChart 
        options={chartOptions}
        series={chartSeries}
        type="donut"
        height={450}
      />
    </div>

            </div>
          </div>
        </div>

        {/* Body Mass Index */}
        <div className="col-12 col-md-12 col-lg-12 col-xl-5 d-flex">
          <div className="card">
            <div className="card-body">
              <div className="chart-title patient-visit">
                <h4>Body Mass Index</h4>
              </div>
              <div className="body-mass-blk">
                <div className="row">
                  <div className="col-md-12 mt-5">
                    <div className="weight-blk">
                      <div className="center slider">
                      <Slider {...settings}>
                {weightValues.map((weight, index) => (
                    <div key={index} className="weight-slide">
                        <h4>{weight}</h4>
                        <span>kg</span>
                    </div>
                ))}
            </Slider>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 mt-5">
                    <div className="weight-blk">
                    <div className="center slider">
            <Slider {...settings}>
                {heightValues.map((height, index) => (
                    <div key={index} className="height-slide">
                        <h4>{height}</h4>
                        <span>cm</span>
                    </div>
                ))}
            </Slider>
        </div>
                    </div>
                  </div>
                </div>
                <div className="progress weight-bar">
                  <div className="progress-bar progress-bar-success" role="progressbar"></div>
                </div>
                <ul className="weight-checkit">
                  <li>Underweight</li>
                  <li>Normal (45.5)</li>
                  <li>Overweight</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-xl-5">
              <div className="card top-departments">
                <div className="card-header pb-0">
                  <h4 className="card-title mb-0">Notes</h4>
                </div>
                <div className="card-body pt-1">
                  <div className="note-checkit">
                    <label className="custom_check">
                      <input type="checkbox" name="select_specialist" checked />
                      <span className="checkmark"></span> Take vitamin Tablet
                    </label>
                  </div>
                  <div className="note-checkit">
                    <label className="custom_check">
                      <input type="checkbox" name="select_specialist" checked />
                      <span className="checkmark"></span> Add Appointmant
                    </label>
                  </div>
                  <div className="note-checkit">
                    <label className="custom_check">
                      <input type="checkbox" name="select_specialist" checked />
                      <span className="checkmark"></span> Set a goal
                    </label>
                  </div>
                  <div className="note-checkit">
                    <label className="custom_check">
                      <input type="checkbox" name="select_specialist" checked />
                      <span className="checkmark"></span> Add New Weight
                    </label>
                  </div>
                 
                  {/* Repeat for other notes */}
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-xl-7 d-flex">
              <div className="card wallet-widget general-health">
                <div className="circle-bar circle-bar2">
                  <div className="circle-graph2" data-percent="66">
                  <svg width="120" height="120">
                    <circle
                        cx="60"
                        cy="60"
                        r={radius}
                        stroke="#e6e6e6"
                        strokeWidth={strokeWidth}
                        fill="none"
                    />
                    <circle
                        cx="60"
                        cy="60"
                        r={radius}
                        stroke="#4caf50" // Change the color based on your theme
                        strokeWidth={strokeWidth}
                        fill="none"
                        strokeDasharray={circumference}
                        strokeDashoffset={offset}
                        style={{ transition: 'stroke-dashoffset 0.35s' }}
                    />
                    <b
                        x="50%"
                        y="50%"
                        dominantBaseline="middle"
                        textAnchor="middle"
                        fontSize="18"
                        fill="#333"
                    >
                       <img src={health} alt="Health" />
                    </b>
                </svg>
                    {/* <b>
                        <img src={health} alt="Health" />
                        </b> */}
                  </div>
                </div>
                <div className="main-limit">
                  <p>General Health</p>
                  <h4>75%</h4>
                  <div className="income-value mt-2">
                    <p><span className="passive-view"><i className="feather-arrow-up-right me-1"></i>40%</span> vs last month</p>
                  </div>
                </div>
              </div>
            </div>
      </div>

     
      <div className="row">
        <div className="col-12 col-md-12 col-xl-7">
          <div className="row">
           
            <div className="col-12 col-md-12 col-xl-12">
      <div className="card">
        <div className="card-header">
          <h4 className="card-title d-inline-block">Medical History</h4>
          <a href="appointments.html" className="patient-views float-end">Show all</a>
        </div>
        <div className="card-body p-0 table-dash">
          <div className="table-responsive">
            <table className="table mb-0 border-0 datatable custom-table patient-table">
              <thead>
                <tr>
                  
                  <th>Doctor name</th>
                  <th>Diagnosis</th>
                  <th>Date</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {appointments1.map(appointment => (
                  <tr key={appointment.id}>
                    
                    <td className="table-image">
                      <img width="28" height="28" className="rounded-circle" src={user} alt="Doctor" />
                      <h2>{appointment.doctorName}</h2>
                    </td>
                    <td>{appointment.diagnosis}</td>
                    <td>{appointment.date}</td>
                    <td><button className="custom-badge status-gray re-shedule">Reschedule</button></td>
                    <td className="text-end">
                      <div className="dropdown dropdown-action">
                        <a href="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                          <i className="fa fa-ellipsis-v"></i>
                        </a>
                        <div className="dropdown-menu dropdown-menu-end">
                          <a className="dropdown-item" href="edit-appointment.html">
                            <i className="fa-solid fa-pen-to-square m-r-5"></i> Edit
                          </a>
                          <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#delete_appointment">
                            <i className="fa fa-trash-o m-r-5"></i> Delete
                          </a>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
          </div>
        </div>

        <div className="col-12 col-md-12 col-xl-5">
          {/* <div className="card flex-fill mb-2">
            <div className="card-body">
              <div id="calendar-doctor" className="calendar-container">
                
              </div>
            </div>
          </div> */}
          
          {appointments.map((appointment, index) => (
        <AppointmentItem
          key={index}
          imgSrc={appointment.imgSrc}
          title={appointment.title}
          time={appointment.time}
          status={appointment.status}
        />
      ))}
    
          {/* Repeat for other treatments */}
        </div>

      </div>

      
    </div>
  );
};

export default PatientDashboard;
